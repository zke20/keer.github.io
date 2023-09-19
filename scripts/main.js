//#region 变量
//#region 上方和右侧方块
var me = document.querySelector('#me');
var gif = document.querySelector('#me').querySelector('span');
var gamed = document.querySelector('#head1');
var iss = document.querySelector('#head2');
var keer1 = document.querySelector('#head3');
var keer2 = document.querySelector('#right3')
var arch = document.querySelector('#right1')
var boxes = document.querySelectorAll('.box');
//#endregion
//#region 原始坐标
var originmeX = originX(me);
var originmeY = originY(me);
var origingamedX = originX(gamed);
var originissX = originX(iss);
//#endregion
//#region 游戏盒子
var gameall = document.querySelector('.gameall');
var tops = document.querySelector('.gameboxtop');
var bottom = document.querySelector('.gameboxbottom');
var botoms = bottom.children
var box = document.querySelector('.gamebox');
var headline = document.querySelector('.head');
//#endregion
//管道
var tubes = document.querySelectorAll('.tube');
//#region 跷跷板、相片与风扇
var qqb = document.querySelector('.qqb');
var pict = document.querySelector('.pict');
var tx1 = document.querySelector('.tx1');
var tx4 = document.querySelector('.tx4');
var tx5 = document.querySelector('.tx5');
var fan = document.querySelector('.fan');
var fanimg = document.querySelector('.fanimg');
//#endregion
//作品目录
var content = document.querySelector('.content');
var windows = content.children;
//游戏主页
var works = document.querySelectorAll('.work');
var innerboxes = document.querySelectorAll('.innerbox');
//游戏1
var buttonred = document.querySelector('.buttonred');
var redisright = document.querySelector('.redisright');
//游戏3
var buttongreen = document.querySelector('.button1');
var drag = document.querySelector('.drag');
//游戏4
var concert = document.querySelector('.concert');
//结束盒子
var end = document.querySelector('.end');
//开始提示语
var start = document.querySelector('#start')
var starts = start.querySelectorAll('h1');
var suggest = document.querySelector('.suggest')
//技能树
var trees = document.querySelector('.outtree').querySelectorAll('.tree');
var trlis = document.querySelector('.outtree').querySelectorAll('li');
//游戏机底部
var btns = document.querySelector('.rectangle').childNodes;
//#endregion
//#region 通用函数
function originX(i) {//原始左边距
  return (parseInt(i['offsetLeft']));
}
function originY(i) {//原始上边距
  return (parseInt(i['offsetTop']));
}
function relativeY(lastbtm, hi) {//me方块距离上方视口高度
  return (window.innerHeight - lastbtm - hi);
}
function movespeed(i, j) {//速度公式
  return (i * (window.scrollY - j));
}
function movedownspeed(exscly, scly, lastbtm, hi, extop) {//me向下移动速度
  var top = relativeY(lastbtm, hi);
  var m = (exscly - scly) / (extop - top);
  var n = top - scly * (exscly - scly) / (extop - top)
  return (m * window.scrollY + n);
}
function changecolor(j, k, i) {//改变背景颜色
  color = 'i'
  j.style.backgroundColor = i;
  k.style.backgroundColor = i;
}
function visibility(i, j) {//改变可视性
  i.style.visibility = j;
}
function tubestyle(tube, iscolorful) {//水管背景图片更改
  if (iscolorful == 1) {
    tube.style.backgroundImage = 'url("../images/tube.png")';
  } else if (iscolorful == null) {
    tube.style.backgroundImage = 'none';
  } else {
    tube.style.backgroundImage = 'url("../images/tube2.png")';
  }
}
function rotate(i, j, k) {//随滚动旋转
  var degre = 0.4 * (window.scrollY - j);
  i.style.transform = ' rotate(' + k * degre + 'deg)';
}
function scales(obj, x) {//鼠标经过放大事件
  obj.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(' + x + ')'
  })
  obj.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)'
  })
}
function animatedoor(obj, target, steptime, callback) {//门的动画
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
function geti(obj, li) {//线索循环找到对应项
  for (k = 0; k < li.length; k++) {
    if (obj == li[k]) {
      break
    }
  }
  return (k)
}
//#endregion
//#region ----------给me\game\is小方块加向右位移--------------
document.addEventListener('scroll', function () {
  if (window.scrollY < 1228) {
    me.style.left = movespeed(0.1, 0) + originmeX + 'px';
    gamed.style.left = movespeed(0.1, 0) + origingamedX + 'px';
    iss.style.left = movespeed(0.1, 0) + originissX + 'px';
  }
})
//#endregion
//#region -------------game和keer变红色；显示游戏box-----------------------------
document.addEventListener('scroll', function () {
  if (window.scrollY >= 1228) {
    changecolor(keer1, gamed, 'rgb(255, 32, 32)');
    visibility(gameall, 'visible');

  } else {
    changecolor(keer1, gamed, 'rgb(255, 92, 92)');
    visibility(gameall, 'hidden');
  }
})

document.addEventListener('scroll', function () {
  if (window.scrollY >= 1450 && window.scrollY < 1650) {
    tubestyle(tubes[0], 0)
  } else if (window.scrollY >= 1650) {
    tubestyle(tubes[0], null)
  } else {
    tubestyle(tubes[0], 1)
  }
})
document.addEventListener('scroll', function () {
  if (
    me.getBoundingClientRect().top >= windows[2].getBoundingClientRect().top &&
    me.getBoundingClientRect().top < tubes[1].getBoundingClientRect().top * 0.8
  ) {
    visibility(tubes[1], 'visible');
    tubestyle(tubes[1], 0);
  } else if (me.getBoundingClientRect().top >= tubes[1].getBoundingClientRect().top * 0.8 &&
    me.getBoundingClientRect().top
    && me.getBoundingClientRect().left < btns[1].getBoundingClientRect().left - 0.25 * minusbtn
  ) {
    visibility(tubes[1], 'visible');
    tubestyle(tubes[1], 1);
  } else {
    tubestyle(tubes[1], null);
  }
})
//#endregion
//#region -----------给me方块加向下位移--------------------------------
var mey = 0
var y = 0
var y1 = 0
var mex = 0
document.addEventListener('scroll', function () {
  if (window.scrollY >= 1300 &&
    me.getBoundingClientRect().top <= qqb.getBoundingClientRect().top) {//上一段运动，me与跷跷板相遇前

    me.style.top = movespeed(0.37, 1300) + originmeY + 'px';
    mey = me.offsetTop
    // console.log(window.scrollY, me.style.top);
  } else if (window.scrollY < 1300) {//原始不动；最开始

    me.style.top = originmeY + 'px';
  } else if (me.getBoundingClientRect().top > qqb.getBoundingClientRect().top//me与跷跷板相遇后
    &&
    me.getBoundingClientRect().top <= windows[2].getBoundingClientRect().top) {//me与绿盒子相遇前
    me.style.top = mey + 'px';
    y = window.scrollY
    //extop = originY(me);
  } else if (me.getBoundingClientRect().top > windows[2].getBoundingClientRect().top//me与绿盒子相遇后
    && me.getBoundingClientRect().top - windows[2].getBoundingClientRect().top <= 1.5 * windows[2].offsetHeight) {//me与绿盒子分离一段前
    // console.log('这是' + 4)
    me.style.top = Math.min(relativeY(40, 60), (window.scrollY - y) * 0.1 + mey) + 'px';
    y1 = window.scrollY
    mex = me.offsetLeft
  } else if (me.getBoundingClientRect().top - windows[2].getBoundingClientRect().top > 1.5 * windows[2].offsetHeight &&//me与绿盒子分离一段后
    btns[1].getBoundingClientRect().left - 0.25 * minusbtn > me.getBoundingClientRect().left) {//me还没到达起跳点
    console.log('这是' + 5)
    me.style.top = relativeY(40, 60) + 'px';
    my = me.offsetTop
  }
})

document.addEventListener('scroll', function () {
  if (me.getBoundingClientRect().top >= tops.getBoundingClientRect().top &&
    me.getBoundingClientRect().top <= bottom.getBoundingClientRect().top * 0.7
  ) {
    gif.style.backgroundImage = 'url("../images/me2.gif")'

  } else {
    gif.style.backgroundImage = 'url("../images/me1.gif")'
  }
})
//#endregion
//#region -----------给me方块加向右位移---------------------
document.addEventListener('scroll', function () {
  var v = (btns[1].getBoundingClientRect().left - 0.25 * minusbtn - mex) / (6985 - y1);
  if (me.getBoundingClientRect().top - windows[2].getBoundingClientRect().top > 1.5 * windows[2].offsetHeight//me与绿盒子高差大于绿盒子1.5倍高度
    && me.getBoundingClientRect().left <= btns[1].getBoundingClientRect().left - 0.25 * minusbtn//me左侧小于等于红色按钮左侧一点儿
  ) {
    me.style.left = Math.max(mex, mex + v * (window.scrollY - y1)) + 'px';
  }
  if (me.getBoundingClientRect().left > btns[1].getBoundingClientRect().left - 0.25 * minusbtn//me左侧大于红色按钮左侧一点（起跳前夕）
    &&
    me.offsetLeft < arch.getBoundingClientRect().left - 62//me马上走到头
    ||
    y3 !== 0 && window.scrollY <= y3//me刚好走到头时最大，否则等于window.scrollY
  ) {
    v = minusbtn / 3400
    if (mex > btns[1].getBoundingClientRect().left - 0.25 * minusbtn + v * (window.scrollY - 6985)) {
      me.style.left = mex + 'px'
    } else {
      me.style.left = Math.min(arch.getBoundingClientRect().left - 60, btns[1].getBoundingClientRect().left - 0.25 * minusbtn + v * (window.scrollY - 6985)) + 'px';

    }
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
function up(obj, y, m, n) {
  //-------------上跳起
  obj.style.top = Math.min(my, my - m * (obj.getBoundingClientRect().left - (y.getBoundingClientRect().left + n * minusbtn))) + 'px'
}
//----------------往下落
function down(obj, y, m, n) {
  obj.style.top = Math.min(my, my - m * (-obj.getBoundingClientRect().left + (y.getBoundingClientRect().left + n * minusbtn))) + 'px'

}

function ifup(windowsli, m, k) {
  return (windowsli.getBoundingClientRect().left + m * minusbtn < me.getBoundingClientRect().left &&
    windowsli.getBoundingClientRect().left + k * minusbtn >= me.getBoundingClientRect().left)
}
var minusbtn = btns[3].getBoundingClientRect().left - btns[1].getBoundingClientRect().left
var redpt = 5000
var arr = [redpt]
for (i = 0; i < 3; i++) {
  arr.push(arr[i] + 3000);
}
var my = 0
document.addEventListener('scroll', function () {

  for (i = 0, j = 1; i < windows.length; i++, j += 2) {
    if (ifup(btns[j], -0.25, 0)) {
      up(me, btns[j], 2, -0.25)
      // console.log(i + '前半段')
      break;
    }
    if (ifup(btns[j], 0, 0.25)) {
      down(me, btns[j], 2, 0.25)
      // console.log(i + '后半段')
      break;
    }
  }
})
//#endregion
//#region --------给跷跷板加旋转-----------
var qqby = 0//跷跷板与人相遇的Y
var fany = 0//风扇与人相遇的y
document.addEventListener('scroll', function () {
  if (me.getBoundingClientRect().top <= tx1.getBoundingClientRect().top) {
    qqby = window.scrollY
  }
  if (me.getBoundingClientRect().top <= fan.getBoundingClientRect().top) {
    fany = window.scrollY
  }
})
//#endregion
//#region ----------给照片加旋转-----------
document.addEventListener('scroll', function () {
  if (window.scrollY >= 2268) {
    rotate(pict, 2268, -0.2)
  } else {
    qqb.style.transform = 'rotate(0deg)';
  }
})
//#endregion
//#region 目录交互
//---------给tx1加向上位移-------
var originTx1Y = originY(tx1);
document.addEventListener('scroll', function () {
  if (me.getBoundingClientRect().top >= tx1.getBoundingClientRect().top) {
    rotate(qqb, qqby, -1);
    // console.log('new' + qqby)
    if (movespeed(-1, qqby) + originTx1Y < 0.111 * tx1.parentElement.offsetHeight) {
      tx1.style.top = 0.111 * tx1.parentElement.offsetHeight + 'px';
      // console.log(1)
    } else {
      tx1.style.top = Math.min(movespeed(-1, qqby) + originTx1Y, 0.111 * tx1.parentElement.offsetHeight) + 'px';
      // console.log(2)
    }
  } else {
    tx1.style.top = originTx1Y + 'px';
    qqb.style.transform = 'rotate(0deg)';
    // console.log(window.scrollY - tx1.offsetTop - 0.027 * box.offsetHeight, me.offsetTop)
  }
})
//--------给tx4\tx5加向右位移--------
var originTx4X = originX(tx4);
var originTx5X = originX(tx5);
document.addEventListener('scroll', function () {
  if (me.getBoundingClientRect().top >= fan.getBoundingClientRect().top) {
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
//#endregion
//#region 卡带与跳转
//----------按钮的动画----------------------
function btn(obj, y) {
  obj.style.transform = 'translate(0,' + y + 'px)'
}

function ifbtn(obj, obj2, work) {
  if (me.getBoundingClientRect().left >= obj.getBoundingClientRect().left + 0.25 * minusbtn &&
    me.getBoundingClientRect().left < obj2.getBoundingClientRect().left + 0.25 * minusbtn) {
    btn(obj, 50);//----35页边距代表按钮下落距离-----
    visibility(work, 'visible');
  } else {
    if (me.getBoundingClientRect().left > keer2.getBoundingClientRect().left - 100) {
      visibility(work, 'visible');
    } else {
      btn(obj, 0);
      visibility(work, 'hidden');
    }

  }
}
//----------调取作品-----------
document.addEventListener('scroll', function () {
  ifbtn(btns[1], btns[3], works[0]);
  ifbtn(btns[3], btns[5], works[1]);
  ifbtn(btns[5], btns[7], works[2]);
  ifbtn(btns[7], keer2, works[3]);
})
//#endregion
//#region 建筑部分
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
document.addEventListener('scroll', function () {
  if (me['offsetLeft'] >= window.innerWidth - 80 - 161 - 120) {
    keer2.style.left = (me['offsetLeft'] - (window.innerWidth - 80 - 120)) + 'px';
    if (keer2['offsetLeft'] >= 0) {
      keer2.style.left = 0;
    }
  }
})
//------------------------右下方块变红、左上方块变粉----------------------

document.addEventListener('scroll', function () {
  // console.log(window.scrollY)
  if (me['offsetLeft'] >= window.innerWidth - 80 - 120) {
    changecolor(keer2, arch, 'rgb(255, 32, 32)');
    changecolor(keer1, gamed, 'rgb(255, 92, 92)');
  } else {
    changecolor(keer2, arch, 'rgb(255, 92, 92)');
    changecolor(keer1, gamed, 'rgb(255, 32, 32)');
  }
})
//#endregion
//#region --------------------------关闭游戏盒子----------------------------------
var y3 = 0
function moveleft(n, speed) {
  var text = '#innerbox' + n
  var work = document.querySelector(text);
  if (speed > 0) {
    work.style.left = Math.max(speed * Math.abs(y3 - window.scrollY) + 0.02 * window.innerWidth, 0.02 * window.innerWidth) + 'px';
  } else {
    work.style.left = Math.min(speed * Math.abs(y3 - window.scrollY) + 0.02 * window.innerWidth, 0.02 * window.innerWidth) + 'px';
  }

}
function left(obj, x, y) {
  if (x > 0) {
    obj.style.left = Math.max(x * Math.abs(y3 - window.scrollY) + y, 0 + y) + 'px';
  } else {
    obj.style.left = Math.min(x * Math.abs(y3 - window.scrollY) + y, 0 + y) + 'px';
  }
}

document.addEventListener('scroll', function () {//全体游戏盒子向左向右
  var speed = -0.1
  if (me.offsetLeft < arch.getBoundingClientRect().left - 62) {//me还没走到头
    y3 = window.scrollY
    speed = 0.1
    // console.log('盒子应该向左')
  }
  left(botoms[1], speed, 0.9 * window.innerWidth * 0.016)
  left(botoms[2], speed, 0.9 * window.innerWidth * 0.895)
  moveleft(1, speed); moveleft(2, speed); moveleft(3, speed); moveleft(4, speed);
  left(bottom, speed, 0);
  left(tops, speed, 0);
  left(box, speed, 0.02 * window.innerWidth);
})
document.addEventListener('scroll', function () {

  if (me.offsetLeft >= arch.getBoundingClientRect().left - 60 || window.scrollY <= 1228) {
    visibility(tops, 'hidden')
  } else {
    visibility(tops, 'visible')
  }
}
)
document.addEventListener('scroll', function () {
  if (btns[1].getBoundingClientRect().left + 0.25 * minusbtn < me.getBoundingClientRect().left || window.scrollY <= 1228) {
    visibility(box, 'hidden');
  } else {
    visibility(box, 'visible')
  }
})

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
//#endregion
//#region ---------小树点击动画-----------
for (i = 0; i < trees.length; i++) {
  scales(trees[i], 1.1)
  trees[i].addEventListener('click', function () {
    this.style.backgroundImage = 'url(../images/tree' + (geti(this, trees) + 1) + '.gif)'
  })
}

//----------art------
trees[0].addEventListener('click', function () {
  animatedoor(trlis[0], 50, 7); animatedoor(trlis[1], 150, 3);
  animatedoor(trlis[2], 190, 5);
  visibility(trlis[0], 'visible'); visibility(trlis[1], 'visible'); visibility(trlis[2], 'visible');
})
//---------design-----
trees[1].addEventListener('click', function () {
  animatedoor(trlis[3], 100, 5); animatedoor(trlis[4], 230, 3);
  animatedoor(trlis[5], 200, 7); animatedoor(trlis[6], 70, 5);
  visibility(trlis[3], 'visible'); visibility(trlis[4], 'visible');
  visibility(trlis[5], 'visible'); visibility(trlis[6], 'visible');
})
//--------ux--------
trees[2].addEventListener('click', function () {
  animatedoor(trlis[7], 200, 7); animatedoor(trlis[8], 90, 3);
  animatedoor(trlis[9], 80, 5); visibility(trlis[7], 'visible');
  visibility(trlis[8], 'visible'); visibility(trlis[9], 'visible');
})
//#endregion
//#region ----------点击跳转到------------
for (i = 0, j = 1; i < windows.length; i++, j += 2) {
  windows[i].addEventListener('click', function () {
    window.scrollTo({
      top: geti(this, windows) * 3400 + 8744,
      behavior: 'smooth'
    })

  }),
    btns[j].addEventListener('click', function () {

      window.scrollTo({
        top: (geti(this, btns) - 1) / 2 * 3400 + 8744,
        behavior: 'smooth'
      })

    }),
    scales(btns[j], 1.2)
}
//#endregion
//#region -----PLAY按钮-----
var locationwork = [window.scrollY > 8744 && window.scrollY < 8744 + 3400,//红
window.scrollY > 8744 + 3400 && window.scrollY < 8744 + 3400 * 2,//黄
window.scrollY > 8744 + 3400 * 2 && window.scrollY < 8744 + 3400 * 3,//绿
window.scrollY > 8744 + 3400 * 3 && window.scrollY < 8744 + 3400 * 4]//紫
scales(buttonred, 1.2)
scales(buttongreen, 1.2)
document.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  if (locationwork[0]) {
    rotate(buttonred, 8744, -0.1);
  } else {
    buttonred.style.transform = 'rotate(0deg)';
  }
  if (locationwork[2]) {//绿色PLAY按钮旋转
    rotate(buttongreen, 8744 + 3400 * 2, -0.1)
  } else {
    buttongreen.style.transform = 'rotate(0deg)';
  }
})
//#endregion
//#region ---------视频暂停-----------
document.addEventListener('scroll', function () {
  if (locationwork[0]) {//红色播放视频链接与停止
    redisright.src = 'https://www.youtube.com/embed/Twhcujuxp0k?si=_JLrxcRNkwBzgdKR'
  } else {
    redisright.src = ' ';
  }
  if (locationwork[2]) {//绿色播放视频链接与停止
    drag.src = 'https://www.youtube.com/embed/E7H0TN79wDA?si=XR7KIpCCfS327-Wt&autoplay=1'
  } else {
    drag.src = ' ';
  }
  if (locationwork[3]) {//紫色播放视频链接与停止
    concert.src = 'https://www.youtube.com/embed/cj4UaarC28I?si=8Hg4I3_QIH5LWEW7&autoplay=1'
  } else {
    concert.src = ' ';
  }
})
//#endregion
//#region 自适应大小
function rsize() {//调整视口自适应尺寸
  pict.style.height = pict.offsetWidth + 'px';
  for (i = 0; i < trees.length; i++) {
    trees[i].style.height = trees[i].offsetWidth + 'px'
  }
  content.style.height = content.offsetWidth + 'px';
  box.style.height = box.offsetWidth * 43 + 'px';
  headline.style.height = window.innerHeight * 0.05 + 'px';
  headline.style.width = window.innerWidth + 'px';
  tops.style.top = window.innerHeight * 0.07 + 'px';
  bottom.style.height = window.innerHeight * 0.03 + 'px';
  bottom.firstElementChild.style.borderWidth = window.innerHeight * 0.03 + 'px';
  bottom.lastElementChild.style.borderWidth = window.innerHeight * 0.03 + 'px';
  for (i = 0; i < innerboxes.length; i++) {
    innerboxes[i].firstElementChild.style.height = window.innerHeight * 0.88 + 'px'
  }
  for (i = 1; i < innerboxes.length; i += 2) {
    btns[i].style.fontSize = window.innerWidth / 1920 * 18 + 'px'
  }
}
window.addEventListener('resize', rsize)
window.addEventListener('load', rsize)
document.addEventListener('scroll', detectZoom)
document.addEventListener('load', detectZoom)
function detectZoom() {
  var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase
  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth
  }
  if (ratio) {
    ratio = Math.round(ratio * 100)
  }
  if (ratio !== 100) {
    console.log('eeeeee')
    suggest.style.display = 'block'
    suggest.innerHTML = '<p>The current window zoom ratio is' + ratio + '%,<br>it is recommended to be adjusted to 100% for the best experience</p>'
  } else {
    suggest.style.display = 'none'
  }
  return ratio / 100
}
// document.addEventListener('scroll', function () {
//   // console.log(me.offsetLeft, me.offsetTop)
//   if (me.offsetLeft < 0
//     ||
//     me.getBoundingClientRect().top > window.innerHeight
//     ||
//     me.offsetTop > relativeY(40, 60) && me.getBoundingClientRect().left > btns[1].getBoundingClientRect().left - 0.25 * minusbtn

//   ) {
//     // window.scrollTo({
//     //   top: 0,
//     //   behavior: 'smooth'
//     // })
//     // location.reload()

//   }
// })
//#endregion