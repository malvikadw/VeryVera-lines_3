
lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let index = 0
  
  for( let i=0; i<50; i++){
    for (let j=0; j<50; j++){
      
   let x1 = 10*(i+1)
   let y1 = 10*(j+1)
   let x2 = 20*(i+1)
   let y2 = 20*(j+1)
   
   lines[index] = new Line (x1, y1, x2, y2)
   index++;
    
    }
  }
}

function draw() {
  background(0, 150, 255);
  
  for (let i = 0; i<lines.length; i++){
        
    
     lines[i].show();
     
     lines[i].move();
     
    
    }
     
    
  
 
  
  
  
  }

  class Line {
    
    constructor(x1, y1, x2, y2){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
    
    show(){
      line (this.x1, this.y1, this.x2, this.y2);
      stroke (0, 223,0);
      
      }
      
   move(){
      
     this.x1 = this.x1 + random(-1,1);
     this.y1 = this.y1 + random(-1,1);
     this.x2 = this.x2 + random(-1,1);
     this.y2 = this.y2 + random(-1,1);
    
      
    
    }
  
  
}