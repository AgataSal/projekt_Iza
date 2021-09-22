const StormDB = require("stormdb")
const engine = new StormDB.localFileEngine("./db.json");
const db = new StormDB(engine);


module.exports = function() {

    this.validate = (mail) => {
            let users = db.get("users").value()

            for(index in users){
               console.log((users[index]["mail"] == mail))
                if(users[index]["mail"] == mail) return 0;
            }
            return 1;
    };
    


     

    this.register = (mail,pass) => {
        let newuser = {mail:mail,password:pass}
        db.get("users").push(newuser)
        db.save()
    }

    
}

