<script setup lang="ts">
import MegaMenu from 'primevue/megamenu';
import { ref } from "vue";

const items = ref<{label: string; url?: string}[]>([
  {
    label: 'Reservas',
    url: '/appointments'
  },
  {
    label: 'Autos',
    url: '/cars'
  },
]);

</script>

<template>
  <MegaMenu :model="items" />
</template>