async function chk() {
    show();

}



function delt() {
    console.log("delt function calld part ");
    c = document.getElementsByTagName("table")[0].childElementCount;
    console.log("count", c);
    for (i = 1; i < c; i++) {
        t = document.getElementsByTagName("table");
        console.log("table chld count", c);
        console.log("table ", t);

        g = t.children[i];
        console.log("table child", c);
        t.removeChild(g);

    }
}

async function crea() {
    console.log("cre func called");
    let trTg = document.createElement("tr");
    for (i = 0; i < 6; i++) {
        let dTg = document.createElement("td");
        if (i != 5) {
            let iTg = document.createElement("input");

            dTg.appendChild(iTg);
        }
        trTg.appendChild(dTg);


    }

    tbl = document.getElementsByTagName("table")[0];
    tbl.appendChild(trTg);
    c = tbl.lastElementChild;
    console.log("las elem of table 0", c);
    console.log("last elem child of table 1", c);
    u = c.children;
    console.log("childrens", u);
    u[0].firstChild.setAttribute("type", "number");
    u[1].firstChild.setAttribute("type", "date");
    u[2].firstChild.setAttribute("type", "text");
    u[3].firstChild.setAttribute("type", "number");
    u[4].firstChild.setAttribute("type", "number");
    u[5].firstChild.setAttribute("type", "number");

}



function del() {
    let r = document.getElementsByTagName("table")[0];
    console.log("last chile", r);
    r.removeChild(r.lastElementChild);
    console.log("table", r);
}

