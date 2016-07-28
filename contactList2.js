var bob = {
    firstName: "Bob"
    , lastName: "Jones"
    , phoneNumber: "(650) 777-7777"
    , email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary"
    , lastName: "Johnson"
    , phoneNumber: "(650) 888-8888"
    , email: "mary.johnson@example.com"
};
var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}
//*Create a search function
var search = function (last) {
    for (var i in contacts) {
        if (contacts[i].lastName == last) {
            printPerson(contacts[i]);
        }
        else {
            console.log("Sorry I don't see anyone by that name");
        }
    }
};
//then call it passing "Jones"*
search("Jones");
var add = function (firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName
        , lastName: lastName
        , phoneNumber: phoneNumber
        , email: email
    };
};
add("drew", "since", "drew@since.com", "952-698-8200");
list(contacts);