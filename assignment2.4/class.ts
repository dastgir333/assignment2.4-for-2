/ defining interface for class
interface IPerson {
    firstName: string;
    lastName: string;
    FullName();
    GetMonth(d: Date);
}

// implementing the interface
class Employee implements IPerson {
    firstName: string;
    lastName: string;
    FullName() {
        return this.firstName + ' ' + this.lastName;
    }

    GetMonth(date: Date) {
        return date.getMonth();
    }

    constructor(f: string, l: string) {
        this.firstName = f;
        this.lastName = l;
    }
}

// using the interface directly
var myPerson = <IPerson>{};
myPerson.firstName = 'Sheo';
myPerson.lastName = 'Narayan';
alert(JSON.stringify(myPerson));

// using the class that implements interface
var myEmployee = new Employee('Sheo', 'Narayan');
var fullName = myEmployee.FullName();
var monthName = myEmployee.GetMonth(new Date());
alert(fullName + ' month name: ' + monthName);
