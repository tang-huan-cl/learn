function loadNode(len) {
    var html = '';
    for (let index = 0; index < 10; index++) {
        html += '<li>' + index + '</li>';
    }
    var list = document.getElementById('list');
    list.onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;

        console.log('-------------->1', target);
        console.log('-------------->2', target.nodeName);

        if (target.nodeName.toLowerCase() === 'li') {
            console.log(target.innerText);
        }
    }
    list.innerHTML = html;
}
loadNode();