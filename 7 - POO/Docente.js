import User from "./User.js"

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docentes', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return`estudante aprovado ${estudante} no curso ${curso}`
    }
}
