function isValidPassword(password, username) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    // Check if the password contains spaces
    if (password.includes(' ')) {
        return false;
    }
    // Check if the password contains the username
    if (password.includes(username)) {
        return false;
    }
    // If all conditions are met, return true
    return true;
}

Exemples:
console.log(isValidPassword('short', 'blaise123'));           // false (less than 8 characters)
console.log(isValidPassword('no spaces allowed', 'blaise'));  // false (contains spaces)
console.log(isValidPassword('blaise12345', 'blaise123'));       // false (contains username)
console.log(isValidPassword('securePass123', 'blaise123'));   // true