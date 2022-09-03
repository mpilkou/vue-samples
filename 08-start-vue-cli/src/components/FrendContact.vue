<template>
    <li>
        <h2>{{ name }} {{favorite ? ' Favorite ' : ''}} </h2>
        <button @click="changeDetails">Show</button>
        <button @click="changeFavorite">Change Favorite</button>
        <ul v-if="detalsAraVisible">
            <li><strong>Phone: </strong> {{phoneNumber}} </li>
            <li><strong>Email: </strong> {{emailAddress}} </li>
        </ul>
        <button @click="this.$emit('frend-delete', this.id)">Delete</button>
    </li>
</template>

<script>
export default {
    // props: ['id', 'name', ...],
    props: {
        id:{
            type: Number,
            requiered:true,
        },
        name: {
            type: String,
            requiered: true,
        },
        phoneNumber: String,
        emailAddress: String,
        favorite: {
            type: Boolean,
            requiered: false,
            default: false,
            // validator: (value) => {
            //     return value === '1' || value === '0'
            // }
        },
    },
    // emits: ['toggle-favorite'],
    emits:{
        'toggle-favorite': (id) => {
            if (id) {
                return true
            }else{
                console.warn('Id is missing')
                return false
            }
        },
        'frend-delete': () => { return true },
    },
    data() {
        return {
            detalsAraVisible: false,
            friend: {
                'name': 'NAME',
                'phone': '111',
                'email': 'EMAIL'
            },
        };
    },
    methods: {
        changeDetails(){
            this.detalsAraVisible = !this.detalsAraVisible;
            
        },
        changeFavorite(){
            // this.frendIsFavorite = !this.frendIsFavorite;
            this.$emit('toggle-favorite', this.id);
            // if (this.frendIsFavorite === '0'){
            //     this.frendIsFavorite = '1'
            // }
            // else{
            //     this.frendIsFavorite = '0'
            // }
        },
    }
}
</script>