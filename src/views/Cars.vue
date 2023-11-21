<script setup lang="ts">
import { onMounted } from 'vue';
import Template from '../components/Template.vue';
import useCars from '../composables/useCars';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

const { init, cars, loading, deleteCar } = useCars();

onMounted(() => {
  init();
})

function deleteItem(id: string){
  const validation = confirm("Esta seguro que desea borrar?");
  if(validation){
    deleteCar(id,
      () => {
        alert("Auto eliminado");
        init();   
      }
    )
  }
}
</script>

<template>
  <Template>
    <router-link :to="{ path: '/cars/add' }">
      <Button label="Agregar auto" />
    </router-link>

    <div v-if="loading" class="loading">
      loading cars...
    </div>
    <DataTable v-else :value="cars" tableStyle="width: 100%">
      <Column field="id" header="Id"></Column>
      <Column field="license" header="Patente"></Column>
      <Column field="model" header="Modelo"></Column>
      <Column field="year" header="Año"></Column>
      <Column>
        <template #body="slotProps">
          <router-link :to="{ path: `/cars/${slotProps.data.id}` }">
            <Button label="Editar" link />
          </router-link>
          <Button label="Borrar" @click="() => deleteItem(slotProps.data.id)" />
        </template>
      </Column>
      <template #empty> No cars found </template>
    </DataTable>
  </Template>
</template>

<style scoped>
button{
  margin-bottom: 20px;
}
</style>
