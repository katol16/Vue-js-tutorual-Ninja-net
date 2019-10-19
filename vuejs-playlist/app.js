new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://www.google.pl',
        websiteTag: "<a href='https://www.google.pl'>tag</a>",
        age: 28,
        x: 0,
        y: 0,
        ourText: "",
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ["Mario", "luigi", "Yoshi", 'Bowser'],
        ninjas: [
            { name: "Ryu", age: 35 },
            { name: "Youshi", age: 35 },
            { name: "Ken", age: 35 }
        ]
        // do przykładu do pracy
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
        },
        click: function () {
            alert("You clicked me");
        },
        logName: function () {
            console.log('you entered your name')
        },
        logAge: function () {
            console.log('you entered your age')
        },
        // to poniżej bedzie w computed
        // addToA: function () {
        //     console.log('addToA');
        //     return this.a + this.age
        // },
        // addToB: function () {
        //     console.log('addToB');
        //     return this.b + this.age
        // },



        // Przykład do pracy
        show: function() {

        }
    },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.a + this.age
        },
        addToB: function () {
            console.log('addToB');
            return this.b + this.age
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});