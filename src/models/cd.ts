export class Cd {
  constructor(
    public title: string,
    public artist: string,
    public year?: number,
    public duration?: string,
    public label?: string,
    public isLend: boolean = false
  ){}
}
