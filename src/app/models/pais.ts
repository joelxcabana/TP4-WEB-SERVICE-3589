export class Pais {
    Country_text:string;
    Total_Cases_text:number;
    Total_Deaths_text:number;
    Total_Recovered_text:number;
   
    Pais( Country_text?:string,Total_Cases_text?:number,Total_Deaths_text?:number,Total_Recovered_text?:number){
    this.Country_text= Country_text;
    this.Total_Cases_text = Total_Cases_text;
    this.Total_Deaths_text = Total_Deaths_text;
    this.Total_Recovered_text = Total_Recovered_text;
    }

}
