var template = document.getElementsByTagName('body')[0];

for (var i = 0; i < 99; i++) {
    var div = document.createElement('div');

    div.style.float = 'left';
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.backgroundColor = "#" + (Math.floor(Math.random() * 1000)).toString()

    template.appendChild(div);
}
