import { GET_STATE_DATA } from '../actions/types'

const INITIAL_STATE = {
    allCovidData: {},
}

const CovidReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_STATE_DATA:
            return {
                allCovidData: action.payload
            } 
        default:
            return state
    }
}

export default CovidReducer