new Vue({
  el: '#exercise',
  data: {
    name: 'Seth',
    age: 36,
    image: "https://picsum.photos/200/300"
  },
  methods: {
    ageMultiplied: function() {
      return this.age * 3
    },
    randomNumber: function() {
      return Math.floor(Math.random() * 2)
    }
  }
});
