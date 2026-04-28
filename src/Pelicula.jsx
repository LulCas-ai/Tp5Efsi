import api from "./api"

function Pelicula(Nombre){
    let dataP = api.buscarPelicula(Nombres)
    return (
        <>
            <h1>{dataP["Title"]}</h1>
            <img src={dataP["Poster"]}/>
            <h3>Año: {dataP["Year"]}</h3>
            <h3>Genero: {dataP["Genre"]}</h3>
            <h4>Director: {dataP["Director"]}</h4>
        </>
    )
}


export default Pelicula