function mudarNumero01(numero_01){
    return {
        type: "MUDA_NUM_01",
        numero_01
    }
}

function mudarNumero02(numero_02){
    return {
        type: "MUDA_NUM_02",
        numero_02
    }
}

export {mudarNumero01, mudarNumero02}