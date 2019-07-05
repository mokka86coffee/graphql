function generateRandomData(template, idx) {
    return template.reduce((obj, key, i) => ({ 
        ...obj, 
        [key]: !i ? idx : idx + key + '_' + Array.from({length: 5}, () => String.fromCharCode( +(Math.random()*10).toFixed() + 97 )).join('')
    }), {});
}
module.exports = {
    generateRandomData: (template, length) => Array.from({ length }, (_, idx) => generateRandomData(template, idx))
}