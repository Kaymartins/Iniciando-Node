import { ConnectionsRepository } from "../repositories/connectionsRepository"
import { getCustomRepository, Repository } from "typeorm"
import { Connection } from "../entities/connection"


interface IConnectionCreate {
    socket_id: string; 
    user_id: string;
    admin_id?: string;
    id?: string
}
class ConnectionsService {
    private ConnectionsRepository: Repository<Connection>

    constructor(){
        this.ConnectionsRepository = getCustomRepository(ConnectionsRepository);
    }
     async create({socket_id, user_id, admin_id, id}: IConnectionCreate) {
         const connection = this.ConnectionsRepository.create({
             socket_id,
             user_id,
             admin_id,
             id,
         });
         await this.ConnectionsRepository.save(connection)

         return connection;
     }

    async findByUserId(user_id: string){
        const connection = await this.ConnectionsRepository.findOne({
            user_id,
        });
        return connection;
    }

    async findAllWithoutAdmin(){
        const connections = await this.ConnectionsRepository.find({
            where: { admin_id: null },
            relations: [ "User" ],
        });

        return connections
    }

    async findBySocketId(socket_id: string){
        const connection = await this.ConnectionsRepository.findOne({socket_id})

        return connection
    }

    async updateAdminId(user_id: string, admin_id:string){
        await this.ConnectionsRepository.createQueryBuilder().
        update(Connection).set({ admin_id }).where("user_id = :user_id", {
          user_id
        }).execute();
    }
}

export { ConnectionsService }