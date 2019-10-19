window.onresize = window.onload = function () {
   root = document.documentElement;
   side = document.getElementById("side");
   content = document.getElementById("content");
   root.style.height = side.style.height = content.style.height = "auto";
   maxHeight = Math.max(root.scrollHeight, side.scrollHeight, content.scrollHeight);
   root.style.height = side.style.height = content.style.height = maxHeight + "px";
   console.debug("Height updated: " + maxHeight);
};