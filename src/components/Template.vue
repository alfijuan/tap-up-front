<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

import Menu from '../components/Menu.vue';

import useAuth from '../composables/useAuth'; 

const router = useRouter()
const { isLogged, state, user } = useAuth();

onMounted(() => {
	isLogged();
	if(!document.cookie.includes('sessionid') && !user){
		router.push('/login')
	}
})

</script>

<template>
	<div v-if="state.isLoggedIn">
		<Menu />
		<div class="top">
			<slot></slot>
		</div>
	</div>
	<div v-else>loading...</div>
</template>

<style scoped>
.top{
	margin-top: 20px;
}
</style>
