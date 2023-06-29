
import mongoose from 'mongoose' 
import { messagesModel } from './models/messages.model';


export default class MessageManager {
  connection = mongoose.connect('mongodb+srv://fcurrao1:fcurrao1@cluster0.pzrcxla.mongodb.net/ecommerce?retryWrites=true&w=majority')
  


  async addChat(chat) {
    let result = await messagesModel.create(chat) 
    return result;
   }


}