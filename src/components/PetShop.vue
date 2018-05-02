<template>
  <div id="petsRow" class="row">
    <pet v-for="pet in pets" :item="pet" :key="pet.id" @adopt="handleAdopt"></pet>
  </div>
</template>

<script>
import Adoption from '@/js/adoption'
import Pet from '@/components/Pet'

export default {
  name: 'petshop',
  components: { Pet },
  data () {
    return {
      pets: []
    }
  },
  created: function () {
    this.pets = require('@/pets.json')

    Adoption.init().then(() => {
      return Adoption.getAdopters()
    }).then((adopters) => {
      adopters.forEach((adopter, index) => {
        this.pets[index].adopted = (adopter !== '0x0000000000000000000000000000000000000000')
      })
    }).catch((error) => {
      console.error(error)
    })
  },
  methods: {
    handleAdopt (id) {
      Adoption.adopt(id).then(() => {
        this.pets[id].adopted = true
        alert('success!')
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}

</script>
