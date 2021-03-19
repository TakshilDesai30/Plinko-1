const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,790);

  for(var d=0; d<=width; d=d+80) {
    divisions.push(new Division(d,650,10,300));
  }
  for(var p=45;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,75));
  }
  for(var p=20;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,175));    
  }
  for(var p=45;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,275));
  }
  for(var p=20;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,375));
  }
  Engine.run(engine);
}

function draw() {
  background(0);  
  ground.display();
  for (var m =0;m<divisions.length;m++) {
    divisions[m].display();
  }
  for (var n = 0; n<plinkos.length;n++) {
    plinkos[n].display();
  }
  if (frameCount%70===0) {
    particles.push(new Particle(random(100,700),0));
  }
  for(var x = 0; x<particles.length;x++) {
    particles[x].display();
  }
}