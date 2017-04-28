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
        //得到所有的笔记
        getNote() {
            return this.$store.state.notes;
        }
    },
    methods: {
        //必须触发一个mutations执行，必须使用commit提交
        addnote() {
            var min = 1;
            var max = 1000000;
            var num = Math.random() * (max - min) + min;
            num = Math.round(num);
            // alert(num)
            // alert(this.$store.state.note.title)
            // alert(this.$store.state.note.title)
            if (this.$store.state.note.title) {
                // var num = this.$store.state.note.id;
                this.$store.commit('addnote', {
                    id: num,
                    title: this.$store.state.note.title,
                    date: new Date().toLocaleString(),
                    content: this.$store.state.note.content
                })
                alert("添加成功！");
            } else {
                alert("暂时没笔记可添加");
            }
        }

    }
}
</script>
<style type="text/css">
</style>
