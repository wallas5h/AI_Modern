import * as React from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
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
        <p>Library</p>
      </Link>
    </>
  )
}

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false)

  const context = React.useContext(AppContext)
  const { changeLoginVisible } = context;

  // console.log(context)

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
          <p onClick={() => changeLoginVisible(true)}>Sign in</p>
          <button onClick={() => changeLoginVisible(true)}>Sign up</button>
          {/* <p>Sign in</p>
          <button >Sign up</button> */}
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
                  <p>Sign in</p>
                  <button>Sign up</button>
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