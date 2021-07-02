import axios from "axios";


const url = 'https://api.openweathermap.org/data/2.5/weather'

export const api = {
  getData(nameCity) {
    return axios.get(`${url}?q=${nameCity}&units=metric&APPID=f68d35e9c20715ccb58aa3eee8886f74`)
      .then( res => {
        return(res.data)
      })
      .catch( e => {
        console.log(e)
      })
  }
}