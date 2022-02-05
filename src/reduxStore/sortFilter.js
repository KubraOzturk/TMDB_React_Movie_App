const FILTER_DATA = "FILTER_DATA";
const REMOVE_FILTER= "REMOVE_FILTER";

export const addGenres = (data) =>( {
    type: FILTER_DATA,
    payload: data,
})

export const removeFilter = (data) => ({
    type: REMOVE_FILTER,
    payload: data,
})

const sortFilterReducer = (filtered =[],action) => {
    switch(action.type){
        case FILTER_DATA:
            return [...filtered, action.payload]
        case REMOVE_FILTER:
            return filtered=[]
        default:
            return filtered
    }
}

export default sortFilterReducer;