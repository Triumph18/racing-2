canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_width=100;
car2_height=90;
background_image="grid start.jpg";
car1_image="f1 orange.jfif";
car2_image="f1 yellow.jpg";
car1_x=100;
car1_y=100;
car2_x=100;
car2_y=100;
function add()
{
    backround_imgtag=new Image();
    backround_imgtag.onload=uploadbackground;
    backround_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src=car1_image;

    car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar2;
    car2_imgtag.src=car2_image;
}

function uploadbackground()
{
    ctx.drawImage(backround_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
/**
 * @typedef {[e: any]} NewType
 */

function my_keydown() {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        car2_w();
        console.log("w");
    }
    if (keypressed == '87') {
        car2_s();
        console.log("s");
    }
    if (keypressed == '83') {
        car2_a();
        console.log("a");
    }
    if (keypressed == '65') {
        car2_d();
        console.log("d");
    }
    if (keypressed == '68')
        function up() {
            if (car1_y >= 0) {
                car1_y = car1_y - 10;
                console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
                uploadbackground();
                uploadcar1();
            }
            function w() {
                if (car2_y >= 0) {
                    car2_y = car2_y - 10;
                    console.log(`When w arrow is pressed, x = " + car2_x + " | y = " + car2_y + ");
        uploadbackground();
        uploadcar2();
    }
}
function down()
{
    if(car1_y <=500)
    {
        car1_y=car1_y+10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadbackground();
        uploadcar1();
    }
}
function s()
{
    if(car2_y <=500)
    {
        car2_y=car2_y+10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function left()
{
    if(car1_x >=0)
    {
        car1_x=car1_x-10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadbackground();
        uploadcar1();
    }
}
function a()
{
    if(car2_x >=0)
    {
        car2_x=car2_x-10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function right()
{
    if(car1_x <=700)
    {
        car1_x=car1_x+10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
       uploadbackground();
        uploadcar1();
    }
}
function d()
{
    if(car2_x <=700)
    {
        car2_x=car2_x+10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
       uploadbackground();
        uploadcar2();
    }
}`);
                }
            }
        }
}