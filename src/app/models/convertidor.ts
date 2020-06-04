export class Convertidor {
    fromtype:string;
    imgfrom:string;
    fromvalue:number;
    totype:string;
    result:string;
    imgto:string;

    Convertidor(totype?:string,fromtype?:string,fromvalue?:number,result?:string,imgto?:string,imgfrom?:string){
    this.totype = totype;
    this.fromtype = fromtype;
    this.fromvalue = fromvalue;
    this.result = result;
    this.imgto = imgto;
    this.imgfrom = imgfrom;
    }

}
