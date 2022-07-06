var currval="";
var exp=""
$(document).ready(function(){
  $("#currval").text(0);
  $("#exp").text(0);
  function repaint(){
     $("#currval").text(currval);
  $("#exp").text(exp);
  }
  $(".ac").on('click',function(){
              currval="";
              exp="";
               $("#currval").text(0);
  $("#exp").text(0);
              });
  $(".ce").on('click',function(){
    exp=exp.substring(0,exp.length-currval.length);
     $("#currval").text(0);
  });
  $(".divid").on('click',function(){
    currval="/"
    repaint();
    exp += currval;
  });
  $(".mul").on('click',function(){;
    currval="*"
    repaint();
    exp += currval;
  });
  $(".seven").on('click',function(){
    currval="7";
    repaint();
    exp += currval;
  });
   $(".eight").on('click',function(){
    currval="8";
    repaint();
     exp += currval;
  });
   $(".nine").on('click',function(){
    currval="9";
    repaint();
     exp += currval;
  });
   $(".plus").on('click',function(){
    currval="+";
    repaint();
     exp += currval;
  });
   $(".four").on('click',function(){
    currval="4";
    repaint();
     exp += currval;
  });
   $(".five").on('click',function(){
    currval="5";
    repaint();
     exp += currval;
  });
   $(".six").on('click',function(){
    currval="6";
    repaint();
     exp += currval;
  });
  $(".min").on('click',function(){
    currval="-";
    repaint();
     exp += currval;
  });
   $(".one").on('click',function(){
    currval="1";
    repaint();
     exp += currval;
  });
   $(".two").on('click',function(){
    currval="2";
    repaint();
     exp += currval;
  });
   $(".three").on('click',function(){
    currval="3";
    repaint();
     exp += currval;
  });
   $(".zero").on('click',function(){
    currval="0";
    repaint();
     exp += currval;
  });
   $(".dot").on('click',function(){
    currval=".";
    repaint();
     exp += currval;
  });
  $(".equal").on('click',function(){
    currval=eval(exp);
    exp +="="+currval;
    repaint();
    currval="";
    exp="";
  });
});