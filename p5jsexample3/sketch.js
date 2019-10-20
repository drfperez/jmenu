
const eyeballDiameter = 85;
var eyeColor = [];
var blinking = false;
var eyelidPosition;
var velX = 0;
var velY = 0;
var maxVelX = 0;
var maxVelY = 0;
var staticCount = 0;

function setup() {
    createCanvas(1024, 768);
    noStroke();
    angleMode(DEGREES);
    eyeColor = [random(0, 255), random(0, 255), random(0, 255)];
    eyelidPosition = height/2-eyeballDiameter;
}

function mousePressed() {
    if( ! blinking) {
        blinking = true;
    }
}

function draw() {
    velX = abs(mouseX-pmouseX);
    velY = abs(mouseY-pmouseY);

    background(map(maxVelY, windowHeight/8, windowHeight/2, 0, 255), map(maxVelX, windowWidth/8, windowWidth/2, 0, 255), 0);

    maxVelX = velX > maxVelX ? velX : maxVelX;
    maxVelY = velY > maxVelY ? velY : maxVelY;

    eyeball(eyeballDiameter); 
    push();
    iris(); 
    pop();
    push();
    pupil();
    pop();

    if(blinking) {
        fill(0);
        if( eyelidPosition <= height/2+2) {
            ellipse(width/2, eyelidPosition, eyeballDiameter*2, eyeballDiameter);
            eyelidPosition += 25;
        }  else {
            eyelidPosition = height/2-eyeballDiameter;
            blinking = false;
            eyeColor = [random(0, 255), random(0, 255), random(0, 255)];
        }
    }

    if(velX==0 && velY==0) {
        maxVelX = maxVelX > 0 ? maxVelX-7 : 0;
        maxVelY = maxVelY > 0 ? maxVelY-3 : 0;
    }

    if(maxVelX >= 200 || maxVelY > 100) {
        eyebrow(1.2, 1.2);
    } else {
        eyebrow(0.8, 0.8);
    }


}

function angry() {
    eyebrow(0.2, 1);
}

function scared() {
    eyebrow(1, 1);
}

function calm() {
    eyebrow(0.8, 0.8);
}

function eyebrow(left, right) {
    noFill();
    stroke(255);
    strokeWeight(4);
    curve(
        width/4, height*left,  // 0.2 = angry, 0.8 = calm
        width/2-eyeballDiameter, height/2-eyeballDiameter/2, 
        width/2+eyeballDiameter, height/2-eyeballDiameter/2,
        width/4*3, height*right // 1 = calm, 1.5 = freaking out
    );
    noStroke();
}

function pupil() {
    //fill(0);
    // center
    //ellipse(width/2, height/2, 20, 20);
    // down
    //ellipse(width/2, height/2+eyeballDiameter/3, 20, 20*0.6);
    // left
    //ellipse(width/2-eyeballDiameter/3, height/2, 20*0.6, 20);
    /*
    fill(255, 200);
    circle(width/2+3, height/2-3, 5, 5);
    */
    compression('#000', function(distanceFromCenter, eyeballDiameter) {
        let dilation = map(distanceFromCenter, 0, width/2, 30, 20);
        ellipse(
            0, 
            map(distanceFromCenter, 0, width/2, 0, -eyeballDiameter/3),  // the upper bound is incorrect, cause it differs for x and y
            dilation, 
            map(distanceFromCenter, 0, width/2, dilation, dilation*0.6) // the upper bound is incorrect, cause it differs for x and y
        );
    });
}

function compression(colorHex, callback) {
    fill(colorHex);
    translate(width / 2, height / 2);
    ellipseMode(CENTER);

    // center
    //ellipse(0, 0, 60, 60);
    
    // up
    //ellipse(0, -eyeballDiameter/5, 60, 60*0.8);

    // down
    //ellipse(0, eyeballDiameter/5, 60, 60*0.8);

    // right
    //ellipse(eyeballDiameter/5, 0, 60*0.8, 60);

    // left
    //ellipse(-eyeballDiameter/5, 0, 60*0.8, 60);

    // left up
    //rotate(-45);
    //ellipse( 0, -eyeballDiameter/5, 60, 60*0.8);

    let a = map(mouseX, 0, width, -width/2, width/2);
    let o = map(mouseY, 0, height, height/2, -height/2);

    if(o > 0) {
        rotate(atan(a/o));
    } else {
        rotate(atan(a/o)+180);
    } 

    let leftest = -1*(windowWidth-width)/2;
    let rightest = width+(windowWidth-width)/2;

    let distanceFromCenter = dist(width/2, height/2, map(mouseX, leftest, rightest, 0, 1024), map(mouseY, 0, windowHeight, 0, height));
    callback(distanceFromCenter, eyeballDiameter);
}

function iris() {
    compression(eyeColor, function(distanceFromCenter, eyeballDiameter) {
        ellipse(
            0, 
            map(distanceFromCenter, 0, width/2, 0, -eyeballDiameter/5),  // the upper bound is incorrect, cause it differs for x and y
            60, 
            map(distanceFromCenter, 0, width/2, 60, 60*0.8) // the upper bound is incorrect, cause it differs for x and y
        );
    });
    // rainbow
    //ellipse(0, -eyeballDiameter/5, 60, 60*0.8);

    /*
    if(a > 0 && o > 0) { // top right area
        console.log('top right', atan(a/o));
        rotate(atan(a/o));
        // up
        //rotate(0);

        // right up
        //rotate(45);

        // right
        //rotate(90);
    } else if(a < 0 && o > 0) { // top left area
        console.log('top left', atan(o/a));
        // up
        //rotate(0);

        // left
        //rotate(270);

        // left up
        //rotate(315);
    } else if(a < 0 && o < 0) { // bottom left
        console.log('bottom left');
        // left
        //rotate(270);

        // left down
        //rotate(225);
        
        // down
        //rotate(180);

    } else if(a > 0 && o < 0) {
        console.log('bottom right');
        // right
        //rotate(90);

        // right down
        //rotate(135);

        // down
        //rotate(180);
    }
    */

    // USING ROTATION

    // up
    //rotate(0);
    
    // right up
    //rotate(45);
    
    // right
    //rotate(90);
    
    // right down
    //rotate(135);

    // down
    //rotate(180);

    // left down
    //rotate(225);

    // left
    //rotate(270);

    // left up
    //rotate(315);    
    /*
    ellipse(
        map(mouseX, 0, width, -eyeballDiameter/5, eyeballDiameter/5), 
        map(mouseY, 0, height, -eyeballDiameter/5, eyeballDiameter/5),
        //map(mouseX, width/2, width, 60, 60*0.8), 
        mouseX < width/2 ? map(mouseX, 0, width/2, 60*0.8, 60) : map(mouseX, width/2, width, 60, 60*0.8),
        mouseY < height/2 ? map(mouseY, 0, height/2, 60*0.8, 60) : map(mouseY, height/2, height, 60, 60*0.8),
        //60
    );
    */

    //console.log('x', map(mouseX, 0, width, -width/2, width/2));
    //console.log('y', map(mouseY, 0, height, height/2, -height/2));
    //console.log('x', a, 'y', o);
    //console.log(o/a);
    //console.log(atan(abs(a)/abs(o)));

    // console.log('mouseX', mouseX, 'halfWindowWidth', width/2, 'mouseY', mouseY, 'halfWindowHeight', height/2);
    //ellipse(0-eyeballDiameter/5, 0, 60*0.8, 60);


}

function eyeball(diameter) {
    let radius = diameter/2;
    fill(255);
    circle(width/2, height/2, diameter, diameter);
};
