function meet()
{
    console.log("We are meeting very soon");
}
function greet(callback)
{
    console.log("Hii , How's the josh");

    console.log("Two and Two makes Four");
}


greet();
meet();






function meet()
{
    console.log("We are meeting very soon");
}
function greet(callback)
{
    console.log("Hii , How's the josh");
    callback();


    console.log("Two and Two makes Four");
}


greet(meet);