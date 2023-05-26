async function medi(cat){
    console.log("funtion called");
var mandivTag=document.createElement("div");
// window.location.href="http://127.0.0.1:5500/viewMed.html"
document.write(cat);
console.log("cat nam "+ cat);
    let res= await fetch("http://localhost:3000/api/product/findProdByCatName/"+cat);
let data = await res.json();
console.log(data);
for (i = 0; i <data.length; i++) {
    var imgTag = document.createElement("img");
    
    var pTag=document.createElement("p");
            var subDvTag=document.createElement("div");
            var pTagValu = document.createTextNode("Name - " + data[i].pname + " " + ", price - " + data[i].price+" Rs");
            
            pTag.appendChild(pTagValu);
    
            imgTag.setAttribute("src", data[i].image);
            imgTag.setAttribute("width", "100px");
            imgTag.setAttribute("height", "100px");
            subDvTag.setAttribute("class", "sbdv");
            imgTag.setAttribute("class", "mgCls");
            mandivTag.setAttribute("class", "mnCls");
            pTag.setAttribute("class", "detl");

            subDvTag.appendChild(imgTag);
            subDvTag.appendChild(pTag);
            mandivTag.appendChild(subDvTag);        
}
            document.getElementsByTagName("body")[0].appendChild(mandivTag);
            
}

        


function chek(l){
console.log("name is "+l);

if(l=="Medicines")
{
    medi();
}
}



    function mseg(){
        var vTag=document.createElement("p");
        var vVal = document.createTextNode("Prescription under verification. You will receive a notification shortly. Add items to cart for easy, error free delivery.");
        vTag.appendChild(vVal);
        document.getElementById("ht").appendChild(vVal);
    }


function shoPr(){
    console.log("view");
}





function bk(){
    window.location.href="http://127.0.0.1:5500/customerhome.html"
}
// var imgTag = document.createElement("img");


// onsole.log(data);
//     for (i = 0; i < data.length; i++) {
//         var divTag = document.createElement("div");
//         var imgTag = document.createElement("img");
//         var imageDetails = document.createElement("span");
//         var imageDetailsValue = document.createTextNode("Name " + data[i].title + " " + "price " + data[i].price);
//         imageDetails.appendChild(imageDetailsValue);

//         imgTag.setAttribute("src", data[i].image)
//         imgTag.setAttribute("width", "100px");
//         imgTag.setAttribute("height", "100px");
//         divTag.setAttribute("class", "myImageData");
//         divTag.appendChild(imgTag);
//         divTag.appendChild(imageDetails);
//         document.getElementsByTagName("body")[0].appendChild(divTag);
// }



// var hTag=document.getElementsByTagName("h2")[0];
// var nod= document.createTextNode("RESULTS");
// hTag.appendChild(nod);