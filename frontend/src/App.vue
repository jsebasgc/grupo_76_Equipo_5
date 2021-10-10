<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
      height="100"
    >
      <div class="d-flex align-center">
        <v-img
        id="logo"
          @click="home"
          alt="FreeCanchas Logo"
          class="shrink mr-2"
          contain
          src= "./assets/logofreecanchas.png"
          transition="scale-transition"
          width="300"
        />
      <h1 id="title">Free Canchas</h1>
      </div>

      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
        home(){
            //Redirigir al inicio
            this.$router.push('/');
        }
    }
};
</script>

<style>
#title{
  font-size: 50px;
  font-family:  sans-serif ;
  font-style: oblique;
}
#logo{
  cursor: pointer;
}

</style>

