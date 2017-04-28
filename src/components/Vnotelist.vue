<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <Vbutton type="info" @click="addnote">添加笔记</Vbutton>
            <hr>
            <ul class="list-group">
                <Vnoteitem v-for="(note,index) in getNote" :note="note" :key='index'></Vnoteitem>
            </ul>
            <!-- <div id="allnote"></div> -->
        </div>
    </div>
    </div>
</template>
<script type="text/javascript">
import Vbutton from './Vbutton'
import Vnoteitem from './Vnoteitem'
import $ from 'jquery'



export default {
    name: 'Vnotelist',
    data() {
        return {}
    },
    components: {
        Vbutton,
        Vnoteitem
    },
    computed: {
        getNote() {
            return this.$store.state.notes
            // console.log(this.$store.state.notes[0])
        }
    },
    methods: {
        //必须触发一个mutations执行，必须使用commit提交
        addnote() {
            this.$store.commit('addnote', {
                id: 6,
                title: "你好",
                date: new Date().toLocaleString(),
                content: '内筒'
            })
        }
    }
}
</script>
<style type="text/css">
</style>
