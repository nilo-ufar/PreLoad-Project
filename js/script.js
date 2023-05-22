const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
    //first way
    // loaderElem.classList.add('hidden')

    // second way
    loaderElem.className += ' hidden' // class="loader hidden"

})

let redValue, greenValue, blueValue
setInterval(function () {
    redValue = Math.floor(Math.random() * 255)
    greenValue= Math.floor(Math.random() * 255)
    blueValue = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue +")"
},2000)
