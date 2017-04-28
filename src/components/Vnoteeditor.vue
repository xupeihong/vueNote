<template>
    <div class="panel panel-default">
        <div class="panel-body marked ">
            <div class="col-lg-12">
                <Vbutton type="info" @click="savenote" class="save col-lg-1">保存</Vbutton>
                <input type="text" class="form-control ntitle col-lg-11" v-model="settitle" id="vtile">
            </div>
            <div class="col-lg-12">
                <div class="editer col-lg-6">
                    <textarea v-model='setcontent' class="form-control" id="go"></textarea>
                </div>
                <div class="screen col-lg-6" v-html="domarked"></div>
            </div>
            <!-- 全局的内容和自己重新新增的内容冲突，需要zetcontent来释放 -->
            <div style="display:none;">{{zetcontent}}</div>
            <!-- 标题也是同上的意思 -->
            <div style="display:none;">{{xetitle}}</div>
        </div>
    </div>
</template>
<script type="text/javascript">
import marked from 'marked'
import Vbutton from './Vbutton'
import $ from 'jquery'
export default {
    name: 'Vnoteeditor',
    data() {
        return {
            text: '',
            title: '',
            setcontent: '',
            settitle: ''
        }
    },
    computed: {
        domarked() {
            return marked(this.setcontent);
        },
        //设置标题
        // settitle: {
        //     get() {
        //         return this.$store.state.note.title
        //     },
        //     set(newval) {
        //         this.title = newval
        //     }
        // },
        xetitle() {
            this.settitle = this.$store.state.note.title;
            return this.$store.state.note.text;
        },
        //设置内容
        zetcontent() {
            this.setcontent = this.$store.state.note.content;
            return this.$store.state.note.content;
        }
    },
    components: {
        Vbutton
    },
    props: {},
    methods: {
        savenote() {
            // 判断笔记是新增还是修改
            var min = 1;
            var max = 1000000;
            var num = Math.random() * (max - min) + min;
            num = Math.round(num);
            // alert(num)
            var vtiele = $("#vtile").val();
            var vcontent = $("#go").val();
            this.$store.commit('savenote', {
                id: num,
                title: vtiele,
                date: new Date().toLocaleString(),
                content: vcontent
            })
            alert("保存成功！");
        }
    }
}
</script>
<style type="text/css" scoped>
.marked {
    margin: 0px auto;
    overflow: hidden;
}

.marked>div {
    margin: 10px auto;
}

.editer,
.screen {
    box-sizing: border-box;
    width: 50%;
    height: 400px;
    float: left;
    border: 1px solid #e4e4e4;
}

textarea {
    width: 100%;
    height: 100%;
    border: none;
}

.ntitle {
    float: left;
}

.save {
    float: right;
    margin-bottom: 10px;
}
</style>
