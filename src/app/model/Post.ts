export class Post {
    public title: string;
    public content: string;
    public loveIts: number;
    public created_at: Date;

    constructor(title: string, content: string, loveIts: number) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = this.randomDate(2000, 2018, 0, 23);
    }

    randomDate(start, end, startHour, endHour) {
        var date = new Date(+start + Math.random() * (end - start));
        var hour = startHour + Math.random() * (endHour - startHour) | 0;
        date.setHours(hour);
        return date;
    }
}