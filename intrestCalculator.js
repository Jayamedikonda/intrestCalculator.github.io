
function myfun()
{
    let a=document.getElementById("startdate").value.split("-");
    let b=document.getElementById("enddate").value.split("-");
    let yy1=parseInt(a[0]);
    let mm1=parseInt(a[1]);
    let dd1=parseInt(a[2]);
    let yy2=parseInt(b[0]);
    let mm2=parseInt(b[1]);
    let dd2=parseInt(b[2]);
    let amount=document.getElementById("amount").value;
    amount=parseFloat(amount);
    let intrest=document.getElementById("intrestrate").value;
    intrest=parseFloat(intrest);
    if(dd2<dd1)
    {
        dd2+=30;
        mm2--;
    }
    if(mm2<mm1)
    {
        mm2+=12;
        yy2--;
    }
    let dd=dd2-dd1;
   let mm=mm2-mm1;
    let yy=yy2-yy1;
    let time=(yy*12)+mm+dd/30;
    let totintrest=time*amount*intrest/100;
    let total=totintrest+amount;
    
document.getElementById("result").innerHTML=total;
}