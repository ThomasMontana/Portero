let info = "";

const tipear = (Numero) => {
    info = info + Numero;

    if (info.length <= 2) {
        document.getElementById("piso").value = info;
    } else {
        document.getElementById("depto").value = Numero;
    }
}

const Llamar = () => {
    mensaje = ("hola mundo");
    document.getElementById("llamar").value = (`LLamando al piso ${info}, departamento ${Numero}`);
}

const Borrar = () => {
    info = "";
    Numero = "";
    document.getElementById("piso").value = info;
    document.getElementById("depto").value = Numero;

}
