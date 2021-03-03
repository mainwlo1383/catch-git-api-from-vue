<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: black;">
        <q-toolbar-title style="padding:0 30px">
          <a href="https://github.com/">
            <q-icon
              name="fab fa-github"
              style="color:white;font-size: 1.4em;"
              class="git-icon"
          /></a>

          <span style="margin-left:15px">Mina's GitHub Repositories </span>
          <q-input dark outlined v-model="text">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'

export default {
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  data() {
    return {
      text: ""
      // leftDrawerOpen: false,
      // essentialLinks: [
      //   {
      //     title: 'Docs',
      //     caption: 'quasar.dev',
      //     icon: 'school',
      //     link: 'https://quasar.dev'
      //   },
      //   {
      //     title: 'Github',
      //     caption: 'github.com/quasarframework',
      //     icon: 'code',
      //     link: 'https://github.com/quasarframework'
      //   },
      //   {
      //     title: 'Discord Chat Channel',
      //     caption: 'chat.quasar.dev',
      //     icon: 'chat',
      //     link: 'https://chat.quasar.dev'
      //   },
      //   {
      //     title: 'Forum',
      //     caption: 'forum.quasar.dev',
      //     icon: 'record_voice_over',
      //     link: 'https://forum.quasar.dev'
      //   },
      //   {
      //     title: 'Twitter',
      //     caption: '@quasarframework',
      //     icon: 'rss_feed',
      //     link: 'https://twitter.quasar.dev'
      //   },
      //   {
      //     title: 'Facebook',
      //     caption: '@QuasarFramework',
      //     icon: 'public',
      //     link: 'https://facebook.quasar.dev'
      //   },
      //   {
      //     title: 'Quasar Awesome',
      //     caption: 'Community Quasar projects',
      //     icon: 'favorite',
      //     link: 'https://awesome.quasar.dev'
      //   }
      // ]
    };
  }
};
</script>

<style>
q-header {
  background-color: #000;
}
</style>
