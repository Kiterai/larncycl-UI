<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { useUserModalStore } from '@/stores/userModal';
import HeaderLogo from './HeaderLogo.vue';

const userStore = useUserStore();
const userModalStore = useUserModalStore();

</script>

<template>
    <header>
        <HeaderLogo />
        <div v-if="userStore.is_logined" class="userstate">
            <span class="username">{{ userStore.username }}</span>
            <button class="btn-header" @click="userStore.logout">{{ userStore.inprogress ? "Logout..." : "Logout" }}</button>
        </div>
        <div v-else class="userstate">
            <button class="btn-header" @click="userModalStore.openLoginModal">Login</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    position: sticky;
    background-color: #aac;
    width: 100%;
    display: flex;
    height: 3.5rem;
    align-items: center;
    padding: 0.5rem 0.8rem;
}

.userstate {
    margin-left: auto;
}

.btn-header {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}
</style>
