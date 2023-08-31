
//-----------------------------------------------------第一段-------------------------------------------
//----------给me\game\is小方块加向右位移--------------
function originX(i) {
  return (parseInt(i['offsetLeft']));
}
function originY(i) {
  return (parseInt(i['offsetTop']));
}
function relativeY(lastbtm, hi) {
  var intViewportHeight = window.innerHeight;
  return (intViewportHeight - lastbtm - hi);
}
function movespeed(i, j) {
  return (i * (window.scrollY - j));
}
function movedownspeed(exscly, scly, lastbtm, hi, extop) {
  var top = relativeY(lastbtm, hi);
  var m = (exscly - scly) / (extop - top);
  var n = top - scly * (exscly - scly) / (extop - top)
  console.log(m, n, top)
  return (m * window.scrollY + n);
}
var me = document.querySelector('#me');
var gif = document.querySelector('#me').querySelector('span');
var gamed = document.querySelector('#head1');
var iss = document.querySelector('#head2');
var keer1 = document.querySelector('#head3');
var originmeX = originX(me);
var originmeY = originY(me);
var origingamedX = originX(gamed);
var originissX = originX(iss);

document.addEventListener('scroll', function () {
  if (window.scrollY < 1228) {
    me.style.left = movespeed(0.1, 0) + originmeX + 'px';
    gamed.style.left = movespeed(0.1, 0) + origingamedX + 'px';
    iss.style.left = movespeed(0.1, 0) + originissX + 'px';
    //console.log(window.scrollY)
  }
})
//-------------game和keer变红色；显示游戏box-----------------------------
function changecolor(j, k, i) {
  color = 'i'
  j.style.backgroundColor = i;
  k.style.backgroundColor = i;
}
function visibility(i, j) {
  i.style.visibility = j;
}

var gameall = document.querySelector('.gameall');
var tubes = document.querySelectorAll('.tube')
document.addEventListener('scroll', function () {
  if (window.scrollY >= 1228) {
    changecolor(keer1, gamed, 'rgb(255, 32, 32)');
    visibility(gameall, 'visible');
    console.log(window.scrollY)
  } else {
    changecolor(keer1, gamed, 'rgb(255, 92, 92)');
    visibility(gameall, 'hidden');
  }
})
document.addEventListener('scroll', function () {
  if (window.scrollY >= 1450 && window.scrollY < 1650) {
    tubes[0].style.backgroundImage = 'url("../images/tube2.png")';
  } else if (window.scrollY >= 1650) {
    tubes[0].style.backgroundImage = 'none';
  } else {
    tubes[0].style.backgroundImage = 'url("../images/tube.png")';
  }
})
document.addEventListener('scroll', function () {
  if (window.scrollY > 3530 && window.scrollY < 3940) {
    visibility(tubes[1], 'visible');
    tubes[1].style.backgroundImage = 'url("../images/tube2.png")';
  } else if (window.scrollY >= 3940 && window.scrollY < 4050) {
    visibility(tubes[1], 'visible');
    tubes[1].style.backgroundImage = 'url("../images/tube.png")';
  } else {
    tubes[1].style.backgroundImage = 'none';
  }
})
//--------------------------------------------------------第二段--------------------------------------------
//-----------给me方块加向下位移--------------------------------
document.addEventListener('scroll', function () {
  if (window.scrollY >= 1300 && window.scrollY <= 2700) {
    me.style.top = movespeed(0.37, 1300) + originmeY + 'px';
    // console.log(window.scrollY, me.style.top);
  } else if (window.scrollY < 1300) {
    me.style.top = originmeY + 'px';
  } else if (window.scrollY > 2700 && window.scrollY < 3250) {
    me.style.top = '570px';
    //extop = originY(me);
  } else if (window.scrollY >= 3250 && window.scrollY < 4000) {
    me.style.top = Math.max(movedownspeed(3250, 4000, 40, 60, 570), 570) + 'px';
    // console.log(movedownspeed(3550, 4000, 20, 60), window.scrollY)
  } else {
    me.style.top = relativeY(40, 60) + 'px';
  }
})

document.addEventListener('scroll', function () {
  if (window.scrollY >= 1374 && window.scrollY < 4000) {
    gif.style.backgroundImage = 'url("../images/me2.gif")'
    //console.log(window.scrollY, me.style.top);
  } else {
    gif.style.backgroundImage = 'url("../images/me1.gif")'
  }
})

