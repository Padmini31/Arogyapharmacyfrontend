
function dsip() {

    // let arra = [2, 4, 5];
    var s = document.createElement("img");
    var b = document.createElement("img");
    s.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfL7YI3PVz0Fj3z_JxnEowzp8L3DosD7gGfWmLmYOCKA&usqp=CAU&ec=48665698");
    b.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJYJDeg7q2HAAoCe-YWuGQ1zNByl_5_-EhIAAAsHJbw&usqp=CAU&ec=48665698");
    var n = document.getElementById("m");
    var dn = document.getElementById("nu").value;
    // var v = document.createElement("div");
    if (dn == "f") {
        n.appendChild(s);

        // n.innerHTML =s; 
    }
    else {
        n.setAttribute("src", "");
        n.appendChild(b);
    }
}
