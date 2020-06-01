import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
categoria:string;
noticia: Noticia;
vector_noticia:Array<Noticia>;

  constructor(private noticia_servicio:NoticiaService) {
    this.noticia = new Noticia;
    this.vector_noticia = new Array<Noticia>();
   }

  ngOnInit(): void {
  }

  public cargarNoticias(){
    this.noticia_servicio.getNoticias(this.categoria).subscribe( 
      (result) => {
          //es necesario que convierta el JSON que
          this.vector_noticia = new Array<Noticia>(); 
          result['arts'].forEach(element => {
            this.noticia = new Noticia(); 
            Object.assign(this.noticia,element);
            this.vector_noticia.push(this.noticia);
          });
          console.log(this.vector_noticia);
      }, 
      error => { alert("Error en la petición"); } )

  }
}
