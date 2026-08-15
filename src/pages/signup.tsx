import { useEffect, useState } from "react"

export function SignUp(){
    const [username,setusername]=useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const register = async (e:any)=>{
        e.preventDefault();
        const data ={
            username,
            email,
            password
        }
        console.log(data)
//         try{
//              await fetch("http://localhost:5000/auth/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//         }
//         catch(error){
//             console.log(error)
//         }
    }
    return <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center", 
        margin:"80px",
        borderRadius:"5px",
        borderColor:"black"
          }}>
        <form action="" onSubmit={register} style={{
            display:"flex",
            gap:"20px",
            flexDirection:"column",
            justifyContent:"center",
        alignItems:"center"
        }}>
            <input type="text" placeholder="username" name="username" id="username" onChange={(e)=>{
                setusername(e.target.value)
            }}/>
            <input type="text" placeholder="email" name="email" id="email" onChange={(e)=>{
                setemail(e.target.value)
            }}/>
            <input type="password" placeholder="password" name="password" id="password" onChange={(e)=>{
                setpassword(e.target.value)
            }}/>
            <button>SignUp</button>
        </form>
    </div>
}