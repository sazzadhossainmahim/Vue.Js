<template>
    <div id="detailsContainer">
    <router-link to="/">Back</router-link>
    <h1 id="pageHeader">
        <span id="pullRight" class="">
            <router-link class="">Edit</router-link>
            <button class="">Delete</button>
        </span>

    </h1>
    <ul id="listGroup">
        <li class=""><span class=""></span></li>
        <li class=""><span class=""></span></li>
    </ul>

    <ul id="listGroup">
        <li class="listGroupItem"></li>
        <li class="listGroupItem"></li>
        <li class="listGroupItem"></li>
    </ul>


    </div>
</template>

<script>
    export default {
        name:"customerDetails",
        data() {
            return {
                customer: ''
            }
        },
        methods: {
            fetchCustomer(id) {
                this.$http.delete('http://slimapp/api/customer/delete/'+id)
                .then(function(response){
                    this.$router.push({path: '/',
                    query:{alert: 'Customer Deleted'}
                    });
                })
            }
        },
        created: function () {
            this.fetchCustomer(this.$route.param.id);
        },
    }
</script>

<style lang="scss" scoped>

</style>