const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            tasks: [],
            isListVisible: true
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.userInput)
        },
        hideList(){
            this.isListVisible = !this.isListVisible
            console.log(this.isListVisible)
        }
    }
})

app.mount('#assignment')