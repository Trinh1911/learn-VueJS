var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'dien thoai',
        main: 'test',
        url: "https://v2.vuejs.org/v2/guide/",
        message: "test method",
        counter: 0,
        clientX: 0,
        clientY: 0,
    },
    // them ham
    methods: {
        say: function (text) {
            return 'hello' + text;
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        handleClick(number,e) {
            console.log('click', e.target);
            this.counter += number
        },
        handleMouseMove(e) {
            this.clientX = e.clientX
            this.clientY = e.clientY
        }
    }
})
console.log(vueInstance)