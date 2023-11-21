<script setup lang="ts">
import { onMounted } from 'vue';
import Template from '../components/Template.vue';
import useCars from '../composables/useCars';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import { useRoute, useRouter } from 'vue-router'

const { getCar, currentCar, createCar, updateCar } = useCars();

const route = useRoute()
const router = useRouter()

const isAdd = route.params.id === "add";

onMounted(() => {
  if(!isAdd){
    getCar(route.params.id as string, 
      () => {},
      () => {
        router.push('/404')
      }
    )
  }
})

function submit(){
  if(currentCar.value.license && currentCar.value.model && currentCar.value.year){
    if(isAdd){
      createCar(
        () => {
          alert('Auto creado');
          router.push('/cars');
        },
        () => {
          
        }
      )
    } else {
      // isEdit
      updateCar(
        () => {
          alert("Auto editado")
        }, 
        () => {}
      )
    }
  } else {
    alert('Falta informacion. Completar el formulario');
  }
}
</script>

<template>
  <Template>
    <div>
    <div class="flex flex-column gap-2">
      <label for="license">Patente</label>
      <InputText id="license" v-model="currentCar.license" aria-describedby="license-help" />
    </div>
    <div class="flex flex-column gap-2">
      <label for="model">Modelo</label>
      <InputText id="model" v-model="currentCar.model" aria-describedby="model-help" />
    </div>
    <div class="flex flex-column gap-2">
      <label for="year">Año</label>
      <InputText id="year" v-model="currentCar.year" aria-describedby="year-help" />
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
