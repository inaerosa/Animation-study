
const menu = document.getElementById("menu"); //aqui pega todo menu
let selectedMenuId = 1;

const boardLeft = document.getElementById("board-left")
const boardRight = document.getElementById("board-right")
const flexBoard = document.getElementById("flex-board")
const illustration = document.getElementById("illustration");

const contentList = [
    {img: "https://i.pinimg.com/originals/c7/c4/7d/c7c47df2029f48c112eee65625f9ef8b.png"},
  {img: "https://images.vexels.com/media/users/3/158558/isolated/preview/60b6cba6210b4313e1168a74976a9039-menina-swimsuit-flor-surfboard-apartamento-by-vexels.png"},
  {img: "https://i.imgur.com/0IGqo2X.png"}
]

document.getElementById("bl-1").scrollIntoView();
menu.addEventListener("click", changeContent); //aqui adiciona um evento e chama uma função


function changeContent(event){ //aqui eu crio a função passando o evento
 
    const target = event.target.id; //a const target recebe o id de cada evento
    if (target==="menu" || target ==="" || target== selectedMenuId){ //se target fr igual a menu ou target for vazio
        return; //return vazio
    }
    
    //selecao do menu
    document.getElementById(target).classList.add("selected") 
    //pega o id do elemento que a gente clicou == target
    //classList.add == adiciona uma classe 
    //classe = selected
    document.getElementById(selectedMenuId).classList.remove("selected") 




    //scroll do menu 
    const offset = selectedMenuId - target;
    boardLeft.scrollTop -= offset * 370;
    boardRight.scrollTop += offset * 370;

  //flex board controll
  flexBoard.classList.add("flex-board-close");
  setTimeout(function () {
    illustration.src = contentList[target-1].img;
    flexBoard.classList.remove("flex-board-close");
    flexBoard.classList.add("flex-board-open");
  }, 500);

  selectedMenuId = target;

}


