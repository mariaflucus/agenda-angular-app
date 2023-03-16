import PhoneBookItem from "./PhoneBookItem";

class PhoneBook {
    contacts: any;
    constructor(){
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact: any){
        this.contacts.push(contact);
        this.saveToLocalStorage();

        return this.contacts;
    }

    delete(contact: any){
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();

        return this.contacts;
    }


    saveToLocalStorage(){
        localStorage.setItem('phonebook-data', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage(){
        var json = localStorage.getItem('phonebook-data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            if(key === "date"){
                value = new Date(value);
            }
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let phoneBookItems = [];

        for(let i = 0; i < jsonParsed.length; i++) {
            phoneBookItems.push(PhoneBookItem.fromJSON(jsonParsed[i]));
        }

        return phoneBookItems;
    }
}

export default PhoneBook;
