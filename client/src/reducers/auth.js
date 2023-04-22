const authReducer = (state = {data:null}, action) =>{
    switch( action.type )
    {
        case 'AUTH': 
            localStorage.setItem('Profile', JSON.stringify({...action?.data}))  
            // ? specifies to send data if it exists and to not throw error if it does not exist
            return {...state, data: action?.data}
        
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null}

        default: 
            return state;
            
    }
}
export default authReducer