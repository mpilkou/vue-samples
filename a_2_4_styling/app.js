const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            isPHiden: false,
            inputBackgroundColor: ''
        }
    },
    methods:{
        hideP(){
            this.isPHiden = !this.isPHiden
        }
    }
})
app.mount('#assignment')