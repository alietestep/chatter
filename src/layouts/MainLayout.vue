<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class='text-weight-bold'>
          <span class='gt-sm'>{{ $route.name }}</span>
          <q-icon class='h_mobileIcon q-pa-sm lt-md' name="fas fa-dove" size='md' color='primary'  />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer class="bg-grey-3" show-if-above  v-model="leftDrawerOpen" side="left" bordered width='150'>

      
      <!-- drawer content -->
      <q-icon class='q-pa-md' name="fas fa-dove" size='md' color='primary'  />
      <span class='text-weight-bold '>Chatter</span>
      <q-list>
        <q-item to='/' clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size='md' />
          </q-item-section>
  
          <q-item-section class='text-subtitle1 text-weight-bold' >Home</q-item-section>
        </q-item>

        <q-item to='/chat' clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="send" size='md' />
          </q-item-section>
  
          <q-item-section class='text-subtitle1 text-weight-bold' >Chat</q-item-section>
        </q-item>

        <q-item to='/about' clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="help" size='md' />
          </q-item-section>
  
          <q-item-section class='text-subtitle1 text-weight-bold' >About</q-item-section>
        </q-item>

        <q-item to='/contact' clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="phone" size='md' />
          </q-item-section>
  
          <q-item-section class='text-subtitle1 text-weight-bold' >Contact</q-item-section>
        </q-item>
  

      </q-list>          
    
    
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <!-- search input -->
      <q-input class='q-ma-md' dense outlined rounded v-model="text" placeholder='Search..' >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <!-- list items -->
      <q-list separator padding>
        <q-item class='q-pa-md'>
          <q-item-section>
            <q-item-label class='text-grey' overline>Education</q-item-label>
            <q-item-label class='text-weight-bold'>Deep Learning</q-item-label>
            <q-item-label caption>Deep learning is a major branch of AI, actually a super set of AI...</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      
      <q-item class='q-pa-md'>
        <q-item-section>
          <q-item-label class='text-grey' overline>Education</q-item-label>
          <q-item-label class='text-weight-bold'>Deep Learning</q-item-label>
          <q-item-label caption>Deep learning is a major branch of AI, actually a super set of AI...</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class='q-pa-md'>
        <q-item-section>
          <q-item-label class='text-grey' overline>Education</q-item-label>
          <q-item-label class='text-weight-bold'>Deep Learning</q-item-label>
          <q-item-label caption>Deep learning is a major branch of AI, actually a super set of AI...</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>



<style lang='sass'>
.h_mobileIcon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>







