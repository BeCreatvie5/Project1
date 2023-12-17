export class MenuItem{
    public title!: string;
    public description!: string;
    public imageFileName!: string;
    // public rating!: number;
    // public info!: string; 

    constructor(title:string, desc:string, imageFileName: string){
        this.title =  title;
        this.description = desc;
        this.imageFileName=imageFileName;
        // this.rating=rating;
        // this.info = info;
    }
}