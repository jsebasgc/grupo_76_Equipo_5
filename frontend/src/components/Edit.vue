<template>
    <div class="form" >
        <h1 class="form__title">Actualizar Cancha</h1>

        <label >
        <v-form ref="form" lazy-validation @submit.prevent="actualizarCancha(canchaActualizar)">
            <v-text-field
            v-model="canchaActualizar.complejoDeportivo"
            label="Nombre del complejo deportivo"
            :counter="50"
            ></v-text-field>
            <!-- asdfd -->

            <v-text-field
            v-model="numCancha"
            label="Número de la cancha"
            type="number"
            
            ></v-text-field>

            <v-select
            v-model="disponibilidad"
            :items="items"
            label="Disponibilidad"
            
            ></v-select>

            <v-text-field
            v-model="phFds"
            label="Precio fines de semana"
            
            type="number"
            ></v-text-field>

            <v-text-field
            v-model="phEs"
            label="Precio entre semana"
            
            type="number"
            ></v-text-field>

            <v-text-field
            v-model="url"
            label="URL Imagen de la Cancha"
            
            ></v-text-field>


            <v-btn color="success" class="mr-4" @click="actualizar">
            Guardar
            </v-btn>
        </v-form>
        </label>
    </div>
</template>

<script>
import store from "../store/index.js";
export default {
    data: () => {
    return {
        canchaActualizar: {},

        valid: true,
        complejoDeportivo: "",
        numCancha: "",
        disponibilidad: "",
        phFds: "",
        phEs: "",
        url: "",

        
        disponibilidad: null,
        items: [
            "Disponible",
            'No disponible',
        ],
    }
    },
    name: 'actualizar',
    methods:{
        atras(){
            //Redirigir a las canchas
            this.$router.push('/home');
        },
        actualizar(){
            if (this.$refs.form.validate()) {
                let objCancha = {
                    complejoDeportivo: this.complejoDeportivo,
                    numCancha: this.numCancha,
                    disponibilidad: this.disponibilidad,
                    phFds: this.phFds,
                    phEs: this.phEs,
                    url: this.url,
                    id: this.$route.params.id
                };
                //Crear una persona; realiza solicitud post al backend
                store.dispatch("actualizarCancha", objCancha).then(()=>{
                    //Limpia el formulario cuando se registra una persona
                    this.$refs.form.reset();
                });
                alert("Cancha actualizada con éxito")
                this.$router.push('/home');
            }
        },
    },
    mounted(){
        console.log(this.$route.params.id)
    }
}
</script>

<style>
.form{
    display: flex;
    flex-direction: column;
    padding: 20px 30px 20px 30px;
}

.form__title{
    text-align: center;
}
</style>