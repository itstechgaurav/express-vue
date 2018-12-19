<template>
    <div>
        <h3 class="heading-ter">Hello World || {{msg}}</h3>
    </div>
</template>

<script>
import Api from "./../services/Api.js";
export default {
    data() {
        return {
            msg: ""
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            Api.get(this.$route.name).then(data => {
               console.log(data.data);
               
               this.msg = data.data.msg;
            });
        }
    }
}
</script>

