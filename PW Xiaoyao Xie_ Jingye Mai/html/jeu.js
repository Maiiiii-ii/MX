/*
NOM :MAI
Prénom :jingye

NOM :xie
Prénom :xiaoyao

*/

function alea(min, max)// [0;15[
{ 
  return Math.floor((Math.random()*(max-min))+min)
}
$(document).ready(function(){
  for(var i = 0;i < 16;i++){
    var $li1 = $('<div id="bloc'+i+'" class="bloc" style="background-image: url(img/0'+i+'.jpg);">'+i+"</div>");
    //Insérez des images de manière itérative et attribuez des valeurs.
    $("#puzzlearea").append($li1);
  }


  $("#bloc15").removeClass("bloc");//Modifier les propriétés du n°15
  $("#bloc15").addClass("noimg");
  $("#bloc15").css("background-image","url()");
return;

});

$(document).ready(function(){
  $("#shuffle").click(function(){
   var grp = $('.tuile').children();
   var temp,x;
   for(var i = 0 ;i < 15;i++){
    //Insérer au hasard ; 'i' peut être n'importe quel nombre supérieur à 0 ;
     temp=grp[i];
     //Garanti que le numéro 15 ne sera pas déplacé
     x = alea(0,15);
     grp[i]=grp[x];
     grp[x]=temp;

   }

   $(grp).remove();
   $(".tuile").append($(grp));
   $(document).ready(function(){
      $('.bloc').click(function(){
        $("#shuffle").attr("disabled",true);
        //Vous pouvez actualiser avant le déplacement et interdire l'actualisation après le déplacement.

        var tmp =false;
        var click_num = $(this).index();//Localiser où cliquer
        var noimg_num = $(".noimg").index();//Positionner le chiffre 15
      
        var click_x = click_num % 4;
        var click_y = Math.floor(click_num/4);

        var noimg_x = noimg_num % 4;
        var noimg_y = Math.floor(noimg_num/4);
        // //La valeur restante de chaque position sous 16 grilles est la suivante
        // //0|1|2|3|
        // //0|1|2|3|
        // //0|1|2|3|
        // //0|1|2|3|
        // //La plus petite valeur entière obtenue en divisant chaque position de la grille par 16 cellules est la suivante.
        // //0|0|0|0|
        // //1|1|1|1|
        // //2|2|2|2|
        // //3|3|3|3|
        if(click_x == noimg_x){//x
          if(click_y == noimg_y+1||click_y == noimg_y-1){
          tmp = true;
          }
        }else if(click_y == noimg_y){//y
          if(click_x == noimg_x+1||click_x == noimg_x-1){
            tmp = true;
          }
        }

        if(tmp){
        var t = $(this).clone();//Dupliquer la div actuellement cliqué
        $('.noimg').before(t);//Insérer la div copiée devant la div vide
        $(this).before($('.noimg'));//Insérer un div vide devant le div cliqué
        t.before($(this));//Insérez le div cliqué devant le div copié
        t.remove();//supprimer la div dupliquée
        }
       
      if($("#bloc0").index()==0&&
      $("#bloc1").index()==1&&
      $("#bloc2").index()==2&&
      $("#bloc3").index()==3&&
      $("#bloc4").index()==4&&
      $("#bloc5").index()==5&&
      $("#bloc6").index()==6&&
      $("#bloc7").index()==7&&
      $("#bloc8").index()==8&&
      $("#bloc9").index()==9&&
      $("#bloc10").index()==10&&
      $("#bloc11").index()==11&&
      $("#bloc12").index()==12&&
      $("#bloc13").index()==13&&
      $("#bloc14").index()==14&&
      $("#bloc15").index()==15
      
      ){
        $('#output').append("puzzle est resoluCliquez sur moi ou 'rafraîchir' pour recommencer");
        $('#shuffle').text("rafraîchir");//Texte alternatif
        $(".bloc").unbind();//arrêter l'événement de bloc
        $("#shuffle").attr("disabled",false);//Activer le bouton.
       //Cliquez pour actualiser la page.
        $("#shuffle").click(function(){
          location.reload(true);//rafraîchir la page
        })
        $("#output").click(function(){
          location.reload(true);
        })
      }
  

      });
    });
  });
});

