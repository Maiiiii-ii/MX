let b = document.querySelector(".b")
let d = document.getElementsByClassName("d")
let time
let index = 0

let a = function(){//Localisez la petite image
    for(let i = 0;i < d.length; i++){
        d[i].className = "d"
    }
}
let aa = function(){//Localiser l'image sélectionnée
    a()
    d[index].className = "d dd"
}

function ts(){//Loop
    time = setInterval(function(){//régler le temps
        aa()
        index++
        
        b.style.backgroundImage = "url('img/"+[index]+".jpg')"// Accéder à la grande image pour jouer
        if(index >= 3){
            index=0
        }
    },1500);
}


for(let i = 0;i < d.length;i++){// Changer l'image au survol de la souris
    d[i].onmousemove = function(){
        b.style.backgroundImage = "url('img/"+[i+1]+".jpg')"
        a()
        clearInterval(time)//temps re
        index= i+1
        if(index==3){ 
            index--}
        ts()
    }
}
ts()