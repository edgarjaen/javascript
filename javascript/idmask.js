function mascara(str){
	let interior=str.slice(2,str.length-4);
	return str.replace(interior,"X".repeat(interior.length));
}
console.log(mascara("J-155088091"));
console.log(mascara("V-15508809"));
console.log(mascara("G-123456789"));