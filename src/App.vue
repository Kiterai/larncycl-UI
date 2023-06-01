<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
import LoginModalVue from './components/LoginModal.vue';
import { useUserModalStore } from './stores/userModal';

const userModalStore = useUserModalStore();

</script>

<template>
  <HeaderBar />
  <nav class="navbar">
    <RouterLink class="navbar-tab" to="/">Home</RouterLink>
    <RouterLink class="navbar-tab" to="/calender">Calender</RouterLink>
    <RouterLink class="navbar-tab" to="/cources">Cources</RouterLink>
  </nav>
  <RouterView />
  <LoginModalVue v-if="userModalStore.is_modelopen"></LoginModalVue>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;

  &-tab {
    border: 2px solid #d4e9ff;
    flex-grow: 1;
    text-align: center;
    font-size: 1.2rem;
    padding: 0.3rem;
    box-shadow: 0 -0.5rem 0.5rem -0.5rem #ccd inset;
    // transition: background-color ease 0.2s;

    // &:hover {
    //   background-color: #ddd;
    // }

    &.router-link-active {
      border-bottom: none;
      box-shadow: none;
    }
  }
}
</style>
