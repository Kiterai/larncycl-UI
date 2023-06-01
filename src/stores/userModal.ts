import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserModalStore = defineStore('userModal', () => {
  const is_modelopen = ref(false);
  function openLoginModal() {
    is_modelopen.value = true;
  }
  function closeLoginModal() {
    is_modelopen.value = false;
  }

  return { is_modelopen, openLoginModal, closeLoginModal };
})
