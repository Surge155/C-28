function isTouching(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 
      && object2.x - object1.x < object1.width/2 + object2.width/2 
      && object2.y - object1.y < object1.height/2 + object2.height/2
      && object1.y - object2.y < object1.height/2 + object2.height/2
      ){
     return true;
    }
    else{
     return false;
    }
    
  }

  function bounce(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2
      && object1.x - object2.x < object1.width/2 + object2.width/2
      ){
    
          object2.velocityX = object2.velocityX * -1;
          //fixedRect.velocityY = -7;
          object1.velocityX *= -1;
         // movingRect.velocityY = -6;
      }
      
      if(object1.y - object2.y < object1.height/2 + object2.height/2
         && object2.y - object1.y < object1.height/2 + object2.height/2){
    
          object2.velocityY *= -1;
           object1.velocityY *= -1;
         }  
  }