export class Book {
  constructor(
    public title: string,
    public author: string,
    public isbn?: string,
    public year?: number,
    public editor?: string,
    public isLend: boolean = false
  ){}
}
