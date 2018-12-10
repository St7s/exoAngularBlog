export class Post {
    public title: string;
    public content: string;
    public loveIts: number;
    public created_at: Date;

    constructor(title: string, content: string, loveIts: number) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = this.randomDate();
    }

    randomDate() {
        return new Date(Math.floor((Math.random() * 18)) + 2000, Math.floor((Math.random() * 11) + 1), Math.floor((Math.random() * 28) + 1));
    }
}