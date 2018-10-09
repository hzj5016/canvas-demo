var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
autoSetCanvasSize(canvas)
var ctx = canvas.getContext('2d')
var painting = false
var prePoint = { x: undefined, y: undefined }
listenToUser(canvas)
/************************************** */
var eraserEnabled = false
var lineWidth = 5
//------------
pen.onclick = function(){
    eraserEnabled = false
    pen.classList.add('active')
    eraser.classList.remove('active')
}
eraser.onclick = function(){
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
//颜色选择
red.onclick = function(){
    ctx.strokeStyle = 'red'
    red.className = 'red active'
    green.className = 'green'
    yellow.className = 'yellow'
}
green.onclick = function(){
    ctx.strokeStyle = 'green'
    green.className = 'green active'
    red.className = 'red'
    yellow.className = 'yellow'
}
yellow.onclick = function(){
    ctx.strokeStyle = 'yellow'
    yellow.className = 'yellow active'
    green.className = 'green'
    red.className = 'red'
}
thin.onclick = function(){
    lineWidth = 5
}
thick.onclick = function(){
    lineWidth = 10
}
clear.onclick = function(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
save.onclick = function(){
    var url = canvas.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = "我的作品"
    a.target = "_black"
    a.click()
}
//画线
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineWidth = lineWidth
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
//自动设置画布大小
function autoSetCanvasSize(canvas) {
    setCanvasSize()
    window.onresize = function () {
        setCanvasSize()
    }
    function setCanvasSize() {
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}
//用户设备特性检测
function listenToUser(canvas){
    //不支持触摸
    if(document.body.ontouchstart === undefined){
        //按下鼠标
    canvas.onmousedown = function (a) {
        painting = true
        var x = a.clientX
        var y = a.clientY
        if (eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10)
        } else {
            prePoint = { x: x, y: y }
        }
    } 
    //移动鼠标
    canvas.onmousemove = function (a) {
        var x = a.clientX
        var y = a.clientY
        if (!painting) { return }
        if (eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10)
        } else {
            var newPoint = { x: x, y: y }
            drawLine(prePoint.x, prePoint.y, newPoint.x, newPoint.y)
            prePoint = newPoint
        }
    }
    //松开鼠标
    canvas.onmouseup = function () {
        painting = false
    }
    }
    //支持触摸
    else{
        canvas.ontouchstart = function(a){
            painting = true
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            if (eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10)
            } else {
            prePoint = { x: x, y: y }
            }
        }
        canvas.ontouchmove = function(a){
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY
            if (!painting) { return }
            if (eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10)
            } else {
            var newPoint = { x: x, y: y }
            drawLine(prePoint.x, prePoint.y, newPoint.x, newPoint.y)
            prePoint = newPoint
            }
        }
        canvas.ontouchend = function(){
            painting = false
        }
    }
}
       
   
       /********************************************** */
        
   
    
/************************ */
