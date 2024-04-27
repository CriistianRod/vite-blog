export class Page {
    public id: number = 0;
    public label: string = '';
    public route: string = '';

    constructor(id: number, label: string, route: string){
        this.id = id;
        this.label = label;
        this.route = route;
    }
}
