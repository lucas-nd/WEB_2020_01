const initial = {
    numero_01: 0,
    numero_02: 0
}

function reducer(state = initial, action){
    if(action.type === "MUDA_NUM_01"){
        console.log(action)
        return{
            ...state,
            numero_01: action.numero_01
        }
    }else if(action.type === "MUDA_NUM_02"){
        console.log(action)
        return{
            ...state,
            numero_02: action.numero_02
        }
    }
    console.log(action)
    return state
}

export default reducer