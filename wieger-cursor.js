const wieger_image = document.createElement('img')
wieger_image.src = 'https://raw.githubusercontent.com/jildertvenema/scrum-poker/main/wiger.png'
wieger_image.style = 'width:60px;height:60px;position:absolute'
wieger_image.style.transition = 'top 2s ease, opacity 1s ease'

var _mouseEvent;
const handleMouseMove = (event) => {
    _mouseEvent = event;
}

document.onmousemove = handleMouseMove;

setInterval(() => {

    if (!_mouseEvent) {
        return;
    }

    var posX = _mouseEvent.clientX - 30;
    var posY = _mouseEvent.clientY - 30;


    const clone = wieger_image.cloneNode();
    clone.style.left = posX + 'px';
    clone.style.top = posY + 'px';
    clone.style.opacity = 0;


    setTimeout(() => {   
        clone.style.top = posY + 500 + 'px';
        clone.style.opacity = 1;
    }, 20)

    setTimeout(() => {   
        clone.style.opacity = 0;
    }, 1000)

    setTimeout(() => {   
        clone.style.opacity = 0;
        document.body.removeChild(clone);
    }, 8000)

    document.body.append(clone);

}, 100)
