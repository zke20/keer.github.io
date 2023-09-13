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
function getk(ts) {
    for (k = 0; k < clue1.length; k++) {
        var father = ts.parentNode
        if (father == clue1[k]) {
            break
        }
    }
    return (k)
}
function getpagex(obj) {
    var tmp = obj.offsetLeft;
    var node = obj.offsetParent;
    while (node != null) {
        tmp += node.offsetLeft;
        node = node.offsetParent;
    }
    return tmp;
}
function getpagey(obj) {
    var tmp = obj.offsetTop;
    var node = obj.offsetParent;
    while (node != null) {
        tmp += node.offsetTop;
        node = node.offsetParent;
    }
    return tmp;
}
function distancex(x, y, m, n) {
    return (getpagex(x) > getpagex(y) - m && getpagex(x) < getpagex(y) + n)
}
function distancey(x, y, m, n) {
    return (getpagey(x) > getpagey(y) - m && getpagey(x) < getpagey(y) + n)
}
function boardstyle(i) {
    boards[i].style.borderStyle = 'solid'
    boards[i].style.borderColor = 'rgb(165, 10, 10)'
    boards[i].style.backgroundColor = '#ffe1e1'
    boards[i].firstElementChild.style.visibility = 'visible'
    boards[i].removeEventListener('click', isfocus)
    boards[i].removeEventListener('mouseenter', larger)
    boards[i].removeEventListener('mouseleave', backsize)
    isboard[i] = true
}
//------------------------------------按钮和苹果交互------------------------------------------------
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
var pictures = document.querySelectorAll('.picture');
left.addEventListener('click', function () {//按钮箭头注册事件
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
right.addEventListener('click', function () {//按钮箭头注册事件
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
var boards = document.querySelectorAll('.board')

apple.addEventListener('click', function () {//苹果注册事件
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
        for (i = 0; i < pictures.length; i++) {
            pictures[i].style.backgroundImage = 'url(../redimage/picture2.png)'
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
        for (i = 0; i < pictures.length; i++) {
            pictures[i].style.backgroundImage = 'url(../redimage/picture1.png)'
        }

    }
})
scales(apple)
//------------------------------------------名牌交互-------------------------------------------------------
var isclueOpened = false
var isOpened2 = false
var isCollect1 = [false, false, false, false]
var isboard = [false, false, false, false, false]
var tls = document.querySelectorAll('.tl');
for (i = 0; i < clue1.length; i++) {
    scales(clue1[i]);
    cluefocus(clue1[i], 3, 3);
}

for (i = 0; i < tls.length; i++) {//给iscollect增添四项
    scales(tls[i]);
}

document.addEventListener('click', function () {//未收集时点击交互状态下点击-还原名牌大小
    if (isclueOpened && isOpened2) {//打开并点过线索后
        for (i = 0; i < clue1.length; i++) {
            clue1[i].style.zIndex = ' 0'
            //console.log('ok')
        }
        for (i = 0; i < clue1.length; i++) {
            // if (i <= 2 && !isCollect1[i] || i > 2 && !isCollect1[i - 2]
            //     || isCollect1[0] && isCollect1[1] && isCollect1[2] && isCollect1[3]) {
            //还没有收集对应的或收集完毕
            clue1[i].style.transform = 'scale(1)'
            //console.log('maopao')
            isclueOpened = false//回到主界面
            isOpened2 = false
            // }

        }
        for (i = 0; i < boards.length; i++) {
            boards[i].style.transform = 'scale(1)'

        }
    } else if (isclueOpened) {//打开一层时点击进入到上面状态
        isOpened2 = true
    } else if (isred) {//红色画面时显示所有盒子
        for (i = 0; i < clue1.length; i++) {
            clue1[i].firstElementChild.style.visibility = 'visible'
            clue1[i].lastElementChild.style.visibility = 'hidden'
        }
    } else if (!isred && !isclueOpened) {//主界面上
        for (i = 0; i < clue1.length; i++) {
            clue1[i].firstElementChild.style.visibility = 'hidden'
            if (i <= 2 && isCollect1[i] || i > 2 && isCollect1[i - 2]) {
                clue1[i].lastElementChild.style.visibility = 'hidden'
                if (i == 1 || i == 2) {
                    clue1[i + 2].lastElementChild.style.visibility = 'hidden'
                    //  console.log(clue1[i + 2])
                } else if (i == 3 || i == 4) {
                    clue1[i - 2].lastElementChild.style.visibility = 'hidden'
                    //   console.log(clue1[i - 2])
                }
            }
            else {
                //  console.log([i, 'ddd'], isCollect1)
                clue1[i].lastElementChild.style.visibility = 'visible'
            }
        }
    }

})


for (i = 0; i < clue1.length; i++) {
    var clue1li = clue1[i].querySelector('span');

    clue1li.addEventListener('click', function () {//盒子里文字绑定事件
        if (!isred) {
            if (isclueOpened && !isCollect1[i]) {
                this.style.visibility = 'hidden';
                //console.log('aegrf')
                if (getk(this) + 1 == 2 || getk(this) + 1 == 3) {
                    // console.log(getk(this) + 1, clue1[getk(this) + 1 + 1].lastElementChild)
                    clue1[getk(this) + 1 + 1].lastElementChild.style.visibility = 'hidden';
                } else if (getk(this) + 1 == 4 || getk(this) + 1 == 5) {
                    clue1[getk(this) - 2].lastElementChild.style.visibility = 'hidden';
                }
            }
            if (isclueOpened) {
                if (getk(this) < 3) {
                    tls[getk(this)].style.visibility = 'visible'
                    isCollect1[getk(this)] = true
                } else {
                    tls[getk(this) - 2].style.visibility = 'visible'
                    isCollect1[getk(this) - 2] = true
                }
            }
        } //console.log(isCollect1)
    })

}
var blks = document.querySelectorAll('.blk');
document.addEventListener('click', function () {//黑色马赛克的可视性
    if (isred) {
        for (i = 0; i < blks.length; i++) {
            blks[i].style.visibility = 'visible'
        }
    } else {
        for (i = 0; i < blks.length; i++) {
            blks[i].style.visibility = 'hidden'
        }
    }
})

for (i = 0; i < clue1.length; i++) {//点开后名牌不遮挡
    clue1[i].addEventListener('click', function () {
        if (isclueOpened && !isOpened2) {
            this.style.zIndex = '2'
        }
    })
}

document.addEventListener('click', function () {
    if (clear(isCollect1)) {//全部收集以后关闭盒子
        for (i = 0; i < clue1.length; i++) {
            clue1[i].style.visibility = 'hidden'
            clue1[i].firstElementChild.style.visibility = 'hidden'
        }
        for (j = 0; j < boards.length; j++) {//打开简介盒子
            boards[j].style.visibility = 'visible'
        }
    }
})

var grey = document.querySelectorAll('.grey')
for (i = 0; i < boards.length; i++) {//拖动盒子到指定简介盒子处并显示简介
    scales(boards[i]);
    cluefocus(boards[i], 3, 3)
    if (i < tls.length) {
        tls[i].addEventListener('mousedown', function (event) {
            var thistl = this
            var xo = this.offsetLeft
            var yo = this.offsetTop
            var x = event.pageX - this.offsetLeft;
            var y = event.pageY - this.offsetTop;
            if (isCollect1[0] && isCollect1[1] && isCollect1[2] && isCollect1[3] && isclueOpened) {
                var a = 0
                for (i = 0; i < tls.length; i++) {
                    if (tls[i] == thistl) {
                        a = i
                        break
                    }
                }

                //console.log(a)
                document.addEventListener('mousemove', move)
                function move(e) {
                    thistl.style.left = e.pageX - x + 'px';
                    thistl.style.top = e.pageY - y + 'px';
                }
                document.addEventListener('mouseup', function () {
                    //console.log(getpagex(thistl), getpagex(boards[a]))
                    if (a < 2) {
                        if (distancex(thistl, boards[a], 100, 200)
                            && distancey(thistl, boards[a], 50, 100)) {
                            thistl.style.visibility = 'hidden'

                            boardstyle(a)
                            // console.log('success')
                            document.removeEventListener('mousemove', move)

                        } else {
                            thistl.style.left = xo + 'px'
                            thistl.style.top = yo + 'px'
                            document.removeEventListener('mousemove', move)
                            // console.log('defeat')
                        }
                    } else if (a == 2) {
                        if (distancex(thistl, boards[a], 100, 200) && distancey(thistl, boards[a], 50, 100)
                            || distancex(thistl, boards[a + 1], 100, 200) && distancey(thistl, boards[a + 1], 50, 100)) {
                            thistl.style.visibility = 'hidden'
                            boardstyle(a);
                            boardstyle(a + 1)

                            // console.log('success')
                            document.removeEventListener('mousemove', move)
                        } else {
                            thistl.style.left = xo + 'px'
                            thistl.style.top = yo + 'px'
                            document.removeEventListener('mousemove', move)
                            // console.log('defeat')
                        }
                    } else {
                        if (distancex(thistl, boards[a + 1], 100, 200)
                            && distancey(thistl, boards[a + 1], 50, 100)) {
                            thistl.style.visibility = 'hidden'
                            boardstyle(a + 1)
                            // console.log('success')
                            document.removeEventListener('mousemove', move)
                        } else {
                            thistl.style.left = xo + 'px'
                            thistl.style.top = yo + 'px'
                            document.removeEventListener('mousemove', move)
                            // console.log('defeat')
                        }
                    }

                })
            }

        })
    }

}

document.addEventListener('click', function () {//简介盒子样式变化
    if (clear(isCollect1)) {
        for (i = 0; i < boards.length; i++) {
            if (!isboard[i]) {
                if (!isred) {
                    boards[i].style.visibility = 'hidden'
                    boards[i].style.borderStyle = 'none'
                    boards[i].style.backgroundColor = '#e26d6300'

                } else {

                    boards[i].style.borderStyle = 'dashed'
                    boards[i].style.visibility = 'visible'
                    boards[i].style.backgroundColor = '#ffe1e136'
                }
            } else {
                if (!isred) {

                    boards[i].style.visibility = 'hidden'
                    boards[i].style.borderStyle = 'none'
                    boards[i].style.backgroundColor = '#e26d6300'
                    boards[i].firstElementChild.style.visibility = 'hidden'
                } else {

                    boards[i].style.borderStyle = 'solid'
                    boards[i].style.borderColor = 'rgb(165, 10, 10)'
                    boards[i].style.backgroundColor = '#ffe1e1'
                    boards[i].firstElementChild.style.visibility = 'visible'
                }
            }
        }
    }
})
function clear(obj) {
    for (i = 0; i < obj.length; i++) {
        if (!obj[i]) {
            return false
        }
    }
    return true
}
document.addEventListener('click', function () {//清空后出现字母
    if (clear(isboard)) {
        for (i = 0; i < tes.length; i++) {
            tes[i].style.visibility = 'visible'
            tes[i].style.color = 'rgb(255, 0, 0)'
        }
    }
})

var litters = document.querySelectorAll('.litter')
var tes = document.querySelectorAll('.te');
var tos = document.querySelectorAll('.to');
apple.addEventListener('click', function () {//字母样式变化
    if (clear(isboard)) {
        if (isred) {
            for (i = 0; i < litters.length; i++) {
                litters[i].style.visibility = 'hidden'
            }
        } else {
            for (i = 0; i < litters.length; i++) {
                console.log('litter')
                litters[i].style.visibility = 'visible'
            }
        }
    }
})
for (i = 0; i < litters.length; i++) {//字母放大缩小，点击收集字母
    scales(litters[i])
    litters[i].addEventListener('click', function () {//点击字母事件
        this.style.display = 'none'
        var a = 0
        for (i = 0; i < litters.length; i++) {
            a = i
            if (this == litters[i]) {
                break
            }
        }
        switch (a) {
            case 0:
                tos[3].innerHTML = 'C'
                tos[3].style.color = 'rgb(255, 0, 0)'
                break;
            case 1:
                tos[2].innerHTML = 'T'
                tos[2].style.color = 'rgb(255, 0, 0)'
                break;
            case 2:
                tos[1].innerHTML = 'A'
                tos[1].style.color = 'rgb(255, 0, 0)'
                break;
            default:
                tos[0].innerHTML = 'T'
                tos[0].style.color = 'rgb(255, 0, 0)'

        }



    })
}

document.addEventListener('click', function () {
    if (isclueOpened) {
        for (i = 0; i < grey.length; i++) {
            grey[i].style.display = 'block'
            grey[i].style.backgroundColor = '#00000070'
        }

    } else {
        for (i = 0; i < grey.length; i++) {
            grey[i].style.display = 'none'
            grey[i].style.backgroundColor = '#00000000'
        }
    }
})

