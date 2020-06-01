export class Producto {
    title:string;
    price:number;
    thumbnail:string;
    address:string;


    Producto(title?:string,price?:number,thumbnail?:string,address?:string){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.address = address;
    }


}

