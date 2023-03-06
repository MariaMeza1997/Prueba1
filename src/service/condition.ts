import axios from 'axios'

export const GetCondicion = async() =>{
    const {data}= await axios.get("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
    return data
}