import { EntityRepository, Repository } from "typeorm";
import { user } from "../entities/user"

@EntityRepository(user)
class usersRepository extends Repository<user>{

}

export { usersRepository }