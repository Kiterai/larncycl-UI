<script setup lang="ts">

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
        <h1>{{ title }}</h1>
        <div class="cource-teachers">lecturer:
            <span class="cource-teacher" v-for="teacher in teachers">{{ teacher }}</span>
        </div>
        <ul class="cource-resources">
            <li v-for="resource in resources">
                <a href="resource.data">{{ resource.title }}</a>
            </li>
        </ul>
        <div class="cource-items">
            <div class="cource-item" v-for="item in items">
                <h2 class="cource-item-title">{{ item.title }}</h2>
                <div class="cource-item-description">{{ item.description }}</div>
                <ul class="cource-item-resources">
                    <li v-for="resource in item.resources">
                        <a href="resource.data">{{ resource.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
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
