import connectDB from './db';
import User from './models/user';

const createRandomUser = async (id: number) => {
  const randomAmount = Math.floor(Math.random() * 91) + 10; // Random amount between 10 and 100
  const user = new User({ ID: id, Amount: randomAmount });
  await user.save();
  console.log(`User created with ID: ${id} and Amount: ${randomAmount}`);
};

const createUsers = async () => {
  await connectDB();

  for (let i = 1; i <= 10; i++) {
    await createRandomUser(i);
  }

  console.log('All users created.');
  process.exit(0);
};

createUsers();
