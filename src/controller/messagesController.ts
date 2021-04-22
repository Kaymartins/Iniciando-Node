import { Request, Response} from "express"
import { MessageService } from "../services/messageService"


class MessageController{
      
    async create(request: Request, response: Response){
        const { admin_id, text, user_id} = request.body;
        const messagesServices = new MessageService();

        const message = await messagesServices.create({
            admin_id,
            text,
            user_id
        })

        return response.json(message);
    }
      //localhost:3333/messages/idDoUsuario
    async showByUser(request: Request, response: Response){
        const { id } = request.params;

        const messagesServices = new MessageService();

        const list = await messagesServices.listByUser(id);

        return response.json(list);

    }

}

export { MessageController }