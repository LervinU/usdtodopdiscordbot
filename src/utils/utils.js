const utils = {

    createReply: (bankName ,data) => {
        const { buyVariation, sellVariation  } = data.variation
        return `${bankName} Compra: ${data.buysDollar} ${formatVariabtionPercentage(buyVariation)} Venta: ${data.sellsDollar} ${formatVariabtionPercentage(sellVariation)}`;
    },
}

const getArrow = (value) => {
    const num = parseFloat(value);
    if(num > 0) { return '\u2b06'; }
    else if(num < 0) { return '\u2b07'; }
    else { return ""; }
}

const formatVariabtionPercentage = (strNumber) => {
    const num = parseFloat(strNumber);
    const arrow = getArrow(strNumber);
    if(num > 0) {
        return arrow + strNumber + '%';
    } 
    else if(num < 0) { 
        return arrow + strNumber.substring(1) + "%";
    }
    else {
        return "";
    }
};



module.exports = {
    utils
}