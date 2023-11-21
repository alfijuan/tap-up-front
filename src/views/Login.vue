<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router'


import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import useAuth from '../composables/useAuth';


const router = useRouter()
const { login, isLogged, state } = useAuth();

onMounted(() => {
	isLogged();
});

watch(state, () => {
  if(state.isLoggedIn) {
    router.push('/')
  }
})

const data = ref({
  username: '',
  password: ''
})

function submit(){
  if(data.value.username && data.value.password){
    login(data.value.username, data.value.password, 
      () => {
        router.push('/')
      }
    )
  } else {
    alert('Falta informacion. Completar el formulario');
  }
}
</script>

<template>
  <div>
    <div class="flex flex-column gap-2">
      <label for="username">Username</label>
      <InputText id="username" v-model="data.username" aria-describedby="username-help" />
    </div>
    <div class="flex flex-column gap-2">
      <label for="password">Password</label>
      <InputText id="password" type="password" v-model="data.password" aria-describedby="password-help" />
    </div>
    <div>
      <Button label="Submit" @click="() => submit()" />
    </div>
  </div>
</template>

<style scoped>
label{
  display: block;
  margin-top: 20px;
}

button {
  margin-top: 20px;
}
</style>