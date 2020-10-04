const initial = {
    logado: false,
    user: null
}

function reducer(state = initial, action){   
    if(action.type === "LOGAR"){
        console.log(state)
        console.log(action)
        return{
            logado: true,
            user: action.user
        }
    }else if(action.type === "DESLOGAR"){
        console.log(state)
        console.log(action)
        return{
            logado: false,
            user: null
        }
    }

    return state
}

export default reducer