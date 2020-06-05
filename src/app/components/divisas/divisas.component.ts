import { Component, OnInit, ɵConsole } from '@angular/core';
import { Convertidor } from 'src/app/models/convertidor';
import { ConvertidorService } from 'src/app/services/convertidor.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {

  de:string;
  a:string;
  cantidad:number;
  resultado:string;
 
  r:string;

  listaConversion: Array<Convertidor>;
  divisa:Convertidor;

  constructor(private convertidor_servicio:ConvertidorService) {
     this.listaConversion = new Array<Convertidor>();
     this.divisa = new Convertidor();
      this.cargar();
     //this.tablaConversion();
     
  }

  ngOnInit(): void {
  }

  public realizarConvercion(){
    this.convertidor_servicio.getCambio(this.de,this.a,this.cantidad).subscribe( 
      (result) => {         
        this.resultado=result['result'];
        console.log(this.resultado);
        
       }, 
       error => { alert("Error en la petición"); } )
  }

///ESTE METODO TIRA EL ERROR DE VARIABLE UNDEFINIDE
  public tablaConversion(){
       console.log("entro al metodo: ");
       this.cargar();
     for(var i=0; i<this.listaConversion.length;i++){
      this.convertidor_servicio.getCambio(this.listaConversion[i].fromtype,this.listaConversion[i].totype,this.listaConversion[i].fromvalue).subscribe( 
        (result) => {         
          this.r=result['result'];
          console.log(this.resultado);
         }, 
         error => { alert("Error en la petición"); } )
         
          //error sale variable indefinida de this.r
          console.log(this.r);
          this.listaConversion[i].result = this.r;
          console.log("FINAL"+this.listaConversion[i].result);
      }

  }

  private cargar(){
     this.divisa = new Convertidor();

     this.divisa.fromtype="ARS";
     this.divisa.imgfrom = "arg.png";
     this.divisa.totype="USD";
     this.divisa.fromvalue=1;
     this.divisa.imgto = "usa.png";
    
     this.listaConversion.push(this.divisa);

     this.divisa = new Convertidor();

     this.divisa.fromtype="BTC";
     this.divisa.imgfrom = "btc.png";
     this.divisa.totype="EUR";
     this.divisa.imgto = "euro.png";
     this.divisa.fromvalue= 1;
    
     this.listaConversion.push(this.divisa);


  }


}
