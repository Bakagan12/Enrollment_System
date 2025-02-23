export class PaymentMethod{
    id?:number;
    method_name:string;
    constructor(
        id:number,
        method_name:string
    ){
        this.id = id;
        this.method_name = method_name;
    }
}