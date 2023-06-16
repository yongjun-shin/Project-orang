import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ReactComponent as Age} from './svg/age.svg';
import {ReactComponent as Name} from './svg/name.svg';
import {ReactComponent as Email} from './svg/email.svg';
import {ReactComponent as Password} from './svg/password.svg';

function Header(props){
  const changeState = (event) => {
    event.preventDefault();
    if(props.state_log === 'YES'){
      props.setState('HOME_LOG');
    } else if(props.state_log === 'NO'){
      props.setState('HOME');
    } 
    
  };
  return (
    <header>
      <div class="header">
        <a href='/' onClick={changeState}>
          <img src='/img/orang_logo.jpg' alt='logo' class='logo' ></img>
        </a>
      </div>
    </header>
  );
}

function Nav(props){
  let navi = null;
  const changeState = (event) => {
    event.preventDefault();
    const nextState = event.target.name;
    if (props.state_log === 'NO'){
      props.setState(nextState);
    }
    else if(props.state_log === 'YES') {
      if(nextState === 'HOME'){
        props.setState('HOME_LOG');
      }
      else{
        props.setState(nextState);
      }
    }
  };

  if (props.state_log === 'YES') {
    navi = (<nav className="nav">
        <span className="nav-items" style={{ fontFamily: 'Montserrat' }}>
          <a href="/home_log" class={props.state === 'HOME_LOG' ? 'choice' : ''} name="HOME_LOG" onClick={changeState}>
            HOME
          </a>
          <a href="/about" class={props.state === 'ABOUT' ? 'choice' : ''} name="ABOUT" onClick={changeState}>
            ABOUT
          </a>
          <a href="/business" className={props.state === 'BUSINESS' ? 'choice' : ''} name="BUSINESS" onClick={changeState}>
          BUSINESS
          </a>
          <a href="/membership" className={props.state === 'MEMBERSHIP' ? 'choice' : ''} name="MEMBERSHIP" onClick={changeState}>
          MEMBERSHIP
          </a>
          <a href="/" name="LOGOUT" onClick={()=>props.setState_log('NO')}>
          LOGOUT
          </a>
        </span>
      </nav>);
  } else if (props.state_log === 'NO'){
    navi = (<nav className="nav">
      <span className="nav-items" style={{ fontFamily: 'Montserrat' }}>
        <a href="/" class={props.state === 'HOME' ? 'choice' : ''} name="HOME" onClick={changeState}>
          HOME
        </a>
        <a href="/login" class={props.state === 'LOGIN' ? 'choice' : ''} name="LOGIN" onClick={changeState}>
          LOGIN
        </a>
        <a href="/join" className={props.state === 'JOIN' ? 'choice' : ''} name="JOIN" onClick={changeState}>
          JOIN
        </a>
      </span>
    </nav>);
  }

  return navi;
}

function Main(props){
  let content = null; 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    
  };

  if (props.state === 'HOME' || props.state === 'HOME_LOG'){
    content = (<div class='main_con'>
    <video src='/video/orange.mp4' alt='main_video' class='main_video' autoPlay='autoplay' muted='muted'></video>
  </div>)
  }
  else if (props.state === 'LOGIN'){ 
    content = (
      <div class='login_rect'>
        <form onSubmit={handleSubmit} class='login_form' >
          <label class='login_label'>
            <Email></Email>
            <input type="email" value={email} onChange={handleEmailChange} placeholder='E-mail'/>
          </label>
          <br />
          <label class='login_label'>
            <Password></Password>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password'/>
          </label>
          <br />
          <button type="submit" class='login_btn' style={{fontFamily: 'Montserrat'}} onClick={(event)=>{
            if(email==="syj" && password==="1234"){
              event.preventDefault();
              props.setState_log('YES');
              props.setState('HOME_LOG');
            }
            else{
              event.preventDefault();
              window.alert("아이디와 비밀번호를 다시 확인해주세요.");
            }
          }}>LOGIN</button>
        </form>
      </div>
    )
  }
  else if (props.state === 'JOIN'){
    content = (
      <div class='login_rect'>
        <form onSubmit={handleSubmit} class='join_form' >
          <label class='join_label'>
            <Name></Name>
            <input type="text" value={name} onChange={handleNameChange} placeholder='Name'/>
          </label>

          <label class='join_label'>
            <Email></Email>
            <input type="email" value={email} onChange={handleEmailChange} placeholder='E-mail'/>
          </label>
   
          <label class='join_label'>
            <Password></Password>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password'/>
          </label>
    
          <label class='join_label'>
            <Age></Age>
            <input type="text" value={age} onChange={handleAgeChange} placeholder='Age'/>
          </label>
          <button type="submit" class='login_btn' style={{fontFamily: 'Montserrat'}}>JOIN</button>
        </form>
      </div>
      )
  }
  return (
    <>{content}</>
  );
}

function Footer(){
  return (
    <footer class='foot'>
      <div class='foot_con'>
        <div>
          <img src='/img/orang_logo2.png' alt='foot_img' class='foot_img'></img>
        </div>
        <div>
          <span class='foot_texts' style={{fontFamily: 'Montserrat'}}>
            <a>서울시 종로구 새문안로3길 36 1229호</a>
            <a>ⓒ ORANG & ORANG 2021 All Rights Reserved.</a>
          </span>
        </div>
        </div>
    </footer>
  );
}

/* main */
function App() {
  /* state = 'HOME', 'HOME_log', 'LOGIN', 'JOIN' ... */
  const [state, setState] = useState('HOME');
  const [state_log, setState_log] = useState('NO');

  return (
    <div class='body'>
      <Header state={state} setState={setState} state_log={state_log}></Header>
      <Nav state={state} setState={setState} state_log={state_log} setState_log={setState_log}></Nav>
      <Main state={state} setState={setState} state_log={state_log} setState_log={setState_log}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
