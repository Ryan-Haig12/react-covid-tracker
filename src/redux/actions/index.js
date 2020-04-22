import { GET_STATE_DATA } from './types'

export const getStateDataAction = ( stateData ) => async dispatch => {
    try {
        dispatch({ type: GET_STATE_DATA, payload: stateData })
    } catch(err) {
        console.log(err)
        //dispatch({ type: REGISTER_FAIL, payload: err })
    }
}