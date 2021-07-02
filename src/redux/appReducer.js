import {api} from "../api/api";


const initialState = {
  info: '',
  loader: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INFO_WEATHER' :
      return {
        ...state,
        info: action.payload
      }
    case 'ERROR':
      return {
        ...state,
        error: true
      }
    default:
      return state

  }
}

//actions
export const setError = () => ({type: 'ERROR'})
export const setInfoWeather = (payload) => ({type: 'SET_INFO_WEATHER', payload})

//thunk

export const getCityWeather = (nameCity) => async (dispatch) => {
  try {
    let res = await api.getData(nameCity)
    console.log(res)
    dispatch(setInfoWeather(res))
  } catch (e) {
    console.log(e)
  }
}
