<template>
    <div class="form">
        <h1 class="form__title">Crear Cancha</h1>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
            <v-text-field
            v-model="name"
            label="Nombre del complejo deportivo"
            required
            ></v-text-field>

            <v-text-field
            label="Número de la cancha"
            required
            ></v-text-field>

            <v-checkbox
            v-model="checkbox"
            label="Está disponible"
            ></v-checkbox>

            <v-text-field
            label="Precio fines de semana"
            required
            ></v-text-field>

            <v-text-field
            label="Precio entre semana"
            required
            ></v-text-field>


            <v-btn
            color="success"
            class="mr-4"
            @click="crear"
            >
            Guardar
            </v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'crear',
    methods:{
        atras(){
            //Redirigir a las canchas
            this.$router.push('/home');
        },
        crear(){
            alert("Cancha creada con éxito")
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