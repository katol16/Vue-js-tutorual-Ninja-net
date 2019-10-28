<template>
    <ul>
        <li v-for="ninja in ninjas" v-bind:key="ninja">{{ninja}}</li>
    </ul>
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

<style scoped>

</style>