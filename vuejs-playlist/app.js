new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://www.google.pl',
        websiteTag: "<a href='https://www.google.pl'>tag </a>",
        age: 28,
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        },
        add: function() {
            this.age++
        },
        subtract: function() {
            this.age--;
        },
        add2: function(inc) {
            this.age += inc;
        },
        subtract2: function(dec) {
            this.age -= dec;
        },
        updateXY: function(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});