let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var password = "";

function passwordGenerator() {

    
    if (lowerCase === true) {
        password += lowerCase.random(char);
    } if (upperCase === true) {
        password += upperCase.random(char);
    } if (specialChar === true) {
        password += specialChar.random(char);
    } else {
        break;
    }

    return password;
};