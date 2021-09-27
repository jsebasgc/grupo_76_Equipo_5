<template>
    <div>
        <br>
        <!---crear y atras--->
        <label id="botones">
            <v-btn
        :loading="loading3"
        :disabled="loading3"
        color="blue-grey"
        class="ma-2 white--text"
        @click="atras"
        >
        Atrás
        </v-btn>
            <v-btn
        class="ma-2"
        :loading="loading2"
        :disabled="loading2"
        color="success"
        @click="crear"
        >
        Crear
        <template v-slot:loader>
            <span>Loading...</span>
        </template>
        </v-btn>

        
        </label>
        <br><br>
        <br>
        
        <label id="cards">
        <!--Card 1 de canchas---->
            <v-card 
        class="mx-auto"
        max-width="344"
    >
        <v-img
        src="https://proyectostipo.dnp.gov.co/media/k2/items/cache/5fa21cd9e0d2531a2f1dfdffbab46f70_L.jpg"
        height="200px"
        ></v-img>

        <v-card-title>
        Cancha 1
        </v-card-title>

        <v-card-subtitle>
        Complejo deportivo:
        <br>
        Número de cancha:
        <br>
        Ubicación:
        <br>
        Tamaño:
        <br>
        Teléfono:
        <br>
        Horarios:
        <br>
        Precio/Hora fin de semana:
        <br>
        Precio/Hora entre semana:
        </v-card-subtitle>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="eliminar"
            color="white"
            text
        >
            Eliminar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn id="editar"
            color="white"
            text
        >
            Editar
        </v-btn>
        <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>

        <!--Card 2 de canchas---->
            <v-card 
        class="mx-auto"
        max-width="344"
    >
        <v-img
        src="https://proyectostipo.dnp.gov.co/media/k2/items/cache/5fa21cd9e0d2531a2f1dfdffbab46f70_L.jpg"
        height="200px"
        ></v-img>

        <v-card-title>
        Cancha 2
        </v-card-title>

        <v-card-subtitle>
        Complejo deportivo:
        <br>
        Número de cancha:
        <br>
        Ubicación:
        <br>
        Tamaño:
        <br>
        Teléfono:
        <br>
        Horarios:
        <br>
        Precio/Hora fin de semana:
        <br>
        Precio/Hora entre semana:
        </v-card-subtitle>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="eliminar"
            color="white"
            text
        >
            Eliminar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn id="editar"
            color="white"
            text
        >
            Editar
        </v-btn>
        <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>

        <!--Card 3 de canchas---->
            <v-card 
        class="mx-auto"
        max-width="344"
    >
        <v-img
        src="https://proyectostipo.dnp.gov.co/media/k2/items/cache/5fa21cd9e0d2531a2f1dfdffbab46f70_L.jpg"
        height="200px"
        ></v-img>

        <v-card-title>
        Cancha 3
        </v-card-title>

        <v-card-subtitle>
        Complejo deportivo:
        <br>
        Número de cancha:
        <br>
        Ubicación:
        <br>
        Tamaño:
        <br>
        Teléfono:
        <br>
        Horarios:
        <br>
        Precio/Hora fin de semana:
        <br>
        Precio/Hora entre semana:
        </v-card-subtitle>

        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="eliminar"
            color="white"
            text
        >
            Eliminar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn id="editar"
            color="white"
            text
        >
            Editar
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
        }
    },
    created: ()=>{
        
    },
    computed: {
        
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