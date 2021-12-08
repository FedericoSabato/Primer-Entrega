//Federico Sabato - Desafio 6
//Comienzo de Scripts

const multiply= (x,y) => {return (x*y)}
const cryptos= []; //Creo el Array de las crypto

//-----------------------------------------------
//Name: Nombre
//Acr: Acronimo
//Price: Precio de Mercado
//State: Estado -> 1: En Alza
//                 2: En Baja
class crypto{
    constructor(name,acr,price,state){
        this.name=name;
        this.acronym=acr;
        this.price= price;
        this.state=state;
    }
}
//-----------------------------------------------
//-----------------------------------------------
//Creo los objetos
let btc = new crypto("Bitcoin","$BTC",54128.93,1);
let eth = new crypto("Ethereum","$ETH",4140.45,2);
let ada = new crypto("Cardano","$ADA",1.63,2);
let sol = new crypto("Solana","$SOL",197.81,1);
let shiba = new crypto("Shiba INU","$SHIBA",0.00004,2);
//-----------------------------------------------
//-----------------------------------------------
//Obtengo los valores para el HTML
document.getElementById("title1").innerHTML=btc.name; 
document.getElementById("price1").innerHTML=btc.price;
document.getElementById("title2").innerHTML=eth.name;
document.getElementById("price2").innerHTML=eth.price;
document.getElementById("title3").innerHTML=ada.name;
document.getElementById("price3").innerHTML=ada.price;
document.getElementById("title4").innerHTML=sol.name;
document.getElementById("price4").innerHTML=sol.price;
document.getElementById("title5").innerHTML=shiba.name;
document.getElementById("price5").innerHTML=shiba.price;
//-----------------------------------------------
//-----------------------------------------------
//Agrego todas las crypto a un Array 
cryptos.push(btc);
cryptos.push(eth);
cryptos.push(ada);
cryptos.push(sol);
cryptos.push(shiba);
//-----------------------------------------------
//-----------------------------------------------
//Muestro en consola el Array
console.log(cryptos);
//-----------------------------------------------
//-----------------------------------------------
//Creo las constantes para mostrar que cryptos estan en baja o en alza
const downMarket = cryptos.filter(crypto => crypto.state === 2);
const upMarket = cryptos.filter(crypto => crypto.state === 1);
//Muesto en consola las crypto en baja
console.log(downMarket);

alert("¡Bienvendido a CRYPTO P2P MARKET!");

let choice = prompt("¿Que criptomoneda desea comprar?\nElija por número (1 al 5)\nPrecios en $USDT\n1 - $BTC: $54128.93\n2 - $ETH: $4140.45\n3 - $ADA: $1.63\n4 - $SOL: $197.81\n5 - $SHIBA: $0.00004");
let pay;
let quantity;

switch((choice)){
    case "1":
        quantity = prompt("¿Cuantos $BTC desea comprar?\nPrecio: $54128.93");
        pay = multiply(54128.93,quantity);
        alert("Usted pagará $"+pay);
        break;
    case "2":
        quantity = prompt("¿Cuantos $ETH desea comprar?\nPrecio: $4140.45");
        pay = multiply(4140.45,quantity);
        alert("Usted pagará $"+pay );
        break
    case "3":
        quantity = prompt("¿Cuantos $ADA desea comprar?\nPrecio: $1.63");
        pay = multiply(1.63,quantity);
        alert("Usted pagará $"+pay );
        break;
    case "4":
        quantity = prompt("¿Cuantos $SOL desea comprar?\nPrecio: $197.81");
        pay = multiply(197.81,quantity);
        alert("Usted pagará $"+pay );
        break;
    case "5":
        quantity = prompt("¿Cuantos $SHIBA desea comprar?\nPrecio: $0.00004");
        pay = multiply(0.00004,quantity);
        alert("Usted pagará $"+pay );
        break;
}
