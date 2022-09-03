<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input v-model="name" type="text" />
        </div>
        <div>
            <label>Phone</label>
            <input v-model="phone" type="text" />
        </div>
        <div>
            <label>Email</label>
            <input v-model="email" type="email" />
        </div>
        <div>
            <button >Add contact</button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            phone: '',
            email: '',
        }
    },
    emits:['add-contact'],
    methods:{
        submitData(){
            this.$emit('add-contact', this.name, this.phone, this.email);
            this.name = '';
            this.phone = '';
            this.email = '';
        },
    }
};
</script>