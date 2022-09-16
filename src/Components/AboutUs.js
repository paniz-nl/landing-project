import React from 'react';
import { Link, Outlet } from 'react-router-dom';
//------------------------------------
//version 5.2.0 
//import { useHistory} from 'react-router-dom';

//------------------------------------
//version 6
//import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
//    const navigate = useNavigate();
    
  //  const clickHandler = () => {
        //version 5.2.0
        //history = useHistory()
        //push new link:
        //history.push("/")
        
        //------------------------------------
        //replace new link:
        //history.replace("/")

        //------------------------------------
        //version 6
        //push new link by default in version 6:
        //navigate('/');

        //------------------------------------
        //replace new link:
        // navigate('/', {replace: true});  
        //------------------------------------
        //back into previous link:
        // navigate(-1);  
        // navigate(-2);  
        // navigate(1); going to next link  
    // };

    return (
        <div>
            <Outlet />
            <h1>About us</h1>
            {/* <button onClick={clickHandler}>click me</button> */}
            <ul>
                <li>
                    <Link to="programmers">Programmers</Link>
                </li>
                <li>
                    <Link to="drivers">Drivers</Link>
                </li>
            </ul>
        </div>
    );
};

export default AboutUs;