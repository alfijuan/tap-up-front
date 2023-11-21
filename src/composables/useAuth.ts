import { reactive, ref } from 'vue';
import { userIsLogged, userLogin, userSignUp } from '../services';

interface User {
  email: string;
  first_name: string;
  last_name: string;
  type_id: string;
  username: string;
}

export default function useAuth() {
  const user = ref<User>();
  const state = reactive<{
    isLoggedIn: boolean;
    user?: User;
  }>({
    isLoggedIn: false,
    user: undefined
  })


  function login(username: string, password: string, onSuccess?: (r: any) => void, onError?: (r: any) => void){
    userLogin({username, password},
      ({data}) => {
        if(data.user) {
          user.value = data.user;
          state.isLoggedIn = true;
        }
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
  }

  function signUp(username: string, password: string, passwordB: string, onSuccess?: (r: any) => void, onError?: (r: any) => void){
    userSignUp({username, password, passwordB},
      ({data}) => {
        user.value = data.user;
        state.isLoggedIn = true;
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
  }

  function isLogged(callback?: (data: any) => void){
    if(!user.value){
      userIsLogged({},
        ({data}) => {
          if(data.code !== "no_logged_user") {
            user.value = data.user;
            state.isLoggedIn = true;
            state.user = data.user;
            callback?.(data.user);
          }
        },
        () => {
          window.location.href = '/login';
        }
      )
    }
  }

  return {
    login,
    signUp,
    isLogged,
    state,
    user
  }
}