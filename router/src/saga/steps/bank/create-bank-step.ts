import { TodoInput } from "../../../types/graphql/graphql";
import { BaseStep } from "../../step-base";
import sendMessage from '../../../rabbit-mq/send';

export const CreateBankStep: BaseStep<TodoInput> = {
  action: async (context, object) => {
    return new Promise<void>(async (resolve, reject) => {
      try{
        console.log('Creating bank statement');
        
        await sendMessage(context.user, -object.price);
        resolve();
      }
      catch(err){
        console.log(`Failed to create bank statement`);
        console.log('RabbitMQ failed with error, ' , err);
        reject(err);
      }
    });
    
  },
  compensation: async (context, object) => {}
    
};

