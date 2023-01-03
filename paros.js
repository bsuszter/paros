feladvany_bal = [
    ["no", "yes","table","dog","cat"],
]

feladvany_jobb = [
    ["nem", "igen","asztal","kutya","macska"],
]

var szavaklong = feladvany_bal[0].length - 1;

    const element_array2 = [];

    for (i = 0; i < szavaklong + 1; i++) {

            element_array2.push(i);
    }


 //első indításkor kialakítja a feladványok sorrendjét
 var i = 0;
 var buffer = 0;
 // 100-szor keveri meg - két szám felcserélésével
 for (i = 0; i < 100; i++) 
 {
     //generates two random numbers, saves them as integers
     var first_location = Math.floor(Math.random() * szavaklong);
     var second_location = Math.floor(Math.random() * szavaklong);
     //saves the value in the randomly selected first location as buffer
     var buffer = element_array2[first_location];
     //changes first location's value to second location's value
     element_array2[first_location] = element_array2[second_location];
     //changes second location's value to buffer value (original first location)
     element_array2[second_location] = buffer;
     //presto, we now have 2 swapped numbers
 }



console.log(element_array2)

var d1 = document.getElementsByClassName("szavas_bal");

for (let index = 0; index < feladvany_bal[0].length; index++) {
    d1[index].value = feladvany_bal[0][index]; 
}

var d2 = document.getElementsByClassName("szavas_jobb");

for (let index = 0; index < feladvany_bal[0].length; index++) {
    d2[index].value = feladvany_jobb[0][element_array2[index]]; 
}


//mindkét oldal minden gombját fehérre állítja
function alaphelyzet(){
    for (index = 0; index < 5; index++) {
        bal[index].style.backgroundColor = "white"
    }
    for (index = 0; index < 5; index++) {
        jobb[index].style.backgroundColor = "white"
    }
  }

// 1 mp késleltetés mielőtt alaphelyzetbe áll
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  async function test() {
    await delay(1000);

    alaphelyzet();
  }
//#endregion


szinek = [
    "violet", "green","blue","brown","gold"
]

var szinszam = 0;

//A gombok stílusának kinyerése
var bal = document.getElementsByClassName("szavas_bal");
var jobb = document.getElementsByClassName("szavas_jobb");



$(".szavas_bal").click(function() {
    if (document.getElementById("jobboldali_ertek").innerHTML == "") {
        console.log("mindkettő üres")
        alaphelyzet();
        //a gomb lenyomásakor sárga kijelölő szín
        this.style.backgroundColor = "yellow"
        //eltárolja egy rejtett divben a lenyomott gomb értékét
        //document.getElementById("baloldali_ertek").innerHTML = this.value;
        document.getElementById("baloldali_ertek").innerHTML = feladvany_bal[0].indexOf(this.value);
        document.getElementById("baloldali_index").innerHTML = this.name;
        var feladvanyom = document.getElementById("baloldali_ertek").innerHTML;
        console.log(feladvany_bal[0][feladvanyom])
        console.log(feladvany_jobb[0][feladvanyom])
    
    } else
    {
        //eltárolja egy rejtett divben a lenyomott gomb értékét
        //document.getElementById("baloldali_ertek").innerHTML = this.value;
        document.getElementById("baloldali_ertek").innerHTML = feladvany_bal[0].indexOf(this.value);
        document.getElementById("baloldali_index").innerHTML = this.name;
        console.log("igaz") 
        for (index = 0; index < 5; index++) {
            bal[index].style.backgroundColor = "white"
        }
        this.style.backgroundColor = "orange"
        // var eredmeny_jobb = document.getElementById("jobboldali_ertek").innerHTML;
         var index_jobb = document.getElementById("jobboldali_index").innerHTML;

        // var eredmeny_bal = this.value;

        var eredmeny_bal = document.getElementById("baloldali_ertek").innerHTML;
        var eredmeny_jobb = document.getElementById("jobboldali_ertek").innerHTML;
        var index_bal = document.getElementById("baloldali_index").innerHTML;

        //var eredmeny_jobb = this.value;

        console.log("bal kiválasztás: " + eredmeny_bal + "jobb kiválasztás" + eredmeny_jobb)
    
         if (eredmeny_bal == eredmeny_jobb) {
            this.style.backgroundColor = "green"
            this.style.border = "5px solid" 
            this.style.borderColor = szinek[szinszam]
            jobb[index_jobb - 1].style.backgroundColor = "green" 
            jobb[index_jobb - 1].style.border = "5px solid"
            jobb[index_jobb - 1].style.borderColor = szinek[szinszam]
            szinszam += 1;
            this.disabled = "true"
            jobb[index_jobb - 1].disabled = "true"
            document.getElementById("baloldali_ertek").innerHTML = "";
            document.getElementById("jobboldali_ertek").innerHTML = "";
            document.getElementById("baloldali_index").innerHTML = "";
            document.getElementById("jobboldali_index").innerHTML = "";
            test();
        } else
        {
            this.style.backgroundColor = "red" 
            jobb[index_jobb - 1].style.backgroundColor = "red" 
            document.getElementById("baloldali_ertek").innerHTML = "";
            document.getElementById("jobboldali_ertek").innerHTML = "";
            document.getElementById("baloldali_index").innerHTML = "";
            document.getElementById("jobboldali_index").innerHTML = "";
            test();
            
        } 
    }

});

