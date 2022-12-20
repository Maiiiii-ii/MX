var dshang= document.querySelector('.shang');//Définissez la fonction, sélectionnez cette option de css pour
var dxia= document.querySelector('.xia');
var esico = document.getElementById('iconlst').getElementsByTagName('li');
var eiconlst= document.querySelector('#iconlst');
var left =0;
var t;
run();
function run(){//animation carrousel
    if (left <= -5600){//Boucle de réinitialisation de la longueur de la toile
        left=0
    }
    var m=Math.floor(-left/800);
    imglst.style.marginLeft= left + 'px';//Augmentez constamment le px pour créer un effet de glissement
    var x = (left%800 == 0) ? x = 1200 : x = 10;//Pause de 1200 millisecondes,
    //Remarques : gauche continue de diminuer, ramasser = diminuer jusqu'à -800, x=1200 pause de 1200 ms, sinon x=10
    left -= 10;
    icochange(m);
    t = setTimeout(run,x);
}
function imgchange(n){//image de positionnement
    let lt = -(n*800);
    imglst.style.marginLeft=lt + 'px';
    left = lt;
}
dshang.onclick = function(){//cliquez sur la fonction de déclenchement
    let shangyi = Math.floor(-left/800)-1;
    if(shangyi==-1){
        shangyi=6;
    }
    imgchange(shangyi);
}
dxia.onclick = function(){
    let xiayi = Math.floor(-left/800)+1;
    if(xiayi==7){
        xiayi=0;
    }
    imgchange(xiayi);
}

function icochange(m){//La couleur de fond en bas du carrousel tourne avec le nombre
    for(let index =0 ;index<esico.length;index++){
        esico[index].style.backgroundColor='';
    }
    if(m<esico.length){
        esico[m].style.backgroundColor = '#13393E';
    }
}
eiconlst.onclick = function(){//Cliquez pour changer de couleur
    var tg = event.target;
    let icon = tg.innerHTML - 1;
    imgchange(icon);
    icochange(icon);
}
