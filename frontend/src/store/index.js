import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const baseUrl = "https://free-canchas-backend.herokuapp.com/canchas";
// const devUrl = "http://localhost:3000/canchas";

export default new Vuex.Store({
  state: {
    canchas: [],
  },
  mutations: {
    setCanchas(state, payload) {
      state.canchas = payload;
    },
    pushCanchas(state, payload) {
      state.canchas.push(payload);
    },
  },
  actions: {
    async cargarCanchas({ commit }) {
      const peticion = await fetch(baseUrl);
      const data = await peticion.json();
      commit("setCanchas", data);
    },
    async crearCancha({ commit }, objCancha) {
      const peticion = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objCancha),
      });
      //Capturamos la cancha recien insertada
      const data = await peticion.json();
      commit("pushCanchas", data);
    },
    async eliminarCancha({ commit }, obj) {
      const peticion = await fetch(baseUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
    },
    async actualizarCancha({ commit }, objedit) {
      const peticion = await fetch(baseUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objedit),
      });
      //Capturamos la cancha actualizada
      const data = await peticion.json();
      commit("pushCanchas", data);
    },
  },

  modules: {},
});
