import "dotenv/config.js";
import "../../config/dataBase.js";
import User from "../User.js";


const users = [
  {
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    address: "Street 12 #45-67",
    phone: 3001234567,
    password: "password123",
    online: true,
  },
  {
    name: "Maria Gómez",
    email: "maria.gomez@email.com",
    address: "Avenue 34 #56-78",
    phone: 3002345678,
    password: "password234",
    online: true,
  },
  {
    name: "John Doe",
    email: "john.doe@email.com",
    address: "Boulevard 89 #67-45",
    phone: 3003456789,
    password: "password345",
    online: true,
  },
  {
    name: "Sophie Laurent",
    email: "sophie.laurent@email.com",
    address: "Main Street 23 #45-12",
    phone: 3004567890,
    password: "password456",
    online: true,
  },
  {
    name: "Carlos Rivera",
    email: "carlos.rivera@email.com",
    address: "Central Park #45-78",
    phone: 3005678901,
    password: "password567",
    online: true,
  },
  {
    name: "Emily Chen",
    email: "emily.chen@email.com",
    address: "Maple Drive #67-12",
    phone: 3006789012,
    password: "password678",
    online: false,
  },
  {
    name: "Liam O'Connor",
    email: "liam.oconnor@email.com",
    address: "Oak Lane #89-34",
    phone: 3007890123,
    password: "password789",
    online: false,
  },
  {
    name: "Laura Smith",
    email: "laura.smith@email.com",
    address: "Pine Avenue #34-56",
    phone: 3008901234,
    password: "password890",
    online: false,
  },
  {
    name: "Oliver Brown",
    email: "oliver.brown@email.com",
    address: "Elm Street #78-90",
    phone: 3009012345,
    password: "password901",
    online: false,
  },
  {
    name: "Sophia Taylor",
    email: "sophia.taylor@email.com",
    address: "Cedar Road #56-78",
    phone: 3000123456,
    password: "password012",
    online: false,
  }
];

User.insertMany(users)
  .then(() => {
    console.log("Data inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
