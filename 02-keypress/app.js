const app = Vue.createApp({
    data(){
        return{
            input: '',
            input2: ''
        }
    },
    methods: {
        allert(){
            alert('message')
        },
        funInput(event){
            this.input = event.target.value
        },
        funInput2(event){
            this.input2 = event.target.value
        }
    }
}).mount('#assignment')