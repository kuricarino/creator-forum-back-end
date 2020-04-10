const bcrypt = require('bcryptjs');
// bcrypt hashes users pw from seed file 
const db = require('./models');
const SEED_USER_PASSWORD = 'sei12345678';
// set generic pw so every user will have this pw (easier for testing)

const users = [
{
    firstName: "User One",
    lastName: "Test",
    username: "User One Test",
    email: "userone@userone.com",
    photo: 'https://img.icons8.com/cute-clipart/50/000000/add-user-male.png',
},
{
    firstName: "User Number Two",
    lastName: "Test Number Two",
    username: "User Number Two Test",
    email: "usertwo@usertwo.com",
    photo: 'https://img.icons8.com/cute-clipart/50/000000/add-user-male.png',
},
];

const uploads = [
{    
    private: false, // allows user to toggle (show or hide username)
    title: "Waves crashing on sand",
    category: "Photography", // may reference Category model as stretch-goal
    link: "link@link.com",
    body: "Wanted to capture the blues",
},
{    
    private: true, // allows user to toggle (show or hide username)
    title: "Cavernous mountain",
    category: "Videography", // may reference Category model as stretch-goal
    link: "link2@link2.com",
    body: "Short video about a hike through the mountains.",
},
];

// deletes all users, then loops through the user's array
// hashes every user's passwords with the same SEED_USER_PASSWORD password
// then creates the user
const seedUsers = async () => {
  try {
    await db.User.deleteMany({});
    console.log('Deleted all users.');
    let user;
    for (user of users) {
      const hash = await bcrypt.hash(SEED_USER_PASSWORD, 10);
      user.password = hash;
      user = await db.User.create(user);
    }
    console.log('Seeded users.');
    // returns the last user's ID so it can map this user to every upload later
    return user._id;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

const seedDatabase = async () => {
  try {
    // gets the user ID back from seedUsers so it can attach this to every upload as a User ref
    let userId = await seedUsers();
    uploads.forEach(upload => upload.user = userId);
    await db.Upload.deleteMany({});
    console.log('Deleted previous uploads.');

    let createdUploads = await db.Upload.create(uploads);
    console.log(`Created ${createdUploads.length} uploads.`);

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
}

seedDatabase();