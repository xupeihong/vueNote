<template>
    <button class="btn" :class='btnType' v-on:click="clickHander">
        <slot>按钮</slot>
    </button>
</template>
<script type="text/javascript">
export default {
    name: 'Vbutton',
    data() {
        return {}
    },
    props: {
        type: String

    },
    methods: {
        clickHander() {
            this.$emit('click')
        }
    },
    computed: {
        btnType() {
            return {
                'btn-primary': this.type === 'primary' ? true : false,
                'btn-info': this.type === 'info' ? true : false,
                'btn-danger': this.type === 'danger' ? true : false,
                'btn-success': this.type === 'success' ? true : false,
                'btn-warning': this.type === 'warning' ? true : false
            }
        }
    }
}
</script>
<style type="text/css"></style>
