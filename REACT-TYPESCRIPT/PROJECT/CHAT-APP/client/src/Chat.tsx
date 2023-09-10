import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Chat.css';
import Footer from './Footer';

type UserProfileType = {
username: string;
email: string;
photo: string;
[key: string]: any; // Allow any additional fields on user profile
registerData?: any; // Define registerData property (optional)
};



type Message = {
[x: string]: any;
receiverUsername: string;
receiverPhoto: string;
message: string;
senderUsername: string;
senderPhoto: string;
senderEmail: string;
receiverEmail: string;
};

const Main = () => {






const location = useLocation();
const navigate = useNavigate();
var user = location.state?.user;
const [allUsers, setAllUsers] = useState<UserProfileType[]>([]);
const [currentUser, setCurrentUser] = useState<UserProfileType>();
const [filteredMessages, setFilteredMessages] = useState<UserProfileType[]>([]);
const [recentUsers, setRecentUsers] = useState<UserProfileType[]>([]);
const [filteredUsers, setFilteredUsers] = useState<UserProfileType[]>([]);
const [msg, setMsg] = useState<string>('');
const [userMsgs, setUserMsgs] = useState<Message[]>([]);
const [receiverMsgs, setReceiverMsgs] = useState<Message[]>([]);
const [currentMsgUser,setCurrentMsgUser]=useState<UserProfileType|null|undefined>(null)
const [keyM,setKeyM]=useState()






const fetchAllUsers = async () => {
try {
const response = await axios.get<{ [key: string]: UserProfileType }>('http://localhost:4000/users');
const fetchedUsers = Object.values(response.data);
const data = fetchedUsers.map((items: UserProfileType) => items.registerData);
setAllUsers(data);
} catch (error) {
console.error(error);
}
};


const loginUserExcept =allUsers.filter((items:any)=>items.email !==user.email)

async function getAllMsgs() {
  try {
    const response = await axios.get<Message[]>('http://localhost:4000/allmsgs');
    const res = Object.values(response.data);
    const data = res.map((items: Message,any) => items.newMsg);
    const filtered = data.filter(
      (items: Message) =>
        (items.senderUsername === user.username || items.receiverUsername === user.username) &&
        items.senderUsername !== user.username
    );
    const recentuserD = filtered.map((items: Message) => items.senderUsername);
    const uniqueRecentUser = Array.from(new Set(recentuserD));
    const responses = await axios.get<{ [key: string]: UserProfileType }>('http://localhost:4000/users');
    const users = Object.values(responses.data);
    const datas = users.map((user: UserProfileType, index: number) => user.registerData);
    const fullRecentUsers = datas.filter((items: any) => uniqueRecentUser.includes(items.username));
    setRecentUsers(fullRecentUsers);
  } catch (error) {
    console.error(error);
  }
}




const handleSearchUsers = (event: React.ChangeEvent<HTMLInputElement>) => {
const value = event.target.value.toLowerCase();
const filtered = loginUserExcept.filter((user) => user.username.toLowerCase().includes(value));
setFilteredUsers(filtered);
};

const handleSearchMessages = (event: React.ChangeEvent<HTMLInputElement>) => {
const value = event.target.value.toLowerCase();
const filtered :UserProfileType[] = recentUsers.filter((message) =>message.useername.toLowerCase().includes(value));
setFilteredMessages(filtered);
};



//console.log(currentMsgUser);

const send = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  if (currentMsgUser !== null && currentMsgUser !== undefined) {
    const newMsg:Message = {
      message: msg,
      senderUsername: user.username,
      senderEmail: user.email,
      senderPhoto: user.photo,
      receiverUsername: currentMsgUser.username,
      receiverEmail: currentMsgUser.email,
      receiverPhoto: currentMsgUser.photo,
    };
    console.log(newMsg);
    axios.post('http://localhost:4000/sendmsg', { newMsg }).then(() => console.log('sent'));
    setMsg('');
      currentMsgNaviagte(keyM)
    
    
    // Update mainDisplay state variable
    
  }
};


