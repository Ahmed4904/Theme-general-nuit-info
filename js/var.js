function theme(){
    if(document.getElementById('chbox').checked==true){
        document.querySelector('#pageContent p').style.color = 'white';
        document.querySelector('#pageContent').style.backgroundColor = '#090d3e';
    }else{
        document.querySelector('#pageContent p').style.color = 'black';
        document.querySelector('#pageContent').style.backgroundColor = 'white';
    }
}
