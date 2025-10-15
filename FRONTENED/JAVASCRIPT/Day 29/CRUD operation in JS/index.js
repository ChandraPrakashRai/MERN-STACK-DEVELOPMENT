            //  create element
      const newElem =  document.createElement("h2");
      newElem.textContent = "Deewali is Coming ";

    //    select element

     const elem = document.getElementById("first");
     elem.before(newElem);
  

    //  create another element 

    const newElem2 = document.createElement("h3");
    newElem2.textContent = " Deewali aa rhi hai ";
    newElem2.id="second"; // id bhi de skte hai  

    elem.after(newElem2);
    //  select kro 
  const elem2 =   document.getElementById("second");
  elem2.after(newElem2);
    elem2.style.backgroundColor = "yellow";
    elem2.style.color = "aqua";
    elem2.style.fontSize = "40px";

// create list element

const list = document.createElement("li");
list.textContent = "Milk";
const list1 = document.createElement("li");
list1.textContent = "Tea";
const list2 = document.createElement("li");
list2.textContent = "Tulip";

const list3 = document.createElement("li");
list3.textContent = "Gulab Jamun";





//  select

const unorderedElement = document.getElementById("listing");
    unorderedElement.append(list);

    unorderedElement.append(list1);

    unorderedElement.append(list2);

    // prepend() starting me dal dega
    unorderedElement.prepend(list3);

    //   NEW LIST CREATION USING LOOP

    var arr = ["Milk", "Paneer", "Cheese", "Butter", "Curd", "Ghee", "Chocolate Milk", "Flavored Milk", "Yogurt", "Khoa"] ;

    const unordered = document.getElementById("items");

    for(let food  of arr)
    {
        const list = document.createElement("li");
        list.textContent = food;
        unordered.append(list);
    }


