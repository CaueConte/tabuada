function calcular(){
    var num = document.getElementById('num').value;
    var resposta2 = document.getElementById('tabuada');
    var y = 1;

    resposta2.innerHTML = '';
    while(y <= 10){
        let item = document.createElement('option');
        item.text = `${num} * ${y} = ${multi}`;
        item.value = `tab${y}`;
        resposta2.appendChild(item);
        y = y + 1;
        var multi = num * y;
    }
}