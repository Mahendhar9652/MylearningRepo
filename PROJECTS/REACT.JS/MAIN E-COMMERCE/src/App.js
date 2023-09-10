
import React, { useState ,useEffect ,createContext} from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Seller from './Seller';
import SellerRegister from './SellerRegister';
import SellerLogin  from './SellerLogin'
import SellerCart from './SellerCart';
import Buy from './Buy';
import BuyCart from './BuyCart';
import Profile from './Profile';
import { auth ,db } from './firebase';
import {ref, set,get,update,remove} from 'firebase/database'
import axios from 'axios';

export const store = createContext(null);

const App = () => {
  const [content, setContent] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState([]);
 const [cartData ,setCartData]=useState([])
const [cartLength,setCartLength]=useState(0)

  async function info () {
    await auth.onAuthStateChanged((user) => setCurrentUser(user));

  }
  info()

  const fetchData = async () => {
    const response = await axios.get('https://shopify-c6f65-default-rtdb.firebaseio.com/.json');
    const objectValues = Object.values(response.data.sellers);
    setContent(objectValues);
  };

  const FetchCartData=async()=>{
    if(currentUser){
      const email =currentUser.email;
      //const enCodedEmail =email.replace(".",",").replace("@","+");
      await get(ref(db,'cart/')).then((response)=>{
      var data  = Object.values(response.val())
      //console.log(data[0].email)
     // console.log(data.length);
     var filteredData =data.filter(items=>items.email===currentUser.email) 
     setCartData(filteredData)
     setCartLength(filteredData.length)
    })}}

  
  const FetchProfile = async() => {
    if(currentUser){
      const email =currentUser.email;
      const encodedEmail = email.replace(".", ",").replace("@", "+");
    await  get(ref(db,'profile/'+encodedEmail)).then((response)=>{
        const responseVal = response.val();
        setProfile(responseVal);
      });
    }
    
  };
FetchProfile()
  
  useEffect(() => {
    fetchData();
FetchCartData()
  
  }, [{profile,content,currentUser,cartData,cartLength}]);

  return (
    <store.Provider value={{currentUser,profile,content ,cartData,cartLength}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/sellerregister' element={<SellerRegister/>}/>
          <Route path='/sellerlogin' element={<SellerLogin/>}/>
          {currentUser&&<>
            <Route path='/home' element={<Home/>}/>
          <Route path='/seller' element={<Seller/>}/>
          <Route path='/sellercart' element={<SellerCart/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/buycart' element={<BuyCart/>}/>
          <Route path='/profile' element={<Profile/>}/>
          </>}
        </Routes>
      </BrowserRouter>
    </store.Provider>
  )
}

export default App
