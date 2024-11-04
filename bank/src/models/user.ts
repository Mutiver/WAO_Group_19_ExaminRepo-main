import { Schema, model } from 'mongoose';

export interface IUser {
    ID: String;
    Amount: number;
}

const userSchema = new Schema<IUser>({
    ID: { type: String, required: true, unique: true },
    Amount: { type: Number, required: true }
});

const User = model<IUser>('User', userSchema);

export default User;
