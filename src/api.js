import axios from "axios";

async function buscarPelicula(Nombre) {
    const jsonApi = await axios.get(`http://www.omdbapi.com/?t=${Nombre}&apikey=5039ce06`)

    return jsonApi.data
}

export default {buscarPelicula};