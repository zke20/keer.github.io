var RIR_player;
function onYouTubePlayerAPIReady() {
    RIR_player = new YT.Player('RIR_player', {
    height: '510',
    width: '906',
    videoId: 'GYFEbrWhTb8',
    });
    ACJ_player = new YT.Player('ACJ_player', {
    height: '366',
    width: '650',
    videoId: 'GYFEbrWhTb8',
    });
    DTA_player = new YT.Player('DTA_player', {
    height: '360',
    width: '640',
    videoId: 'E7H0TN79wDA',
    });
    CON_player = new YT.Player('CON_player', {
    height: '315',
    width: '560',
    videoId: 'cj4UaarC28I',
    });
}
document.addEventListener('scroll', function () {
    // var flag = !(window.scrollY > 8744 && window.scrollY < 8744 + 3400)
    var locationwork = [window.scrollY > 8744 && window.scrollY < 8744 + 3400,//红
    window.scrollY > 8744 + 3400 && window.scrollY < 8744 + 3400 * 2,//黄
    window.scrollY > 8744 + 3400 * 2 && window.scrollY < 8744 + 3400 * 3,//绿
    window.scrollY > 8744 + 3400 * 3 && window.scrollY < 8744 + 3400 * 4]//紫
    if(!locationwork[0]) {
    RIR_player.pauseVideo();
    }
    if(!locationwork[1]) {
    ACJ_player.pauseVideo();
    }
    if(!locationwork[2]) {
    DTA_player.pauseVideo();
    }
    if(!locationwork[3]) {
    CON_player.pauseVideo();
    }
})