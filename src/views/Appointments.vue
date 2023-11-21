<script setup lang="ts">
import { onMounted } from 'vue';
import Template from '../components/Template.vue';
import useAppointments from '../composables/useAppointments';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const { init, appointments, loading, deleteApp } = useAppointments();

onMounted(() => {
  init();
})

function deleteItem(id: string){
  const validation = confirm("Esta seguro que desea borrar?");
  if(validation){
    deleteApp(id,
      () => {
        alert("Reserva eliminada");
        init();   
      }
    )
  }
}
</script>

<template>
  <Template>
    <router-link :to="{ path: '/appointments/add' }">
      <Button label="Crear reserva" />
    </router-link>

    <div v-if="loading" class="loading">
      loading appointments...
    </div>
    <DataTable v-else :value="appointments" tableStyle="width: 100%">
      <Column field="id" header="Id"></Column>
      <Column field="vehicle" header="Patente"></Column>
      <Column field="score" header="Puntaje"></Column>
      <Column field="date" header="Fecha"></Column>
      <Column field="comments" header="Comentarios"></Column>
      <Column>
        <template #body="slotProps">
          <router-link :to="{ path: `/appointments/${slotProps.data.id}` }">
            <Button label="Editar" link />
          </router-link>
          <Button label="Borrar" @click="() => deleteItem(slotProps.data.id)" />
        </template>
      </Column>
      <template #empty> No appointments found </template>
    </DataTable>
  </Template>
</template>

<style scoped>
button{
  margin-bottom: 20px;
}
</style>
