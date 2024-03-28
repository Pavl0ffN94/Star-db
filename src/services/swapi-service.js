export default class SwapiService{
    _apiBase = 'https://swapi.dev/api'

 async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok){
        throw new Error(`Cannot not fetch ${url}` + `, recived${res.status}`)
    }
    return res.json();
 }
 async getAllPeople(){
    const res = await this.getResource(`/people/`)
    return res.result
 }

 getPerson(id){
    return this.getResource(`people/${id}`)
 }

 async getAllPlanets(){
    const res = await this.getResource(`/planets/`)
    return res.result
 }

 getPlanet(id){
    return this.getResource(`planets/${id}`)
 }

 async getAllStarships(){
    const res = await this.getResource(`/starships/`)
    return res.result
 }

 getStarships(id){
    return this.getResource(`starships/${id}`)
 }
}