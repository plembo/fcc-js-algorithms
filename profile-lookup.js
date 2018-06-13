
/* This is my solution for the "Profile Lookup" challenge in Basic JavaScript
on freecodecamp.org. It works and passed fcc's tests. Wasted a lot of time
trying to return _either_ the name or property if they turned out to be true,
but that wasn't the requirement: it was to only return the prop is both name
and prop values existed! */

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x].hasOwnProperty(prop)) {
            var p = contacts[x][prop];
            return p;
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
}

// Change these values to test your function
var result = lookUpProfile("Harry", "likes");
console.log(result);
