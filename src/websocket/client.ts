import { Socket } from "socket.io"
import { user } from "../entities/user";
import { io } from "../http"
import { ConnectionsService } from "../services/connectionsService"
import { UsersService } from "../services/usersService"
import { MessageService } from "../services/messageService"

interface IParams {
    text: string;
    email: string
}

io.on("connect", (socket) => {
    const connectionsService = new ConnectionsService();
    const usersService = new UsersService();
    const messageService = new MessageService();
    let user_id = null;


     socket.on("client_first_acess", async (params) => {
         const socket_id = socket.id;
         const { text, email } = params as IParams;

         //********Usuários********/

         const userExists = await usersService.findByEmail(email)     

         if(!userExists){
             const user = await usersService.create(email)
             await connectionsService.create({
                socket_id,
                user_id: user.id
            });

            user_id = user.id;
         }else{
             user_id = userExists.id;
            const connection = await connectionsService.findByUser(userExists.id)

            if (!connection){
            await connectionsService.create({
                socket_id,
                user_id: userExists.id
            })
      
         }else{
             connection.socket_id = socket_id;
             await connectionsService.create(connection);

         }}

         //*******messages */
         await messageService.create({
             text,
             user_id
         })
         
     })
    });