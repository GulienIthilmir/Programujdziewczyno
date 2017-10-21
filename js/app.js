console.log("działa!")

var myText1 = "lalala"
console.log(myText1)

var myNumber = 2.2 //liczba
console.log(myNumber)

var xx = "34"; //string, nie liczba, bo jest APOSTROF


//Wartosci logiczne
var prawda = true;
var falsz = false;
console.log(prawda)

//Tablice
var tablica = [1,2,3];//pozycję w tablicach zawsze liczy się od 0(jak parter w budynku)- 2 jest w tablicy na pozycji 1
console.log(tablica[1])//liczba na pozycji jeden

//pobrac dlugosc tablicy
console.log( tablica.length );

var tablica2 = ["melon", "jablko", 5, true, [6]];
console.log(tablica2 );
console.log(tablica2[1]);

//Funkcje
function wypisywanie( warzywo ) { // var warzywo = marchewka
    var sok = "miksowanie" + warzywo;
    return  sok;
}

var otrzymanySok = wypisywanie("marchewka") //uruchamianie funkcji albo wywolywanie; 2 to argument
console.log(otrzymanySok)
wypisywanie("burak")
wypisywanie("sałata")

//"miksowanie" + warzywo = sok = wypisywanie("marchewka") = otrzymanySok

//Instrukcje warunkowe

var czyPada = true;

if (czyPada) {
    console.log("take umbrella")
    } else {
        console.log("wez okulary przeciwsloneczne")
    }
function isRain() {
    console.log("Sprawdzam pogode");
    //algorytm
    return true;
}

//Petle

for(var i=0; i<100;i++){
    console.log("Czesc",1);
} //i=i+1 == i++

//DOM Api

var ppp = document.querySelector(".jumbotron");
ppp.style.border = "3px solid red"

var divs = document.querySelectorAll("div");
console.log(divs.legth);
divs[0].style.display = "none"