const currentMsgNaviagte = async (dataIndex:any) => {
  setKeyM(dataIndex)
 const messageUser = loginUserExcept[dataIndex];
 //console.log(messageUser);
 setCurrentMsgUser(messageUser)
};
const signout=()=>{
  user='';
  navigate('/')
}


const chat = async()=>{
    if (currentMsgUser !== null && currentMsgUser !== undefined) {
   //console.log(currentMsgUser);
  const response = await axios.get('http://localhost:4000/allmsgs');
  const fetchData = Object.values(response.data);
  const data = fetchData.map((item: any) => item.newMsg);
  //const filteredData = data.filter((item: any) => item.senderUsername === user.username && item.receiverUsername === messageUser.username);
  const userm = data.filter((item: any) =>  item.senderUsername === user.username && item.receiverUsername === currentMsgUser.username );
  const mod = userm.map((item: any) => ({ ...item, senderUsername: 'me' }));
  const receiverm = data.filter((item: any) => item.senderUsername === currentMsgUser.username&&item.receiverUsername===user.username);
  setUserMsgs(mod); 
  setReceiverMsgs(receiverm);
    }
}




useEffect(() => {

fetchAllUsers();
getAllMsgs();
chat();
}, [user, currentUser,filteredMessages,recentUsers,currentMsgUser,msg,allUsers]);

  return (
    <>
    <div className='chat'>
      <header>
        <h2 className='heading'>CHATMATE</h2>
        {user ? (
          <div>
       <img src={user.photo} height='40' width='60' alt='photo' />
          <p>{user.username}</p>
          <button onClick={()=>signout()}>Signout</button>
          </div>
        
      
        ) : (
          <p>Loading user information...</p>
        )}
      </header>
      <aside>
        <div>
          <h1 className='users-heading'>Users</h1>
          <input type="search" placeholder="Search users" onChange={handleSearchUsers}  />
          <hr></hr>
        </div>

        {loginUserExcept ? (filteredUsers.length > 0 ? filteredUsers :loginUserExcept).map((user: UserProfileType, index: number) => (
        <div key={index} onClick={() => currentMsgNaviagte(index)} className='card'>
          <img src={user.photo} height='40' width='60' alt='photo' />
          <p>{user.username}</p>
        </div>
      )
         
        ) : (
          <p>Loading users information...</p>
        )}
      </aside>
      <section>
      <p>Chats</p>
      <div>
          <input type="search" placeholder="Search recent users" onChange={handleSearchMessages} />
        
          </div>
         <hr />
         <div>
         {loginUserExcept ? (filteredMessages.length > 0 ? filteredMessages :recentUsers).map((user: UserProfileType, index: number) => (
        <div key={index} onClick={() => currentMsgNaviagte(index)} className='card'>
          <img src={user.photo} height='40' width='60' alt='photo' />
          <p>{user.username}</p>
        </div>
         
        ) ) : (
          <p>Loading users information...</p>
        )}
         </div>
     </section>
     <div className='msgs-display'>
     {currentMsgUser ? (
      <>
       <div className='msg-info'>
         <img src={currentMsgUser.photo} height='40' width='60' alt='photo' />
         <h1>{currentMsgUser.username}</h1>
         <hr></hr>
       </div>

     <div className='msg-bar'>
       <div className='left'>
         {receiverMsgs.map((msg: Message, index: number) => (
           <div key={index} className='left'>             
             <p>{msg.message}</p>
           </div>
         ))}
       </div>
       <div className='right'>
         {userMsgs.map((msg: Message, index: number) => (
           <div key={index}>
             <p>{msg.message}</p>
           </div>
         ))}
       </div>
     </div>
     <form onSubmit={send}>
       <input type="text" placeholder="Send Message" value={msg} onChange={(e) => setMsg(e.target.value)} />
       <input type="submit" value="Send" />
     </form>
     </>
    ) :null}
   </div>
   


   
  
    
    
  
  
    </div>
    <Footer />
    </>
  );
};

export default Main;
