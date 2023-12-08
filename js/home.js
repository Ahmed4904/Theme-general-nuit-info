function home(){
    var bd = document.getElementById("bd");
    var newParagraph = document.createElement("p");
    bd.innerHTML = '';
    newParagraph.innerText = "Bonjour dans notre site, \nla premiere pas pour changer le monde est de nous changer personnellement.\nNous aspérons que vous beneficier de notre site"
    bd.appendChild(newParagraph)
}
home()