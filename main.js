var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'dien thoai',
        main: 'test',
        url: "https://v2.vuejs.org/v2/guide/"
    },
    // them ham
    methods: {
        say: function(text) {
            return 'hello' + text;
        }
    }
})
console.log(vueInstance)