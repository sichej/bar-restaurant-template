var l = [
    {
        "product":"caffe",
        "price": "1,20",
        "ingridients": ""
    },
    {
        "product":"cappuccino",
        "price": "1,50",
        "ingridients": ""
    },
    {
        "product":"ginseng",
        "price": "1,80",
        "ingridients": ""
    },
    {
        "product":"sicca",
        "price": "1,80",
        "ingridients": "insalata | salame | maionese"
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

var i = 0;
for( i = 0; i < bg.length; i++){
    console.log(bg[i]);
    var str = `<div class='menu-item'><p><strong>${bg[i].product}:</strong> ${bg[i].price}</p><p>${bg[i].ingridients}</p></div>`;
    document.getElementById("menu-burger").innerHTML += str;
}

//console.log(l[0].price)
