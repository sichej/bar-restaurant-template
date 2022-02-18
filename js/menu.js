var c = [
    {
        "product":"Caffe",
        "price": "1,10",
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

var i = 0;

/*
* caffeteria menu viewer
*/
for( i = 0; i < c.length; i++){
    console.log(c[i]);
    var str = `<div class='menu-item'><p><strong>${c[i].product}:</strong> ${c[i].price}</p></div>`;
    document.getElementById("menu-caff").innerHTML += str;
}

/*
* burger menu viewer
*/
for( i = 0; i < bg.length; i++){
    console.log(bg[i]);
    var str = `<div class='menu-item'><p><strong>${bg[i].product}:</strong> ${bg[i].price}</p><p>${bg[i].ingridients}</p></div>`;
    document.getElementById("menu-burger").innerHTML += str;
}

/*
* salad menu viewer
*/
for( i = 0; i < sal.length; i++){
    console.log(sal[i]);
    var str = `<div class='menu-item'><p><strong>${sal[i].product}:</strong> ${sal[i].price}</p><p>${sal[i].ingridients}</p></div>`;
    document.getElementById("menu-salad").innerHTML += str;
}