import * as React from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import { apiUrl } from '../../config/api';
import { LogTypes } from '../log/signin/Login';
import { AppContext } from './../../AppContext';
import './_navbar.scss';


interface Props {
  ToggleMenu: () => void
}

const Menu = ({ ToggleMenu }: Props) => {
  return (
    <>
      <Link to="home" smooth={true} offset={-100} duration={200} onClick={ToggleMenu} >
        <p>Home</p>
      </Link>
      <Link to="wgpt" smooth={true} offset={-100} duration={200} onClick={ToggleMenu} >
        <p>What is GPT</p>
      </Link>
      <Link to="possibility" smooth={true} offset={-100} duration={200} onClick={ToggleMenu} >
        <p>Open AI</p>
      </Link>
      <Link to="features" smooth={true} offset={-80} duration={200} onClick={ToggleMenu} >
        <p>Case Studies</p>
      </Link>
      <Link to="blog" smooth={true} offset={-80} duration={200} onClick={ToggleMenu} >
        <p>Blog</p>
      </Link>
    </>
  )
}

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false)

  const { isUserLogged, userName, userId, changeUserLogged, changeLoginVisible, changeLoginMode } = React.useContext(AppContext)


  const handleSigninClick = () => {
    changeLoginVisible(true);
    changeLoginMode(LogTypes.SIGNIN);
    setToggleMenu(false)
  }

  const handleSignupClick = () => {
    changeLoginVisible(true);
    changeLoginMode(LogTypes.SIGNUP);
    setToggleMenu(false)
  }

  const handleSignoutClick = async () => {

    changeUserLogged(false);

    try {
      const res = await fetch(`${apiUrl}/logout`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: userId
        })
      })

      const data = await res.json();


      if (data.message) {
        // setServerSigninMessage(data.message);
        console.log(data.message);
      }

    } catch (err) {
      throw new Error()
    }
  }

  return (
    <>
      <div className="gpt__navbar">
        <div className="gpt__navbar-links">
          <a className="gpt__navbar-links_logo" href="#home">
            <img src={logo} alt="logo" />
          </a>
          <div className="gpt__navbar-links_container">
            <Menu ToggleMenu={() => setToggleMenu(false)} />
          </div>
        </div>
        <div className="gpt__navbar-sign">
          {isUserLogged ?
            <div>
              <button className='user' >Log as: {userName}</button>
              <button onClick={handleSignoutClick}>Sign out</button>
            </div>
            :
            <div>
              <button onClick={handleSigninClick}>Sign in</button>
              <button onClick={handleSignupClick}>Sign up</button>
            </div>
          }
        </div>
        <div className="gpt__navbar-menu">
          {toggleMenu ?
            <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            :
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="gpt__navbar-menu_container scale-up-center">
              <div className="gpt__navbar-menu_container-links">
                <Menu ToggleMenu={() => setToggleMenu(false)} />
                <div className="gpt__navbar-menu_container-links-sign">
                  {isUserLogged ?
                    <div>
                      <p >Log as: {userName}</p>
                      <button onClick={handleSignoutClick}>Sign out</button>
                    </div>
                    :
                    <div>
                      <button onClick={handleSigninClick}>Sign in</button>
                      <button onClick={handleSignupClick}>Sign up</button>
                    </div>
                  }
                </div>
              </div>

            </div>
          )

          }
        </div>
      </div>
    </>
  )
}