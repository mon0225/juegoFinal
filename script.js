var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//constants
var interval;
var images = {
    personaje1:'http://vignette4.wikia.nocookie.net/noragami/images/c/cf/Yukine_sin_fondo..png/revision/latest?cb=20150917133821&path-prefix=es',
    personaje2: './personaje2.png',
    teacher1: './Maestro_Karin.png',
    //teacher2: './Karin_DB.png',
    //teacher3: './Maestro Karin 2.jpg',
    item1:'./beer.png',
    item2:'./basura2.png',
    item3: './platano.png',
    item4: './cafe.png',
    item5: './papel.png',
    item6: './frappe.png',
    item7: './papel.png',
    item8:'./laptop3.png',
    item9:'./platano.png',    
    gameOver: './failed.jpg',
    bg: 'https://static.wixstatic.com/media/36b7ba_bdfe0078ddf544db9c08b54fded5867c~mv2.jpg'
}


var arrImg = [images.item1, images.item2, images.item3, images.item4, images.item5, images.item6,images.item7, images.item8, images.item9]
var frames = 0;
// var playerOne;
// var playerTwo;
// var point1 = 0;
// var point2 = 0;

var scores = [];
var counter = 0;
var items= [];
//var sound = new Audio();
//sound.src = './gta-san-andreas-f.mp3',
//(sound.loop = true);




//class
class Board{
    constructor(){
        this.x = 50;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = images.bg;
        this.image.onload = function(){
            this.draw();
        }.bind(this)
    }

     youWin(){
         scores.push(point1);
        ctx.font = "80px cursiva";
        ctx.fillStyle = 'red';
        ctx.fillText("CONGRATS!!!", 380,300);
        ctx.font = "70px Serif";
        ctx.fillStyle = 'white';
        ctx.font = "50px cursiva";
        ctx.fillText("IS TURN 2DO PLAYER", 370,450);
        this.images = new Image();
        this.images.src = images.gameOver;
        scores.push(point2);
        ctx.font = "80px cursiva";
        ctx.fillStyle = 'red';
        ctx.fillText("CONGRATS!!!", 380,300);
        ctx.font = "70px Serif";
        ctx.fillStyle = 'white';
        ctx.font = "50px cursiva";
        ctx.fillText("KNOW IS TIME TO SEE THE WINNER", 370,450);
        this.images = new Image();
        this.images.src = images.gameOver;
        this.images.onload = function(){
            this.draw;
        }
    }
   /* gameOver(){
        ctx.font = "80px Avenir";7        ctx.fillText("Game Over", 20,100);
        ctx.font = "20px Serif";
        ctx.fillStyle = 'peru';
        ctx.fillText("Press 'Esc' to reset", 20,150);
        this.images = new Image();
        this.images.src = images.personaje;
        this.images.onload = function(){
            this.draw();http://dibujosa.com/images/10372.jpg
    }
*/
    draw(){
        this.x+=0;
        if(this.x === -this.width) this.x = 0;
        ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
        this.youWin.draw;
        ctx.fillStyle = "white";
        ctx.font = 'bold 50px sans-serif';
        ctx.fillText("IronTrash", 600,60);
        //this.draw();
       //ctx.fillText(frames, this.width -100, 50 )
    }



}


class PlayerOne{
    constructor(){
        this.x = 5;
        this.y = canvas.height-300;
        this.width = 200;
        this.height =300;
        this.score = point1;
        this.image = new Image();
        this.image.src = images.personaje1;
        this.image.onload = function(){
            this.draw();
        }.bind(this)
       
    }
    walk(){
        this.x+=10
        
    }

   walkback(){
    this.x-=20;
   
}

   moveup(){    
        this.y-=5 
    }

