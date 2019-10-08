body = document.body;
side = document.getElementById("side")
content = document.getElementById("content")
maxHeight = Math.max(body.offsetHeight, side.offsetHeight, content.offsetHeight)
side.style.height = content.style.height = maxHeight + "px"
console.info("Height updated: " + maxHeight)