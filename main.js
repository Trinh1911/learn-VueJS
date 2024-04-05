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
        firstName: '',
        textClass: 'active',
        isActive: true,
        isError: true,
        activeColor: "red",
        fontSize: "20px",
        tabSelected: "blue",
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
          ],
        scores: {
            math: 9,
            english: 7.5,
        },
        arrayUser: [
            { email: 'nguyenkimtrinhntn@gmail.com', isActive: false },
            { email: 'soranguyen@gmail.com', isActive: true},
            { email: 'sora205112@gmail.com', isActive: true},
            { email: 'sora2051125@gmail.com', isActive: true},
          ],
    },
    // để hạn chế số lượng method run lại không mong muốn thì ta sẽ sử dụng computed thay vì method
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        },
        objClass: function () {
            return {
                active: this.isActive,
                error: this.isError,
            }
        },
        userActive() {
            var user = this.arrayUser.filter(function(u) {
                return u.isActive
            }) 
            return user
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
        },
        handleKeyUp(e) {
            this.firstName = e.target.value;
        },
        changeActive() {
            this.isActive = !this.isActive;
        },
        changeText(tab) {
            this.tabSelected = tab
        }
    }
})
console.log(vueInstance)