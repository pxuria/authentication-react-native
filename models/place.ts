export interface IPlace {
    id: string;
    title: string;
    imageUri: string;
    address: string;
    location: string;
}

class Place {
    constructor(public id: string, public title: string, public imageUri: string, public address: string, public location: string) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
        this.id = new Date().toString() + Math.random().toString();
    }
}