// function viuPic(){
//     for(i=0;i<7;i++){

// var aTag=document.createElement("a");
// var imTag=document.createElement("img");
// aTag.setAttribute("class","acl");
// var divTag=document.createElement("div");
// divTag.setAttribute("class","dic");
// imTag.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJYJDeg7q2HAAoCe-YWuGQ1zNByl_5_-EhIAAAsHJbw&usqp=CAU&ec=48665698");
// divTag.appendChild(imTag);
// aTag.setAttribute("href","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYVSJn44S0NlrSHznz6HEAySMh4-POhC_mQdXuGTdmg&usqp=CAU&ec=48665698");
// aTag.appendChild(divTag);
// document.getElementsByTagName("body")[0].appendChild(aTag);
// }


function abc() {

    let bTg = document.getElementById("big");
    var s = bTg.firstElementChild;
    console.log(s);
    document.bTg.removeChild(bTg.firstElementChild);
    // console.log(s);
}


//HOW to remove first elemet child or childs of div
function ab() {

    let bTg = document.getElementById("big");
    var old = bTg.children[1];
    console.log(old);

    bTg.removeChild(old.previousElementSibling);
}

function exp() {
    let bTg = document.getElementById("dvs");
    console.log(bTg.children[0]);
    console.log(bTg.children[1]);
    console.log(bTg.children[2]);
    // console.log(bTg.firstElementChild.innerHTML="apple")

}

function ex() {
    a = document.getElementById("dvs");
    console.log(a);
    for (i = 0; i < 4; i++) {
        b = a.children[i];
        console.log("b ", b);
        let iTa = document.createElement("input");
        b.innerHTML = iTa;

    }

}
//To remove a particular child of a element.
function p() {
    a = document.getElementById("dvs");
    c = a.children;
    console.log(c[0]);
    //  a.removeChild(c[1]);
    // console.log("a nod", a);
    // a.removeChild(c);
    // console.log("a nood", a);
}
//remove a child
function k() {
    a = document.getElementsByTagName("div")[0];

    b = document.getElementsByTagName("div")[0].lastElementChild;
    a.removeChild(b);
    // console.log("a last child", a);
}

function sem() {
    a = document.getElementsByTagName("table")[0];

    console.log("table my", a);
    trt = document.createElement("tr");
    // dt = createElement("td");
    console.log("tr tage", trt);//
    for(i=0;i<3;i++){
        tr = document.createElement("tr");
        
        document.getElementsByTagName("table")[0].appendChild(tr);
    }


}

function ps(){
    f=document.getElementById("dvs");
    console.log("value i",f);
    f.removeChild(f.children);
}