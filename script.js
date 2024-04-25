let vw = math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 30
let vh = math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 50
let plots = 3;
let colors = ['red', 'blue', 'black'];

var parameters = {
    target: '#myFunction',
    width : vw,
    height : vh,
    data: [{
      fn: 'x^2', 
      color: 'red',

      derivative: {
        fn : '2x',
        updateOnMouseMove: true,
      }
   },{
    fn: '-x^2', 
      color: 'blue',

      derivative: {
        fn : '-2x',
        updateOnMouseMove: true,
      }
   },{
    fn: 'sin(x)', 
      color: 'black',

      derivative: {
        fn : 'cos(x)',
        updateOnMouseMove: true,
      }
   }],
    grid: true,
  };
  
function plot() {
  var f = document.querySelector("#function").value;
  plots = 1;
  parameters.data = [{fn : f, color : 'red', derivative : {fn : findDerivative(f), updateOnMouseMove : true}}];
  functionPlot(parameters);
}

function plotload(){
  plots = 3;
  functionPlot(parameters);
}

function addplt(){
  if(plots == 3){plot();return;}
  plots += 1;
  var f = document.querySelector("#function").value;
  parameters.data.push();
  var temp = parameters.data;
  temp.push({
    fn: f,
    color: colors[plots - 1],
    derivative: {
      fn: findDerivative(f),
      updateOnMouseMove: true
    }
  })
  parameters.data = temp;
  console.log(parameters);
  functionPlot(parameters);
}
var func = document.getElementById("function");

function addToInput(x){
    func.value += x;
}

function evaluateInput(){
  //use math eval
  //incomplete
}

function clr(){
  func.value = func.value.slice(0,-1);
}

function clearInput(){
  func.value = "";
}

function clrplot(){
  plots = 0;
  parameters.data = [];
  functionPlot(parameters);
}