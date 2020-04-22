import { TEST } from '../actions/types'

const INITIAL_STATE = {
    allCovidData: [],
}

const CovidReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default CovidReducer