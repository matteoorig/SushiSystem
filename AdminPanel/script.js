//var element = document.querySelector(".tavolo");
let element = document.getElementsByClassName("tavolo");
var stato = false;
var tempEventId = "t";

//Elimina ordine
const btnX = document.querySelectorAll("#x");
const containerOrdini = document.querySelector(".wrapperOrdini");
btnX.forEach((obj) =>{
    obj.addEventListener("click", ()=>{
        console.log(obj);
        parentDiv1 = obj.parentNode;
        parentDiv2 = parentDiv1.parentNode;
        parentDiv3 = parentDiv2.parentNode;
        console.log(parentDiv3);
        /*var elem = document.getElementById("ord2");
        elem.parentNode.removeChild(elem);*/
    })
    
})


class Rectangle {
    constructor() {
    }
    setElement(e){
        console.log("matteo");
    }
  };

window.onload = function() {
    if(element){
        console.log(element);
        for (let i = 0; i < element.length; i++) {
            console.log(element[i]);
            tmp = new Rectangle();
            
            element[i].addEventListener("click", ()=>{
                if(!stato){
                    document.getElementById("e1").style.height="80%";
                    document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                    stato=true;
                    tempEventId=element[i].id;
                }
                else if(stato){
                    if(element[i].id==tempEventId){
                        document.getElementById("e1").style.height="0%";
                        document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                        stato=false;
                    }
                    if(element[i].id!=tempEventId){
                        console.log("matteo");
                        document.getElementById("e1").style.height="0%";
                        document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                        setTimeout(()=>{
                            document.getElementById("e1").style.height="80%";
                            document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                        },600);
                        stato=true;
                        tempEventId=element[i].id;
                    }
                }
            });
        }
    }
};