var left = document.querySelector('.leftarray');
var right = document.querySelector('.rightarray');
var scr = document.querySelector('.scr');
var graybt = "rgb(117, 117, 117)";
var redbt = "rgb(255, 39, 39)";
left.addEventListener('click', function () {
    var x = parseInt(scr['offsetLeft']);
    scr.style.left = Math.min(0, 75 + x) + 'px';
    if (scr['offsetLeft'] == 0) {

        left.style.borderTopColor = graybt
    } else {
        left.style.borderTopColor = redbt
    }
    if (scr['offsetLeft'] == -459) {
        right.style.borderTopColor = graybt
    } else {
        right.style.borderTopColor = redbt
    }


})
right.addEventListener('click', function () {
    var x = parseInt(scr['offsetLeft'])
    scr.style.left = Math.max(-459, -75 + x) + 'px'

    if (scr['offsetLeft'] == 0) {

        left.style.borderTopColor = graybt
    } else {
        left.style.borderTopColor = redbt
    }
    if (scr['offsetLeft'] == -459) {
        right.style.borderTopColor = graybt
    } else {
        right.style.borderTopColor = redbt
    }

})


