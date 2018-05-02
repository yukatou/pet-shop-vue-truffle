<template>
<div class="col-sm-6 col-md-4 col-lg-3">
  <div class="panel panel-default panel-pet">
    <div class="panel-heading">
      <h3 class="panel-title">{{ item.name }}</h3>
    </div>
    <div class="panel-body">
      <img alt="140x140" data-src="holder.js/140x140" class="img-rounded img-center" style="width: 100%;" :src="require('../assets/' + item.picture)" data-holder-rendered="true">
      <br/><br/>
      <strong>Breed</strong>: <span class="pet-breed">{{ item.breed }}</span><br/>
      <strong>Age</strong>: <span class="pet-age">{{ item.age }}</span><br/>
      <strong>Location</strong>: <span class="pet-location">{{ item.location }}</span><br/><br/>
      <button class="btn btn-info btn-adopt" type="button" :data-id="item.id" v-show="!item.adopted" @click="$emit('adopt', item.id)">Adopt</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pet',
  props: ['item']
}
</script>
