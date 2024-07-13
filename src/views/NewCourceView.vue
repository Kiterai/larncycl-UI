<script setup lang="ts">
import CourceEditor from '@/components/courceedit/CourceEditor.vue';

const title = "Hoge";
const teachers = [
    "foo", "bar"
];

const resources = [
    {
        "title": "hoge",
        "type": "link",
        "data": "https://example.com/hoge"
    }
];

const items = [
    {
        "title": "第1回",
        "description": "なんやかんや",
        "resources": [
            {
                "title": "hoge",
                "type": "link",
                "data": "https://example.com/hoge"
            },
            {
                "title": "foo",
                "type": "link",
                "data": "https://example.com/foo"
            }
        ]
    },
    {
        "title": "第2回",
        "description": "うんたらかんたら",
        "resources": [
            {
                "title": "hoge",
                "type": "link",
                "data": "https://example.com/hoge"
            },
            {
                "title": "foo",
                "type": "link",
                "data": "https://example.com/foo"
            }
        ]
    }
]

</script>

<template>
    <div class="container">
        <CourceEditor />
    </div>
</template>

<style scoped lang="scss">
.container {
    padding: 0 1rem;
}
</style>
