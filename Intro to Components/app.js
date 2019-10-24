// Obiekt do poakzania złej metody tworzenia komponentu
// var data = {
//     name: "Kamil"
// };


// Tworzenie komponentu
// "greeting" to nazwa komponentu
Vue.component("greeting", {
    template: '<p>Hey there. I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
    // możemy tu nromlanie też prkezayzwać "data",
    // Jest tylko taka różnica, że nie moze to być obiekt, tylko musi być funckja, która zwraca obiekt
    // Używamy tutaj funckji, któa zwraca obiekt, bo jeśli użyejmy czystego obiektu w tym komponencie
    // Następnie użyjemy tego komponentu w wielu meijscach, to przez to,z e obiekty są tworozne przez referencje, to jedna zmaina obiektu data w jednym z kopomonetow, zmieni wsyzsktie te komponenty
    // Dlatego za pomocą funckji zwracamy za każdym razem świeży obiekt
    // Dlatego też w naszym przykłądzie jak klikniemy w btn "change Name", to "name" zmieni się tylko w jendym komponencie czyli dobrze
    data: function() {
        return {
            name: "Karol"
        }
    },

    // Poniżej zła metoda tworzenia componentu, w której zrobimy update do wsyzsktich componentów
    // data: function() {
    //     return data;
    // },

    methods: {
        changeName: function() {
            this.name = "Nowe Imie"
        }
    }
});

// poniżej jak użyc componentów w vue
var one = new Vue({
    el: '#vue-app-one',
});

var two = new Vue({
    el: '#vue-app-two',
});

