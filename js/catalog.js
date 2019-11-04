var carInventory = [
    { 
        name: "Bugatti",
        model: "Centodieci",
        picture: "./img/car01.jpg",
        year: 2019,
        doors: 2,
        price: "203K"
    },
    {
        name: "Hyundai",
        model: "Tucson",
        picture: "./img/car02.png",
        year: 2018,
        doors: 4,
        price: "54K"
    },
    {
        name: "Porsche",
        model: "Taycan",
        picture: "./img/car03.jpg",
        year: 2019,
        doors: 2,
        price: "93K"
    },
    {
        name: "Corvette",
        model: "Stingray",
        picture: "./img/car04.jpg",
        year: 2020,
        doors: 2,
        price: "104K"
    },
    {
        name: "Hyundai",
        model: "Tucson",
        picture: "./img/car02.png",
        year: 2018,
        doors: 4,
        price: "28-54K"
    },
    {
        name: "Bugatti",
        model: "Centodieci",
        picture: "./img/car01.jpg",
        year: 2019,
        doors: 2,
        price: "203K"
    },
    {
        name: "Corvette",
        model: "Stingray",
        picture: "./img/car04.jpg",
        year: 2020,
        doors: 2,
        price: "104K"
    },
    {
        name: "Hyundai",
        model: "Tucson",
        picture: "./img/car02.png",
        year: 2018,
        doors: 4,
        price: "28-54K"
    }
];

function populateCarCards () {
    var resultsHTML = "";
    for (car of carInventory) {
        console.log (  `car ${car.name}`);
        resultsHTML += `
        <div class="carCard">
            <h3 class="name">${car.name}</h3>
            <h3 class="model">${car.model}</h3>
            <img src=${car.picture} alt="${car.name}">
            <div class="carCardBottom">
                <h3 class="yearColumn columnHeader">YEAR</h3>
                <h3 class="doorsColumn columnHeader">DOORS</h3>
                <h3 class="priceColumn columnHeader">PRICE</h3>
                <h3 class="yearColumn">${car.year}</h3>
                <h3 class="doorsColumn">${car.doors}</h3>
                <h3 class="priceColumn">${car.price}</h3>
            </div>
        </div>`
    }
    console.log(resultsHTML);
    $("#results").html(resultsHTML);
}

function init() {
    $(document).ready(function() {
        $("body").css("opacity", 1);
        $("#magnifying-glass").mouseenter(function() {
            $("#searchtext").css("width", 200);
        });
        $("#magnifying-glass").mouseleave(function() {
            $("#searchtext").css("width", 1);
        });
        $("#searchtext").mouseenter(function() {
            $("#searchtext").css("width", 200);
        });
        $("#searchtext").mouseleave(function() {
            $("#searchtext").css("width", 1);
        });
    });
    // $("#button").attr("disabled",true);
    // $("#username").keyup(handleEnterButton);  // keyup also detects the backspace
    // $("#pwd").keyup(handleEnterButton);
};

init();
populateCarCards ();



// toAppend = "";
// people = ["a","b","c"];
// people.forEach(addNumbers);
// function addNumbers(names, i) {
//     toAppend += "<div id='name" + i + "'>" + names + "</div>";
// }
// main.innerHTML = toAppend;
