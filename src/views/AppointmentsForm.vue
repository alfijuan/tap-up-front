<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Template from '../components/Template.vue';
import useAppointments from '../composables/useAppointments';
import useCars from '../composables/useCars';
import useAuth from '../composables/useAuth';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

import { useRoute, useRouter } from 'vue-router'

const { getApp, currentApp, createApp, updateApp } = useAppointments();
const { cars, init } = useCars();
const { isLogged } = useAuth();

const route = useRoute()
const router = useRouter()

const isAdd = route.params.id === "add";

const userData = ref();

onMounted(() => {
  init();
  isLogged((data) => {
    userData.value = data;
  })
  if(!isAdd){
    getApp(route.params.id as string, 
      () => {},
      () => {
        router.push('/404')
      }
    )
  }
})

function submit(){
  if(isAdd){
    if(currentApp.value.vehicle && currentApp.value.date){
      createApp(
        () => {
          alert('Reserva creada');
          router.push('/appointments');
        },
        () => {
          
        }
      )
    } else {
      alert('Falta informacion. Completar el formulario');
    }
  } else {
    // isEdit
    if(currentApp.value.vehicle && currentApp.value.date && currentApp.value.score){
      updateApp(
        () => {
          alert("Reserva editada")
        }, 
        () => {}
      )
    } else {
      alert('Falta informacion. Completar el formulario');
    }
  }
}
</script>

<template>
  <Template>
    <div>
      <div class="flex flex-column gap-2">
        <label for="license">Vehiculo</label>
        <Dropdown v-model="currentApp.vehicle" :options="cars" optionLabel="license" optionValue="license" placeholder="Select" />
      </div>
      <div class="flex flex-column gap-2">
        <label for="date">Fecha</label>
        <Calendar v-model="currentApp.date" />
      </div>
      <div v-if="!isAdd && userData?.type_id === '3003'">
        <div class="flex flex-column gap-2">
          <label for="score">Puntaje</label>
          <InputText id="score" v-model="currentApp.score" aria-describedby="score-help" />
        </div>
        <div class="flex flex-column gap-2">
          <label for="comments">Comentarios</label>
          <InputText id="comments" v-model="currentApp.comments" aria-describedby="comments-help" />
        </div>
      </div>
      <div>
        <Button label="Submit" @click="() => submit()" />
      </div>
    </div>
  </Template>
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
