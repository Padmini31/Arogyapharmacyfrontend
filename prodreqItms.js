function chk() {
    show();

}



async function crea() {
    console.log("cre func called");
    let trTg = document.createElement("tr");
    for (i = 0; i < 5; i++) {
        let dTg = document.createElement("td");
        let iTg = document.createElement("input");
        if (i != 3) {
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
    u[1].firstChild.setAttribute("type", "number");
    u[2].firstChild.setAttribute("type", "text");
    // u[3].firstChild.setAttribute("type", "text");
    u[4].firstChild.setAttribute("type", "text");
    // u[4].firstChild.setAttribute("type", "text");
    // u[4].firstChild.setAttribute("type", "button");
    // u[4].firstChild.setAttribute("Value", "Request Accepted");
    // u[5].firstChild.setAttribute("Value", "supplied");
}




async function show() {

    console.log("dislay func calles");
    // crea();
    // // document.getElementById("inp").style.display = "none";
    // for (j = 1; j <= 2; j++) {
    //     if (j == 1) {

    var mydat = await fetch("http://localhost:3000/api/supply/getSup");
    var ard = await mydat.json();
    console.log("array from get supply req", ard);
    r = ard.length;

    console.log("my arra data leng", ard, r);

    ft = document.getElementsByTagName("table")[0];
    co = ft.childElementCount;
    console.log("table satus", ft);
    // for (t = 0; t < ard.length; t++) {


    for (e = 0; e < r; e++) {

        f = ard[e]._id;
        s = ard[e].reqNo;
        t = ard[e].requested_items;

        console.log("loop counts", e);

        console.log(" oject", e + 1, ard[e]);

        trTg = document.createElement("tr");
        for (i = 0; i < 5; i++) {
            console.log("for loop starts");

            dTg = document.createElement("td");

            iTg = document.createElement("input");

            dTg.appendChild(iTg);

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
        c.children[3].innerHTML = "Requested for Supply";


        var mi = await fetch("http://localhost:3000/api/supply/getRpl");
        var mj = await mi.json();
        console.log("json rry dat get reply", mj);

        sr = mj[e];
        if (sr != null) {      //0 for inetgers or index ,nul for objts , strings stattus;
            c.children[4].innerHTML = sr.sup;
            // console.log("obj full",sr);}
        }
    }
    crea();
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
    // cVal = inr.children[3].firstChild.value;
    console.log(nVal);
    console.log(dVal);
    console.log(pVal);

    // document.nextSibling

    proVa = { _id: nVal, reqNo: dVal, requested_items: pVal };
    console.log(proVa);

    fetch("http://localhost:3000/api/supply/storeSup", {
        method: "post",
        body: JSON.stringify(proVa),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(re => {
        document.getElementById("md").innerHTML = re
    }).catch(err => console.log("error cosed " + err));

    crea();

}



function sav() {
    let r = document.getElementsByTagName("table")[0];
    c = r.childElementCount;
    for (k = 1; k < c; k++) {
        fr = r.children[k];
        v = fr.children[0].innerHTML;
        s = fr.children[1].innerHTML;
        j = fr.children[2].innerHTML;
        b = fr.children[3].innerHTML;
        n = fr.children[4].firstChild.value;

        // console.log("value cell n", n);

        if (n != 0) {

            // console.log("value cell", v);
            // console.log("value cell", j);
            // // console.log("value cell", b);
            proVa = { _id: v, rno: s, reqitm: j, supStat: b, sup: n };
            console.log("object sup status s", proVa);


            fetch("http://localhost:3000/api/supply/storeReply", {
                method: "post",
                body: JSON.stringify(proVa),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(mes => mes.text()).then(re => console.log("reco strod", re)).catch(err => console.log("error cosed " + err));

        }
    }
}

function nup() {
    let r = document.getElementsByTagName("table")[0];
    c = r.lastElementChild;
    n = c.children[0].firstChild.value;
    e = c.children[1].firstChild.value;
    f = c.children[2].firstChild.value;
    t = c.children[4].firstChild.value;
    console.log("vaue", f);


    proVa = { _id: n, rno: e, reqitm: f, supStat:"Requested for Supply", sup: t };
    console.log("new reply ", proVa);


    fetch("http://localhost:3000/api/supply/storeReply", {
        method: "post",
        body: JSON.stringify(proVa),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(re => console.log("new reply posted", re)).catch(err => console.log("error cosed " + err));

crea();
}