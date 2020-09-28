import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    number: function(state, action){
        return {
            numero: 10
        }
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig