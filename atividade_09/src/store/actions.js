function logar(user){
    return{
        type: "LOGAR",
        user
    }
}

function deslogar(){
    return{
        type: "DESLOGAR"
    }
}

export { logar, deslogar }