import axios from "axios";

async function buscarPelicula(Nombre) {
    if (Nombre != "") {

        const jsonApi = await axios.get(`http://www.omdbapi.com/?s=${Nombre}&apikey=5039ce06`)

        return jsonApi.data
    }


}

async function peliculaEspecifica(id) {
    const jsonApi = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=5039ce06`)

    return jsonApi.data
}

export default { buscarPelicula,peliculaEspecifica };