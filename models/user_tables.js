const { Model } = require('objection');

class UserInfo extends Model {
    static get tableName(){
        return "UserInfo";
    }
    static get NameColumn() {
        return 'Name';
    }

    static get GmailColumn() {
        return 'Gmail';
    }

    static get PasswordColumn() {
        return 'Password';
    }

    static get NumberColumn() {
        return 'Number';
    }

    static get jsonSchema(){
        return {
            type : 'object',
            required : ['Name', 'Gmail', 'Password', 'Number'],
            properties : {
                id : {type : 'integer'},
                Name : {type : "string"},
                Gmail : {type : "string"},
                Password : {type : "integer"},
                Number : {type : "integer"}
            }
        }
    }
}



module.exports = UserInfo;