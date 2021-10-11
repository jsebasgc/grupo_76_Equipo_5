<template>
    <div class="form">
        <h1 class="form__title">Crear Cancha</h1>
        <v-form
        ref="form"
        
        lazy-validation
        >
            <v-text-field
            v-model="complejoDeportivo"
            label="Nombre del complejo deportivo"
            :counter="50"
            required
            ></v-text-field>

            <v-text-field
            v-model="numCancha"
            label="Número de la cancha"
            type="number"
            required
            ></v-text-field>

            <v-select
            v-model="disponibilidad"
            :items="items"
            label="Disponibilidad"
            required
            ></v-select>

            <v-text-field
            v-model="phFds"
            label="Precio fines de semana"
            required
            type="number"
            ></v-text-field>

            <v-text-field
            v-model="phEs"
            label="Precio entre semana"
            required
            type="number"
            ></v-text-field>

            <v-btn color="success" class="mr-4" @click="crear">
            Guardar
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import store from "../store/index.js";
export default {
    data: () => {
    return {
        valid: true,
        complejoDeportivo: "",
        numCancha: "",
        disponibilidad: "",
        phFds: "",
        phEs: "",

        rules: [
            (v) => !!v || "Este campo es requerido",
        ],
        disponibilidad: null,
        items: [
            "Disponible",
            'No disponible',
        ],
    }
    },
    name: 'crear',
    methods:{
        atras(){
            //Redirigir a las canchas
            this.$router.push('/home');
        },
        crear(){
            if (this.$refs.form.validate()) {
                let objCancha = {
                    complejoDeportivo: this.complejoDeportivo,
                    numCancha: this.numCancha,
                    disponibilidad: this.disponibilidad,
                    phFds: this.phFds,
                    phEs: this.phEs
                };
                //Crear una persona; realiza solicitud post al backend
                store.dispatch("crearCancha", objCancha).then(()=>{
                    //Limpia el formulario cuando se registra una persona
                    this.$refs.form.reset();
                });
                alert("Cancha creada con éxito")
                this.$router.push('/home');
            }
        }
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