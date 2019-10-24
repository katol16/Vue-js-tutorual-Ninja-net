new Vue({
   el: '#vue-app',
   data: {
        // w output bedzie to co wpsizemy w input w html
        output: "pierogi"
   },
    methods: {
        readRefs: function() {
            // w $refs masz obiekt, w których bedą wszystkie twoje referencje
            console.log(this.$refs);
            console.log(this.$refs.input.value);

            this.output = this.$refs.input.value;

            // Do drugiego przykładu
            console.log(this.$refs.test.innerText);
            this.$refs.test.innerText = "chuj"
        }
    }
});