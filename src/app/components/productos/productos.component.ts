import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  palabra:string;
  categoria:string;

  producto:Producto;
  listaProductos:Array<Producto>;

  constructor(private producto_Service:ProductoService) {
      this.producto = new Producto();
      this.listaProductos = new Array<Producto>();
   }


   public cargarProductos(){
    this.producto_Service.getProductos(this.palabra).subscribe( 
      (result) => {
          //es necesario que convierta el JSON que
          this.listaProductos = new Array<Producto>();

          result['results'].forEach(element => {
            this.producto = new Producto(); 
            Object.assign(this.producto,element);
            this.listaProductos.push(this.producto);
            console.log(this.producto.address);
          });
      }, 
      error => { alert("Error en la petición"); } )

  }


  public cargarProductosPorCategoria(){
    console.log("evento cambviat");
    console.log(this.categoria);
    this.producto_Service.getProductosByCategory(this.categoria).subscribe( 
      (result) => {
          //es necesario que convierta el JSON que
          this.listaProductos = new Array<Producto>();

          result['results'].forEach(element => {
            this.producto = new Producto(); 
            Object.assign(this.producto,element);
            this.listaProductos.push(this.producto);
            console.log(this.producto.address);
          });
      }, 
      error => { alert("Error en la petición"); } )

  }





  ngOnInit(): void {
  }

}
