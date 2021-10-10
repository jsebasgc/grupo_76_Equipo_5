<template>
    <v-card id = "card-login"
        class="mx-auto"
        max-width="744"
        max-height="600"
    >
        <v-card-text>
        <br><br>
        <p class="text-h4 text--primary">Bienvenido a Free Canchas!</p>
        <br><br>
        </v-card-text>
        
            <div class="text-center">
        <v-bottom-sheet  persistent>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
            @click="login"
            >
            Acceder
            </v-btn>
        </template>
        
        </v-bottom-sheet>
    </div>
        <br><br>
    </v-card>

</template>

<script>
export default {
    data: ()=>{
        return{

        }
    },
    methods:{
        login(){
            console.log("Ingresando");
            //Redirigir al home
            this.$router.push('/home');
        }
    }
}
</script>

<style>
#card-login{
    margin-top: 10%;
}

#card-login{
    align-content: center;
    text-align: center;
}
</style>