  movedown(){
      this.y+=5    
  }

isTouching(item){
    return  (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
  }

    draw(){
    
        this.x+1;
        if(this.y < (canvas.height+350));
        //if(this.x === this.width) this.x = 0;
        ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
    }

}

class PlayerTwo{
    constructor(){
        this.x = 5;
        this.y = canvas.height-300;
        this.width = 300;
        this.height =300;
        this.score = point2;
        this.image = new Image();
        this.image.src = images.personaje2;
        this.image.onload = function(){
            this.draw();
        }.bind(this)
       
    }
        walk(){
            if(this.x < (canvas.width-100));
              this.x+=5;
         }

   walkback(){
    this.x-=20;
    
    }

   moveup(){
    if (this.y-=5 < (canvas.height-300));
             this.y-=5;
    }

  movedown(){
    (this.y+=10 > (canvas.height-200));
         this.y+=10;
    }

isTouching(item){
    return  (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
  }

  //changePlayer(playerOne,playerTwo){
    //    clearInterval(interval);
      //  interval = undefined;
        //begin === player2;
      //}else{
        //  begin === player1;
      //}
  //}
    

    draw(){
    
        this.x+1;
        if(this.y < (canvas.height+350));
        //if(this.x === this.width) this.x = 0;
        ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
    }

}

class Item{
    constructor(x,y, width=100, height=100,speed,itemType,goodBad){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.goodBad = goodBad;
        //this.drop = drop;
        this.image = new Image();
        this.image.src = itemType;
        this.image.onload = function(){
            this.draw();
        }.bind(this)
      }
      drop(){
        if(item.this.x < (canvas.width-100));
          item++;
     }
      draw(){
        
        if(this.y < (canvas.height-5)) {
            this.y+=this.speed;
        if(this.x === -this.width) this.x = 0;
        ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
    }
    
}
}
        
class Score{
    constructor(x,y,height,width){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.score = 0;
    }
    draw() {
        
        // this.x+=0;
        // if(this.x === -this.width) this.x = 0;
        // // ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
        // // ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
        // this.score;
        ctx.fillStyle = "black";
        ctx.font = 'bold 70px sans-serif';
        ctx.fillText(this.score, this.x, this.y )
        //ctx.fillText("Hello World!",10,50);
    }
    
}

class Teacher{
        constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = images.teacher1;
        this.image.onload = function(){
            this.draw();
        }.bind(this);
      }

        /*isScreaming(){

            if(this.currentTime === 2){

                ctx.drawImage(images.teacher1, this.x,this.y,this.width,this.height);
                ctx.font = "80px Avenir";
                 ctx.fillText("HURRY UP!!!", 20,100);
            

            }else if (this.currentTime === 5){
                
                ctx.drawImage(this.image + images.teacher2, this.x,this.y,this.width,this.height);
                ctx.font = "20px Serif";
                ctx.fillStyle = 'blue';
                ctx.fillText("I want my Ironbeer", 20,150);

            }else (this.currentTime === 10); {

                ctx.drawImage(this.image + images.teacher3, this.x,this.y,this.width,this.height);
                ctx.font = "20px Serif";
                ctx.fillStyle = 'blue';
                ctx.fillText("I want my Ironbeer", 20,150);
         }
    }*/



        draw(){
        //console.log("Dibujando el item");
        //this.x+=1;
        //if(this.x === -this.width) this.x = 0;
        ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
        ctx.fillStyle = "black";
        ctx.font = 'bold 70px sans-serif';
        ctx.fillText(this.score, this.x, this.y )
    }
        
} 
    

//instances
var board = new Board();
var playerOne = new PlayerOne();
var playerTwo = new PlayerTwo();
var point1 = new Score(1000, 50, 100, 100);
var point2 = new Score(canvas.width-500, 50, 100, 100);
var teacher = new Teacher();


//var item = new Item();

//mainFunctions
function update(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height);  
    frames++; 
    board.draw();
    playerOne.draw();
    playerTwo.draw();
    point1.draw();
    point2.draw();    
    drawItem();
    teacher.draw()
    generateItem();
    //generateScore(); 
    
      
   // sound.play()
} 

