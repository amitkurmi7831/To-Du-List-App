const addbtn = document.querySelector("button");
const input = document.querySelector("input");
const main = document.querySelector(".main");
const my = [];
function rem(name) {
    const to = get()

   let hi = to.filter((i)=>{
    // console.log(name)
    return(!i.includes(name))

  })
  set(hi)
    
  

    
  }

function add(e) {
  const card = document.createElement("div");
  const p = document.createElement("p");
  const btndiv = document.createElement("div");
  const EditBtn = document.createElement("button");
  const RemoveBtn = document.createElement("button");
  card.classList.add("card");
  EditBtn.classList.add("EditBtn");
  RemoveBtn.classList.add("RemoveBtn");
  EditBtn.innerText = "Edit";
  RemoveBtn.innerText = "Remove";
  btndiv.classList.add('btn')
  btndiv.append(EditBtn,RemoveBtn)
  p.innerHTML = e;
  card.append(p, btndiv );
  card.addEventListener('click',(e)=>{
    if (e.target.innerHTML=="Remove") { 
      let  name = p.innerText 
      rem(name.toLocaleLowerCase())
    card.remove()

    } 
  })
  main.append(card)
 
  // btn2.addEventListener('click',(e)=>{
  //   if (e.target.innerHTML=="RemoveBtn") { 
  //     let  name = pera.innerText 
  //     Edit(name.toLocaleLowerCase())
  //     input.value=name
    
  //   } 
  // })
   
 
  // p.append(div);
}

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputvalue = input.value;
  if (!(inputvalue.trim()).length == "0"&& !my.includes(inputvalue)) {
    my.push(inputvalue);
    set(my);
    

    add(inputvalue);

    input.value = "";


  }
});


function set(my) {localStorage.setItem("inputData", JSON.stringify(my));}

function get() {return JSON.parse(localStorage.getItem("inputData"));}

function flter() {
  const Items = get();
  Items.forEach((Item) => {
    add(Item);
    my.push(Item);
  })
  }

flter()





