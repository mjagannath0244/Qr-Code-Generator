const wraper = document.querySelector(".wraper")
const generatebtn = wraper.querySelector(".form button")
const qrinput = document.querySelector(".form input")
qrimg = document.querySelector(".qr-code img")

generatebtn.addEventListener("click", () => {
    let qrval = qrinput.value;

    generatebtn.innerText = "Generating QR Code....."
    if (!qrval) {
        alert("please enter something")
        generatebtn.innerText = "Generating QR Code"

        return;
    }
    // if the input is empty then return from here
    // getting a qr code of a user enterde value using the server;
    // api and passing the api return img src to qrimg
    qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrval}`;

    qrimg.addEventListener("load", () => {
        wraper.classList.add("active");
        generatebtn.innerText = "Generating QR Code"
    })
    qrinput.addEventListener("keyup", () => {
        if (!qrinput.value) {
            wraper.classList.remove("active");
        }
    })


})