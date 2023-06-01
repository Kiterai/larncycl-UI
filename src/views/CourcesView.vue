<script setup lang="ts">
import CourcesList from '@/components/CourcesList.vue';

const new_cource = () => {

};

</script>

<template>
    <div class="actions" style="flex-direction: row-reverse;">
        <RouterLink to="/cources/new" class="btn-new-cource" @click="new_cource">+Organize new cource</RouterLink>
    </div>
    <div class="actions">
        <input class="search-cource" type="text" placeholder="search..." />
    </div>
    <CourcesList />
</template>

<style scoped lang="scss">
.actions {
    padding: 0 1rem;
    margin: 1rem 0;
    display: flex;
}

.btn-new-cource {
    background: #fff;
    border: 1px solid #99cbff;
    font-size: 1.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.5rem;
    color: #99cbff;
    line-height: normal;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #99cbff;
        color: #fff;
    }
}

.search-cource {
    flex-grow: 1;
    font-size: 1.5rem;
    padding: 0.4rem;
}
</style>
