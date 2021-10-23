var starImg,bgImg;
var star, starBody;
var fada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
    createCanvas(800, 750);

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fada = createSprite(50,600);
    fada.addAnimation("animationFada",fadaImg);
    fada.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5}, {isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    console.log(star.position.y);
}
function draw(){
    background(bgImg);
    Engine.update(engine);
    if(KeyDown("LEFT")){
        fada.x -= 2;
    }
    if(KeyDown("RIGHT")){
        fada.x += 2;
    }
    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }
    drawSprites();
}