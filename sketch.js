//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  
	//load images here
  dog=loadImage("images/dogImg.png")
  happydog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog1 = createSprite (300,350)
  dog1.addImage(dog)
  database=firebase.database()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog1.scale = 0.3
  
  
}


function draw() {  

 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog1.addImage(happydog)
 }


  drawSprites();
  //add styles here
  text('PRESS UP_ARROW KEY TO FEED THE DOG',250,250)
  
 

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.red('/').update({
    Food:x
  })
}
