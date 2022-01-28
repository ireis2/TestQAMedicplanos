var faker = require('faker')
import { generate } from 'gerador-validador-cpf'
import { validate } from 'gerador-validador-cpf'


export default {

register: function () {

var data = {

    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    cpf:generate({ format: true }),
    rg:'89547136542',
    email:faker.internet.email(),
    birth:'10/03/1998',
    address: {
        cep:'03978-260',
        street:'Amazonas',
        number:'65',
        complement:'NA',
        city:'Sãp Paulo',
        districty:'Morumbi'
    }
}
return data
}

}