//--------给跷跷板加旋转-----------
var qqby = 2500//跷跷板与人相遇的Y
function rotate(i, j, k) {
  var degre = -0.4 * (window.scrollY - j);
  i.style.transform = ' rotate(' + k * degre + 'deg)';
}
var qqb = document.querySelector('.qqb');
document.addEventListener('scroll', function () {
  if (window.scrollY >= qqby) {
    rotate(qqb, qqby, 1)
    // console.log(window.scrollY, qqb.style.transform);
  } else {
    qqb.style.transform = 'rotate(0deg)';
  }
})
//----------给照片加旋转-----------
var pict = document.querySelector('.pict')
document.addEventListener('scroll', function () {
  if (window.scrollY >= 2268) {
    rotate(pict, 2268, -0.2)
  } else {
    qqb.style.transform = 'rotate(0deg)';
  }
})
//---------给tx1加向上位移-------
var tx1 = document.querySelector('.tx1');
var originTx1Y = originY(tx1);
document.addEventListener('scroll', function () {
  if (window.scrollY >= qqby) {
    if (movespeed(-1, qqby) + originTx1Y < 200) {
      tx1.style.top = 200 + 'px';
    } else {
      tx1.style.top = Math.min(movespeed(-1, qqby) + originTx1Y, 200) + 'px';
      //  console.log(window.scrollY);
    }
  } else {
    tx1.style.top = originTx1Y + 'px';
  }
})
//--------给tx4\tx5加向右位移--------
var fany = 3418//风扇与人相遇的y
var tx4 = document.querySelector('.tx4');
var tx5 = document.querySelector('.tx5');
var originTx4X = originX(tx4);
var originTx5X = originX(tx5);
var fan = document.querySelector('.fan');
var fanimg = document.querySelector('.fanimg');
var originTx4X = originX(tx4);
document.addEventListener('scroll', function () {
  if (window.scrollY >= fany) {
    tx4.style.left = Math.min(movespeed(3, fany) + originTx4X, 860) + 'px';
    tx5.style.left = Math.min(movespeed(3, fany) + originTx5X, 930) + 'px';
    fan.style.transform = 'rotate(-30deg)';
    fanimg.style.backgroundImage = 'url("../images/fan.gif")'
  } else {
    tx4.style.left = originTx4X + 'px';
    tx5.style.left = originTx5X + 'px';
    fan.style.transform = 'rotate(30deg)';
    fanimg.style.backgroundImage = 'url("../images/fan.png")'
  }
})
//--------给door增加悬停交互动画----------
function scales(obj, x) {
  obj.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(' + x + ')'
  })
  obj.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)'
  })
}
function animatedoor(obj, target, steptime, callback) {
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
var content = document.querySelector('.content');
var windows = content.children;
for (i = 0; i < windows.length; i++) {
  windows[i].addEventListener('mouseenter', function () {
    var door = this.firstElementChild;
    var topbox = this.lastElementChild;
    animatedoor(door, 0, 5, function () {
    }
    )
    visibility(me, 'hidden'); visibility(topbox, 'hidden');
    this.style.transform = ('scale(1.1)')
  });
  windows[i].addEventListener('mouseleave', function () {
    var door = this.firstElementChild;
    var topbox = this.lastElementChild;
    animatedoor(door, -2000, 5, function () {
    }
    )
    visibility(me, 'visible'); visibility(topbox, 'visible');
    this.style.transform = ('scale(1)')
  });
}
//-----------给me方块加向右位移---------------------

document.addEventListener('scroll', function () {
  if (window.scrollY > 4200) {
    me.style.left = Math.min(movespeed(0.1, 4200) + 140, window.innerWidth - 80 - 120) + 'px';
    console.log(me.style.left)
    // console.log(me['offsetLeft'], keer2['offsetLeft'])

  }
})
//--------给me方块添加动画5090-------
function animateme(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 5;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft >= target) {
      clearInterval(obj.timer);
      if (callback) {
        callback();
      }
    }
    obj.style.top = obj.offsetLeft + step + 'px';
  }, 30);
}
//-------------------跳跃--------------
function up(obj, x, interupt) {
  //-------------上跳起
  obj.style.top = relativeY(40, 60) + 0.3 * (x - window.scrollY - interupt) + 'px'
}
//----------------往下落
function down(obj, z, interupt) {
  obj.style.top = relativeY(40, 60) - 0.3 * (z + interupt - window.scrollY) + 'px'
}

function ifdown(point, interupt) {
  return (window.scrollY >= point && window.scrollY < point + interupt)
}
function ifup(point, interupt) {
  return (window.scrollY >= point - interupt && window.scrollY < point)
}
var redpt = 5000
var arr = [redpt]
for (i = 0; i < 3; i++) {
  arr.push(arr[i] + 3000);
}

