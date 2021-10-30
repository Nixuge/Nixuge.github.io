let fav_num = Math.floor(Math.random() * 4);
let favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = `static/images/favicons/favicon${fav_num}.png`;
document.head.appendChild(favicon);