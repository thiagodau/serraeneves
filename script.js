/*MENU HAMBURGUER */
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

/*PUBLICACOES INSTAGRAM*/
const campos = "media_type,media_url";
const limite = 15;
const token = "";
const baseURL = `https://graph.instagram.com/me/media?fields=${campos}&access_token=${token}&limit=${limite}`;

fetch(baseURL)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".container");
    console.log(data)
    data.data.forEach((image) => {
      const mediaType = image.media_type;
      const mediaUrl = image.media_url;
      // Cria o elemento <a>
      const link = document.createElement("a");
      link.href = "https://www.instagram.com/serraeneves/"; // Define o destino do link
      link.target = "_blank"; // Abre o link em uma nova aba (opcional)

      if (mediaType === "VIDEO") {
        console.log('video(s) encontrado(s).')
        /*const video = document.createElement("video");
        video.src = mediaUrl;
        video.classList.add("container-video");

        // Adiciona o video dentro do link
        link.appendChild(video);

        // Adiciona o link com a imagem dentro do contêiner
        container.appendChild(link);*/
      } else {
        const image = document.createElement("img");
        image.src = mediaUrl;
        image.alt = "Publicação do instagram.";
        image.classList.add("container-image");

        // Adiciona a imagem dentro do link
        link.appendChild(image);

        // Adiciona o link com a imagem dentro do contêiner
        container.appendChild(link);
      }
    });
  })
  .catch((error) => console.log(error));
