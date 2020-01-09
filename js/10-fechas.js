var fecha = new Date();

var year = fecha.getFullYear();

var month = fecha.getMonth();

var day = fecha.getDay();

var hours = fecha.getHours();

var textoHora = `
    La fecha completa es: ${fecha}
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
    La hora es: ${hours}
    
`;
console.log(textoHora);
