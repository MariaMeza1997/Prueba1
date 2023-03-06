interface crudCondution {
    "_id":String,
    cityid: string,
    name:string,
    state:string,
    probabilityofprecip:number,
    relativehumidity:number,
    lastreporttime:number,

}
export const initialState : crudCondution ={
    "_id":"",
    cityid: "",
    name:"",
    state:"",
    probabilityofprecip: 0,
    relativehumidity:0,
    lastreporttime:0,
}