document.addEventListener('scroll', function () {
  //-------------red-------------
  if (ifup(arr[0], 500)) {
    up(me, arr[0], 500);
  } else if (ifdown(arr[0], 500)) {
    down(me, arr[0], 500);
    //-------------yellow-------------
  } else if (ifup(arr[1], 500)) {
    up(me, arr[1], 500);
  } else if (ifdown(arr[1], 500)) {
    down(me, arr[1], 500);
    //-------------green-------------
  } else if (ifup(arr[2], 500)) {
    up(me, arr[2], 500);
  } else if (ifdown(arr[2], 500)) {
    down(me, arr[2], 500);
    //-------------purple-------------
  } else if (ifup(arr[3], 500, 500)) {
    up(me, arr[3], 500);
  } else if (ifdown(arr[3], 500)) {
    down(me, arr[3], 500);
  }
})
//----------按钮的动画----------------------
function btn(obj, y) {
  obj.style.transform = 'translate(0,' + y + 'px)'
}

function ifbtn(obj, li, work) {
  if (window.scrollY >= li && window.scrollY < li + 3000) {
    btn(obj, 50);//----35页边距代表按钮下落距离-----
    visibility(work, 'visible');
  } else {
    if (window.scrollY > 14300) {
      visibility(work, 'visible');
    } else {
      btn(obj, 0);
      visibility(work, 'hidden');
    }

  }
}
//---------------监听按钮-------------------------
var reds = document.querySelector('#redbutton');
var yels = document.querySelector('#yellowbutton');
var greens = document.querySelector('#greenbutton');
var purps = document.querySelector('#purplebutton');
//----------调取作品-----------
var works = document.querySelectorAll('.work');
document.addEventListener('scroll', function () {
  for (i = 0; i < works.length; i++) {
    var worksdivs = works[i].querySelector('span')
    worksdivs.style.height = window.innerHeight - 200 + 'px';
    // console.log(works[i].style.height, window.innerHeight - 200 + 'px')
  }
  ifbtn(reds, arr[0], works[0]);
  ifbtn(yels, arr[1], works[1]);
  ifbtn(greens, arr[2], works[2]);
  ifbtn(purps, arr[3], works[3]);
})
//--------------------给arch小方块增加动画-----16980   1418-----------
function targleft(left) {
  return (window.innerWidth - left)
}
var targ = 0
window.onload = function () {
  targ = targleft(191)
}
window.onresize = function () {
  targ = targleft(191)
}

var keer2 = document.querySelector('#right3')
document.addEventListener('scroll', function () {
  if (me['offsetLeft'] >= window.innerWidth - 80 - 161 - 120) {
    keer2.style.left = (me['offsetLeft'] - (window.innerWidth - 80 - 120)) + 'px';
    if (keer2['offsetLeft'] >= 0) {
      keer2.style.left = 0;
    }
  }
})
//------------------------右下方块变红、左上方块变粉----------------------
var arch = document.querySelector('#right1')
document.addEventListener('scroll', function () {
  if (me['offsetLeft'] >= window.innerWidth - 80 - 120) {
    changecolor(keer2, arch, 'rgb(255, 32, 32)');
    changecolor(keer1, gamed, 'rgb(255, 92, 92)');
  } else {
    changecolor(keer2, arch, 'rgb(255, 92, 92)');
    changecolor(keer1, gamed, 'rgb(255, 32, 32)');
  }
})
//--------------------------关闭游戏盒子----------------------------------
function moveleft(n, speed) {
  var text = '#innerbox' + n
  var work = document.querySelector(text);
  work.style.left = Math.min(speed * Math.abs(10000 - window.scrollY) + 60, 60) + 'px';
}
function left(obj, x, y) {
  obj.style.left = Math.min(x * Math.abs(10000 - window.scrollY + y), 0 + y) + 'px';
}
var tops = document.querySelector('.gameboxtop');
var bottom = document.querySelector('.gameboxbottom');
var box = document.querySelector('.gamebox');
document.addEventListener('scroll', function () {
  var speed = -0.1
  if (me['offsetLeft'] >= window.innerWidth - 80 - 120) {
    moveleft(1, speed); moveleft(2, speed); moveleft(3, speed); moveleft(4, speed);
    left(bottom, speed, 0);
    left(box, speed, 60);
  } else {
    speed = 0.1
    moveleft(1, speed); moveleft(2, speed); moveleft(3, speed); moveleft(4, speed);
    left(bottom, speed, 0);
    left(box, speed, 60);
  }
})
document.addEventListener('scroll', function () {

  if (me['offsetLeft'] >= window.innerWidth - 80 - 120 || window.scrollY <= 1228) {
    visibility(tops, 'hidden')
  } else {
    visibility(tops, 'visible')
  }
}
)
document.addEventListener('scroll', function () {
  if (window.scrollY >= 5500 || window.scrollY <= 1228) {
    visibility(box, 'hidden');
  } else {
    visibility(box, 'visible')
  }
})
var end = document.querySelector('.end');
var start = document.querySelector('#start')
var starts = document.querySelector('#start').querySelectorAll('h1');

