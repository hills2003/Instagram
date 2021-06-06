import './App.css';
import instagram1 from "./assets/instagram1.png";
import instagram2 from "./assets/instagram2.png";
import {Link} from "react-router-dom";
function App() {

  return (
    <div className="App">
        <div className="center">
          <div className="top">
                 <div className="left">
                   <div className="first">
                        <img src={instagram1} />
                   </div>
                      
                 </div>
                 <div className="right">
                   <div className="card">
                     <div className="spaced">
                     <div className="instagram">Instagram</div>
                     <form>
                       <input type="text" name="text" placeholder="phone number ,username or email" />
                       <input type="password" placeholder="password" />
                       <Link to="/instagram"><input className="button" type="button" name="button" value="Log In" /></Link>
                     </form>
                     <h4 className="or">or</h4>
                     <div className="facebook">
                        <svg width="899" height="1010" viewBox="0 0 899 1010" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M755 98H19C1.3 98 -13 112.3 -13 130V866C-13 883.7 1.3 898 19 898H755C772.7 898 787 883.7 787 866V130C787 112.3 772.7 98 755 98ZM662.6 331.5H598.7C548.6 331.5 538.9 355.3 538.9 390.3V467.4H658.5L642.9 588.1H538.9V898H414.2V588.2H309.9V467.4H414.2V378.4C414.2 275.1 477.3 218.8 569.5 218.8C613.7 218.8 651.6 222.1 662.7 223.6V331.5H662.6Z" fill="black"/>
                        </svg>
                      <h3>Log in with facebook</h3>
                     </div>
                     <h3 className="h3">Forgot Password </h3>
                    </div>
                    </div>

                    <div className="dont-have">
                      <span>Dont have an account? <strong>Sign up</strong></span>
                    </div>

                    <div className="app"><span>Get the app</span></div>

                 </div>
          </div>

          <div className="bottom1">
               <span>About </span>
               <span>Blog </span>
               <span>Jobs </span>
               <span>Help </span>
               <span>Api </span>
               <span>Privacy </span>
               <span>Terms </span>
               <span>Topaccount </span>
               <span>Hashtags </span>
               <span>Locations </span>
          </div>
          <div className="bottom2">
            <span>English</span>
            <span> &copy; 2021 instagram from facebook</span>
          </div>
        </div>
    </div>
  );
}

export default App;
