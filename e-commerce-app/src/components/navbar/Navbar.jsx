import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import "./Navbar.css";
// import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import Info from "./Info";

const Navbar = () => {
  const [scrolled, setScroll] = useState(false);
  // const [showcard,setshowCard]= useState(false)

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 110) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // const {cartQuntity}= useShoppingCart()
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  //   return (
  // <div>
  {
    /*  */
  }

  return (
    <>
      <div id="Navbar" className={`contaner ${scrolled ? "stiky-header" : ""}`}>
        <div className="center">
          <a href="#" style={{ textDecoration: "none", color: "#fff" }}>
            <span>Sh Store</span>
          </a>
        </div>

        <div className="right">
          <AiOutlineSearch className="icon" />
          <AiOutlineHeart className="icon" />
          <div className="cart">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
              
            ) : (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
            {/* <CgShoppingCart onClick={()=>setshowCard(!showcard)} className='icon'/> */}
            {/* <span className='qut' onClick={()=>setshowCard(!showcard)} >{cartQuntity}</span> */}
          </div>
        </div>
      </div>

      {/* {showcard &&<Cart setshowCart={setshowCard}/>} */}
      {/*  */}

     <div className="infonav" >
     <div className="one" style={{backgroundColor:"#aae3a"}}><Info /></div>
     <div className="one" style={{backgroundColor:"#aaea"}}>rr</div>
     <div className="one" style={{backgroundColor:"#aarr5a"}}>rr</div>

     </div>
    </>
  );
};

export default Navbar;
