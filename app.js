// There was an issue with local storage. I was able to get the events to remain on 
// the page by using the window.onload = function () and saved to the console 
// when the page is refreshed, however I could not manage to get all of the input logged 
// into local storage. When going into local storage, I could only find one event logged, 
// for example.

// I know the amount of code is excessive. I need to work on how create arrays, objects, 
// and for loops in order to reduce the amount of code written to not take up so much space.

// Function used to append all events to the screen once the page is refreshed.

function appendEvents() {
    var makeEvent8 = localStorage.getItem("makeEvent-8");
    var printEvent8 = localStorage.getItem("printEvent-8");
    document.getElementById("printEvent-8").textContent = makeEvent8;

    var makeEvent9 = localStorage.getItem("makeEvent-9");
    var printEvent9 = localStorage.getItem("printEvent-9");
    document.getElementById("printEvent-9").textContent = makeEvent9;

    var makeEvent10 = localStorage.getItem("makeEvent-10");
    var printEvent10 = localStorage.getItem("printEvent-10");
    document.getElementById("printEvent-10").textContent = makeEvent10;

    var makeEvent11 = localStorage.getItem("makeEvent-11");
    var printEvent11 = localStorage.getItem("printEvent-10");
    document.getElementById("printEvent-11").textContent = makeEvent11;

    var makeEvent12 = localStorage.getItem("makeEvent-12");
    var printEvent12 = localStorage.getItem("printEvent-12");
    document.getElementById("printEvent-12").textContent = makeEvent12;

    var makeEvent13 = localStorage.getItem("makeEvent-13");
    var printEvent13 = localStorage.getItem("printEvent-13");
    document.getElementById("printEvent-13").textContent = makeEvent13;

    var makeEvent14 = localStorage.getItem("makeEvent-14");
    var printEvent14 = localStorage.getItem("printEvent-14");
    document.getElementById("printEvent-14").textContent = makeEvent14;

    var makeEvent15 = localStorage.getItem("makeEvent-15");
    var printEvent15 = localStorage.getItem("printEvent-15");
    document.getElementById("printEvent-15").textContent = makeEvent15;

    var makeEvent16 = localStorage.getItem("makeEvent-16");
    var printEvent16 = localStorage.getItem("printEvent-16");
    document.getElementById("printEvent-16").textContent = makeEvent16;

    var makeEvent17 = localStorage.getItem("makeEvent-17");
    var printEvent17 = localStorage.getItem("printEvent-17");
    document.getElementById("printEvent-17").textContent = makeEvent17;

}



window.onload = function () {
    appendEvents();
};

// Lines 63-98 is the code that allows all events to be cleared from the schedule in the HTML.
// ALSO, tried to add CLEAR EVENT button, but I was unable to get it to properly clear all events.

var printEvent8 = document.querySelector("#printEvent-8");
var printEvent9 = document.querySelector("#printEvent-9");
var printEvent10 = document.querySelector("#printEvent-10");
var printEvent11 = document.querySelector("#printEvent-11");
var printEvent12 = document.querySelector("#printEvent-12");
var printEvent13 = document.querySelector("#printEvent-13");
var printEvent14 = document.querySelector("#printEvent-14");
var printEvent15 = document.querySelector("#printEvent-15");
var printEvent16 = document.querySelector("#printEvent-16");
var printEvent17 = document.querySelector("#printEvent-17");


function clearEvent() {
    printEvent8.textContent = "";
    printEvent9.textContent = "";
    printEvent10.textContent = "";
    printEvent11.textContent = "";
    printEvent12.textContent = "";
    printEvent13.textContent = "";
    printEvent14.textContent = "";
    printEvent15.textContent = "";
    printEvent16.textContent = "";
    printEvent17.textContent = "";
}

printEvent8.addEventListener('click', function() {
    clearEvent(printEvent8);
    clearEvent(printEvent9);
    clearEvent(printEvent10);
    clearEvent(printEvent11);
    clearEvent(printEvent12);
    clearEvent(printEvent14);
    clearEvent(printEvent15);
    clearEvent(printEvent16);
    clearEvent(printEvent17);
});



var makeEvent8 = localStorage.getItem("makeEvent-8");
console.log(localStorage.getItem("makeEvent-8"));

var makeEvent9 = localStorage.getItem("makeEvent-9");
console.log(localStorage.getItem("makeEvent-9"));

var makeEvent10 = localStorage.getItem("makeEvent-10");
console.log(localStorage.getItem("makeEvent-10"));

var makeEvent11 = localStorage.getItem("makeEvent-11");
console.log(localStorage.getItem("makeEvent-11"));

var makeEvent12 = localStorage.getItem("makeEvent-12");
console.log(localStorage.getItem("makeEvent-12"));

var makeEvent13 = localStorage.getItem("makeEvent-13");
console.log(localStorage.getItem("makeEvent-13"));

var makeEvent14 = localStorage.getItem("makeEvent-14");
console.log(localStorage.getItem("makeEvent-14"));

