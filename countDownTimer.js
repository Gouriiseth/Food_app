let h=0;
let m=0;
let s=0;
let count=0;

let timer=false;

function start(){
    timer=true;
    countDown();
}
function stop(){
    timer=false;

}
function reset(){
    timer=false;
    h=0;
    m=0;
    s=0;
    count=0;
    document.getElementById("hour").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("second").innerHTML="00 ";
}

function countDown(){
    if(timer==true){
        count+=1;

        if(count==100){
        s+=1;
        count=0;
       }

       if(s==60){
        m+=1;
        s=0;
       }

       if(m==60){
        h+=1;
        m=0;
        s=0;
       }

    }
       document.getElementById("hour").innerHTML=h;
        document.getElementById("minute").innerHTML=m;
         document.getElementById("second").innerHTML=s;
       setTimeout("countDown()",10);
    }