async function cal() {
    console.log("cal func calld");
    let r = document.getElementsByTagName("table")[0];
    console.log("tabble first inwrd", r);

    inr = r.lastElementChild;
    console.log("last child first tabl", inr);


    // console.log("val", h);
    nVal = inr.children[0].firstChild.value;
    dVal = inr.children[1].firstChild.value;
    pVal = inr.children[2].firstChild.value;
    qVal = inr.children[3].firstChild.value;
    yVal = inr.children[4].firstChild.value;

    console.log(nVal);
    console.log(dVal);
    console.log(pVal);
    console.log(qVal);
    // document.nextSibling

    inr.children[5].innerHTML = qVal - yVal;



    proVa = { _id: nVal, date: dVal, product: pVal, iqty: qVal, oqt: yVal };
    console.log(proVa);

    fetch("http://localhost:3000/api/stock/storeStock", {
        method: "post",
        body: JSON.stringify(proVa),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(dis => {
        document.getElementById("md").innerHTML = dis;
    })
        .catch(err => console.log("error cosed " + err));

    crea();

}




async function add() {
    show();
    var mydat = await fetch("http://localhost:3000/api/stock/getStock");
    var ard = await mydat.json();
    r = ard.length;
    ob = ard[r - 1];
    a = ob._id;
    b = ob.product;
    c = ob.date;
    d = ob.iqty;
    e = ob.oqt;

    tbl = document.getElementsByTagName("table")[0];
    k = tbl.lastElementChild;
    tbl.removeChild(k);

    k.children[0].innerHTML = a;
    k.children[1].innerHTML = b;
    k.children[2].innerHTML = c;
    k.children[3].innerHTML = d;
    k.children[4].innerHTML = e;
    crea();
}


function creat() {
    let trTg = document.createElement("tr");
    for (i = 0; i < 5; i++) {
        let dTg = document.createElement("td");
        let iTg = document.createElement("input");
        dTg.appendChild(iTg);
        trTg.appendChild(dTg);


    }

    tbl = document.getElementsByTagName("table")[1];
    tbl.appendChild(trTg);
    w = tbl.lastElementChild;
    console.log("childrens", w);
    u = w.children;

    u[0].firstChild.setAttribute("type", "number");
    u[1].firstChild.setAttribute("type", "date");
    u[2].firstChild.setAttribute("type", "text");
    u[3].firstChild.setAttribute("type", "number");

}



async function func() {
    let trTg = document.createElement("tr");
    for (i = 0; i < 7; i++) {
        let dTg = document.createElement("td");
        let iTg = document.createElement("input");
        dTg.appendChild(iTg);
        trTg.appendChild(dTg);


    }

    let tbl = document.getElementsByTagName("table")[2];
    tbl.appendChild(trTg);
    c = tbl.childElementCount;
    let u = c.children;
    console.log("childrens", u);


    u[0].firstChild.setAttribute("type", "number");
    u[1].firstChild.setAttribute("type", "date");
    u[2].firstChild.setAttribute("type", "text");
    u[3].firstChild.setAttribute("type", "number");
    u[4].firstChild.setAttribute("type", "number");
    u[5].firstChild.setAttribute("type", "text");

    u[6].firstChild.setAttribute("type", "button");
    u[6].firstChild.setAttribute("value", "submit");
    // u[6].firstChild.setAttribute("onclick", "cal()");

}



async function n() {
    console.log("n func calld");
    let r = document.getElementsByTagName("table")[1];
    console.log("tabble outwrd", r);

    let lr = r.lastElementChild;
    console.log("last child eletable 2", lr);

    let h = lr.children[0].firstChild.value;
    console.log("val", h);
    nVal = lr.children[0].firstChild.value;
    dVal = lr.children[1].firstChild.value;
    pVal = lr.children[2].firstChild.value;
    qVal = lr.children[3].firstChild.value;

    console.log(nVal);
    console.log(dVal);
    console.log(pVal);
    console.log(qVal);


    nets();
}


async function nets() {


    tt = document.getElementsByTagName("table")[0];
    // console.log("val r ", tt);
    y = tt.lastElementChild;
    fc = y.children[0].firstChild.value;
    sc = y.children[1].firstChild.value;
    tc = y.children[2].firstChild.value;
    rc = y.children[3].firstChild.value;

    iVal = rc;

    console.log("fc vlue", fc);
    console.log("childre of last row", y.children);

    y.children[0].innerHTML = fc;
    y.children[1].innerHTML = sc;
    y.children[2].innerHTML = tc;
    y.children[3].innerHTML = rc;
    // l = y.children[3].firstChild.value;
    newf(fc, sc, tc, rc);


    st = document.getElementsByTagName("table")[1];

    y = st.lastElementChild;
    fc = y.children[0].firstChild.value;
    sc = y.children[1].firstChild.value;
    tc = y.children[2].firstChild.value;
    rc = y.children[3].firstChild.value;

    oVal = rc;
    console.log("fc vlue of table 2", fc);
    console.log("childre of last row", y.children);
    y.children[0].innerHTML = fc;
    y.children[1].innerHTML = sc;
    y.children[2].innerHTML = tc;
    y.children[3].innerHTML = rc;


    shw(fc, sc, tc, rc);
    netw = iVal - oVal;
    console.log("net stock", netw);

    st = document.getElementsByTagName("table")[2];
    y = st.lastElementChild;

    y.children[0].innerHTML = fc;
    y.children[1].innerHTML = sc;
    y.children[2].innerHTML = tc;
    y.children[3].innerHTML = netw;




}



function newf(f, s, t, h) {
    crea();


    tt = document.getElementsByTagName("table")[0];
    y = tt;
    y.children[0].innerHTML = f;
    y.children[1].innerHTML = s;
    y.children[2].innerHTML = t;
    y.children[3].innerHTML = h;
}
function shw(a, b, c, w) {
    creat();
    t = document.getElementsByTagName("table")[1];

    y = t.lastElementChild;
    y.children[0].innerHTML = a;
    y.children[1].innerHTML = b;
    y.children[2].innerHTML = c;
    y.children[3].innerHTML = w;
}




async function show() {


    console.log("dislay func calles");
    // crea();
    // // document.getElementById("inp").style.display = "none";
    // for (j = 1; j <= 2; j++) {
    //     if (j == 1) {

    var mydat = await fetch("http://localhost:3000/api/stock/getStock");
    var ard = await mydat.json();
    r = ard.length;

    console.log("my arra data leng", ard, r);

    ft = document.getElementsByTagName("table")[0];
    console.log("table satus", ft);
    // for (t = 0; t < ard.length; t++) {

    for (e = 0; e < r; e++) {

        // crea();

        f = ard[e]._id;
        s = ard[e].date;
        t = ard[e].product;
        g = ard[e].iqty;
        a = ard[e].oqt;
        console.log("loop counts", e);

        console.log(" oject", e + 1, ard[e]);

        trTg = document.createElement("tr");
        for (i = 0; i < 8; i++) {
            dTg = document.createElement("td");

            if (i != 5) {

                iTg = document.createElement("input");
                dTg.appendChild(iTg);
            }
            trTg.appendChild(dTg);
        }
        console.log("tab rw tags", trTg);

        tbl = document.getElementsByTagName("table")[0];
        // h = tbl.lastElementChild;
        tbl.appendChild(trTg);
        c = tbl.lastElementChild;
        console.log("las elem of table 0", c);
        console.log("last elem child of table 1", c);
        u = c.children;
        console.log("childrens", u);


        c.children[0].innerHTML = f;
        c.children[1].innerHTML = s;
        c.children[2].innerHTML = t;
        c.children[3].innerHTML = g;
        c.children[4].innerHTML = a;



        console.log("fetch func not yet calld");
        var ntda = await fetch("http://localhost:3000/api/stock/netStock/" + t);
        var re = await ntda.json();
        console.log("fetch func calld");
        console.log("net stock of product ", re);
        c.children[5].innerHTML = re;
        c.children[6].innerHTML = 10;

        // console.log("value of l", l);
        if (re < 10) {
            c.children[7].innerHTML = "Place Order";
            d = c.children[7];
            console.log("value of d ", d);
            d.style.backgroundColor = "red";
            // }

            //notofication for low stock 
            // window.location.href = "http://127.0.0.1:5500/suppy.html"

        }

    }
    crea();
}

function demo() {
    console.log("ddemo function called");
}




async function pro() {
    d = await fetch("http://localhost:3000/api/stock/netStock/a");
    da = await d.json();
    console.log("data fro product api ", da);
    console.log("pro funcion vall");
}

function newr() {
    crea();
    creat();
    func();
}
// function myfunc() {




function net() {

}

function maf(a, v, c, x) {
    console.log("a val ", a);
    console.log("v val ", v);
    console.log("c val ", c);
    console.log("x val ", x);
}

async function dle() {


    va = document.getElementById("no").value;
    var f = await fetch("http://localhost:3000/api/stock/deleteStock/" + va);
    var res = await f.json();
    console.log(res);
    document.getElementById("m").innerHTML = res;

}