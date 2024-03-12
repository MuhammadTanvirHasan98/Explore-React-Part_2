
export default function User({person}){
  console.log(person);
  const {id, name, username, email} = person;

  const userStyle = {
     border:"2px solid red",
     borderRadius:"20px",
     margin:"20px",
     padding:"20px"
  }

   return (

       <div style={userStyle}>
           <h2>Name: {name}</h2>
           <p>Id: {id}</p>
           <p>Username: {username}</p>
           <h4>Email: {email}</h4>
        </div>
     
     
   )
}