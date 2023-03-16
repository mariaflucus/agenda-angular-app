class PhoneBookItem {

    id: string;
    name: string;
    number: string;
    date: Date;

    constructor(name: string, number: string, date: Date) {
        this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number;
        this.date = date;
    }

    static fromJSON (json: { name: string, number: string, date: any; id: string}){
        let phoneBookItem = new PhoneBookItem(json.name, json.number, json.date);
        phoneBookItem.id = json.id;

        return phoneBookItem;
    }
}

export default PhoneBookItem;