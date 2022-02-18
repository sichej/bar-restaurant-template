var c = [
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

var bg = [
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

var sal = [
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

var coc = [
    {
        "product":"Aperol Spritz",
        "price": "9,00",
    },
    {
        "product":"Campari Spritz",
        "price": "9,00",
    },
    {
        "product":"Ugo Spritz",
        "price": "9,00",
    },
    {
        "product":"Gin Tonic",
        "price": "9,00",
    },
    {
        "product":"Gin Lemon",
        "price": "9,00",
    },
    {
        "product":"Negroni",
        "price": "9,00",
    },
    {
        "product":"Vodka Lemon",
        "price": "9,00",
    },
    {
        "product":"Pina Colada",
        "price": "9,00",
    },
    {
        "product":"Mojito",
        "price": "9,00",
    },
    {
        "product":"Campari Shakerato",
        "price": "9,00",
    },
    {
        "product":"Americano",
        "price": "9,00",
    },
    {
        "product":"Analcolico alla Frutta",
        "price": "9,00",
    },
    {
        "product":"Long Island",
        "price": "9,00",
    }
]

var beers = [
    {
        "product":"Ceres",
        "price": "3,00",
    },
    {
        "product":"Corona",
        "price": "3,00",
    },
    {
        "product":"Icnusa non Filtrata",
        "price": "3,50",
    },
    {
        "product":"Heineken",
        "price": "3,00",
    },
    {
        "product":"Beck's",
        "price": "3,00",
    },
    {
        "product":"Artigian art Caffe",
        "price": "3,50",
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



var i = 0;
var euro = "&#8364 ";

/*
* caffeteria menu viewer
*/
for( i = 0; i < c.length; i++){
    console.log(c[i]);
    var str = `<div class='menu-item'><a id='pname'>${c[i].product}:</a><a id='pprice'>${euro + c[i].price}</a></div>`;
    document.getElementById("menu-caff").innerHTML += str;
}

/*
* burger menu viewer
*/
for( i = 0; i < bg.length; i++){
    console.log(bg[i]);
    var str = `<div class='menu-item'><a id='pname'>${bg[i].product}:</a><a id='pprice'>${euro + bg[i].price}</a><p id='pingridients'>${bg[i].ingridients}</p></div>`;
    document.getElementById("menu-burger").innerHTML += str;
}

/*
* salad menu viewer
*/
for( i = 0; i < sal.length; i++){
    console.log(sal[i]);
    var str = `<div class='menu-item'><a id='pname'>${sal[i].product}:</a><a id='pprice'>${euro + sal[i].price}</a><p id='pingridients'>${sal[i].ingridients}</p></div>`;
    document.getElementById("menu-salad").innerHTML += str;
}

/*
* cocktail menu viewer
*/
for( i = 0; i < coc.length; i++){
    console.log(coc[i]);
    var str = `<div class='menu-item'><a id='pname'>${coc[i].product}:</a><a id='pprice'>${euro + coc[i].price}</a></div>`;
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