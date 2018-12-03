let arreglo = [1,0,2,9,3,8,4,7,5,6],
    objeto = {
	    transacciones: [
    		{
				emisor: "first",
				receptor: "second",
				monto: 460.00,
				comision: 7
			},
    		{
				emisor: "first",
				receptor: "third",
				monto: 182.00,
				comision: 7
			},
    		{
				emisor: "second",
				receptor: "forth",
				monto: 277.00,
				comision: 7
			},
			{
				emisor: "first",
				receptor: "second",
				monto: 400,
				comision: 7
			},
			{
				emisor: "second",
				receptor: "forth",
				monto: 129,
				comision: 7
			}
	    ]
    },
    salida ={};
//1.- Suma de todos los elementos en el arreglo a traves del reduce
salida.uno = objeto.transacciones.map(function(item){
	return item.monto;
}).reduce(function(vBefore, vNow, index, vector){
	return vBefore + vNow;
},0);
//2.- Cálculos internos de un objeto contenido en un objeto
salida.dos = objeto.transacciones.map(function(item){
	return item.monto*item.comision/100;
});

//3.- Refactorizando para reutilizar
let sumaSimple=function(vBefore, vNow, index, vector){
	return vBefore + vNow;
},
	sumaArrowSimple = (vBefore, vNow) => vBefore + vNow;

salida.tres = salida.dos.reduce(sumaSimple,0);

salida.cuatro = objeto.transacciones.map(function(item){
	return item.monto;
}).reduce(function(vBefore, vNow, index, vector){
	return vBefore + vNow;
},0);

salida.cinco = salida.dos.reduce(sumaArrowSimple,0);

console.log(salida);
