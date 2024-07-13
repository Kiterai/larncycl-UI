<script setup lang="ts">

type CourceRsource = {
    title: string,
    type: string,
    data: string
};

const props = defineProps<{
    modelValue: CourceRsource[],
}>();

const addResource = () => {
    props.modelValue.push({
        title: "",
        type: "link",
        data: ""
    });
};

const removeResource = (index: number) => {
    props.modelValue.splice(index, 1);
};

</script>

<template>
    <ul>
        <li v-for="(resource, index) in props.modelValue">
            <input v-model="props.modelValue[index].title" placeholder="resource title" />
            <input v-model="props.modelValue[index].data" placeholder="resource URL" />
            <button @click="removeResource(index)">Remove</button>
        </li>
        <button @click="addResource">+Resource</button>
    </ul>
</template>