let info = "";

const tipear = (Numero) => {
    info = info + Numero;

    if (info.length <= 2) {
        document.getElementById("piso").value = info
    } else if (info.length <= 3) {
        document.getElementById("depto").value = info
    } else {
        info = alert("ERROR");
    }
}
