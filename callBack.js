function settleLife(name, isBCS ,marriage,patri) {
    if (isBCS) {
        marriage(patri);
    }
}

function boloKobul(patri) {
    console.log("kobul", patri);
    
}

settleLife("tomal", true, boloKobul, "nari");