<template>
  <v-app>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://i.pinimg.com/564x/22/43/11/22431150a7b390d7a51712b50a3df57b.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
         v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)">
        </v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
      <v-app-bar-title class="pl-13 pt-10">My animals</v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="app-top-bar" nav dense>
        <v-list-item-group
          v-model="group"
          active-class="teal lighten-2-text text--accent-4"
        >
        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>
        </router-link> 

        <router-link to="/favoritos">
          <v-list-item>
            <v-list-item-icon>
             <v-icon>mdi-star-box</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Favorite Animals
            </v-list-item-title>
          </v-list-item>
        </router-link> 

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
       <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
}),
  
}
</script>

<style scoped>
  .app-top-bar a{
    text-decoration: none;
  }
</style>