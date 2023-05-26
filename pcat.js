function add() {
    idVal = document.getElementById("_id").value;
    nmVal = document.getElementById("name").value;
    ctVal = document.getElementById("cat").value;
    console.log("value of id", idVal);
    console.log("value of name", nmVal);
    console.log("value of catg", ctVal);
    pVal = { _id: idVal, categoryName: nmVal, image: ctVal };


    fetch("http://localhost:3000/api/productCat/StoreCategoProd", {
        method: "post",
        body: JSON.stringify(pVal),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(mes => mes.text()).then(dis=>{
        document.getElementById("m").innerHTML=dis
    })
        .catch(err => console.log("error cosed " + err));
}
