
import fetchData from './utils/fetchData'


const url = process.env.REACT_APP_SERVER_URL + '/reservation'

export const createReservation = async (reservation, currentUser, dispatch) =>{
    dispatch({type:'START_LOADING'})

    const result = await fetchData({
        url, 
        body: reservation, 
        token:currentUser?.token}, dispatch)
    if(result){
        dispatch({
            type:'UPDATE_ALERT', 
            payload:{open:true, 
            severity:'success', 
            message:'Success redirecting to payment page.'
        }});
    }

    dispatch({type:'END_LOADING'})

}

