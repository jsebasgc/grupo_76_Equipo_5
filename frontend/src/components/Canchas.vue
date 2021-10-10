<template>
    <div>
        <br>
        <!---crear y atras--->
        <label id="botones">
            <v-btn color="blue-grey" class="ma-2 white--text" @click="atras">
        Atrás
        </v-btn>
            <v-btn class="ma-2" color="success" @click="crear">
        Crear
        <template v-slot:loader>
            <span>Loading...</span>
        </template>
        </v-btn>

        
        </label>
        <br><br>
        <br>
        
        <label id="cards" v-for="item in canchas" :key="item._id">
        <!--Card 1 de canchas---->
            <v-card class="mx-auto" max-width="344">
        <v-img src="https://www.eafit.edu.co/bienestar-universitario/deportes/infraestructura/SiteAssets/Paginas/canchas/cancha-futbol-grama.jpg" height="200px"></v-img>

        <v-card-title>{{item.complejoDeportivo}}</v-card-title>

        <v-card-subtitle>
            <div>Número de cancha: {{item.numCancha}}</div>
            <div>Disponibilidad: {{item.disponibilidad}}</div>
            <div>Precio/Hora fin de semana: {{item.phFds}}</div>
            <div>Precio/Hora entre semana: {{item.phEs}}</div>
        </v-card-subtitle>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="eliminar" color="white" text v-on:click="eliminar(item._id)">
            Eliminar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn id="editar" color="white" text v-on:click="actualizar(item._id)" >
            Actualizar
        </v-btn>
        <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>       
    </label>
    </div>
</template>

<script>
import store from "../store/index.js"
export default {
    props: ["cancha"],
    data: ()=>{
        return{

        }
    },
    methods:{
        crear(){
            //Redirigir al formulario
            this.$router.push('/crear');
        },
        atras(){
            //Redirigir al login
            this.$router.push('./');
        },
        eliminar(id){
            console.log("Eliminar->", id)
            let obj = { id };
            store.dispatch("eliminarCancha", obj).then(()=>{
                //Realiza solicitud get al backend-Actualizar pagina
                store.dispatch("cargarCanchas");
            });
        },
        actualizar(id){
            console.log("Actualizando->", id)
            let obj = { id };
            store.dispatch("actualizarCancha", obj).then(()=>{
                this.$router.push('/actualizar');
            });
        }
    },
    created: ()=>{
        //Realiza solicitud get al backend-Actualizar pagina
        store.dispatch("cargarCanchas");
    },
    //Propiedades computadas
    computed: {
        canchas: ()=>{
            return store.state.canchas;
        }
    }
}

</script>

<style>
#cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
#editar{
    background: green;
}
#eliminar{
    background-color: brown;
    
}
#botones{
    float: right;
}

</style>