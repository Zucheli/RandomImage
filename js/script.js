const ImageNormal = document.getElementById("image-normal");
const LinkNormal = document.getElementById("link-normal");
const TextNormal = document.getElementById("text-normal");

const ImageBlur = document.getElementById("image-blur");
const LinkBlur = document.getElementById("link-blur");
const TextBlur = document.getElementById("text-blur");

const ImageGray = document.getElementById("image-gray");
const LinkGray = document.getElementById("link-gray");
const TextGray = document.getElementById("text-gray");

const WidthHeight = document.getElementsByClassName("width-height");

const min = 0;
const max = 1090;

getRandomImage();

function getRandomImage() {
  id = Math.floor(Math.random() * (max - min)) + min;
  getLinkImage(id);
}

function getLinkImage(id) {
  Promise.all([
    loremPicsum(id, ""),
    loremPicsum(id, "?blur=4"),
    loremPicsum(id, "?grayscale"),
  ])
    .then(function (results) {
      console.log(results);
      ImageNormal.src = results[0].config.url;
      LinkNormal.href = results[0].config.url;
      ImageBlur.src = results[1].config.url;
      LinkBlur.href = results[1].config.url;
      ImageGray.src = results[2].config.url;
      LinkGray.href = results[2].config.url;
    })
    .catch(function (e) {
      e =
        "Por favor, clique aqui para recarregar as imagens ou clique no botão de refresh no topo da página!";
      TextNormal.innerHTML = e;
      TextBlur.innerHTML = e;
      TextGray.innerHTML = e;
      LinkNormal.href = "";
      LinkNormal.target = "_self";
      LinkBlur.href = "";
      LinkBlur.target = "_self";
      LinkGray.href = "";
      LinkGray.target = "_self";
    });
}

function loremPicsum(id, param) {
  return axios.get(
    `https://picsum.photos/id/${id}/${WidthHeight[0].clientWidth}/${WidthHeight[0].clientHeight}${param}`
  );
}