function startGame(){
    if(interval) return;
    interval = setInterval(update, 1000/60);
    //changePlayer();
    //generateItem();
    generateScore();
    //sound.play()
    
} 


//aux functions
function generateItem(){

    if(!(frames%100===0) ) return;
    var fotito = arrImg[Math.floor(Math.random()*arrImg.length)]
    var basurita = new Item(Math.floor(Math.random()*canvas.width),-100, 100, 100,1.3,fotito,1 )
    //x,y, width=100, height=100,speed,itemType,goodBad
    items.push(basurita)
    
    // //if(!(frames%100===0) ) return;
    // var height = 100; //Math.floor((Math.random() * canvas.height * .6 ) + 30 );
    // var item1 = new Item(canvas.width / 2.6-350,0, 100, height,1.3,images.item1,1);
    // var item2 = new Item(canvas.width / 3 - 50,190, 100, height,0.5,images.item2,3);
    // var item3 = new Item(canvas.width / 4,0, 100, height,1.5,images.item3,2);
    // var item4 = new Item(canvas.width / 5 + 160,400, 100, height,0.9, images.item4,1);
    // var item5 = new Item(canvas.width / 1 + 190,0, 100, height,0.6,images.item5,2);
    // var item6 = new Item(canvas.width / 1.5 - 600,0, 100, height,0.3,images.item6,4);
    // var item7 = new Item(canvas.width / 3.5 + 260,430, 180, 140,0.9,images.item7,1);
    // var item8 = new Item(canvas.width / 4.5-250,0, 100, height,1.3,images.item8,2);
    // var item9 = new Item(canvas.width / 3.8 - 160,0, 100, height,1.5,images.item9,1);
    // var item10 = new Item(canvas.width / 2,-800, 100, height,1.4,images.item10,1);
    // var item11 = new Item(canvas.width / 1.8 + 180,0, 100, height,0.9, images.item11,3);
    // var item12 = new Item(canvas.width / 1 + 200,-500, 100, height,0.6,images.item12,1);
    // var item13 = new Item(canvas.width / 6 + 250,0, 100, height,1.3,images.item13,3);
    // var item14 = new Item(canvas.width / 7 + 550,300, 180, 140,0.9,images.item14,3);
    // var item15 = new Item(canvas.width / 8 + 370,0, 180, 140,0.5,images.item15,1);
    // var item16 = new Item(canvas.width / 9 + 900,400, 180, 140,2,images.item16,3);
    // var item17 = new Item(canvas.width / 30 + 850,400, 180, 140,0.3,images.item17,1);
    // var item18 = new Item(canvas.width / 3 + 580,100, 180, 140,0.9,images.item18,1);
   
   

    // items.push(item1);
    // items.push(item2);
    // items.push(item3);
    // items.push(item4);
    // items.push(item5);
    // items.push(item6);
    // items.push(item7);
    // items.push(item8);
    // items.push(item9);
    // items.push(item10);
    // items.push(item11);
    // items.push(item12);
    // items.push(item13);
    // items.push(item14);
    // items.push(item15);
    // items.push(item16);
    // items.push(item17);
    // items.push(item18);
}

