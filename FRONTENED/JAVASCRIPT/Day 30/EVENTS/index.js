// function  handleClick()
// {
//         const elem = document.getElementById("first");
//         elem.textContent = "Prepairing For Job Interview";
//         elem.style.color = "yellow";
// }

const element = document.getElementById("first");


// element.onclick = function handleClick()
// {
//     element.textContent = "Happy Learning...:D";
    
// }

//  EVENT LISTENER

// element.addEventListener('mouseenter' , ()=>{
//     element.textContent = "Hello ji";
// })
// element.addEventListener('mouseleave' , ()=>{
//     element.style.color = "yellow";
//     element.style.backgroundColor = "Pink";
// })
 

// const child1 = document.getElementById("child1");

// child1.addEventListener('click' , ()=>{
//     child1.textContent = "I am Clicked..";
//     child1.style.color = "blue";
// }) 

//  ak for loop ka use krke ak ak krke sare parents ke children pe 
// eventListener ka property laga lenge 

const parent = document.getElementById("parent");
console.log(parent.children);


for(let child of parent.children)
{
    console.log(child);
    child.addEventListener('click', ()=>{
        child.textContent = " I am Clicked..";
    })
}