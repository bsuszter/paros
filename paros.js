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
        document.getElementById("baloldali_ertek").innerHTML = this.value;
        document.getElementById("baloldali_index").innerHTML = this.name;

    
    } else
    {
        //eltárolja egy rejtett divben a lenyomott gomb értékét
        document.getElementById("baloldali_ertek").innerHTML = this.value;
        document.getElementById("baloldali_index").innerHTML = this.name;
        console.log("igaz") 
        for (index = 0; index < 5; index++) {
            bal[index].style.backgroundColor = "white"
        }
        this.style.backgroundColor = "orange"
        var eredmeny_jobb = document.getElementById("jobboldali_ertek").innerHTML;
        var index_jobb = document.getElementById("jobboldali_index").innerHTML;

        var eredmeny_bal = this.value;
    
        if (eredmeny_bal == eredmeny_jobb) {
            this.style.backgroundColor = "green"
            this.style.border = "5px solid" 
            this.style.borderColor = szinek[index_jobb - 1]
            jobb[index_jobb - 1].style.backgroundColor = "green" 
            jobb[index_jobb - 1].style.border = "5px solid"
            jobb[index_jobb - 1].style.borderColor = szinek[index_jobb - 1]
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
        document.getElementById("jobboldali_ertek").innerHTML = this.value;
        document.getElementById("jobboldali_index").innerHTML = this.name;

        
     } else
     {
        //eltárolja egy rejtett divben a lenyomott gomb értékét
        document.getElementById("jobboldali_ertek").innerHTML = this.value;
        document.getElementById("jobboldali_index").innerHTML = this.name;


        console.log("hamis")
        for (index = 0; index < 5; index++) {
            jobb[index].style.backgroundColor = "white"
        }

        var eredmeny_bal = document.getElementById("baloldali_ertek").innerHTML;
        var index_bal = document.getElementById("baloldali_index").innerHTML;

        var eredmeny_jobb = this.value;
    
        if (eredmeny_bal == eredmeny_jobb) {
            this.style.backgroundColor = "green"
            this.style.border = "5px solid" 
            this.style.borderColor = szinek[index_bal - 1]
            bal[index_bal - 1].style.backgroundColor = "green" 
            bal[index_bal - 1].style.border = "5px solid"
            bal[index_bal - 1].style.borderColor = szinek[index_bal - 1]
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

