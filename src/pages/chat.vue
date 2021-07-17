<template>
  <q-page class='q-pa-lg'>

    <div class="q-py-lg q-px-md row items-end"> 
      <div class='col'>
        <q-input autogrow bottom-slots class='new_twitt' v-model="newTwittContent" placeholder="Whats Happening ... ?" counter maxlength="280" :dense="dense" >
          <template v-slot:before>
            <q-avatar>
              <!-- <img src="https://cdn.quasar.dev/img/avatar5.jpg"> -->
              <q-icon  name="fas fa-dove" size='sm' color='green'  />
            </q-avatar>
          </template>
  

  
          <template v-slot:hint>
            Field hint
          </template>
  
        </q-input>
      </div>
      <div class='col q-pa-sm q-mb-lg col-shrink'>
        <!-- <template v-slot:append> -->
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="schedule" />
          <q-btn color='primary' label='send' rounded unelevated :disable='!newTwittContent' no-caps/>
        <!-- </template> -->
      </div>
      <div class='col gt-md'></div>
    </div>
    <q-separator class='divider ' size="10px" color='grey-2' />
    59:00
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageChat',
  data() {
    return {
      newTwittContent: ''
    }
  }
})
</script>
<style lang='sass'>
.new_twitt
  textarea
    font-size: 19px
    line-height: 1.2 !important
.divider
  border-top: 1px solid 
  border-bottom: 1px solid
  border-color: $grey-5
</style>









