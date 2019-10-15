new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://www.google.pl',
        websiteTag: "<a href='https://www.google.pl'>tag </a>"
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});