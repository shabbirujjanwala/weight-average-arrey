var weight = [35,38,42,45,43,34,36,41,48,32];

function averageweight(){
var sum=0;
for(var i=0; i<weight.length; i++){
sum=sum+weight.length;
}
console.log(sum)
var avg=sum/weight.length;
console.log(avg)
}

function setup() {
  createCanvas(400,400);
averageweight();
}

function draw() 
{
  background(30);
}

 

