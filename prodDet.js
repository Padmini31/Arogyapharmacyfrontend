async function tab() {
    var respo = await fetch("http://localhost:3000/api/product/findAlProd");

    var mdata = await respo.json();
    l = mdata.length;
    tb = document.getElementsByTagName("table")[0];
    console.log(l);
    for (i = 0; i < l; i++) {
        trt = document.createElement("tr");
        trt.style.border = "1px solid black";
        console.log("tr tag", trt);
        for (j = 0; j < 5; j++) {
            ht = document.getElementsByTagName("th")[j];
            console.log("th tag", ht);
            ht.style.border = "1px solid black";
            tdt = document.createElement("td");
            trt.appendChild(tdt);
            tdt.style.border = "1px solid black";
        }
        tb.appendChild(trt);
    }
    tb.style.border = "1px solid black";


    for (i = 0; i < l; i++) {
        idVa = mdata[i]._id;
        nVal = mdata[i].pname;
        qVal = mdata[i].qty;
        pVa = mdata[i].price;
        cVal = mdata[i].category;
        // imVal = mdata[i].image;
        tb.children[i + 1].children[0].innerHTML = idVa;
        console.log("id val", idVa);
        tb.children[i + 1].children[1].innerHTML = nVal;
        tb.children[i + 1].children[2].innerHTML = qVal;
        tb.children[i + 1].children[3].innerHTML = pVa + "Rs";
        tb.children[i + 1].children[4].innerHTML = cVal;
    }


}



async function disp() {
    var respo = await fetch("http://localhost:3000/api/productRequest/finprodReq");

    var mdata = await respo.json();
    l = mdata.length;
    tb = document.getElementsByTagName("table")[0];
    console.log(l);

    for (i = 0; i < l; i++) {
        trt = document.createElement("tr");
        trt.style.border = "1px solid black";
        console.log("tr tag", trt);
        for (j = 0; j < 3; j++) {
            ht = document.getElementsByTagName("th")[j];
            console.log("th tag", ht);
            ht.style.border = "1px solid black";
            tdt = document.createElement("td");
            trt.appendChild(tdt);
            tdt.style.border = "1px solid black";
        }
        tb.appendChild(trt);
    }
    tb.style.border = "1px solid black";


    for (i = 0; i < l; i++) {
        idVa = mdata[i]._id;
        nVal = mdata[i].requestNo;
        qVal = mdata[i].pharmacy_Address;

        tb.children[i + 1].children[0].innerHTML = idVa;
        console.log("id val", idVa);
        tb.children[i + 1].children[1].innerHTML = nVal;
        tb.children[i + 1].children[2].innerHTML = qVal;
    }
}


