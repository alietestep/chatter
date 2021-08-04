<template>
  <q-page class='relative-position'>
    <q-scroll-area class= 'absolute full-width full-height'>
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <div class="q-py-lg q-px-md row items-end" > 
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
            <q-btn color='primary' @click=addNewQweet label='send' rounded unelevated :disable='!newTwittContent' no-caps/>
          <!-- </template> -->
        </div>
        <div class='col gt-sm'></div>
      </div>
      <q-separator class='divider ' size="10px" color='grey-2' />
      <q-list separator>
        <!-- for loop content -->
        <!-- transition group for naimations  -->
        <transition-group appear enter-active-class='animated fadeIn slow' leave-active-class='animated fadeOut slow'>
          <q-item v-for="qweet in qweets" :key='qweet.date' class='q-py-md'>
            <q-item-section avatar top>
              <q-avatar>
                <!-- <img src="https://cdn.quasar.dev/img/avatar2.jpg"> -->
                <q-icon  name="fas fa-dove" size='sm' color='green'  />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label >
                  <strong>alietestep</strong>
                  <span class='text-grey-7'> @alietestep &bull; {{ qweet.date | relativeDate }} </span>
              </q-item-label>
              <!-- <q-item-label caption lines="2"></q-item-label> -->
              <q-item-label class='qwitt-content'>
                <span class="text-weight-bold ">@Janet</span>
                {{ qweet.content }}
                <!-- I'll be in your neighborhood doing errands this
                weekend. Do you want to grab brunch?
    

                all systems that can be done in a single page can be 
                removed now. -->
              </q-item-label>
              <div class='row justify-between tweet-ions q-mt-sm'>
                <q-btn color='grey' icon='far fa-comment' size='sm' flat round />
                <q-btn color='grey' icon='fas fa-retweet' size='sm' flat round />
                <q-btn color='grey' icon='far fa-heart' size='sm' flat round />
                <q-btn color='grey' @click='deleteQweet(qweet)' icon='fas fa-trash' size='sm' flat round />
              </div>
            </q-item-section>

            <!-- <q-item-section side top> -->
              <!-- 1 min ago -->
              <!-- npm instal date-nfs -->
              <!-- moved to span class above -->
            <!-- </q-item-section> -->
          </q-item>
        </transition-group>
      </q-list>
   </q-scroll-area>
  </q-page>
</template>

<script>
// import { formatDistance } from 'date-fns'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageChat',
  data() {
    return {
      newTwittContent: '',
      qweets: [{content: 'a', date:1626582915131},{content: 'b', date:1626582934710},{content: 'a', date:1626511635785}]
    }
  },
  methods: {
    addNewQweet() {
      let newQweet= {
        // content: this.newQweetContent,
        content: this.newTwittContent,
        date: Date.now()
      }
      // adding qweet to top 
      this.qweets.unshift(newQweet) 
      this.newTwittContent = ''
    },
    deleteQweet(qweet) {
      let dateToDelete = qweet.date
      let index = this.qweets.findIndex(qweet => qweet.date == dateToDelete)
      this.qweets.splice(index, 1)
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value,new Date() )
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
.qwitt-content
  white-space: pre-line
.tweet-ions
  margin-left: -5px
</style>