var makeEvent15 = localStorage.getItem("makeEvent-15");
console.log(localStorage.getItem("makeEvent-15"));

var makeEvent16 = localStorage.getItem("makeEvent-16");
console.log(localStorage.getItem("makeEvent-16"));

var makeEvent17 = localStorage.getItem("makeEvent-17");
console.log(localStorage.getItem("makeEvent-17"));

// jumbotron daily update

var m = moment();
console.log(m);
var h4 = document.getElementById("date");
console.log(h4);
h4.innerHTML = m.format("DD MMMM YYYY");

// Lines 142-276 contain the event listeners to add events to each time block

var commit8 = document.querySelector("#commit-8");

commit8.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent8 = document.getElementById('makeEvent-8').value;
    var printEvent8 = document.getElementById('printEvent-8');
    printEvent8.append(makeEvent8);

    localStorage.setItem("makeEvent-8", makeEvent8);
    localStorage.setItem("printEvent-8", makeEvent8);
    var makeEvent8 = localStorage.getItem("makeEvent-8");
    console.log(makeEvent8);

});

var commit9 = document.querySelector("#commit-9");

commit9.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent9 = document.getElementById('makeEvent-9').value;
    var printEvent9 = document.getElementById('printEvent-9');
    printEvent9.append(makeEvent9);

    localStorage.setItem("makeEvent-9", makeEvent9);
    var makeEvent9 = localStorage.getItem("makeEvent-9");
    console.log(makeEvent9);

});


var commit10 = document.querySelector("#commit-10");

commit10.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent10 = document.getElementById('makeEvent-10').value;
    var printEvent10 = document.getElementById('printEvent-10');
    printEvent10.append(makeEvent10);

    localStorage.setItem("makeEvent-10", makeEvent10);
    var makeEvent10 = localStorage.getItem("makeEvent-10");
    console.log(makeEvent10);
});

var commit11 = document.querySelector("#commit-11");

commit11.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent11 = document.getElementById('makeEvent-11').value;
    var printEvent11 = document.getElementById('printEvent-11');
    printEvent11.append(makeEvent11);

    localStorage.setItem("makeEvent-11", makeEvent11);
    var makeEvent11 = localStorage.getItem("makeEvent-11");
    console.log(makeEvent11);
});

var commit12 = document.querySelector("#commit-12");

commit12.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent12 = document.getElementById('makeEvent-12').value;
    var printEvent12 = document.getElementById('printEvent-12');
    printEvent12.append(makeEvent12);

    localStorage.setItem("makeEvent-12", makeEvent12);
    var makeEvent12 = localStorage.getItem("makeEvent-12");
    console.log(makeEvent12);
});

var commit13 = document.querySelector("#commit-13");

commit13.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent13 = document.getElementById('makeEvent-13').value;
    var printEvent13 = document.getElementById('printEvent-13');
    printEvent13.append(makeEvent13);

    localStorage.setItem("makeEvent-13", makeEvent13);
    var makeEvent13 = localStorage.getItem("makeEvent-13");
    console.log(makeEvent13);
});

var commit14 = document.querySelector("#commit-14");

commit14.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent14 = document.getElementById('makeEvent-14').value;
    var printEvent14 = document.getElementById('printEvent-14');
    printEvent14.append(makeEvent14);

    localStorage.setItem("makeEvent-14", makeEvent14);
    var makeEvent14 = localStorage.getItem("makeEvent-14");
    console.log(makeEvent14);
});

var commit15 = document.querySelector("#commit-15");

commit15.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent15 = document.getElementById('makeEvent-15').value;
    var printEvent15 = document.getElementById('printEvent-15');
    printEvent15.append(makeEvent15);

    localStorage.setItem("makeEvent-15", makeEvent15);
    var makeEvent15 = localStorage.getItem("makeEvent-15");
    console.log(makeEvent15);

});

var commit16 = document.querySelector("#commit-16");

commit16.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent16 = document.getElementById('makeEvent-16').value;
    var printEvent16 = document.getElementById('printEvent-16');
    printEvent16.append(makeEvent16);

    localStorage.setItem("makeEvent-16", makeEvent16);
    var makeEvent16 = localStorage.getItem("makeEvent-16");
    console.log(makeEvent16);
});

var commit17 = document.querySelector("#commit-17");

commit17.addEventListener("click", function () {
    event.preventDefault();
    var makeEvent17 = document.getElementById('makeEvent-17').value;
    var printEvent17 = document.getElementById('printEvent-17');
    printEvent17.append(makeEvent17);


    localStorage.setItem("makeEvent-17", makeEvent17);
    var makeEvent17 = localStorage.getItem("makeEvent-17");
    console.log(makeEvent17);
});

// Lines 280-293 contain code for the loop to determine whether each hour is in the past, present, or future

var currentTime = new Date().getHours();

$('.timePad').each(function () {
    var getTime = parseInt(this.getAttribute("value"));
    console.log(getTime);
    if (currentTime > getTime) {
        $(this).addClass("past");
    } else if (currentTime === getTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }

});