import { TodoDeleteInput } from "../../../types/graphql/graphql";
import { BaseStep } from "../../step-base";
import sendMessage from '../../../rabbit-mq/send';

export const DeleteBankStep: BaseStep<TodoDeleteInput> = {
  action: async (context, object) => {
    return new Promise<void>(async (resolve, reject) => {
      try{
        await sendMessage(context.user, object.price);
        resolve();
      }
      catch(err){
        console.log(`Failed to delete bank with id: ${object.id}`);
        reject(err);
      }
    });
    
  },
  compensation: async (context, object) => {}
    
};

