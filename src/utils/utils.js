const utils = {

    createReply: (data) => {
        return `Compra: **${data.buysDollar}** ${data.variation?.buyVariation}% Venta: **${data.sellsDollar}** ${data.variation?.sellVariation}%`;
    }
}


module.exports = {
    utils
}