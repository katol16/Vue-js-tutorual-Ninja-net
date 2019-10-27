<template>
    <div>
        {{ title }}
        <p>{{ greeting() }}</p>
    </div>
</template>

<script>

export default {
// Pamiętaj, że tutaj ten zapis któ©ego używasz i ten poniżśzy to to samo
// to tylko nowy ES6 feature
// Stary zapis (działą taks amo)
//   data: function() {
//       return {
//           message: "Wiadomość od Karola"
//       }
//   },

  data() {
      return {
          title: "Wiadomość od Karola"
      }
  },
    methods: {
      greeting: function() {
        return 'Hej Karol'
      },

      // Nowy zapis (ES6)
      // greeting() {
      //   return 'Hej Karol'
      // }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
