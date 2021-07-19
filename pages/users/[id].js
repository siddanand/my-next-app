import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
 function User(){

   const[status, setStatus] = useState(false);
  const router = useRouter();
  const user  = router.query
useEffect(() => {
   // Always do navigations after the first render
   async function fetchMyAPI() {
      let response = await fetch('https://api.github.com/users')
      response = await response.json()
      console.log(response);
      console.log(user.id);
      response.map((item)=>{
        console.log(item.login);
      if(item.login==user.id){
        setStatus(true);
      }
      })
    }
    fetchMyAPI();
 }, [user])
 console.log({status});
 if(status==true){
   console.log(10);
   return (<div>DYNAMIC ROUTES : IS A USER</div>);
 }
  return (<div>DYNAMIC ROUTES: NOT A USER</div>);
}

export default User
