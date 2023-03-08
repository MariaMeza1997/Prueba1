interface result{
    '_id':string,
    cityid: string,
    name:string,
    state:string,
    probabilityofprecip:number,
    relativehumidity:number,
    lastreporttime:number,
    'date-insert':any,
    validdateut:string,
    winddirectioncardinal:string
    longitude:string
    skydescriptionlong:string
}
interface condition{
    pagination:{}
    results:result[]
}

export interface crudCondution {
    condition:condition,
    oneCondition:condition

}