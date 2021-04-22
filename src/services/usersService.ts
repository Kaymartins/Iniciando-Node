import { getCustomRepository, Repository } from "typeorm"
import { UsersController } from "../controller/usersController";
import { user } from "../entities/user";
import { usersRepository } from "../repositories/usersRepository"



class UsersService {
    private UsersRepository: Repository<user>;

    constructor(){
        this.UsersRepository = getCustomRepository(usersRepository);
    }

    async create(email: string) { 
        //verificar se o usuario existe 

        const userExists = await this.UsersRepository.findOne({
            email
        })

        if (userExists){
            return userExists
        }

        const user = this.UsersRepository.create({
            email
        })

        await this.UsersRepository.save(user)

        //se nao existir, salvar no DB

        //se existir, retornar user

        return user;
    }

}

export { UsersService }