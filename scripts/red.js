function animatetop(obj, target, steptime, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / steptime;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop >= target) {
            clearInterval(obj.timer);

            if (callback) {
                callback();
            } else {

            }
        }
        obj.style.top = obj.offsetTop + step + 'px';
    }, 30);
}

function scales(obj, x) {
    obj.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(' + x + ')'
    })
    obj.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)'
    })
}


var left = document.querySelector('.leftarray');
var right = document.querySelector('.rightarray');
var bg1 = document.querySelector('#bg1');
var bg2 = document.querySelector('#bg2');
var graybt = "rgb(117, 117, 117)";
var redbt = "rgb(255, 39, 39)";
left.addEventListener('click', function () {
    var x = parseInt(bg1['offsetLeft']);
    bg1.style.left = Math.min(0, 230 + x) + 'px';
    bg2.style.left = Math.min(0, 230 + x) + 'px';
    if (bg1['offsetLeft'] == 0) {
        left.style.borderTopColor = graybt
    } else {
        left.style.borderTopColor = redbt
    }
    if (bg1['offsetLeft'] == -459) {
        right.style.borderTopColor = graybt
    } else {
        right.style.borderTopColor = redbt
    }


})
right.addEventListener('click', function () {
    var x = parseInt(bg1['offsetLeft'])
    bg1.style.left = Math.max(-459, -230 + x) + 'px'
    bg2.style.left = Math.max(-459, -230 + x) + 'px'
    if (bg1['offsetLeft'] == 0) {
        left.style.borderTopColor = graybt
    } else {
        left.style.borderTopColor = redbt
    }

    if (bg1['offsetLeft'] == -459) {
        right.style.borderTopColor = graybt
    } else {
        right.style.borderTopColor = redbt
    }

})
var down = document.querySelector('.downarray');
var up = document.querySelector('.uparray');
var yadang = document.querySelector('.yadang');
var apple = document.querySelector('.apple');
apple.addEventListener('click', function () {
    if (apple['offsetTop'] == 900) {
        bg1.style.backgroundImage = 'url(../redimage/background3.png)'
        bg2.style.backgroundImage = 'url(../redimage/background3.png)'
        yadang.style.backgroundImage = 'url(../redimage/yadang.png)'
        apple.style.backgroundImage = 'url(../redimage/apple2.png)'
        apple.style.transform = 'rotate(0deg)'
        animatetop(apple, 565, 1)
    } else {
        bg1.style.backgroundImage = 'url(../redimage/background1.png)'
        bg2.style.backgroundImage = 'url(../redimage/background1.png)'
        yadang.style.backgroundImage = 'url(../redimage/yadang2.png)'
        apple.style.backgroundImage = 'url(../redimage/apple1.png)'
        apple.style.transform = 'rotate(65deg)'
        animatetop(apple, 900, 3)
    }
})
scales(apple, 1.5)
