const btn = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector(".main");
const my = [];

function add(e) {
  const pera = document.createElement("p");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const div = document.createElement("div");
  function rem(name) {
    const to = get()

   let hi = to.filter((i)=>{
    // console.log(name)
    return(!i.includes(name))

  })
  set(hi)
    
  }
 
  div.classList.add("card");
   
  btn1.classList.add("btn1");
  btn1.setAttribute('onclick', "console.log(e)");
  btn2.classList.add("btn2");
  btn1.innerHTML = "Remove";
  btn2.innerHTML = "Edit";
  pera.innerHTML = e;
  div.append(pera, btn1, btn2);
  btn1.addEventListener('click',(e)=>{
    if (e.target.innerHTML=="Remove") { 
      let  name = pera.innerText 
      rem(name.toLocaleLowerCase())
    div.remove()
    } 
  })
  // btn2.addEventListener('click',(e)=>{
  //   if (e.target.innerHTML=="Edit") { 
  //     let  name = pera.innerText 
  //     Edit(name.toLocaleLowerCase())
  //     input.value=name
    
  //   } 
  // })
 
  p.append(div);
}

btn.addEventListener("click", (e) => {
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





