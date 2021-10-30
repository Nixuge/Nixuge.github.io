var oldURL = document.referrer;
if(!oldURL.toLowerCase().includes("nixuge.me")) {
  alert("ok!")
  var style = document.createElement('style');
  style.innerHTML = `
  #nme {
	animation: fade1 0.5s linear;
  }
  `;
document.head.appendChild(style);
}