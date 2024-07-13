<script setup lang="ts">
import { ref } from 'vue';
import CourceClassEditor from './CourceClassEditor.vue';
import CourceResourcesEditor from './CourceResourcesEditor.vue';

type CourceRsource = {
    title: string,
    type: string,
    data: string
};
type CourceClass = {
    title: string,
    description: string,
    resources: Array<CourceRsource>,
};
type CourceLecturer = {
    id: string,
    name: string
};
type Cource = {
    title: string,
    lecturers: Array<CourceLecturer>,
    resources: Array<CourceRsource>,
    classes: Array<CourceClass>
};

const cource = ref<Cource>({
    title: "",
    lecturers: [],
    resources: [],
    classes: []
});

const new_class = () => {
    cource.value.classes.push({
        title: "untitled class",
        description: "",
        resources: []
    })
};

</script>

<template>
    <h1>{{ cource.title }}</h1>
    <div class="cource-teachers">lecturer:
        <span class="cource-teacher" v-for="lecturer in cource.lecturers">{{ lecturer.name }}</span>
    </div>
    <CourceResourcesEditor v-model="cource.resources" />

    <div class="cource-classes">
        <CourceClassEditor v-for="(cource_class, index) in cource.classes" v-model="cource.classes[index]" />
    </div>
    <button @click="new_class">+Class</button>
</template>

<style scoped lang="scss">
:not(:last-child).cource-teacher:after {
    content: " / ";
}

.container {
    margin: 0.5rem 1rem;
}

.cource-item {
    box-shadow: #aac 0 0.1rem 0.5rem;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
}
</style>
