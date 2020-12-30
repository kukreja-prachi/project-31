var Engine = Matter.Engine,
    World = Matter.world,
    Events = Matter.Events,
    Bodies = Matter.Bodies

 var particles = []
 var plinkos = []
 var division = []
 var divisionHeight = 300;

function setup() {

  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20)
    for(var k =0; k<=width; k=k+80 ) {
      divisions.push(new Divisions(k, height-divisionHeight/2  ,10,divisionHeight))
    }

    for (var j=75; j<=width; j=j+50){
      plinkos.push(new plinkos(j , 75))
    }

    for (var j=50; j<=width-10; j=j+50){
      plinkos.push(new plinkos(j , 175))
    }

    for (var j=70; j<=width; j=j+50){
      plinkos.push(new plinkos(j , 275))
    }

    for (var j=50; j<=width-10; j=j+50){
      plinkos.push(new plinkos(j , 275))
    }

}




function draw() {
  background("black");

  Engine.update(engine);
  ground.display();
  
  for(var i=0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for(var k=0; k < divisions.length; k++){
    divisions[k].display
  }

  drawSprites();
}