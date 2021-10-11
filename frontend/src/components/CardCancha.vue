<template>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://www.eafit.edu.co/bienestar-universitario/deportes/infraestructura/SiteAssets/Paginas/canchas/cancha-futbol-grama.jpg" height="200px"></v-img>

        <v-card-title>{{complejoDeportivo}}</v-card-title>

        <v-card-subtitle>
            <div>Número de cancha: {{numCancha}}</div>
            <div>Disponibilidad: {{disponibilidad}}</div>
            <div>Precio/Hora fin de semana: {{phFds}}</div>
            <div>Precio/Hora entre semana: {{phEs}}</div>
        </v-card-subtitle>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn id="eliminar" color="white" text v-on:click="eliminar">
                Eliminar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn id="editar" color="white" text v-on:click="actualizar" >
                Actualizar
            </v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>       
</template>

<script>
export default{
    props:{
        complejoDeportivo:String,
        numCancha: Number,
        disponibilidad:String,
        phFds:Number,
        phEs: Number,
        _id:String
    },
    methods:{
        eliminar(){
            this.$emit("eliminarCancha", this._id)
        },
        actualizar(){
            this.$emit("actualizarCancha", this._id)
        }
    }
}
</script>

<style>
</style>
