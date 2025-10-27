// create element



// const header1 = document.createElement("h1");
// header1.textContent = "Hello";
// document.body.append(header1);

//  const h1 = document.createElement("h1");

//  h1.textContent = "Hello EveryOne";
//  h1.style.backgroundColor = "blue";
//  h1.style.fontSize = "45px";
//  h1.style.color = "white";

//  const h2 = document.createElement("h2");

//  h2.textContent = "Welcome to React Course";
//  h2.style.backgroundColor = "black";
//  h2.style.fontSize = "45px";
//  h2.style.color = "Yellow";


//  document.body.append(h1);
//  document.body.append(h2);

//  the above way is quite lengthy to create eleemnts

//   styles =  color: "white",backgroundColor: "black",fontSize: "40px"
const React = {
    createElement : function(tag , styles , children)
    {
        
        const element = document.createElement(tag);
        element.innerText = children;
        for(let key in styles)
        {
            // format smjho kaise style kam krta hai alreday hmne dekh rkh ahai 
            //  element.style.color = "red";  // aise hi kam krta hai thik n 
            element.style[key] = styles[key];
            // upar vala ine  aisa kam krega       element.style[key] = element.style.color 
        }
        return element;
    }
}

const header1 = React.createElement("h1" , {color: "white",backgroundColor: "yellow",fontSize: "40px"} , "Hii ");
const header2 = React.createElement("h2" , {} , " hello");
const header3 = React.createElement("h3" , {} , "Welcome");



const root = document.querySelector(".root");


// =============== Mini ReactDOM ==================
const ReactDOM = {
    render: function (element, root) {
        root.appendChild(element);
    }
};
ReactDOM.render(header1, root);
ReactDOM.render(header2, root);
ReactDOM.render(header3, root);



// const root = document.querySelector(".root");
// root.appendChild(header1);
// root.appendChild(header2);
// root.appendChild(header3);
