var i=document.getElementById("only");
var p1=document.getElementById("plate1");
var p2=document.getElementById("plate2");
var btn=document.getElementsByTagName("button");
var dx=2,dy=2;
var x=0,y=0;
var ck=-1;
var count1=0;
var count2=0;
var id=setInterval(fun,10);
localStorage.setItem("max1","0");
localStorage.setItem("max2","0");
function fun(){
    i.style.left=x+"px";
    i.style.top=y+"px";
    x+=dx;y+=dy;
    if(i.getBoundingClientRect().y>window.innerHeight-82&&i.getBoundingClientRect().right>p2.getBoundingClientRect().left&&i.getBoundingClientRect().left<p2.getBoundingClientRect().right){
        if(dy!=-2)
         count2+=1; 
        dy=-2;
    }
    else if(i.getBoundingClientRect().x>window.innerWidth-52){
        dx=-2;
    }
    else if(i.getBoundingClientRect().y<25&&i.getBoundingClientRect().right>p1.getBoundingClientRect().left&&i.getBoundingClientRect().left<p1.getBoundingClientRect().right){
        if(dy!=2)
         count1++;
        dy=2;
    }
    else if(i.getBoundingClientRect().x<5){
        dx=2;
    }
    else if(i.getBoundingClientRect().top<0)
    {
        clearInterval(id);
        alert("Game Over,Rod 2 WINS!");
        if(count2>localStorage.getItem("max2")){
            localStorage.setItem("max2",count2);
            alert("Congrats,Rod 2 have achived a new record of "+count2+"!");
        }
        ck=0;
        y=p2.getBoundingClientRect().top-i.getBoundingClientRect().height;
        x=p2.getBoundingClientRect().left+(p2.getBoundingClientRect().width)/2-i.getBoundingClientRect().width/2;
        i.style.left=x+"px";
        i.style.top=y+"px";
        count2=1;count1=0;
    }
    else if(i.getBoundingClientRect().bottom>window.innerHeight){
        clearInterval(id);
        alert("Game Over,Rod 1 WINS!");
        if(count1>localStorage.getItem("max1")){
            localStorage.setItem("max1",count1);
            alert("Congrats,Rod 1 have achived a new record of "+count1+"!");
        }
        ck=1;
        y=p1.getBoundingClientRect().bottom;
        x=p1.getBoundingClientRect().left+(p1.getBoundingClientRect().width)/2-i.getBoundingClientRect().width/2;
        i.style.left=x+"px";
        i.style.top=y+"px";
        count1=1;count2=0;
    }
}
window.addEventListener("keydown",function(event){
     if(event.keyCode==37&&p1.getBoundingClientRect().left>0){
         let t=p1.getBoundingClientRect().left;
         t-=15;
         p1.style.left=t+"px";
         p2.style.left=t+"px";
     }
     else if(event.keyCode==39&&p1.getBoundingClientRect().right>95){
        let t=p1.getBoundingClientRect().left;
        t+=15;
        p1.style.left=t+"px";
        p2.style.left=t+"px";
    }
});
btn[0].addEventListener("click",function(){
   clearInterval(id);
   if(ck==0){
       dx=2;
       dy=-2;
   }
   if(ck==1){
    dx=2;
    dy=2;
   }
   id=setInterval(fun,10);
});