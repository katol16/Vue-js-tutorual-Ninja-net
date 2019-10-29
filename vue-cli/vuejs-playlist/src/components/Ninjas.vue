<template>
    <div>
        <h1>Karol</h1>
        <ul>
            <li v-for="ninja in ninjas" v-bind:key="ninja">{{ninja}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ninjas: ["karol", "michal", "jacek"]
            }
        }
    }
</script>

<!--// zrobimy styl scoped, zeby nie był globalny-->
<!--jak niebedzie scoped, to styl bedzie globalny iz adziałą dal wszysktich h1 w projekcie-->
<style scoped>
    h1 {
        color: red;
    }
</style>