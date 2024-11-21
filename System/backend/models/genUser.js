const db = require('../util/database');

module.exports = class GenUser{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;

    }

    static find(email){
        return db.execute('SELECT * FROM gen_users WHERE gen_user_email = ?', [email]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO gen_users (username, gen_user_email, password) VALUES (?, ?, ?)', 
            [user.username, user.email, user.password]
        );
    }
    
}