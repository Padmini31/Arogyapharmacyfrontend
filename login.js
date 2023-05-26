function logInfo() {
    var emailValue = document.getElementById("email").value;

    var psswdValue = document.getElementById("psswd").value;

    var adminValue = document.getElementsByName("tou")[0].checked;

    var custValue = document.getElementsByName("tou")[1].checked;


    var supValue = document.getElementsByName("tou")[2].checked;
    console.log("values", adminValue, custValue, supValue);

    var usrVal;
    if (adminValue) {
        usrVal = "admin";
    }
    if (custValue) {
        usrVal = "customer";
    }

    if (supValue) {
        usrVal = "supplier";
    }

    // console.log(usrVal);
    let log = { emailid: emailValue, password: psswdValue, typeofuser: usrVal };
    console.log(log);
    fetch("http://localhost:3000/api/login/signin", {
        method: "post",
        body: JSON.stringify(log),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(result => {    //here taking body data in the form of text.we dont want whole part including header.we oly need the json part.
        // document.getElementById("msg").innerHTML=result.msg;
        if (result.msg == "Admin login successfully") {
            window.location.href = "http://127.0.0.1:5500/adminhome.html";
        }
        else if (result.msg == "Customer login successfully") {
            // console.log("welcome to profile");
            window.location.href = "http://127.0.0.1:5500/profile.html"

        }
        else if (result.msg == "Supplier login successfully") {
            window.location.href = "http://127.0.0.1:5500/suppy.html"
        }

        else {
            document.getElementById("msg").innerHTML = result.msg;
        }
    }).catch(err => console.log("error occure" + err));

}



function sigupInfo() {
    var emailValue = document.getElementById("email").value;

    var psswdValue = document.getElementById("psswd").value;

    var adminValue = document.getElementsByName("tou")[0].checked;

    var custValue = document.getElementsByName("tou")[1].checked;
    var usrVal;
    if (adminValue) {
        usrVal = "admin";
    }
    if (custValue) {
        usrVal = "customer";
    }
    let login = { emailid: emailValue, password: psswdValue, typeofuser: usrVal };
    // console.log(login);
    fetch("http://localhost:3000/api/login/signup", {
        method: "post",
        body: JSON.stringify(login),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.text()).then(result => console.log("result login",result))
    .catch(er=>console.log(er)) ;   //here taking body data in the form of text.we dont want whole part including header.we oly need the json part).catch(err => console.log(err));

}

function logOut() {
    window.location.href = "http://127.0.0.1:5500/index.html"
}

function main() {
    window.location.href = "http://127.0.0.1:5500/adminhome.html"
}

async function loadCusDat() {  //onload function=when that page will get load ,as soon as ,this functo shu be executed
    let result = document.getElementById("result");
    // window.location.href="http://127.0.0.1:5500/adminhome.html"

    let resp = await fetch("http://localhost:3000/api/customer/FindAllCustomer");
    let data = await resp.json();
    result.innerHTML = data.map(obj => "<li>" + "Customer Id - " + obj._id + ", Customer Name - " + obj.cname + "</li>").join("<br/>");

    console.log(data);
}

async function searchCust() {
    let result = document.getElementById("result");
    let fname = document.getElementById("fname").value;

    let resp = await fetch("http://localhost:3000/api/customer/findCustomerByName/" + fname);
    let data = await resp.json();
    if (data.length == 0) {
        result.innerHTML = "No Customer present";
    }
    else {
        result.innerHTML = data.map(obj => "<li>" + "Customer Id - " + obj._id + ", Customer Name - " + obj.cname + "</li>").join("<br/>");

    }
}





//storecustok
async function storcus() {

    var nameValue = document.getElementById("na").value;
    // var idValue = document.getElementById("no").value;
    var gValue = document.getElementById("g").value;

    var contacVal = document.getElementById("n").value;
    var aVal = document.getElementById("a").value;


    var respo = await fetch("http://localhost:3000/api/rec/show");
    // console.log("fetch daata log in", respo);
    var mdata = await respo.json();
    l=mdata.length;
    console.log("data login rec", mdata[l-1]);
    
    d=mdata[l-1].cid;
    console.log(d);
    
    let prod = { _id:d,cname: nameValue, gender: gValue, contact_Num: contacVal, address: aVal };
    console.log(prod);
    fetch("http://localhost:3000/api/customer/storeCustomer", {
        method: "post",
        body: JSON.stringify(prod),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.text()).then(res => {
        document.getElementById("ms").innerHTML = res;
        document.getElementById("m").innerHTML = "RECORD STORED Profile creatd";
        // window.location.href = "http://127.0.0.1:5500/disp.html"

    }).catch(er => console.log("err ", er));


}


function add() {
    var idValue = document.getElementById("_id").value;

    var nameValue = document.getElementById("name").value;

    var categoValue = document.getElementById("cat").value;
    var qtyValue = document.getElementById("qty").value;

    var pricValue = document.getElementById("prc").value;

    var imgValue = document.getElementById("im").value;
    var desValue = document.getElementById("i").value;



    let prod = { _id: idValue, pname: nameValue, category: categoValue, qty: qtyValue, price: pricValue, image: imgValue, description: desValue };
    fetch("http://localhost:3000/api/product/StoreProduct", {
        method: "post",
        body: JSON.stringify(prod),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.text()).then(result => {    //here taking body data in the form of text.we dont want whole part including header.we oly need the json part.
        document.getElementById("msg").innerHTML = result;
    }).catch(err => console.log(err));

}



async function dem() {
    var h = document.getElementById("he");
    var imageDetails = document.createElement("img");


    let result = document.getElementById("msg");
    let re = document.getElementById("med").value;

    let res = await fetch("http://localhost:3000/api/product/findProdByNam/" + re);
    let data = await res.json();
    if (data.length == 0) {
        result.innerHTML = "No Product present";
    }
    else {
        b = document.getElementById("imag");
        y = document.getElementById("imag").children[0];
        z = document.getElementById("imag").children[1];
        // console.log("y value", y);
        if (y != null | z != null) {
            b.removeChild(y);
            b.removeChild(z);
            console.log("not null");
        }

        imageDetails.setAttribute("src", data.map(ob => ob.image));

        imageDetails.setAttribute("width", "219px");
        imageDetails.setAttribute("height", "200px");

        h.innerHTML = "RESULTS";
        result.innerHTML = data.map(obj => "product Id - " + obj._id + ", product Name - " + obj.pname + ", product price - " + obj.price + " Rs" + ", category - " + obj.category);
        document.getElementById("imag").appendChild(imageDetails);

    }
}


// async function cate() {

//     // var pieTag = document.createElement("p");

//     // var viVal = document.createTextnode("Prescription under verification. You will receive a notification shortly. Add items to cart for easy, error free delivery.");
//     // pieTag.appendChild(viVal);
//     // document.getElementById("ppTg").appendChild(pieTag);


//     var m = 0;
//     let res = await fetch("http://localhost:3000/api/productCat/findAllCategoProd");
//     let data = await res.json();

//     var mainTag = document.getElementById("contan");
//     var diet = document.createElement("h2");

//     diet.setAttribute("class", "titl");
//     var dietValu = document.createTextNode("Shop By category");
//     diet.appendChild(dietValu);
//     mainTag.appendChild(diet);
//     for (i = 0; i < 4; i++) {

//         var ros = document.createElement("div");
//         if (i == 3) {
//             ros.setAttribute("class", "lrows");
//         }
//         else {
//             ros.setAttribute("class", "rows");
//         }


//         mainTag.appendChild(ros);

//         for (j = 0; j < 6; j++) {
//             // var aTag= document.createElement("a");
//             // aTag.setAttribute("href","http://127.0.0.1:5500/viewProduct.html");
//             var subDiv = document.createElement("div");
//             if (i == 3 && j == 4) {
//                 break
//             }

//             ros.appendChild(subDiv);
//             if (i == 3) {
//                 subDiv.setAttribute("class", "lDivs");
//             }
//             else {
//                 subDiv.setAttribute("class", "smalDivs");
//             }


//             var pTag = document.createElement("p");
//             // console.log(data[m].categoryName);
//             // console.log(data[m]);
//             var pTgVal = document.createTextNode(data[m].categoryName);
//             var imgTag = document.createElement("img");

//             imgTag.setAttribute("class", "imgCls");
//             imgTag.setAttribute("src", data[m].image);
//             pTag.appendChild(pTgVal);
//             subDiv.appendChild(imgTag);
//             // pTag.setAttribute("class","catNm");
//             subDiv.appendChild(pTag);

//             m++;
//         }
//         if (i == 0) {
//             var diet = document.createElement("h2");

//             diet.setAttribute("class", "title");
//             var dietValu = document.createTextNode("Diet,nutrition & wellness");
//             diet.appendChild(dietValu);
//             mainTag.appendChild(diet);
//         }

//         if (i == 1) {
//             var diet = document.createElement("h2");

//             diet.setAttribute("class", "title");
//             var dietValu = document.createTextNode("Health Care");
//             diet.appendChild(dietValu);
//             mainTag.appendChild(diet);
//         }


//         if (i == 2) {
//             var diet = document.createElement("h2");

//             diet.setAttribute("class", "title");
//             var dietValu = document.createTextNode("Covid Essentials");
//             diet.appendChild(dietValu);
//             mainTag.appendChild(diet);
//         }


//     }
// }


function upPctnam() {
    var idVal = document.getElementById("_id").value;
    var catVal = document.getElementById("ca").value;
    // var imgVal = document.getElementById("imag").value;
    let pro = { _id: idVal, categoryName: catVal };
    console.log(pro);

    fetch("http://localhost:3000/api/productCat/UpdateCategoProd", {
        method: "PATCH",
        body: JSON.stringify(pro),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(dis => {
        document.getElementById("ms").innerHTML = dis
    }).catch(err => console.log("error cosed " + err));
}



function updImg() {
    var idVal = document.getElementById("id").value;
    var imgVal = document.getElementById("imga").value;
    // var imgVal = document.getElementById("imag").value;
    let pr = { _id: idVal, image: imgVal };
    console.log(pr);

    fetch("http://localhost:3000/api/productCat/UpdateProdImag", {
        method: "PATCH",
        body: JSON.stringify(pr),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(dis => {
        document.getElementById("mymsg").innerHTML = dis
    }).catch(err => console.log("error cosed " + err));
}



async function ctgry() {
    var catVal = document.getElementById("cv").value;
    console.log(catVal);
    var ufg = document.getElementById("ftg");

    ufg.setAttribute("class", "mnCls");
    // var respo = await fetch("http://localhost:3000/api/product/findProdByCatName/" + catVal);

    var respo = await fetch("http://localhost:3000/api/product/findProdByCatName/" + catVal);

    var mdata = await respo.json();
    console.log("cat name prod ", mdata);
    var rte = document.getElementById("result");
    if (mdata.length == 0) {
        rte.innerHTML = "NO product found matched with this category";

    }

    else {

        console.log("Produt foun");
        console.log(mdata.length);

        // window.location.href="http://127.0.0.1:5500/viewMed.html"
        // document.write(catVal);
        for (i = 0; i < mdata.length; i++) {
            var imgTag = document.getElementsByClassName("mgCls")[i];
            var pTag = document.getElementsByClassName("detl")[i];
            // var conTag = document.getElementsByClassName("j")[i];
            var subDvTag = document.getElementsByClassName("ftgcls")[i];
            var dtaa = mdata.map(obj => "Id - " + obj._id + "," + "Name - " + obj.pname + ", category- " + obj.category + " , Price - " + obj.price + " Rs");
            console.log(dtaa);
            console.log(dtaa[i]);

            // var s=conTag.children[1];
            rte.innerHTML = "RESULTS"
            pTag.innerHTML = dtaa[i];
            //    var old=conTag.children[1];
            // console.log("old");
            // console.log(s);
            // var fstlyn=old.previousSibling;
            // console.log(fstlyn);
            // pTag.appendChild(pTagValu);
            // pTag.subDvTag.removeChild(pTag.previousELSibling);

            imgTag.setAttribute("src", mdata[i].image);
            imgTag.setAttribute("width", "100px");
            imgTag.setAttribute("height", "100px");


            //css 

            subDvTag.style.backgroundColor = "";
            ufg.style.width = "100%";
            ufg.style.height = "auto";
            ufg.style.display = "flex";

            ufg.style.flexWrap = "wrap";
            ufg.style.justifyContent = "center";


            ufg.style.alignItems = "center";
            subDvTag.style.width = "25%";

            subDvTag.style.height = "auto";
            subDvTag.style.padding = "8px";
            subDvTag.style.margin = "20px";
            subDvTag.style.backgroundColor = "pink";
            imgTag.style.width = "89%";

            imgTag.style.border = "1px solid black";
            imgTag.style.height = "250px";
            // imgTag.style.marginLeft = "23%";
            imgTag.style.marginLeft = "6%";
            imgTag.style.marginTop = "3%";
            // imgTag.style.marginBottom = "0%";
            subDvTag.style.border = "3px solid purple";
            pTag.style.border = "1px solid green";
            pTag.style.padding = "4px";
            // subDvTag.style.height = "auto";

            pTag.style.textAlign = "center";
            // document.querySelector(".ftgcls").style.backgroundColor ="orange



        }

    }
}



//             // window.location.href = "http://127.0.0.1:5500/viewMed.html"
//     }}
// var nam=catVal;
// }
// chek(nam);

// else if (catVal == "Masks") {
//     window.location.href = "http://127.0.0.1:5500/viewMed.html"
// }
// else if (catVal == "Healthcare devices") {
//     window.location.href = "http://127.0.0.1:5500/viewMed.html"
// }
// else if (catVal == "Ayurveda") {
//     window.location.href = "http://127.0.0.1:5500/viewMed.html"
// }
// else if (catVal == "Pain relief") {
//     window.location.href = "http://127.0.0.1:5500/viewMed.html"
// }
// else if (catVal == "Cold & cough") {
//     window.location.href = "http://127.0.0.1:5500/viewMed.html"
// }
// else if (catVal == "Diabetic care") {
//     window




function thn() {
    var nTag = document.createElement("p");
    var nVal = document.createTextNode("Prescription under verification. You will receive a notification shortly. Add items to cart for easy, error free delivery.");
    nTag.appendChild(nVal);
    document.getElementById("noti").appendChild(nTag);
}


function dis() {
    window.location.href = "http://127.0.0.1:5500/viewProduct.html"
}

async function byid() {

    var catVal = document.getElementById("fcv").value;
    console.log(catVal);


    // ufg.setAttribute("class", "mnCls");
    var respo = await fetch("http://localhost:3000/api/product/findProdById/" + catVal);

    var mdata = await respo.json();

    console.log("data is");
    console.log(mdata);
    var reTg = document.getElementById("res");
    if (mdata.length == 0) {
        reTg.innerHTML = "NO product found matched with this category";

    }

    else {

        console.log("Produt foun");
        console.log(mdata.length);

        var imgTag = document.getElementById("imgId");
        var pTag = document.getElementById("det");

        var imgDet = mdata.map(obj => "Id - " + obj._id + "," + "Name - " + obj.pname + ", category- " + obj.category + " , Price - " + obj.price + " Rs");

        console.log(mdata[0].image);
        // console.log(dtaa[0].image);

        // var s=conTag.children[1];
        reTg.innerHTML = "RESULTS"


        //    var old=conTag.children[1];
        // console.log("old");
        // console.log(s);
        // var fstlyn=old.previousSibling;
        // console.log(fstlyn);

        // pTag.subDvTag.removeChild(pTag.previousELSibling);

        h = document.createElement("p");



        pTag.innerHTML = imgDet;

        imgTag.setAttribute("src", mdata[0].image);
        imgTag.setAttribute("width", "230px");
        imgTag.setAttribute("height", "208px");

        //css 


        t.style.margin = "9px";

        divTag.style.width = "60%";

        divTag.style.height = "328px";
        divTag.style.padding = "20px";

        divTag.style.backgroundColor = "pink";
        imgTag.style.width = "89%";

        imgTag.style.border = "1px solid black";
        imgTag.style.height = "250px";
        imgTag.style.marginLeft = "6%";
        imgTag.style.marginTop = "1%";
        divTag.style.border = "1px solid purple";
        pTag.style.border = "1px solid green";
        pTag.style.padding = "10px";
        // document.querySelector(".ftgcls").style.backgroundColor ="orange"

        // b = document.createElement("br");


    }

}


async function delp() {
    d = document.getElementById("dp").value;
    console.log("id", d);
    var respo = await fetch("http://localhost:3000/api/product/DeleteProduct/" + d);
    console.log("fetch daata", respo);
    var mdata = await respo.json();
    console.log("delete produt recsult", mdata);


}


async function shwId() {
    var respo = await fetch("http://localhost:3000/api/rec/show");
    // console.log("fetch daata log in", respo);
    var mdata = await respo.json();
    l=mdata.length;
    console.log("data login rec", mdata[l-1]);
    
    d=mdata[l-1].cid;
    console.log(d);
    document.getElementById("d").innerHTML=d;


    var fcus = await fetch("http://localhost:3000/api/customer/FindAllCustomer");

    var mdat = await fcus.json();
    console.log("custom arra", mdat);
    for(i=0;i<mdat.length;i++){
        if(mdat[i]._id==d){
            console.log("id is sam",mdat[i]);
            window.location.href = "http://127.0.0.1:5500/disp.html"
        }
    }

}