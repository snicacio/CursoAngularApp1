export class Coracao {
    constructor(
     public cheio: boolean,
     public urlCoracaocheio: string    = "/assets/1UpFull.png",
     public urlCoracaovazio: string = "/assets/1UpEmpty.png"
    ){}

    public exibeCoracao(): string {
        if(this.cheio)
        {
            return this.urlCoracaocheio
        } else {
            return this.urlCoracaovazio
        }
    }
}