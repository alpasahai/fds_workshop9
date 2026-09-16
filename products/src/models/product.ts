export class Product {
    constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public type: string,
    public units: number,
    public _id?: string
  ) {}
}