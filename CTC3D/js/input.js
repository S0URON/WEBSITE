var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;

}
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('touchstart', touchStartHnd, false);
document.addEventListener('touchend', touchEndHnd, false);


var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var highScore = 0;
var key = { left: 37, up: 38, right: 39, down: 40 };
var clientX;

function keyDownHandler(event) {
    if (event.keyCode == key.right) {
        rightPressed = true;
    } else if (event.keyCode == key.left) {
        leftPressed = true;
    }
    if (event.keyCode == key.down) {
        downPressed = true;
    } else if (event.keyCode == key.up) {
        upPressed = true;
    }
}

function keyUpHandler(event) {

    if (event.keyCode == key.right) {
        rightPressed = false;
    } else if (event.keyCode == key.left) {
        leftPressed = false;
    }
    if (event.keyCode == key.down) {
        downPressed = false;
    } else if (event.keyCode == key.up) {
        upPressed = false;
    }
}

function touchStartHnd(event) {
    console.log('started ' + event.touches[0].clientX);
    clientX = event.touches[0].clientX;


    if (clientX < 550) {
        console.log('left' + clientX);
        leftPressed = true;
    } else if (clientX > 550) {
        console.log('right' + clientX);
        rightPressed = true;

    }

}

function touchEndHnd(event) {
    console.log('ended');
    var deltaX;
    deltaX = event.changedTouches[0].clientX;

    if (deltaX < 550) {
        console.log('left' + deltaX);
        leftPressed = false;
    } else if (deltaX > 550) {
        console.log('right' + deltaX);
        rightPressed = false;

    }

}


function move(obj, staticX, staticY) {

    if (leftPressed && !staticX) {
        obj.position.x -= 0.1;
    } else if (rightPressed && !staticX) {
        obj.position.x += 0.1;
    } else if (upPressed && !staticY) {
        obj.position.y += 0.1;

    } else if (downPressed && !staticY) {
        obj.position.y -= 0.1;
    }

}

function collision(a, b, col) {
    if (col == 1) {
        console.log('collision !');

        score += 1;
        if (score > highScore) {
            highScore = score;
            document.getElementById('highscore').innerHTML = highScore;
        }

        scene.remove(b);
        b.position.y = 0;
        if (isMobile == true) {
            b.position.x = getRandomInt(-2, 4);
        } else {
            b.position.x = getRandomInt(-10, 20);
        }


        scene.add(b);

        a.material.color = { r: 0, g: 1, b: 0 };
    } else {
        a.material.color = { r: 1, g: 1, b: 1 };
    }
}

function getRandomInt(min, max) {
    return (Math.random() * max) + min;
}

function gameover(cond, loop) {
    if (cond == 2) {
        scene.remove(sphere);
        scene.remove(cube);
        console.log('gameover ' + highScore);
        score = 0;
        cancelAnimationFrame(loop);

        document.getElementById('go').removeAttribute('hidden');
    }

}

function checkPos(a, b) {
    if (((a.position.x <= b.position.x + 0.5) && (a.position.x >= b.position.x - 0.5)) && ((a.position.y <= b.position.y + 0.5) && (a.position.y >= b.position.y - 0.5))) {
        return 1;
    } else if (b.position.y < a.position.y) {
        return 2;
    } else {
        return 0;
    }
}


function reload() {
    document.getElementById('score').innerHTML = 0;
    sphere.position.y = 0;
    cube.position.x = 0;
    scene.add(cube);
    scene.add(sphere);
    document.getElementById('go').setAttribute('hidden', '');


    requestAnimationFrame(animate);
}