for (let i = 0; i < document.body.children.length; i ++) {
    document.body.children[i].style.transition = 'transform 6s ease';
    document.body.children[i].style.transform = 'scale(1)'

    setTimeout(() => {
        document.body.children[i].style.transform = 'scale(0)'
    }, 00)
}


const image = document.createElement('img');
image.src = 'https://assets.televizier.nl/upload/b/t/Bassie-Adriaan-20167.jpg'

image.style = 'position:fixed;top:0;left:0;width:100%;'
image.style.transition = 'transform 6s ease';
image.style.transform = 'scale(0)'

document.body.append(image)

setTimeout(() => {
    image.style.transform = 'scale(1)'
    var a = new Audio("https://srv-store4.gofile.io/download/7WZJMN/Hallo%20Vriendjes%20(TV%20Versie).mp3");
    a.loop = true;
    a.play();
}, 1000)