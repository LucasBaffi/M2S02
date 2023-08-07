

const html = () => {



    const div = document.createElement("div")
    const divImg = document.createElement("div")
    const imgProfile = document.createElement("img")
    const divInfo = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const span = document.createElement("span")
    const divLogo = document.createElement("div")
    const img = document.createElement("img")
    const a = document.createElement("a")
    const aTwitter = document.createElement("a")
    const imgTwitter = document.createElement("img")

    div.className = "main-div"
    imgProfile.className = "img-profile"
    imgProfile.src = "./assets/img/4469093-screen_shot_2015-03-25_at_5.13.24_pm_copy.webp"
    imgProfile.alt = "Ryck"
    divInfo.className = "div-info"
    imgTwitter.className = "img-twitter"
    imgTwitter.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
    aTwitter.href = "https://twitter.com/RickandMorty"

    h1.innerText = "Rick Sanchez"
    img.src = "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
    p.innerText = "  Um cientista maluco apaixonado por ciencia e tecnologia, considerado por muitos o homem mais inteligente do mundo"
    span.innerText = "Para mais informacoes:"
    a.href = "https://www.instagram.com/rickandmorty/"
    a.target = "_blank"
    img.src = "./assets/img/instagram.png"
    img.className = "img-insta"

    let divBody = document.querySelector(".div-body")
    a.appendChild(img)
    divLogo.append(a, img, aTwitter, imgTwitter)
    divImg.append(imgProfile)
    divInfo.append(h1, p, span, a, divLogo)
    div.append(divImg, divInfo, )
    divBody.appendChild(div)

    return body
};
html()