function generateScore(){
    
    //if(!(frames%100===0) ) return;
    //var height = 100; //Math.floor((Math.random() * canvas.height * .6 ) + 30 );
    var score1 = new Score(100,300,50,400);
    var score2 = new Score(20,500, 700,200);

    scores.push(score1);
    scores.push(score2);

}
/*function generateTeacher(){
    
    if(!(frames%100===0) ) return;
    var height = 100; Math.floor((Math.random() * canvas.height * .6 ) + 30 );
    var teacher1 = new Teacher(0, 100,canvas.width / 2-350, height,2.3,images.teacher1,2);
    var teacher2 = new Teacher(0, 100, canvas.width / 2 - 150, height,0.5,images.teacher2,5);
    var teacher3 = new Teacher(0, 100, canvas.width / 2, height,1.4,images.teacher3,10);

    teachers.push(teacher1);
    teachers.push(teacher2);
    teachers.push(teacher3);
}
*/
function drawItem(){
    items.forEach(function(item){
        item.draw();
        if(playerOne.isTouching(item)){
            
            
            if(item.goodBad===1){
                point1.score += 15;
                
                //console.log(point1.score)
            } else {
                point1.score -= 10;
                
               // console.log(point1.score)
            } 

            items.splice(items.indexOf(item),1);
            
        }

        if( playerTwo.isTouching(item)){
            
            
            if(item.goodBad===1){
                
                point2.score += 15;
                //console.log(point1.score)
            } else {
                
                point2.score -= 10;
                //console.log(point1.score)
            } 

            items.splice(items.indexOf(item),1);
            
        }
       
        
    })
}

//function drawScore(){
  //  scores.forEach(function(score1){

  //  }
    //      }

function pickWinner(){
    if (playerOne.x>=canvas.width-300){
        clearInterval(interval);
        interval = undefined;
        //playerOne.x || playerTwo.x === 5;
        board.draw();
        playerOne.draw();
        //scores.draw();
        teacher.draw();
        sound.pause();
        sound.currentTime = 0;
        ctx.clearRect(0,0,canvas.width,canvas.height);
    } else {(playerTwo.x >=canvas.width-200)
        clearInterval(interval);
        interval = undefined;
        //playerOne.x || playerTwo.x === 5;
        board.draw();
        playerTwo.draw();
        //scores.draw();
       // sound.pause();
       // sound.currentTime = 0;
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    
    function finalWinner() {
    if(playerOne.point1 < playerTwo.point2){
        ctx.fillText ("Winner, congratulations",300,500)}
        else (playerTwo.point2 < playerOne.point1)
        ctx.fillText ("Winner, congratulations",400,600);
  }
}


  //function changePlayer() {
    //  if(playerOne === checkWin)
      //ctx.fillText("You win, turn PlayerTwo",400,500)
        //else (playerTwo === checkWin)
        //ctx.fillText("You win, know final score",300,400)
 // }
    //    clearInterval(interval);
      //  interval = undefined;
        //begin === player2;
      //}else{
        //  begin === player1;
      //}
  //}
    
    

//function finishHim(){
  //  clearInterval(interval);
    /*interval = undefined;
    board.gameOver();
    sound.pause();
    sound.currentTime = 0;
}
*/
function restart(){
    if(interval) return;
    items = [];
    player1.x = 0;
    player1.y = 0;
    player2.x = 0;
    player2.y = 0;
    scores = [];
    teacher.x = 0;
    teacher.y = 0;
    pickWinner();
    //sound.play();
}

//listeners*/
addEventListener('keydown', function(e){
    if(e.keyCode === 39){
        playerOne.walk();
       // sound.play();
     }else if(e.keyCode === 37){
         playerOne.walkback();
    }else if(e.keyCode === 38){
        playerOne.moveup();
    }else if (e.keyCode === 40){
        playerOne.movedown();
    }else if(e.keyCode === 13){
        restart(); 
    }//else (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 40 < canvas.height || canvas.width);{
    //stopWalk() 
});

addEventListener('keydown', function(j){
    if(j.keyCode === 68){
        playerTwo.walk();
       // sound.play();
    }else if(j.keyCode === 65){
         playerTwo.walkback();
    }else if(j.keyCode === 83){
        playerTwo.movedown();
    }else if (j.keyCode === 87){
        playerTwo.moveup();
    }else if(j.keyCode === 27){
        restart(); 
    }//else (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 40 < canvas.height || canvas.width);{
    //stopWalk() 
});

addEventListener('keydown', function(k){
    if(k.keyCode === 40){
       item.drop();
    }
});

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    }
}

/*window.onload = function() {
    var audio = new Audio();
    start();
}*/
