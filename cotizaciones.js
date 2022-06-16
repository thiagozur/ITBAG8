const ofic = [document.getElementById("compra-ofic"), document.getElementById("venta-ofic"), document.getElementById("var-ofic")]
const blue = [document.getElementById("compra-b"), document.getElementById("venta-b"), document.getElementById("var-b")]
const liqui = [document.getElementById("compra-l"), document.getElementById("venta-l"), document.getElementById("var-l")]
const bolsa = [document.getElementById("compra-bol"), document.getElementById("venta-bol"), document.getElementById("var-bol")]
const dolarUsado = document.getElementById("dolar-usado")
const calculoRealizado = document.getElementById("calculo")
const phPlata = document.getElementsByName("plata")[0]
const plata = document.getElementById("plata")
const result = document.getElementById("result")

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

function pesoDolar() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(res => res.json())
    .then(res => {
        const valor = parseFloat(res[dolarUsado.value].casa.venta.replace(/,/g, "."))
        console.log(valor, dolarUsado.value)
        result.innerText = `Resultado: ${(parseFloat(plata.value) * valor).toFixed(2)}`
        console.log(`${plata.value}, ${result.innerText}, ${res[dolarUsado.value].casa.venta}, ${parseFloat(plata.value) * valor}`)
        plata.value = ""
        phPlata.placeholder = "Ingrese una cantidad"
    })
}

function dolarPeso() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(res => res.json())
    .then(res => {
        const valor = parseFloat(res[dolarUsado.value].casa.venta.replace(/,/g, "."))
        console.log(valor, dolarUsado.value)
        result.innerText = `Resultado: ${(parseFloat(plata.value) / valor).toFixed(2)}`
        console.log(`${plata.value}, ${result.innerText}, ${res[dolarUsado.value].casa.venta}, ${parseFloat(plata.value) / valor}`)
        plata.value = ""
        phPlata.placeholder = "Ingrese una cantidad"
    })
}

/* por qué no podemos sacar los espacios del número? */

function checkData() {
    if (isNaN(parseFloat(plata.value))) {
        return false
    } else {
        return true
    }
}

function calculo() {
    const numero = checkData()
    if (calculoRealizado.value == 0 && numero) {
        pesoDolar()
    } else if (calculoRealizado.value == 1 && numero) {
        dolarPeso()
    } else {
        plata.value = ""
        phPlata.placeholder = "Por favor, ingrese una cantidad adecuada"
        result.innerText = "Resultado:"
    }
    
}

traerDatos()