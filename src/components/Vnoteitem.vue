<template>
    <!-- 对象 note={id:1,title:'ere',date:'2017-04-25'} -->
    <a class="list-group-item" @click="clickHandler">
        <h4>{{this.note.title}}</h4>
        <p>{{this.note.date}}</p>
    </a>
</template>
<script type="text/javascript">
export default {
    name: "Vnoteitem",
    data() {
        return {}
    },
    methods: {
        clickHandler() {
            this.$store.commit('selectNote', this.note)
        }
    },
    components: {},
    props: {
        note: Object
    }
}
</script>
<style type="text/css" scoped>
h4 {
    font-size: 14px;
    margin: 5px 0;
}

a {
    cursor: pointer;
}

p {
    text-align: right;
    margin: 5px 0;
}
</style>
