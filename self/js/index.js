//获取元素
function $(ele) {
    return document.getElementById(ele);
}

flag = false;
speed = 6;
scorenum = 0;
highscorenum = 0;

//
function start() {
    if (!flag) {
        flag = true;
        init();
    }
}

//初始化
function init() {
    for (var i = 0; i < 4; i++) {
        createRow();
    }

    $('main').onclick = function(ev) {
        ev = ev || event;
        jduge(ev);
    }

    clock = window.setInterval('move()', 30);
}

//创建行
function createRow() {
    for (var i = 0; i < 4; i++) {
        var row = createDiv('row');
        row.appendChild(createCell());
    }
}

//创建格子
function createCell() {
    var arr = new Array;
    for (var i = 0; i < 4; i++) {
        arr[i] = createDiv('cell');
    }
    var balck = Math.floor(Math.random() * 4);
    arr[balck].className = 'cell black';
}

//创建div
function createDiv(attr) {
    var newDiv = document.createElement('div');
    newDiv.className = attr;
    return newDiv;
}

//删除行
function delRow() {
    var con = $('con');
    con.lastChild.remove();
}
//判断点击块颜色
function jduge(ev) {
    //如果不是黑色，over()
    if (ev.target.className.indexOf('balck') < 0 && ev.target.className.indexOf('cell') >= 0) {
        ev.target.parentNode.pass_white = 1;
        over();
    } else {
        ev.target.parentNode.pass_black = 1;
        score();
    }
}
//成绩记录
function score() {
    scorenum += 1;
    $('score').innerHTML = scorenum;
    if (scorenum % speed == 10) {
        speed += 2;
    }
}
//最高成绩记录
function highscore() {

}
//移动
function move() {
    $('con').style.top = top + speed;
    over();
    if (top == 0) {
        var row = createRow();
        $('con').style.top = '-102px';
        $('con').insertBefore(row, con.firtChild);
    }
    var len = $('con').childElementCount
    if (len >= 6) {
        delRow();
    }
}

function over() {
    //黑块触底
    var row = $('con').childNodes;
    if (row[row.length - 1].pass_black == 1) {
        fail();
    }
    //点击白块
    for (var i = 0; i < row.length; i++) {
        if (row[i].pass_white == 1) {
            fail();
        }
    }
}

function fail() {
    alert('最终成绩： ' + score);
    $('con').style.top = '-408px';
    flag = false;
    highscore
}