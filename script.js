let counter = document.getElementById("countWords");
let textWrite = document.getElementById("write");
textWrite.addEventListener("input", function () {
  
  const word = this.value.trim();
  
    const wordCount = word
      .split(/\s+/)
      .filter((word) => word.match(/^[a-zA-Z]+$/)).length;
    counter.innerHTML = wordCount;
  
});
let btn = document.getElementById("refresh");
btn.addEventListener("click", () => {
  counter.innerHTML = "0";
  textWrite.value = "";
});
