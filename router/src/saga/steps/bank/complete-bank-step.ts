import { TodoUpdateInput } from "../../../types/graphql/graphql";
import { BaseStep } from "../../step-base";
import sendMessage from '../../../rabbit-mq/send';

export const CompleteBankStep: BaseStep<TodoUpdateInput> = {
  action: async (context, object) => {
    return new Promise<void>(async (resolve, reject) => {
      try{
        await sendMessage(context.user, object.price);
        resolve();
      }
      catch(err){
        console.log(`Failed to complete bank with id: ${object.id}`);
        reject(err);
      }
    });
    
  },
  compensation: async (context, object) => {}
    
};

