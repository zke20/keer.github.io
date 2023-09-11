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
function larger() {
    if (!isclueOpened && !isOpened2) {
        this.style.transform = 'scale(1.2)'
    }

}
function backsize() {
    if (!isclueOpened && !isOpened2) {
        this.style.transform = 'scale(1)'
    }

}
function isfocus() {
    if (!isclueOpened && !isOpened2) {
        this.style.transform = 'scale(3)'
        isclueOpened = true
    }
}
function scales(obj) {
    obj.addEventListener('mouseenter', larger);
    obj.addEventListener('mouseleave', backsize);
}
function cluefocus(obj) {
    obj.addEventListener('click', isfocus)
}
function slideleft(obj, x) {
    obj.style.left = Math.min(0, 230 + x) + 'px';
}
function slideright(obj, x) {
    obj.style.left = Math.max(-459, -230 + x) + 'px';
}

var left = document.querySelector('.leftarray');
var right = document.querySelector('.rightarray');
var bg1 = document.querySelector('#bg1');
var bg2 = document.querySelector('#bg2');
var graybt = "rgb(117, 117, 117)";
var redbt = "rgb(255, 39, 39)";
var clue1 = document.querySelectorAll('.clue1');
var scrclue1 = document.querySelector('.scrclue1');
var scrclue2 = document.querySelector('.scrclue2');
var isred = true
left.addEventListener('click', function () {
    var x = parseInt(bg1['offsetLeft']);
    slideleft(bg1, x); slideleft(bg2, x); slideleft(scrclue1, x); slideleft(scrclue2, x);
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
    slideright(bg1, x); slideright(bg2, x); slideright(scrclue1, x); slideright(scrclue2, x);
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

var yadang = document.querySelector('.yadang');
var apple = document.querySelector('.apple');

apple.addEventListener('click', function () {
    if (apple['offsetTop'] == 900) {
        isred = false
        bg1.style.backgroundImage = 'url(../redimage/background3.png)'
        bg2.style.backgroundImage = 'url(../redimage/background3.png)'
        yadang.style.backgroundImage = 'url(../redimage/yadang.png)'
        apple.style.backgroundImage = 'url(../redimage/apple2.png)'
        apple.style.transform = 'rotate(0deg)'
        animatetop(apple, 565, 1)
        for (i = 0; i < clue1.length; i++) {
            clue1[i].style.backgroundColor = '#c6ab93'
            clue1[i].style.borderColor = '#321a03'
        }
    } else {
        isred = true
        bg1.style.backgroundImage = 'url(../redimage/background1.png)'
        bg2.style.backgroundImage = 'url(../redimage/background1.png)'
        yadang.style.backgroundImage = 'url(../redimage/yadang2.png)'
        apple.style.backgroundImage = 'url(../redimage/apple1.png)'
        apple.style.transform = 'rotate(65deg)'
        animatetop(apple, 900, 3)
        for (i = 0; i < clue1.length; i++) {
            clue1[i].style.backgroundColor = '#ffe1e1'
            clue1[i].style.borderColor = 'rgb(165, 10, 10)'
        }
    }
})
scales(apple)

var isclueOpened = false
var isOpened2 = false
var isCollect1 = []
var tools = document.querySelector('.tools');
var tls = tools.querySelectorAll('div');
for (i = 0; i < clue1.length; i++) {
    scales(clue1[i]);
    cluefocus(clue1[i], 3, 3);
}
for (i = 0; i < tls.length; i++) {
    isCollect1[i] = false
}
document.addEventListener('click', function () {
    if (isclueOpened && isOpened2) {
        for (i = 0; i < clue1.length; i++) {
            if (!isCollect1[i]) {
                console.log(isCollect1[i])
                clue1[i].style.transform = 'scale(1)'
                isclueOpened = false
                isOpened2 = false
            }

        }
    } else if (isclueOpened) {
        isOpened2 = true
    }

})
function getk(ts) {
    for (k = 0; k < clue1.length; k++) {
        var father = ts.parentNode.parentNode
        if (father == clue1[k]) {
            break
        }
    }
    return (k)
}

for (i = 0; i < clue1.length; i++) {
    var clue1li = clue1[i].querySelectorAll('li');
    for (j = 0; j < clue1li.length; j++) {
        clue1li[j].addEventListener('click', function () {
            if (!isred) {
                if (isclueOpened && !isCollect1[i]) {
                    console.log(isCollect1[i])
                    this.parentNode.style.visibility = 'hidden'
                }
                console.log(isCollect1)
                if (isclueOpened) {
                    if (getk(this) < 3) {
                        tls[getk(this)].style.visibility = 'visible'
                    } else {
                        console.log(i)
                        tls[getk(this) - 3].style.visibility = 'visible'
                    }
                }
            } else {
                this.parentNode.style.visibility = 'visible'
            }

        })
    }
}
var scr1 = document.querySelector('.scr1');
var scr2 = document.querySelector('.scr2');
