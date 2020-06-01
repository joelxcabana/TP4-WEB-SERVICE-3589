export class Convertidor {
    fromtype:string;
    fromvalue:number;
    totype:string;
    result:number;

    Convertidor(totype?:string,fromtype?:string,fromvalue?:number,result?:number){
    this.totype = totype;
    this.fromtype = fromtype;
    this.fromvalue = fromvalue;
    this.result = result;
    }

}
