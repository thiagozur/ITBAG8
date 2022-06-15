const ofic = [document.getElementById("compra-ofic"), document.getElementById("venta-ofic"), document.getElementById("var-ofic")]
const blue = [document.getElementById("compra-b"), document.getElementById("venta-b"), document.getElementById("var-b")]
const liqui = [document.getElementById("compra-l"), document.getElementById("venta-l"), document.getElementById("var-l")]
const bolsa = [document.getElementById("compra-bol"), document.getElementById("venta-bol"), document.getElementById("var-bol")]

function traerDatos() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(res => res.json())
    .then(res => {
        ofic[0].innerHTML = `Compra:<br>$${res[0].casa.compra}`
        ofic[1].innerHTML = `Venta:<br>$${res[0].casa.venta}`
        ofic[2].innerHTML = `Variación: ${res[0].casa.variacion}%`
        blue[0].innerHTML = `Compra:<br>$${res[1].casa.compra}`
        blue[1].innerHTML = `Venta:<br>$${res[1].casa.venta}`
        blue[2].innerHTML = `Variación: ${res[1].casa.variacion}%`
        liqui[0].innerHTML = `Compra:<br>$${res[3].casa.compra}`
        liqui[1].innerHTML = `Venta:<br>$${res[3].casa.venta}`
        liqui[2].innerHTML = `Variación: ${res[3].casa.variacion}%`
        bolsa[0].innerHTML = `Compra:<br>$${res[4].casa.compra}`
        bolsa[1].innerHTML = `Venta:<br>$${res[4].casa.venta}`
        bolsa[2].innerHTML = `Variación: ${res[4].casa.variacion}%`
    })
}

traerDatos()