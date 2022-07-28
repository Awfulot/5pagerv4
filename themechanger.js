

function reverseFlex(){
    var userScreenWidth = document.getElementById("screenWidth").screen.width;
    var minScreenWidth = 500;

    if (userScreenWidth > minScreenWidth){
        //document.getElementById("topNav").style.flex = "initial";


        //document.getElementById("screenWidth").classList.add("bg-red-100");

        //document.getElementById("topNav").classList.add("flex-col");  //<---I might need to add the entire class instead but using flex-col instead of rows
        //document.getElementById("topNav").classList.remove("w-full");
       // document.getElementById("topNav").classList.remove("h-fit")
        //document.getElementById("topNav").classList.add("items-center");
       // document.getElementById("topNav").classList.add("space-y-5");
        document.getElementById("topNav").classList.remove("space-x-10");
        document.getElementById("topNav").classList.add("space-x-3");
    }
    else {
      //  document.getElementById("topNav").style.flexDirection = "row";

    }
    //setTimeout(reverseFlex, 5000);

}

//reverseFlex();