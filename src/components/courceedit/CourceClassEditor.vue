<script setup lang="ts">
import { ref } from 'vue';
import CourceResourcesEditor from './CourceResourcesEditor.vue';

type CourceClass = {
    title: string,
    description: string,
    resources: Array<{
        title: string,
        type: string,
        data: string
    }>,
};

const props = defineProps<{
    modelValue: CourceClass
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: CourceClass): void
}>();

const editing = ref(false);

const addResource = () => {
    props.modelValue.resources.push({
        title: "",
        type: "link",
        data: ""
    })
};

const removeResource = (index: number) => {
    props.modelValue.resources.splice(index, 1);
};

const beginEdit = () => {
    editing.value = true;
};

const endEditByCommit = () => {
    editing.value = false;
};

const endEditByCancel = () => {
    editing.value = false;
};

</script>

<template>
    <div class="cource-class" v-if="editing">
        <div><input class="cource-class-title" v-model="props.modelValue.title" placeholder="Class title" /></div>
        <div><input class="cource-class-description" v-model="props.modelValue.description"
                placeholder="Class description" /></div>
        <CourceResourcesEditor v-model="props.modelValue.resources" />
        <div>
            <button @click="endEditByCommit">OK</button>
        </div>
    </div>
    <div v-else class="cource-class">
        <h2 class="cource-class-title">{{ props.modelValue.title }}</h2>
        <div class="cource-class-description">{{ props.modelValue.description }}</div>
        <ul class="cource-class-resources">
            <li v-for="resource in props.modelValue.resources">
                <a href="resource.data">{{ resource.title }}</a>
            </li>
        </ul>
        <div>
            <button @click="beginEdit">Edit</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cource-class {
    box-shadow: #aac 0 0.1rem 0.5rem;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
}

input.cource-class-title {
    font-size: 1.5rem;
}
</style>
