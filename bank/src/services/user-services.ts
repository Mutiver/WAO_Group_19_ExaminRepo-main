import User, { IUser } from '../models/user';

export const createUser = async (ID: String, Amount: number): Promise<IUser> => {
    const user = new User({ ID, Amount });
    await user.save();
    return user;
};

export const checkUserAmount = async (ID: String): Promise<number> => {
    var user = await User.findOne({ ID });
    if (!user) {
        await createUser(ID, 50);
        return 50;
    } 
    return user.Amount;
};

export const changeAmount = async (ID: String, amountToChange: number): Promise<string> => {
    const user = await User.findOne({ ID });
    if (!user) throw new Error('User not found');
    if (user.Amount + amountToChange < 0) return 'InsufficientFunds';
    user.Amount += amountToChange;
    await user.save();
    return 'Success';
};
