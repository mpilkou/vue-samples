const app = Vue.createApp({
    data(){
        return {
            value: 0,
            result: 'Not there yet'
        }
    },
    methods:{
        add(value){
            this.value += value
            if (this.value < 37) {
                this.result = 'Not there yet'
            } else if(this.value > 37) {
                this.result = 'Too much!'
            }else{
                this.result = 'Huraaa'
            }
        }
    },
    watch:{
        value(){
            setTimeout(() => {this.value=0}, 5000)
        }
    }
})

app.mount('#assignment')
