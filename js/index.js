document.getElementById('color').addEventListener('input', getColor);


function getColor(){
    let color = document.getElementById('color').value;

    document.getElementById('visualizar').style.background = color;

    document.getElementById('visualizar').innerHTML = color;
}
