var oldURL = document.referrer;
if(oldURL.toLowerCase().includes("nixuge.me")) {
  var style = document.createElement('style');
  style.innerHTML = `
  #nme {
	animation: 0s !important;
  }
  `;
document.head.appendChild(style);
}