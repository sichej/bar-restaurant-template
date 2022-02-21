var caff = [
    {
        "product":"Caffe",
        "price": "1,20",
        "ingridients": ""
    },
    {
        "product":"Acqua 50cl",
        "price": "1,00",
        "ingridients": ""
    },
    {
        "product":"Acqua 1L",
        "price": "2,00",
        "ingridients": ""
    },
    {
        "product":"Bibite lattina",
        "price": "2,50 a 3,00",
        "ingridients": ""
    }
]

var burger = [
    {
        "product":"The Cups",
        "price": "7,00",
        "ingridients": "culatta | funghi porcini | burro"
    },
    {
        "product":"Milano",
        "price": "7,00",
        "ingridients": "cotoletta | insalata | pomodoro"
    },
    {
        "product":"The Wall",
        "price": "7,00",
        "ingridients": "crudo | patate al forno | gorgonzola | salsa di radicchio"
    },
    {
        "product":"Lollo",
        "price": "7,00",
        "ingridients": "salame | burro | alici rizzole"
    }
]

var salad = [
    {
        "product":"Miami",
        "price": "9,00",
        "ingridients": "insalata | rucola | radicchio | noci | pomodoro | fiocchi di patate alla paprica | salsa greca | pollo impanato"
    },
    {
        "product":"Bombe",
        "price": "9,00",
        "ingridients": "insalata | rucola | valeriana | gorgonzola | pere | crudo 24m"
    },
    {
        "product":"Lollino",
        "price": "9,00",
        "ingridients": "insalata | radicchio | rucola | pomodoro | mais | tonno | scaglie di parmigiano bufala"
    },
    {
        "product":"Pilu",
        "price": "9,00",
        "ingridients": "Insalata | rucola | valeriana | radicchio rosso | noci | zucchine pugliesi | tomino caldo | pomodorini gialli"
    }
]

var cocktail = [
    {
        "product":"Aperol Spritz",
        "price": "9,00"
    },
    {
        "product":"Campari Spritz",
        "price": "9,00"
    },
    {
        "product":"Ugo Spritz",
        "price": "9,00"
    },
    {
        "product":"Gin Tonic",
        "price": "9,00"
    },
    {
        "product":"Gin Lemon",
        "price": "9,00"
    },
    {
        "product":"Negroni",
        "price": "9,00"
    },
    {
        "product":"Vodka Lemon",
        "price": "9,00",
    },
    {
        "product":"Pina Colada",
        "price": "9,00"
    },
    {
        "product":"Mojito",
        "price": "9,00"
    },
    {
        "product":"Campari Shakerato",
        "price": "9,00"
    },
    {
        "product":"Americano",
        "price": "9,00"
    },
    {
        "product":"Analcolico alla Frutta",
        "price": "9,00"
    },
    {
        "product":"Long Island",
        "price": "9,00"
    }
]

var beers = [
    {
        "product":"Ceres",
        "price": "3,00"
    },
    {
        "product":"Corona",
        "price": "3,00"
    },
    {
        "product":"Icnusa non Filtrata",
        "price": "3,50"
    },
    {
        "product":"Heineken",
        "price": "3,00"
    },
    {
        "product":"Beck's",
        "price": "3,00"
    },
    {
        "product":"Artigian art Caffe",
        "price": "3,50"
    }
]

var wine = [
    {
        "product":"Prosecco",
        "price": "20,00",
        "glass": "4,00"
    },
    {
        "product":"Malvasia",
        "price": "20,00",
        "glass": "4,00"
    },
    {
        "product":"Trento DOC",
        "price": "20,50",
        "glass": "4,00"
    },
    {
        "product":"Traminer",
        "price": "20,00",
        "glass": "4,00"
    },
    {
        "product":"Chardonnay",
        "price": "20,00",
        "glass": "4,00"
    },
    {
        "product":"Lambrusco",
        "price": "20,50",
        "glass": "4,00"
    },
    {
        "product":"Gutturnio",
        "price": "20,50",
        "glass": "4,00"
    }
]

var amari = [
    {
        "product":"Sambuca",
        "price": "3,00"
    },
    {
        "product":"Vecchia Romagna",
        "price": "3,00"
    },
    {
        "product":"Stravecchio",
        "price": "3,50"
    },
    {
        "product":"Jager",
        "price": "3,00"
    },
    {
        "product":"Grappa",
        "price": "3,00"
    },
    {
        "product":"Jack Daniel's",
        "price": "3,50"
    }
]



var i = 0;
var euro = "&#8364 ";

/*
* caffeteria menu viewer
*/
for( i = 0; i < caff.length; i++){
    console.log(caff[i]);
    var str = `<div class='menu-item'><a id='pname'>${caff[i].product}:</a><a id='pprice'>${euro + caff[i].price}</a></div>`;
    document.getElementById("menu-caff").innerHTML += str;
}

/*
* burger menu viewer
*/
for( i = 0; i < burger.length; i++){
    console.log(burger[i]);
    var str = `<div class='menu-item'><a id='pname'>${burger[i].product}:</a><a id='pprice'>${euro + burger[i].price}</a><p id='pingridients'>${burger[i].ingridients}</p></div>`;
    document.getElementById("menu-burger").innerHTML += str;
}

/*
* salad menu viewer
*/
for( i = 0; i < salad.length; i++){
    console.log(salad[i]);
    var str = `<div class='menu-item'><a id='pname'>${salad[i].product}:</a><a id='pprice'>${euro + salad[i].price}</a><p id='pingridients'>${salad[i].ingridients}</p></div>`;
    document.getElementById("menu-salad").innerHTML += str;
}

/*
* cocktail menu viewer
*/
for( i = 0; i < cocktail.length; i++){
    console.log(cocktail[i]);
    var str = `<div class='menu-item'><a id='pname'>${cocktail[i].product}:</a><a id='pprice'>${euro + cocktail[i].price}</a></div>`;
    document.getElementById("menu-cocktail").innerHTML += str;
}

/*
* beers menu viewer
*/
for( i = 0; i < beers.length; i++){
    console.log(beers[i]);
    var str = `<div class='menu-item'><a id='pname'>${beers[i].product}:</a><a id='pprice'>${euro + beers[i].price}</a></div>`;
    document.getElementById("menu-beers").innerHTML += str;
}

/*
* wine menu viewer
*/
for( i = 0; i < wine.length; i++){
    console.log(wine[i]);
    var str = `<div class='menu-item'><a id='pname'>${wine[i].product}:</a><a id='pprice'>${euro + wine[i].price}</a><br><a class='marg-low'>calice</a><a id='pprice'>${euro + wine[i].glass}</a></div>`;
    document.getElementById("menu-wine").innerHTML += str;
}

/*
* amari menu viewer
*/
for( i = 0; i < amari.length; i++){
    console.log(amari[i]);
    var str = `<div class='menu-item'><a id='pname'>${amari[i].product}:</a><a id='pprice'>${euro + amari[i].price}</a></div>`;
    document.getElementById("menu-amari").innerHTML += str;
}