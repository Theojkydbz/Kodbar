function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  

function setup() {
    shape = random(1,4);
    Xsize = window.innerWidth;
    Ysize = window.innerHeight;
    createCanvas(Xsize,Ysize);
    var sourceLine;
    var maskShape;

    var imgClone;
}

function draw() { 

    noLoop();
    rectMode(CENTER)
    stroke(0,0,0);
    strokeWeight(5);

    sourceLine = createGraphics(Xsize, Ysize);
    sourceLine.stroke(0,0,0);
    sourceLine.strokeWeight(2);

    

    for(let i = 0; i < Xsize; i=i+3){
        let r = random(true)
        if(r>0.9){
            let isStep = false;
            

            let r2 = random(true);
            if(r2>0.8){
                isStep = true;
                let step = random(1.8,2.3);
                let direction = random([-Ysize/5*step, Ysize/4*step]);

                sourceLine.line(i,0,i,Ysize/step);
                sourceLine.line(i,Ysize/step,i+direction,Ysize);
                let r4 = random(true)
                if(r4>0.4){
                    sourceLine.line(i+1,0,i+1,Ysize/step);
                    sourceLine.line(i+1,Ysize/step,i+direction,Ysize);
                }
                let r5 = random(true)
                if(r5>0.4){
                    sourceLine.line(i+2,0,i+2,Ysize/step);
                    sourceLine.line(i+2,Ysize/step,i+direction,Ysize);
                }
                let r6 = random(true)
                if(r6>0.4){
                    sourceLine.line(i+3,0,i+3,Ysize/step);
                    sourceLine.line(i+3,Ysize/step,i+direction,Ysize);
                }
                let r7 = random(true)
                if(r7>0.1){
                    sourceLine.line(i+4,0,i+4,Ysize/step);
                    sourceLine.line(i+4,Ysize/step,i+direction,Ysize);
                }
            }
            
            if(isStep==false){
                sourceLine.line(i,0,i,Ysize);
                let r1 = random(true)
                if(r1>0.2){
                    sourceLine.line(i+1,0,i+1,Ysize);
                }
            }
        }
    }
    
    if(shape>3){
        maskShape = createGraphics(Xsize,Ysize);
        maskShape.rectMode(CENTER)
        maskShape.rect(Xsize/2, Ysize/2, Ysize/4, Ysize/4);
    
        rect(Xsize/2, Ysize/2, Ysize/4, Ysize/4);
    }else if(shape<2){
        maskShape = createGraphics(Xsize,Ysize);
        maskShape.ellipse(Xsize/2, Ysize/2, Ysize/4, Ysize/4);

        ellipse(Xsize/2, Ysize/2, Ysize/4, Ysize/4);
    }else{
        maskShape = createGraphics(Xsize,Ysize);
        let angle = TWO_PI / 6;
        maskShape.beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = Xsize/2 + cos(a) * Ysize/7;
          let sy = Ysize/2 + sin(a) * Ysize/7;
          maskShape.vertex(sx, sy);
        }
        maskShape.endShape(CLOSE);


        polygon(Xsize/2,Ysize/2,Ysize/7, 6);
    }

    ( imgClone = sourceLine.get() ).mask( maskShape.get() );
    image(imgClone, 0, 0);
    
    saveCanvas(canvas, "Gen");
    
}



