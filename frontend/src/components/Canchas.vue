<template>
    <main>
        <div class="action-buttons">
            <v-btn color="blue-grey" class="ma-2 white--text" @click="atras">
            Atrás
            </v-btn>
            <v-btn class="ma-2" color="success" @click="crear">
            Crear
            </v-btn>
        </div>
        <section id="cards">
            <cardCancha v-for="item in canchas" 
                :key="item._id"
                :_id="item._id"
                :complejoDeportivo="item.complejoDeportivo" 
                :numCancha="item.numCancha" 
                :disponibilidad="item.disponibilidad"
                :phEs="item.phEs" 
                :phFds="item.phFds"
                @eliminarCancha="eliminar" 
                @actualizarCancha="cargarActualizar"
            >
            </cardCancha>
        </section>
    </main>
</template>

<script>
import store from "../store/index.js"
import CardCancha from "../components/CardCancha.vue"

export default {
    components:{
        CardCancha
    },
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
        cargarActualizar(cancha){
            this.$router.push('/actualizar/'+ cancha);
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

main{
    display: flex;
    flex-direction: column;
    padding: 20px
}

.action-buttons{
    display: flex;
    align-self: flex-end;
    margin-bottom: 20px;
}

#cards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

#editar{
    background: green;
}

#eliminar{
    background-color: brown;
    
}

</style>