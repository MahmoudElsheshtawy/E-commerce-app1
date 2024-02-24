
import { useAuth0 } from "@auth0/auth0-react";

const Info = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{display:"flex", alignItems:'center'}}>
        <img src={user.picture} alt={user.name} style={{width:"50px", borderRadius:"50%"}} />
        <span style={{marginLeft:"10px"}}>{user.name}</span>
       
      </div>
    )
  );
};

export default Info;