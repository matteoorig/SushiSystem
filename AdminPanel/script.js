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
        parentDiv3.remove();
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
                        console.log("[SERVER]: Cambio tavolo");
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

function espandiTavolo(id) {
    console.log(id);

}

//Creazione elemento tavolo
function createTavolo(){
    console.log("[SERVER]: Creazione tavolo");
    const numTav = 3;
    const wrapperTavoli = document.getElementById("containerSx");
    wrapperTavoli.innerHTML += '<div class="tavolo" name="tav'+numTav+'" id="tav'+numTav+'">TAVOLO '+numTav+'</div>';
}

function createOrdine(){
    console.log("[SERVER]: Creazione ordine");
    const numOrd = 3;
    const wrapperOrdini = document.getElementById("wrapperOrdini");
    const node = '<div class="ordine" id="ord'+numOrd+'"><div class="contPall"><div class="pallino"></div></div><div class="insideOrd"><div class="textN">N°</div><div class="messNum"></div><div class="textQ"></div><div class="bottoneX"><svg id="x" width="40" height="40"  viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_114_7)"><rect x="4" width="50" height="50" rx="25" fill="#FAFAFA"/><path d="M31.9376 25L40.8959 16.0625C41.2882 15.6702 41.5086 15.1381 41.5086 14.5833C41.5086 14.0285 41.2882 13.4965 40.8959 13.1042C40.5036 12.7119 39.9716 12.4915 39.4168 12.4915C38.862 12.4915 38.3299 12.7119 37.9376 13.1042L29.0001 22.0625L20.0626 13.1042C19.6703 12.7119 19.1382 12.4915 18.5834 12.4915C18.0287 12.4915 17.4966 12.7119 17.1043 13.1042C16.712 13.4965 16.4916 14.0285 16.4916 14.5833C16.4916 15.1381 16.712 15.6702 17.1043 16.0625L26.0626 25L17.1043 33.9375C16.909 34.1312 16.754 34.3616 16.6483 34.6155C16.5425 34.8693 16.488 35.1417 16.488 35.4167C16.488 35.6917 16.5425 35.964 16.6483 36.2179C16.754 36.4717 16.909 36.7022 17.1043 36.8958C17.298 37.0911 17.5284 37.2461 17.7822 37.3519C18.0361 37.4576 18.3084 37.5121 18.5834 37.5121C18.8585 37.5121 19.1308 37.4576 19.3847 37.3519C19.6385 37.2461 19.8689 37.0911 20.0626 36.8958L29.0001 27.9375L37.9376 36.8958C38.1313 37.0911 38.3617 37.2461 38.6156 37.3519C38.8695 37.4576 39.1418 37.5121 39.4168 37.5121C39.6918 37.5121 39.9641 37.4576 40.218 37.3519C40.4719 37.2461 40.7023 37.0911 40.8959 36.8958C41.0912 36.7022 41.2462 36.4717 41.352 36.2179C41.4577 35.964 41.5122 35.6917 41.5122 35.4167C41.5122 35.1417 41.4577 34.8693 41.352 34.6155C41.2462 34.3616 41.0912 34.1312 40.8959 33.9375L31.9376 25Z" fill="#E55544"/></g><defs><filter id="filter0_d_114_7" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_7"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_7" result="shape"/></filter></defs></svg></div></div><hr class="hlinea"></div>';
    wrapperOrdini.innerHTML += '<div class="ordine" id="ord'+numOrd+'"><div class="contPall"><div class="pallino"></div></div><div class="insideOrd"><div class="textN">N°</div><div class="messNum"></div><div class="textQ"></div><div class="bottoneX"><svg id="x" width="40" height="40"  viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_114_7)"><rect x="4" width="50" height="50" rx="25" fill="#FAFAFA"/><path d="M31.9376 25L40.8959 16.0625C41.2882 15.6702 41.5086 15.1381 41.5086 14.5833C41.5086 14.0285 41.2882 13.4965 40.8959 13.1042C40.5036 12.7119 39.9716 12.4915 39.4168 12.4915C38.862 12.4915 38.3299 12.7119 37.9376 13.1042L29.0001 22.0625L20.0626 13.1042C19.6703 12.7119 19.1382 12.4915 18.5834 12.4915C18.0287 12.4915 17.4966 12.7119 17.1043 13.1042C16.712 13.4965 16.4916 14.0285 16.4916 14.5833C16.4916 15.1381 16.712 15.6702 17.1043 16.0625L26.0626 25L17.1043 33.9375C16.909 34.1312 16.754 34.3616 16.6483 34.6155C16.5425 34.8693 16.488 35.1417 16.488 35.4167C16.488 35.6917 16.5425 35.964 16.6483 36.2179C16.754 36.4717 16.909 36.7022 17.1043 36.8958C17.298 37.0911 17.5284 37.2461 17.7822 37.3519C18.0361 37.4576 18.3084 37.5121 18.5834 37.5121C18.8585 37.5121 19.1308 37.4576 19.3847 37.3519C19.6385 37.2461 19.8689 37.0911 20.0626 36.8958L29.0001 27.9375L37.9376 36.8958C38.1313 37.0911 38.3617 37.2461 38.6156 37.3519C38.8695 37.4576 39.1418 37.5121 39.4168 37.5121C39.6918 37.5121 39.9641 37.4576 40.218 37.3519C40.4719 37.2461 40.7023 37.0911 40.8959 36.8958C41.0912 36.7022 41.2462 36.4717 41.352 36.2179C41.4577 35.964 41.5122 35.6917 41.5122 35.4167C41.5122 35.1417 41.4577 34.8693 41.352 34.6155C41.2462 34.3616 41.0912 34.1312 40.8959 33.9375L31.9376 25Z" fill="#E55544"/></g><defs><filter id="filter0_d_114_7" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_7"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_7" result="shape"/></filter></defs></svg></div></div><hr class="hlinea"></div>';
}