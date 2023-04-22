export class Student {

    private id: BigInt | undefined;
    private first_name: String;
    private last_name: String;
    private email: String;
    private phone: String;
    private image_url: String | undefined;
    private level: String;
    private cin: String;
    //private Subjects subjects;


    constructor(first_name: String, last_name: String, email: String, phone: String, image_url: String, level: String, cin: String) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.image_url = image_url;
        this.level = level;
        this.cin = cin;
    }

    public getId(): BigInt | undefined { return this.id; }
    public getFirstName(): String { return this.first_name; }
    public getLastName(): String { return this.last_name; }
    public getEmail(): String { return this.email; }
    public getPhone(): String { return this.phone; }
    public getImageUrl(): String | undefined { return this.image_url; }
    public getLevel(): String { return this.level; }
    public getCin(): String { return this.cin; }
}