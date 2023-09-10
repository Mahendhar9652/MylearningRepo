const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('./model');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');

app.use(cors({
    origin: '*'
}));

app.use(express.json());

mongoose.connect('mongodb+srv://mahendhar96522:Mahendhar9652@chat-app.to7ujcy.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB"))
    .catch(err => console.log("Error connecting to DB:", err));

app.listen(4000, () => console.log('Server is running 4000'));

app.post('/register', async (req, res) => {
    const { registerData } = req.body;
    const { username, email, password, confirmpassword } = registerData;

    try {
        const emails = await userSchema.findOne({ 'registerData.email': email });
        const usernames = await userSchema.findOne({ 'registerData.username': username });
        if (emails ) {
            console.log('email already exists');
            return res.status(400).send('email already exists');
        }else if(usernames){
            console.log('username already exists');
            return res.status(400).send('username already exists');
        }else{
            if (password !== confirmpassword) {
                console.log('Passwords do not match');
                return res.status(400).send('Passwords do not match');
            }
    
            const newUser = new userSchema({ registerData });
            await newUser.save();
    
            const users = await userSchema.find();
            return res.json(users);
        }

     
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
});


app.get('/users', async (req, res) => {
    try {
        const users = await userSchema.find();
        return res.json(users);
    } catch (e) {
        console.log(e);
    }
});




app.get('/', async (req, res) => {
    try {
        return res.json('hello world');
    } catch (e) {
        console.log(e);
    }
});









app.post('/login', async (req, res) => {
    const { loginData } = req.body;
    const { email, password } = loginData;
    try {
        const user = await userSchema.findOne({ 'registerData.email': email });
        if (!user) {
            return res.status(400).send("User not found");
        } else {
            const userDetails = user.registerData;
            if (userDetails.password !== password) {
                return res.status(400).send("Wrong password");
            } else {
                const payload = {
                    user: {
                      id: user.id,
                      email: user.registerData.email,
                      username: user.registerData.username,
                      photo: user.registerData.photo,
                      // add other user properties as needed
                    }
                  };
                  const secret = 'secret';
                  const token = jwt.sign(payload, secret, { expiresIn: 3600 });
                  return res.json({ token, user: payload.user });
                  
            }
        }
    } catch (e) {
        console.log(e);
    }
});


// Define schema
const msgsSchema = new mongoose.Schema({
    newMsg: {
      type: Object,
      required: true
    }
  });
  
  // Create model
  const msgsModel = mongoose.model('msgs', msgsSchema);
  
  // Route handler
  app.post('/sendmsg', async (req, res) => {
    const { newMsg } = req.body;
    console.log(newMsg);
    try {
      const msg = new msgsModel({ newMsg });
      await msg.save();
      const msgs = await msgsModel.find();
      return res.json(msgs);
    } catch (err) {
      console.log(err);
      return res.status(500).send('Internal server error');
    }
  });
  
  app.get('/allmsgs', async (req, res) => {
    try {
      const allmsgs = await msgsModel.find();
      return res.json(allmsgs);
    } catch (err) {
      console.log(err);
      return res.status(500).send('Internal server error');
    }
  });
  