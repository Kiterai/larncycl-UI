<script setup lang="ts">

const cources = [
    {
        id: 1,
        title: "hoge",
        teachers: [
            "foo", "bar"
        ]
    },
    {
        id: 2,
        title: "fuga",
        teachers: [
            "foo", "bar"
        ]
    }
];

</script>

<template>
    <div class="cource-list">
        <RouterLink v-for="cource in cources" :to="`/cource/${cource.id}`" class="cource-item">
            <div class="cource-title">{{ cource.title }}</div>
            <div>lecturer: <span class="cource-teacher" v-for="teacher in cource.teachers">{{ teacher }}</span></div>
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
.cource-list {
    display: flex;
    padding: 0 1rem;
}

.cource-item {
    box-shadow: #aac 0 0.1rem 0.5rem;
    border-radius: 0.4rem;
    padding: 0.3rem 0.8rem;
    margin: 0.5rem;
    width: 50%;
    position: relative;
    transition: background-color ease 0.2s;
    display: block;

    &:hover {
        background-color: #ddd;
    }
}

.cource-title {
    font-size: 1.4rem;
}

:not(:last-child).cource-teacher:after {
    content: " / ";
}
</style>
