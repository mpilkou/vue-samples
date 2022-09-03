<template>
  <ul>
    <h1>Frends</h1>
    <frend-new @add-contact="addContact"></frend-new>
    <frend-contact 
      v-for="frend in frends"
      :key="frend.id"
      :id="frend.id"
      :name="frend.name"
      :phone-number="frend.phone"
      :email-address="frend.email"
      :favorite="frend.isFavorite"
      @toggle-favorite="toggleFavoriteStatus"
      @frend-delete="deleteFrend"
    ></frend-contact>
  </ul>
</template>

<script>
export default {
  data() {
      return {
          frends : [
            {
              id:1,
              name: 'NAME',
              'phone': '111',
              'email': 'EMAIL',
              isFavorite: false,
            },
            {
              id:2,
              name:"SomeName",
              phone:"123 123123",
              email:"some@mail.com",
              isFavorite: false,
            },
            {
              id:3,
              name:"SomeName1",
              phone:"312 321321",
              email:"some2@mail.com",
              isFavorite: true,
            }
          ]
      }
  },
  methods:{
    toggleFavoriteStatus(frendId){
      const pointedFrend = this.frends.find(frend => frend.id === frendId);
      pointedFrend.isFavorite = !pointedFrend.isFavorite
    },
    addContact(name, phone, email){
      const newFrend = {
        id:this.frends.reduce((f1, f2) => f1.id > f2.id ? f1 : f2).id + 1,
        name:name,
        phone:phone,
        email:email,
        isFavorite: false,
      };
      this.frends.push(newFrend);
    },
    deleteFrend(frendId){
      this.frends = this.frends.filter(frend => frend.id !== frendId);
    }
  }
}
</script>