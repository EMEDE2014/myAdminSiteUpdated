const validator = require('validator');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');


const LoginSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    repeatpassword: { type: String, required: true }
});


const LoginModel = mongoose.model('Login', LoginSchema);

class Login {

    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;

    }
   
    

    async register() {
        this.valida();
        if (this.errors.length > 0) return;

      await this.usersExist();
        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password,salt);
        if (this.errors.length > 0) return;
        
        try {
           
            this.user = await LoginModel.create(this.body);
        }
        catch (e) {
            console.log('Pronto');
        }
    }
    async usersExist(){
   this.user = await LoginModel.findOne({email: this.body.email})
    if(this.user)this.errors.push('Usuário já existe');
    }

    valida() {
        this.cleanUp();

        if(this.body.firstname.length < 3 || this.body.firstname > 50){
            this.errors.push('O nome precisa ter 3 ou mais caracteres.');
        }

        if(this.body.lastname.length < 3 || this.body.lastname > 50){
            this.errors.push('O sobrenome precisa ter 3 ou mais caracteres.');
        }
        // Validacao
        // o e-mail precisa ser valido
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');
        // A senha precisa ter entre 8 e 30
        if (this.body.password.length <= 8 || this.body.password.length > 30) {
            console.log(this.body.password.value)
            this.errors.push('A senha precisa ter entre 8 ou 30 caracteres.');
        }
        
    }
    
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            firstname: this.body.firstname,
            lastname: this.body.lastname,
            email: this.body.email,
            password: this.body.password,
            repeatpassword: this.body.repeatpassword,
        }
    }
}

module.exports = Login;