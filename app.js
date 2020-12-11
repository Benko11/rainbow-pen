const canvas = document.getElementById('canvas')
let hue = 0;

function setCanvasSize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

function changeHue() {
    if (hue > 360)
        return hue = 0;

    hue++;
}

const ctx = canvas.getContext('2d')

setCanvasSize()

let drawing = false;

function startPosition(e) {
    drawing = true;
    draw(e)
}

function endPosition() {
    drawing = false;
    ctx.beginPath()
}

function draw(e) {
    const {clientX: x, clientY: y} = e

    if (!drawing) return
    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.8)`
    changeHue()

    ctx.lineTo(x, y);
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', endPosition)
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('dblclick', clear)