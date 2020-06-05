import { Component, OnInit } from '@angular/core';
import { SignoService } from 'src/app/services/signo.service';
import { Signo } from 'src/app/models/signo';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
dia:string;
signos:Array<any>;

signo:Signo;
listaSignos:Array<Signo>;

fecha:string;
signoAsignado:string;

  constructor(private signo_Service:SignoService) {
    this.signos = new Array<any>();
    this.signo = new Signo();
    this.listaSignos = new Array<Signo>();
     this.cargarSignos();
  }

  //busca signo por una fecha pero no recibe el dato
  //sale el mesaje message: 
  //"Http failure during parsing for https://zodiac-sign.p.rapidapi.com/sign?date=1998-11-02"
  public buscarSigno(){
    console.log(this.fecha);
    this.signo_Service.getSignosByDate(this.fecha).subscribe( 
      (result) => {
          console.log(JSON.parse(result));
         //this.signoAsignado = result;
        // console.log(this.signoAsignado);
      }, 
      error => { alert("Error en la petición");console.log(error) } )
      
  }


  public cargarSignos(){
    this.signo_Service.getAllSignos().subscribe( 
      (result) => {
          this.listaSignos = new Array<Signo>();

          //console.log(result);
          for(var i=0 ;i<12 ;i++){
            this.signo = new Signo();
            this.signo = result[i];
           // console.log(this.signo);
            this.listaSignos.push(this.signo);
          }
      }, 
      error => { alert("Error en la petición"); } )
  }


  ngOnInit(): void {
  }

}
