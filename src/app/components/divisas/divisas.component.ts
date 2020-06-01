import { Component, OnInit, ɵConsole } from '@angular/core';
import { Convertidor } from 'src/app/models/convertidor';
import { ConvertidorService } from 'src/app/services/convertidor.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  listaConversion: Array<Convertidor>;
  divisa:Convertidor;

  constructor(private convertidor_servicio:ConvertidorService) {

     this.listaConversion = new Array<Convertidor>();
     this.divisa = new Convertidor();
     this.tablaConversion();
     
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


  public tablaConversion(){
    this.cargar();
    for(var i=0;i<this.listaConversion.length; i++){
      this.convertidor_servicio.getCambio(this.listaConversion[i].fromtype,this.listaConversion[i].totype,this.listaConversion[i].fromvalue).subscribe( 
        (result) => {    
          console.log(result['result']);     
          this.listaConversion[i].result = result['result'];
          this.listaConversion[i].result = 77777;
          console.log(this.listaConversion[i].result);
         }, 
         error => { alert("Error en la petición"); } )

    }
  }



  private cargar(){
     this.divisa = new Convertidor();

     this.divisa.fromtype="ARS";
     this.divisa.totype="USD";
     this.divisa.fromvalue=1;
    
     this.listaConversion.push(this.divisa);

     this.divisa = new Convertidor();

     this.divisa.fromtype="BTC";
     this.divisa.totype="EUR";
     this.divisa.fromvalue=1;
    
     this.listaConversion.push(this.divisa);


     this.divisa = new Convertidor();

     this.divisa.fromtype="BRL";
     this.divisa.totype="JPY";
     this.divisa.fromvalue=1;
    
     this.listaConversion.push(this.divisa);
     

     this.divisa = new Convertidor();


  }


}
