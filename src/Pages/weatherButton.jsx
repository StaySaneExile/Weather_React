import {useEffect, useMemo, useState} from "react";
import '../styles/weather.css'
import {getCityWeather} from "../redux/appReducer";
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";


export const Weather = () => {

  const dispatch = useDispatch();
  const {error, info} = useSelector(({appReducer}) => appReducer)
  const [inputValue, setInputValue] = useState('')


  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }
  const searchCity = () => {
    dispatch(getCityWeather(inputValue))
    setInputValue('')
  }


  return (
    <div className='inputWeather'>
      <div className="input-group mb-3">
       <input onChange={(e) => onChangeInput(e)}
               value={inputValue}
               type="text"
               className="form-control"
               placeholder='Select city'
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"/>
        <button onClick={searchCity}
                type ="button"
                className="btn btn-primary">
          Search</button>
      </div>
      {
        info && info ?  <div className="card">
          <div className="card-header">
            {info.name}
          </div>
              <ul className="list-group list-group-flush">
                Temperature {info.main["temp"]}
              </ul>
              <ul className="list-group list-group-flush">
                Feels like {info.main["feels_like"]}
              </ul>
            <ul className="list-group list-group-flush">
              Temp min {info.main["temp_min"]}
            </ul>
            <ul className="list-group list-group-flush">
              Temp max {info.main["temp_max"]}
            </ul>
        </div>
          : ''
      }

    </div>
  )
}