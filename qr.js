var pageURL = window.location.href;

new QRCode(document.getElementById("qrcode"), {
    text: pageURL,
    width: 150,
    height: 150
});