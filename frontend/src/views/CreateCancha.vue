<template>
  <div class="create-cancha">
    <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      @click="atras"
    >
        Atrás
    </v-btn>
    <formulario/>
  </div>
</template>


<script>
import Formulario from '../components/Formulario.vue'

  export default {
    name: 'crear',

    components: {
      Formulario
    },
    methods:{
        atras(){
            //Redirigir a las canchas
            this.$router.push('/home');
        }
    }
  }
</script>

<style>
.create-cancha{
  display: flex;
  flex-direction: column;
}

.create-cancha button{
  align-self: flex-end;
  max-width: 300px;
}
</style>