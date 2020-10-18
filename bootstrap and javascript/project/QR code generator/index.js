function func(){
    var inputText = document.getElementById("inputText").value;
    var inputText1 = document.getElementById("inputText1").value;
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=product ${inputText} product_id : ${inputText1}`;
    var img = document.getElementById("img");

    img.src = url
}