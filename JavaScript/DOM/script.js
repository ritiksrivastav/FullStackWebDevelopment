var add = document.getElementsByTagName("button")[0];
var key = document.getElementsByName("inp")[0];
add.addEventListener("click",function(){
    var inp = document.getElementsByName("inp")[0];
    if(inp.value.length>0){
        var li = document.createElement("li");
    var text = document.createTextNode(inp.value);
    li.appendChild(text);
    document.getElementsByTagName("ul")[0].appendChild(li);
    inp.value="";
    }else{
        console.log("Empty Input");
    }
})
key.addEventListener("keypress",function(event){
    console.log(event);
    var inp = document.getElementsByName("inp")[0];
    if(inp.value.length>0&&event.key==="Enter"){
        var li = document.createElement("li");
    var text = document.createTextNode(inp.value);
    li.appendChild(text);
    document.getElementsByTagName("ul")[0].appendChild(li);
    inp.value="";
    }else{
        console.log("Empty Input");
    }
})