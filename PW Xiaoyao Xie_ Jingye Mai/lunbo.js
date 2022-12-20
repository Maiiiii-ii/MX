var dshang= document.querySelector('.shang');//定义函数，选择css的这个选择向
var dxia= document.querySelector('.xia');
var esico = document.getElementById('iconlst').getElementsByTagName('li');
var eiconlst= document.querySelector('#iconlst');
var left =0;
var t;
run();
function run(){//轮播动画
    if (left <= -5600){//画布长度重置循环
        left=0
    }
    var m=Math.floor(-left/800);
    imglst.style.marginLeft= left + 'px';//不断增加px做出滑动效果
    var x = (left%800 == 0) ? x = 1200 : x = 10;//停顿1200毫秒，
    //笔记：left不断减，捡=减到-800，x=1200停顿1200毫秒否者x=10
    left -= 10;
    icochange(m);
    t = setTimeout(run,x);
    // icochange(m);
}
function imgchange(n){//定位图片
    let lt = -(n*800);
    imglst.style.marginLeft=lt + 'px';
    left = lt;
}
dshang.onclick = function(){//点击触发函数
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

function icochange(m){//轮播图下方背景颜色跟着数字轮换
    for(let index =0 ;index<esico.length;index++){
        esico[index].style.backgroundColor='';
    }
    if(m<esico.length){
        esico[m].style.backgroundColor = '#13393E';
    }
}
eiconlst.onclick = function(){//点击换色换图
    var tg = event.target;
    let icon = tg.innerHTML - 1;
    imgchange(icon);
    icochange(icon);
}