$(".szavas_jobb").click(function() {
    if (document.getElementById("baloldali_ertek").innerHTML == "" ) {
        console.log("mindkettő üres") 
        alaphelyzet();
        //a gomb lenyomásakor sárga kijelölő szín
        this.style.backgroundColor = "yellow"
        //eltárolja egy rejtett divben a lenyomott gomb értékét
        //document.getElementById("jobboldali_ertek").innerHTML = this.value;
        document.getElementById("jobboldali_ertek").innerHTML = feladvany_jobb[0].indexOf(this.value);
        document.getElementById("jobboldali_index").innerHTML = this.name;

        
     } else
     {
        //eltárolja egy rejtett divben a lenyomott gomb értékét
        //document.getElementById("jobboldali_ertek").innerHTML = this.value;
        document.getElementById("jobboldali_ertek").innerHTML = feladvany_jobb[0].indexOf(this.value);
        document.getElementById("jobboldali_index").innerHTML = this.name;


        console.log("hamis")
        for (index = 0; index < 5; index++) {
            jobb[index].style.backgroundColor = "white"
        }

        var eredmeny_bal = document.getElementById("baloldali_ertek").innerHTML;
        var eredmeny_jobb = document.getElementById("jobboldali_ertek").innerHTML;
        var index_bal = document.getElementById("baloldali_index").innerHTML;

        //var eredmeny_jobb = this.value;

        console.log("bal kiválasztás: " + eredmeny_bal + "jobb kiválasztás" + eredmeny_jobb)
    
         if (eredmeny_bal == eredmeny_jobb) {
            this.style.backgroundColor = "green"
            this.style.border = "5px solid" 
            this.style.borderColor = szinek[szinszam]
            bal[index_bal - 1].style.backgroundColor = "green" 
            bal[index_bal - 1].style.border = "5px solid"
            bal[index_bal - 1].style.borderColor = szinek[szinszam]
            szinszam += 1
            this.disabled = "true"
            bal[index_bal - 1].disabled = "true"
            document.getElementById("baloldali_ertek").innerHTML = "";
            document.getElementById("jobboldali_ertek").innerHTML = "";
            document.getElementById("baloldali_index").innerHTML = "";
            document.getElementById("jobboldali_index").innerHTML = "";
            test();
        } else
        {
            this.style.backgroundColor = "red" 
            bal[index_bal - 1].style.backgroundColor = "red" 
            document.getElementById("baloldali_ertek").innerHTML = "";
            document.getElementById("jobboldali_ertek").innerHTML = "";
            document.getElementById("baloldali_index").innerHTML = "";
            document.getElementById("jobboldali_index").innerHTML = "";
            test();         
        } 
     }
});



/* $(".szavas").click(function() {
    for (index = 0; index < 5; index++) {
        jobb[index].style.backgroundColor = "white"
    }
    this.style.backgroundColor = "orange"
    var eredmeny_bal = document.getElementById("baloldali_ertek").innerHTML;
    var eredmeny_jobb = this.value;

    if (eredmeny_bal == eredmeny_jobb) {
        this.style.backgroundColor = "green"
        this.style.border = "5px solid" 
        this.style.borderColor = szinek[eredmeny_bal - 1]
        bal[eredmeny_bal - 1].style.backgroundColor = "green" 
        bal[eredmeny_bal - 1].style.border = "5px solid"
        bal[eredmeny_bal - 1].style.borderColor = szinek[eredmeny_bal - 1]
        this.disabled = "true"
        bal[eredmeny_bal - 1].disabled = "true"
        document.getElementById("baloldali_ertek").innerHTML = "";
        test();
    } else
    {
        this.style.backgroundColor = "red" 
        bal[eredmeny_bal - 1].style.backgroundColor = "red" 
        document.getElementById("baloldali_ertek").innerHTML = "";
        test();
        
    }
}); */

