import axios from "axios";

/*

------      api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f68d35e9c20715ccb58aa3eee8886f74 ---------
------    https://api.troposphere.io/place/name/Тюмень?token=f9f89ce2c5969a2eb07ee5c2b93288073da4cac6211704b31d ---------
https://goweather.herokuapp.com/weather/${nameCity}
!!!!!! https://goweather.herokuapp.com/weather/Moscow  !!!!!!
*/
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