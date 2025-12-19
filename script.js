let i = 0,
  imgArr = new Array();
imgArr[0] =
  "https://upload.wikimedia.org/wikipedia/zh/thumb/4/49/National_Chiayi_University_seal.svg/960px-National_Chiayi_University_seal.svg.png";
imgArr[1] =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKc4KUkZ-rjS1SPsrj7cbjuhPyLeevexinw&s";
imgArr[2] =
  "https://megapx-assets.dcard.tw/images/7790a600-068d-4dea-8eee-e97aee26185e/orig.jpeg";

function showImg() {
  document.getElementById("ico").src = imgArr[i];
  i = (i + 1) % 3;
}

function show() {
  setInterval(showImg, 2000);
}