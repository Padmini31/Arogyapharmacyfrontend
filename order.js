async function myord() {
    od = [];
    console.log("arra", od);
    data = await fetch("http://localhost:3000/api/order/findAlorder");
    mdat = await data.json();
    console.log("order is myord fuc calld", mdat);
    respo = await fetch("http://localhost:3000/api/rec/show");

    var mdata = await respo.json();
    l = mdata.length;
    console.log("data login rec", mdata[l - 1]);

    d = mdata[l - 1].cid;
    for (i = 0; i < mdat.length; i++) {
        if (mdat[i].custId == d) {
            console.log("order cstomers ", mdat[i]);
            cord = mdat[i];
            console.log("cus order", cord);
            od.push(cord);
        }
    }
    console.log("od lis of cust", od);
    dat = od.map(x => "Order No.-" + x.ordrNum + ", Order Date-" + x.ordrDt + ", CustId-" + x.custId + ", Delivery Date-" + x.deliveryDt + ", Delivery Time-" + x.deliveryTime);
    console.log("customr order is", dat);
    document.getElementById("or").innerHTML = dat;

    //     }}
}

//dont look

async function vodr() {
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


    reso = await fetch("http://localhost:3000/api/rec/show");

    var mda = await reso.json();
    l = mda.length;
    console.log("data login rec", mda[l - 1]);

    d = mda[l - 1].cid;

    for (i = 0; i < l; i++) {
        console.log("mdaat is", mdata[i]);
        if (mdata[i].cust == d) {
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


}



async function vod() {
    var respo = await fetch("http://localhost:3000/api/order/findAlorder");

    var mdata = await respo.json();
    l = mdata.length;
    tb = document.getElementsByTagName("table")[0];
    console.log(l, mdata);
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


    reso = await fetch("http://localhost:3000/api/rec/show");

    var mda = await reso.json();
    l = mda.length;
    console.log("data login rec", mda[l - 1]);

    d = mda[l - 1].cid;

    for (i = 0; i < l; i++) {
        console.log("mdaat is", mdata[i]);
        if (mdata[i].cust == d) {
            oVa = mdata[i].ordrNum;
            dVal = mdata[i].ordrDt;
            cVal = mdata[i].custId;
            ddVa = mdata[i].deliveryDt;
            tVal = mdata[i].deliveryTime;

            console.log("or no.", oVal);
            console.log("custid.", cVal);
            tb.children[i + 1].children[0].innerHTML = dVa;

            tb.children[i + 1].children[1].innerHTML = ddVal;
            tb.children[i + 1].children[2].innerHTML = tVal;
            tb.children[i + 1].children[3].innerHTML = oVal;
            tb.children[i + 1].children[4].innerHTML = cVa;
        }
    }


}

async function shbil() {
    f = document.getElementById("gto").value;
    console.log("gotal", f);
    document.getElementById("bil").innerHTML = "Grand Total " + f + " Rs";

}

async function res() {
    document.getElementById("n").value = "";

    document.getElementById("iu").value = "";
}

async function op() {
    g = document.getElementById("n").value;
    reso = await fetch("http://localhost:3000/api/orderItems/generateBill/" + g);
    var mda = await reso.text();
    document.getElementById("iu").value = mda;
    mda = parseInt(mda);
    k = document.getElementById("st").value;
    console.log(" kval", k);
    if (k == 0) {
        console.log(0);
        k = mda;
        console.log(mda);
        document.getElementById("st").value = mda;
        document.getElementById("gto").value = mda;
    }
    else {
        console.log(1);
        console.log("k val", k);
        k = parseInt(k);
        j = k + mda;
        console.log("j ", j);
        document.getElementById("gto").value = j;
        document.getElementById("st").value = j;


    }
    l = document.getElementById("s");
    h = document.createElement("div");
    h.innerHTML = "order no. - " + g + " ," + mda + " Rs";
    s.appendChild(h);
}

async function show() {

    res = await fetch("http://localhost:3000/api/orderItems/getorderitemsdetail");
    mda = await res.json();
    l = mda.length;
    console.log(mda[0]);
    // d = document.getElementById("vb");
    // for (j = 0; j < l; j++) {
    //     s = document.createElement("div");


    re = await fetch("http://localhost:3000/api/customer/FindAllCustomer");
    md = await re.json();
    // for (m = 0; m < md.length; m++) {

        // if (md[m]._id == mda[m].cust) {
        //     // d.appendChild(s)
    console.log(md);
        // }
    }

        //     }
        //     for (i = 1; i <= mda.length; i++) {
        //         reso = await fetch("http://localhost:3000/api/orderItems/generateBill/" + i);
        //         var md = await reso.json();
        //         console.log(md);
        //     }
        // }