document.addEventListener('scroll', function () {
  if (box['offsetLeft'] <= -5583) {
    gameall.style.display = 'none'
    starts[0].innerText = 'SEE';
    starts[1].innerText = 'YOU';
    starts[2].innerText = 'AGAIN';
    keer2.style.left = -161 + 'px'
    start.style.color = 'white'
  } else if (window.scrollY == 0) {
    gameall.style.display = 'block'
  }
})
//---------小树点击动画-----------
var trees = document.querySelector('.outtree').querySelectorAll('ul');
var trlis = document.querySelector('.outtree').querySelectorAll('li')
//----------art------
trees[0].addEventListener('click', function () {
  trees[0].style.backgroundImage = 'url(../images/tree1.gif)'
  animatedoor(trlis[0], 50, 7); animatedoor(trlis[1], 150, 3);
  animatedoor(trlis[2], 190, 5);
  visibility(trlis[0], 'visible'); visibility(trlis[1], 'visible'); visibility(trlis[2], 'visible');
})
scales(trees[0], 1.1)
//---------design-----
trees[1].addEventListener('click', function () {
  trees[1].style.backgroundImage = 'url(../images/tree2.gif)'
  animatedoor(trlis[3], 100, 5); animatedoor(trlis[4], 230, 3);
  animatedoor(trlis[5], 200, 7); animatedoor(trlis[6], 70, 5);
  visibility(trlis[3], 'visible'); visibility(trlis[4], 'visible');
  visibility(trlis[5], 'visible'); visibility(trlis[6], 'visible');
})
scales(trees[1], 1.1)
//--------ux--------
trees[2].addEventListener('click', function () {
  trees[2].style.backgroundImage = 'url(../images/tree3.gif)'
  animatedoor(trlis[7], 200, 7); animatedoor(trlis[8], 90, 3);
  animatedoor(trlis[9], 80, 5); visibility(trlis[7], 'visible');
  visibility(trlis[8], 'visible'); visibility(trlis[9], 'visible');
})
scales(trees[2], 1.1)
//----------点击跳转到------------
//----work1-----
var btns = document.querySelector('.rectangle').childNodes;
windows[0].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 0 * 3000,
    behavior: 'smooth'
  })
})
btns[1].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 0 * 3000,
    behavior: 'smooth'
  })
})
//----work2-----
windows[1].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 1 * 3000,
    behavior: 'smooth'
  })
})
btns[3].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 1 * 3000,
    behavior: 'smooth'
  })
})
//----work3-----
windows[2].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 2 * 3000,
    behavior: 'smooth'
  })
})
btns[5].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 2 * 3000,
    behavior: 'smooth'
  })
})
//----work4-----
windows[3].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 3 * 3000,
    behavior: 'smooth'
  })
})
btns[7].addEventListener('click', function () {
  window.scrollTo({
    top: 5486 + 3 * 3000,
    behavior: 'smooth'
  })
})
//-----悬停放大按钮-----
//小红
scales(btns[1], 1.2)
//小黄
scales(btns[3], 1.2)
//小绿
scales(btns[5], 1.2)
//小紫
scales(btns[7], 1.2)
var button1 = document.querySelector('.button1');
scales(button1, 1.2)
document.addEventListener('scroll', function () {
  if (window.scrollY > 11780 && window.scrollY < 14180) {
    rotate(button1, 11780, -0.1)
  } else {
    button1.style.transform = 'rotate(0deg)';
  }
})
//---------视频暂停-----------
var drag = document.querySelector('.drag');
var concert = document.querySelector('.concert');
document.addEventListener('scroll', function () {
  if (window.scrollY > 11000 && window.scrollY < 14000) {
    drag.src = 'https://www.youtube.com/embed/E7H0TN79wDA?si=XR7KIpCCfS327-Wt&autoplay=1'
  } else {
    drag.src = ' ';
  }
})

document.addEventListener('scroll', function () {
  if (window.scrollY > 14000 && window.scrollY < 17000) {
    concert.src = 'https://www.youtube.com/embed/cj4UaarC28I?si=8Hg4I3_QIH5LWEW7&autoplay=1'
  } else {
    concert.src = ' ';
  }
})
