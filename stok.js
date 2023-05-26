async function inn() {
    console.log("fca");
    r = dat.length;
    console.log(r);

}


async function cal() {
    // g.appendChild()
    let k = await fetch("http://localhost:3000/api/stock/getStock");
    dat = await k.json();
    nVal = document.getElementsByTagName("input")[0].value;
    dVal = document.getElementsByTagName("input")[1].value;
    pVal = document.getElementsByTagName("input")[2].value;
    qVal = document.getElementsByTagName("input")[3].value;
    console.log(nVal);
    console.log(dVal);
    console.log(pVal);
    console.log(qVal);
    // document.nextSibling

    proVa = { sr_No: nVal, date: dVal, product: pVal, iqty: qVal };
    console.log(proVa);

    fetch("http://localhost:3000/api/stock/storeStock", {
        method: "post",
        body: JSON.stringify(proVa),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(dis => console.log(dis))
        .catch(err => console.log("error cosed " + err));
crea();
}


async function out() {
    let nVal = document.getElementById("aa").value;
    let dVal = document.getElementById("dr").value;
    let pVal = document.getElementById("p").value;
    let qVal = document.getElementById("qt").value;
    proVa = { sr_No: nVal, date: dVal, product: pVal, oqty: qVal };
    console.log(proVa);

    fetch("http://localhost:3000/api/stock/storeoStock", {
        method: "post",
        body: JSON.stringify(proVa),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(dis => console.log(dis))
        .catch(err => console.log("error cosed " + err));
}

async function displ() {
    let k = await fetch("http://localhost:3000/api/stock/getStock");
    dat = await k.json();
    console.log(dat);
    d = dat[0];
    for (i = 0; i < dat.length; i++) {
        let r = document.getElementsByTagName("tr")[i + 1];
        console.log(r);
        r.children[0].innerHTML = d.sr_No;
        r.children[1].innerHTML = d.date;
        r.children[2].innerHTML = d.product;
        r.children[3].innerHTML = d.iqty;
    }
    crea();
}




async function creahd() {
    // let k = await fetch("http://localhost:3000/api/stock/getStock");
    // dat = await k.json();
    // r = dat.length;

    // console.log("length ", r);
    let trTg = document.createElement("tr");
    
    for (i = 0; i < 4; i++) {
        let dt = document.createElement("td");
        trTg.appendChild(dt);
    }
    let tbl = document.getElementById("c");
    let tdt=document.getElementsByTagName("td");
    tbl.appendChild(trTg);
    f=document.getElementById("c").firstElementChild;
    console.log("f ",f);
    f.children[0].innerHTML="Sr.no";
    f.children[1].innerHTML="Date";
    f.children[2].innerHTML="Product";
    f.children[3].innerHTML="Quantity";

}




async function ca() {
    let k = await fetch("http://localhost:3000/api/stock/getStock");
    dat = await k.json();
    r = dat.length;
    console.log("leb of  ", r);
    creahd();
    if (r == 0) {
        crea();
    }
    else {
        creahd();
        displ();
    }
}

async function crea() {
    // let k = await fetch("http://localhost:3000/api/stock/getStock");
    // dat = await k.json();
    // r = dat.length;

    // console.log("length ", r);

    // // console.log("f",f);
    let trTg = document.createElement("tr");
    for (i = 0; i < 4; i++) {
        let dTg = document.createElement("td");
        let iTg = document.createElement("input");
        dTg.appendChild(iTg);
        trTg.appendChild(dTg);
    }
    let tbl = document.getElementById("c");
    tbl.appendChild(trTg);
    console.log(tbl);

    d = document.getElementsByTagName("input");
    d[0].setAttribute("type", "number");
    d[1].setAttribute("type", "date");
    d[0].setAttribute("placeholder", "Enter");
    d[2].setAttribute("placeholder", "Enter")

    d[2].setAttribute("type", "text");
    d[3].setAttribute("type", "number");
    tg = document.createElement("input");
    tg.setAttribute("type", "button");
    tg.setAttribute("value", "submit");
    tg.setAttribute("onclick", "cal()");
    tbl.appendChild(tg);
    
}