async function storrq() {
    console.log("storrq func calld");

    nVal = document.getElementById("id").value;
    dVal = document.getElementById("rno").value;
    pVal = document.getElementById("pa").value;

    console.log(nVal);
    console.log(dVal);
    console.log(pVal);

    // document.nextSibling

    proVa = { _id: nVal, requestNo: dVal, pharmacy_Address: pVal };
    console.log(proVa);

    fetch("http://localhost:3000/api/productRequest/StoreproductRequest", {
        method: "post",
        body: JSON.stringify(proVa),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(re => console.log("store prod re api", re)).catch(err => console.log("error cosed " + err));

}



async function buy() {
    var respo = await fetch("http://localhost:3000/api/product/findAlProd");

    var mdata = await respo.json();
    l = mdata.length;
    tb = document.getElementsByTagName("table")[0];
    console.log(l);
    // console.log("image of objst", mdata[0].image);
    for (i = 0; i < l; i++) {
        trt = document.createElement("tr");
        trt.style.border = "1px solid black";
        console.log("tr tag", trt);
        for (j = 0; j < 6; j++) {
            ht = document.getElementsByTagName("th")[j];
            console.log("th tag", ht);
            ht.style.border = "1px solid black";
            console.log("j vlue", j);
            if (j != 5) {
                tdt = document.createElement("td");
                tdt.style.border = "1px solid black";
                trt.appendChild(tdt);
            }
            else {

                imt = document.createElement("img");

                imt.setAttribute("src", mdata[i].image);
                console.log("tag image", imt);
                tdt = document.createElement("td");
                tdt.appendChild(imt);
                console.log("tdt insie j ", tdt);
                trt.appendChild(tdt);
            }

        }
        tb.appendChild(trt);
    }
    tb.style.border = "1px solid black";

    for (i = 0; i < l; i++) {
        idVa = mdata[i]._id;
        nVal = mdata[i].pname;
        qVal = mdata[i].qty;
        pVa = mdata[i].price;
        cVal = mdata[i].category;
        imVal = mdata[i].image;
        console.log("image al", imVal);
        tb.children[i + 1].children[0].innerHTML = idVa;
        console.log("id val", idVa);
        tb.children[i + 1].children[1].innerHTML = nVal;
        tb.children[i + 1].children[2].innerHTML = qVal;
        tb.children[i + 1].children[3].innerHTML = pVa + "Rs";
        tb.children[i + 1].children[4].innerHTML = cVal;
        // tb.children[i + 1].children[5].innerHTML = imVal;


    }

}

async function ord() {


    s = document.getElementById("qs").value;
    v = document.getElementById("pi").value;

    var respo = await fetch("http://localhost:3000/api/product/findProdById/" + v);
    var mdata = await respo.json();
    onj = mdata[0];
    console.log(onj);
    a = onj.pname;
    c = onj.description;
    e = onj.price;
    f = onj.category;

    //ggeting cust id of login

    respo = await fetch("http://localhost:3000/api/rec/show");
    
    var mdata = await respo.json();
    l = mdata.length;
    console.log("data login rec", mdata[l - 1]);

    d = mdata[l - 1].cid


    pro = { item: a, Orqty: s, description: c, price: e, product_category: f,cust:d};
    console.log(pro);

    fetch("http://localhost:3000/api/orderItems/Storeorderitemsdetail", {
        method: "post",
        body: JSON.stringify(pro),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(re => re.text()).then(re => {
        document.getElementById("ms").innerHTML = re;
    }).catch(err => {
        document.getElementById("ms").innerHTML = err;
    });
}



async function vordr() {
    var respo = await fetch("http://localhost:3000/api/orderItems/getorderitemsdetail");

    var mdata = await respo.json();
    l = mdata.length;
    tb = document.getElementsByTagName("table")[0];
    console.log(l, mdata);
    for (i = 0; i < l; i++) {
        trt = document.createElement("tr");
        trt.style.border = "1px solid black";
        console.log("tr tag", trt);
        for (j = 0; j < 7; j++) {
            ht = document.getElementsByTagName("th")[j];
            console.log("th tag", ht);
            ht.style.border = "1px solid black";
            tdt = document.createElement("td");
            trt.appendChild(tdt);
            tdt.style.border = "1px solid black";
        }
        tb.appendChild(trt);
    }
    tb.style.border = "1px solid black";


    for (i = 0; i < l; i++) {
        console.log("mdaat is", mdata[i]);
        itVa = mdata[i].item;
        oVal = mdata[i].Orqty;
        dVal = mdata[i].description;
        cVa = mdata[i].product_category;
        nVal = mdata[i].ordNum;
        qVal = mdata[i].cust;
        console.log("or no.", nVal);
        console.log("custid.", qVal);
        pVal = mdata[i].price;
        tb.children[i + 1].children[0].innerHTML = itVa;

        tb.children[i + 1].children[1].innerHTML = oVal;
        tb.children[i + 1].children[2].innerHTML = dVal;
        tb.children[i + 1].children[3].innerHTML = pVal + " Rs";
        tb.children[i + 1].children[4].innerHTML = cVa;
        tb.children[i + 1].children[5].innerHTML = nVal;
        tb.children[i + 1].children[6].innerHTML = qVal;
    }


}





async function storOdr() {

    a = document.getElementById("no").value;
    b = document.getElementById("d").value;
    c = document.getElementById("cid").value;
    e = document.getElementById("dd").value;
    f = document.getElementById("t").value;
    pro = { ordrNum: a, ordrDt: b, custId: c, deliveryDt: b, deliveryTime: f };
    console.log(pro);

    fetch("http://localhost:3000/api/order/Storeorder", {
        method: "post",
        body: JSON.stringify(pro),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(re => re.text()).then(re => {
        document.getElementById("ms").innerHTML = re;
    }).catch(err => {
        document.getElementById("ms").innerHTML = err;
    });

}


async function shwOd() {
    //onload function=when that page will get load ,as soon as ,this functo shu be executed
    // let result = document.getElementById("result");
    // // window.location.href="http://127.0.0.1:5500/adminhome.html"

    // let resp = await fetch("http://localhost:3000/api/customer/FindAllCustomer");
    // let data = await resp.json();
    // result.innerHTML = data.map(obj => "<li>" + "Customer Id - " + obj._id + ", Customer Name - " + obj.cname + "</li>").join("<br/>");


    var respo = await fetch("http://localhost:3000/api/order/findAlorder");
    var mdata = await respo.json();
    dat = mdata.map(x => "Order No.-" + x.ordrNum + ", Order Date-" + x.ordrDt + ", CustId-" + x.custId + ", Delivery Date-" + x.deliveryDt + ", Delivery Time-" + x.deliveryTime);
    console.log("array lis is", dat.length);

    console.log(dat);
    let result = document.getElementById("re");
    re.innerHTML = dat;
}


async function shCat() {
    var respo = await fetch("http://localhost:3000/api/productCat/findAllCategoProd");

    var mdata = await respo.json();
    l = mdata.length;
    tb = document.getElementsByTagName("table")[0];
    console.log(l);
    // console.log("image of objst", mdata[0].image);
    for (i = 0; i < l; i++) {
        trt = document.createElement("tr");

        console.log("tr tag", trt);
        for (j = 0; j < 3; j++) {

            console.log("j vlue", j);
            if (j != 2) {
                tdt = document.createElement("td");
                trt.appendChild(tdt);
            }
            else {

                imt = document.createElement("img");
                imt.setAttribute("src", mdata[i].image);
                imt.setAttribute("class", "mg");
                console.log("tag image", imt);
                tdt = document.createElement("td");
                tdt.appendChild(imt);
                console.log("tdt insie j ", tdt);
                trt.appendChild(tdt);
            }

        }
        tb.appendChild(trt);
    }

    for (i = 0; i < l; i++) {
        idVa = mdata[i]._id;
        nVal = mdata[i].categoryName;
        imVal = mdata[i].image;

        console.log("image al", imVal);
        tb.children[i + 1].children[0].innerHTML = idVa;
        console.log("id val", idVa);
        tb.children[i + 1].children[1].innerHTML = nVal

    }

}


async function myfub() {

    pro = { cid: 4 };

    fetch("http://localhost:3000/api/rec/storlog", {
        method: "post",
        body: JSON.stringify(pro),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(re => re.json()).then(re => console.log(re)).catch(err => console.log(err));

    //     console.log("logre functioncalld");
    //     var s = await fetch("http://localhost:3000/api/rec/show");
    //     var d = await s.json();
    //     console.log("resul ", d);
}


async function shwId() {
    var respo = await fetch("http://localhost:3000/api/rec/show");
    // console.log("fetch daata log in", respo);
    var mdata = await respo.json();
    l=mdata.length;
    console.log("data login rec", mdata[l-1]);
    
    d=mdata[l-1].cid;
    console.log(d);
    // document.getElementById("j").innerHTML=d;


    var fcus = await fetch("http://localhost:3000/api/customer/FindAllCustomer");

    var mdat = await fcus.json();
    console.log("custom arra", mdat);
    for(i=0;i<mdat.length;i++){
        if(mdat[i]._id==d){
            console.log("id is sam",mdat[i]);
            nam=mdat[i].cname;
            // window.location.href = "http://127.0.0.1:5500/disp.html"
            document.getElementById("jn").innerHTML="Welcome "+mdat[i].cname;
        }
    }

}