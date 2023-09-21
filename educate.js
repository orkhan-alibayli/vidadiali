let inform_scrol = document.getElementsByClassName('inform-scrol')[0], a=0, i=0;
let inform_child = document.getElementsByClassName('inform-child')[0];
inform_child.textContent = "Sən də Tələbə adını qazan";
inform_child.style.left=a+"%";
setTimeout(time2, 2500);
function time2(){
    a=-100;
    inform_child.style.left=a+"%";
}
let ListOfInform=["Xərcin az, Vaxtın bol olsun", "Öyrəndikcə özünü test et", "Sən də Tələbə adını qazan"]
setInterval(time1, 3000);
function time1() {
    inform_child.textContent = ListOfInform[i];
    a=0;
    inform_child.style.left=a+"%";
    i++;
    if(i==ListOfInform.length){
        i=0;
    }
    setTimeout(time2, 2500);
    function time2(){
        a=-100;
        inform_child.style.left=a+"%";
    }
}