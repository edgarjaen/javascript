//Ac: Comisión de los Abogados.

class Transaccion {

}



class Canal{

}

class Impuesto {
	constructor(porcentaje){
		this.porcentaje=porcentaje;
	}
	getValor(monto){
		return this.porcentaje * monto / 100;
	}
	getPorcentaje(){
		return this.porcentaje;
	}
	getFactor(){
		return this.porcentaje/100;
	}
	setPorcentaje(porcentaje){
		this.porcentaje=porcentaje;
	}
}

class Socio{
	constructor(comision){
		this.comision = comision; //porcentaje de comision
	}

	getComision(monto){
		return this.comision*monto/100;
	}
}

class Abogado {
	
	saludar(){
		return "Saludo de Abogado";
	}

}


 let IVA= new Impuesto(6.5);
  console.log(`
  	IVA
  	% :${IVA.getPorcentaje()}
  	Factor: ${IVA.getFactor()}
  	Comisión de ${900}: ${IVA.getValor(900)}
  	Bs.S/week :${IVA.getValor(900)*140}`);

  console.log(`
  	IVA
  	% :${IVA.getPorcentaje()}
  	Factor: ${IVA.getFactor()}
  	Comisión de ${375}: ${IVA.getValor(375)}
  	Bs.S/week :${IVA.getValor(375)*140} ${(80*36)/140}`);