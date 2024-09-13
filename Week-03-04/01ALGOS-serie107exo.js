function profitableGambe(prob, price, cost) {

    let netOutcome = prob * price - cost
    if (netOutcome > 0) {
        console.log("true");
    } else {
        console.log("false");
        
    }
}

profitableGambe(0.2, 50, 9);
profitableGambe(0.9, 1, 2);
profitableGambe(0.9, 3, 2);
