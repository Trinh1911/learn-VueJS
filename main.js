var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'dien thoai',
        main: 'test',
        url: "https://v2.vuejs.org/v2/guide/",
        message: "test method"
    },
    // them ham
    methods: {
        say: function(text) {
            return 'hello' + text;
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
          }
    }
})
console.log(vueInstance)