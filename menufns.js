function findDerivative(fn){
    let fx = math.parse(fn);
    let x = math.parse('x');
    let derf = math.derivative(fx,x);
    return(derf.toString());
}
var flag = 0;
function showmenu(){
    if(flag == 1){document.getElementById("menu").style.display = 'none'; flag = 0;return;}
    document.getElementById("menu").style.display = 'block'; flag = 1; updatemenu();
}

function updatemenu(){
    document.getElementById("redd").innerHTML = parameters.data[0].derivative.fn;
    document.getElementById("blud").innerHTML = parameters.data[1].derivative.fn;
    document.getElementById("blkd").innerHTML = parameters.data[2].derivative.fn;    
}