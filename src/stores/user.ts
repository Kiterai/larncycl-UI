import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const is_logined = ref(false);
  const username = ref("");
  const inprogress = ref(false);
  async function login(param_username: string, param_password: string) {
    inprogress.value = true;
    const res = await fetch("/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: param_username,
        password: param_password
      })
    });

    if (res.ok) {
      is_logined.value = true;
      username.value = param_username;
    }

    inprogress.value = false;
    return res.ok;
  }
  async function logout() {
    inprogress.value = true;
    await fetch("/api/logout", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    is_logined.value = false;
    inprogress.value = false;
  }

  return { is_logined, username, inprogress, login, logout }
})
