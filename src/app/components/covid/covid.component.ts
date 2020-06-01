import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
nombrePais:string;
pais: Pais;
listaPaises:Array<Pais>;


  constructor(private pais_service:PaisService) {
   this.pais = new Pais();
   this.listaPaises = new Array<Pais>();

   }

  public seleccionOpcion(){
  if(this.nombrePais =="all"){
    this.cargarTodos();
  }else{
    this.cargarPais();
  }

  }



   private cargarPais(){
    this.pais_service.getPais(this.nombrePais).subscribe( 
      (result) => {

        this.listaPaises = new Array<Pais>();
        this.pais = new Pais();
        this.pais.Country_text = result["Country_text"];
        this.pais.Total_Cases_text = result["Total Cases_text"];
        this.pais.Total_Deaths_text = result["Total Deaths_text"];
        this.pais.Total_Recovered_text = result["Total Recovered_text"];
        this.listaPaises.push(this.pais);
        console.log(this.pais);
      }, 
      error => { alert("Error en la petición"); } )

  }

  private cargarTodos(){
    this.pais_service.getAll().subscribe( 
      (result) => {
        this.listaPaises = new Array<Pais>();
        this.pais = new Pais();

          result.forEach(element => {
              this.pais.Country_text = element["Country_text"];
              this.pais.Total_Cases_text = element["Total Cases_text"];
              this.pais.Total_Deaths_text = element["Total Deaths_text"];
              this.pais.Total_Recovered_text = element["Total Recovered_text"];
              console.log(this.pais.Total_Recovered_text);
              this.listaPaises.push(this.pais);
              console.log(this.pais);
              this.pais = new Pais();
          });
      
      }, 
      error => { alert("Error en la petición"); } )
  }

  ngOnInit(): void {
  }

}
