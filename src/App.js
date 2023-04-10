// import logo from './logo.svg';
import './App.css';

import wordImg from './assets/word.svg'

import Foot from './component/Foot'
import Monsters from './component/Monsters';
import Navbar from './component/Navbar';





function App() {
  return (
    <>
  <Navbar />
      
      
      <div className='bg'>
        <div className='row'>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>
            <h1 className='mt-5 pt-5 text-light'>My first react website</h1>
            <p className='text-light'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est labo</p>
            <button className=' block btn btn-success'>explore</button>
          </div>

        </div>



      </div>
      <div className='container'>
        <div className='row mt-5 pt-4'>
          <div className='col-md-6'>
            <h6>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est labo
              .  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est labo</h6>
          </div>
          <div className='col-md-6'>
            <img width="500" src={wordImg} alt='word' />
          </div>

        </div>
      </div>
      <Monsters />
      <Foot />








    </>
  )
}

export default App;
