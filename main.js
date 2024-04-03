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
    // để hạn chế số lượng method run lại không mong muốn thì ta sẽ sử dụng computed thay vì method
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    },
    // them ham
    methods: {
        say: function (text) {
            return 'hello' + text;
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        handleClick(number, e) {
            console.log('click', e.target);
            this.counter += number
        },
        handleMouseMove(e) {
            this.clientX = e.clientX
            this.clientY = e.clientY
        },
        handleSubmitForm(e) {
            console.log(e)
        },
        handleMouseMoveChild(e) {
            console.log('handleMouseMoveChild', e.target);
        }
    }
})
console.log(vueInstance)