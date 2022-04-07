const app = Vue.createApp({
    data(){
        return {
            name: 'Name',
            age: 5+5,

            img: 'https://www.tutorialspoint.com/market/public/assets/images/logo.png'
        }
    },
    methods: {
        random(){
            return Math.random()
        }
    }
}).mount('#assignment')