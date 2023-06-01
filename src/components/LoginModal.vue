<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { useUserModalStore } from '@/stores/userModal';
import { ref } from 'vue';

const userModalStore = useUserModalStore();
const userStore = useUserStore();

const username = ref("");
const password = ref("");
const error_occured = ref(false);

const login = () => {
    userStore.login(username.value, password.value).then(ok => {
        if (ok) {
            userModalStore.closeLoginModal();
        } else {
            error_occured.value = true;
            password.value = "";
        }
    });
};

</script>

<template>
    <div class="modal-bk" @click.self="userModalStore.closeLoginModal">
        <div class="modal">
            <input class="modal-part modal-input" type="text" placeholder="Username" v-model="username" />
            <input class="modal-part modal-input" :data-error="error_occured" type="password" placeholder="Password"
                v-model="password" />
            <button class="modal-part modal-btn" @click="login" :disabled="userStore.inprogress">{{ userStore.inprogress ?
                "Continue..." : "Login" }}</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal-bk {
    background: #0008;
    display: flex;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
}

.modal {
    width: 16rem;
    padding: 0.8rem;
    background: #fff;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;

    &-part:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    &-input {
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 0.3rem;

        &[data-error=true] {
            outline: inset #F66;
        }
    }

    &-btn {
        font-size: 1.3rem;
        padding: 0.5rem;
    }
}
</style>
