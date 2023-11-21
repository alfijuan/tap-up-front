import { ref } from 'vue';
import { appointmentsList, appItem, appItemEdit, appItemAdd, appItemDelete } from "../services";

export default function useAppointments() {
  const appointments = ref<any[]>([]);
  const currentApp = ref({
    date: '',
    comments: '',
    vehicle: '',
    score: ''
  });
  const loading = ref<boolean>(true);

  function getAppointments(onSuccess?: (r: any) => void, onError?: (r: any) => void){
    appointmentsList({},
      ({data}) => {
        appointments.value = data.appointments;
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function getApp(id: string, onSuccess?: (r: any) => void, onError?: (r: any) => void){
    appItem({id},
      ({data}) => {
        currentApp.value = data;
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function createApp(onSuccess?: (r: any) => void, onError?: (r: any) => void){
    loading.value = true;
    appItemAdd(currentApp.value,
      ({data}) => {
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function updateApp(onSuccess?: (r: any) => void, onError?: (r: any) => void){
    loading.value = true;
    appItemEdit(currentApp.value,
      ({data}) => {
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function deleteApp(id: string, onSuccess?: (r: any) => void, onError?: (r: any) => void){
    loading.value = true;
    appItemDelete({id},
      ({data}) => {
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function init(){
    getAppointments();
  }

  return {
    appointments,
    loading,
    currentApp,
    init,
    getApp,
    createApp,
    deleteApp,
    updateApp
  }
}