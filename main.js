var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'dien thoai',
        main: 'test'
    },
    // them ham
    methods: {
        say: function(text) {
            return 'hello' + text;
        }
    }
})
console.log(vueInstance)