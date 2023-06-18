import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ReactComponent as Age} from './svg/age.svg';
import {ReactComponent as Name} from './svg/name.svg';
import {ReactComponent as Email} from './svg/email.svg';
import {ReactComponent as Password} from './svg/password.svg';
import {ReactComponent as Woman} from './svg/woman.svg';
import {ReactComponent as Membership} from './svg/membership.svg';

import CustomSwiper from './components/swiper.js';

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

function About_hist(props) {
  const histText = props.hist.split('\n').map((line, index) => (
    <p key={index} style={{marginTop:'0px', marginBottom:'10px'}}>{'·'} {line}</p>
  ));

  return (
    <div class='about_hist'>
      <div class='first'>
        <span style={{fontSize:'25px', fontWeight:500}}>{props.year}</span>
        <div class='texts'>
          {histText}
        </div>
      </div>
      <hr style={{marginTop:'27px'}}/>
    </div>
  );
}
function Circle(props) {
  return (
    <svg>
      <circle cx='425' cy='251' r='60' fill={props.color} />
    </svg>
  );
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
  else if (props.state == 'ABOUT') {
    content = (
      <div class='about_cont' style={{marginTop:'103px', fontFamily:'Montserrat'}}>
        <div class='about1'>
          <img src='/img/about.jpg' class='img'/>
          <div class='texts'>
            <p style={{fontWeight:'bold', fontSize:'25px'}}>About ORANG <span style={{color:'#FF920D'}}>&</span> ORANG</p>
            <p style={{marginTop:'-20px', fontWeight:'500', fontSize:'15px'}}> <span style={{fontWeight:'bold', fontSize:'20px'}}>·</span> 우리는 효율적이고 경제적인 멤버십 서비스를 통해 스타트업과 중소기업 부문이 사업을 발전시킬 수 있도록 지원합니다.</p>
            <p style={{fontWeight:'bold'}}>We have 3 Visions</p>
            <div class='vision'>
              <p>· DEVELOPMENT</p>
              <p>· CONNECTION</p>
              <p>· COLLABORATION</p>
            </div>
          </div>
        </div>
        <div class='about2'>
          <div>
          <p style={{fontWeight: 500, fontSize:'35px', color:'#FF920D', marginBottom:'20px'}}>History</p>
          <hr style={{border:'1px solid #FAA237'}}/>
          <About_hist year={'2019'} hist={'Florida International Colleage'+ '\n' +'Osceola Country, FL'+ '\n' +'Grenoble Delegation Program 05'}></About_hist>
          <About_hist year={'2018'} hist={'Invest in Grenoble-Alpes'+'\n'+'Grenoble Delegation Program 04'}></About_hist>
          <About_hist year={'2017'} hist={'LAURUS Colleage'+'\n'+'Grenoble Delegation Program 03'}></About_hist>
          <About_hist year={'2016'} hist={'Sunn Zamm Trade'+'\n'+'Grenoble Delegation Program 02'}></About_hist>
          <About_hist year={'2015'} hist={'University at Hawai'+'\n'+ 'MWC Delegation Program' +'\n'+'Grenoble Delegation Program 01'}></About_hist>
          <About_hist year={'2014'} hist={'Florida International Colleage'+'\n'+'AEPI'}></About_hist>
          </div>
        </div>
        <div class='about3'>
          <Woman style={{width:'262px', height:'262px', marginRight:'20px'}}/>
          <div class='texts'>
            <p style={{fontSize:'25px', marginTop:'0px', marginBottom:'0px'}}>양혜원</p>
            <p style={{color:'#FF920D', fontSize:'20px', marginTop:'5px'}}>&nbsp;&nbsp;· CEO</p>
            <p style={{width:'332px', height:'111px', fontSize:'15px', marginTop:'18px', fontFamily:'Noto Serif KR'}}>CEO이자 설립자.<br/>프랑스 그르노블 알프스의 인베스트에서 이사, 미국 플로리다 주 오세올라 카운티에서 서울에 기반을 둔 한국 사업 개발 매니저로 일하고 있습니다.배경과 전 세계적인 네트워킹을 통해, 그녀는 G2G와 B2B를 이끌고 창의적인 프로젝트를 개발합니다.</p>
          </div>
        </div>
      </div>
    )
  }
  else if (props.state == 'BUSINESS') {
    content = (
      <div>BUSINESS</div>
    )
  }
  else if (props.state == 'MEMBERSHIP') {
    content = (
      <div class='membership'>
        <div class='first'>
          <svg style={{width: '214px', height: '208px', marginRight:'36px'}}>
            <circle cx='60' cy='60' r='60' fill='#FF920D'/>
            <circle cx='155' cy='88' r='60' fill='#FFE76B'/>
            <circle cx='76' cy='148' r='60' fill='#FBB55F'/>
          </svg>
          <p style={{fontSize:'20px', width:'428px', height:'70px'}}><span style={{fontSize:'30px', fontWeight:800, color:'#FF920D'}}>ORANG & ORANG</span><br/>연간 멤버쉽에 가입하고 혜택을 공유하세요.</p>
        </div>
        <div class='second'>
          <h1 style={{color:'#FF920D'}}>MEMBERSHIP <span style={{color:'#91908f'}}>TYPE</span></h1>
          <CustomSwiper></CustomSwiper>
        </div>
        <div class='third'>
          <Membership style={{width:'300px', height:'263px'}}/>
          <div>
            <p style={{width:'605px', fontSize:'14px', fontWeight:'540'}}>합리적인 가격, 효율적인 솔루션, 효과적인 네트워킹 우리는 연간 회원 서비스를 통해 가치를 연결합니다. ORANG&ORANG의 멤버가 되어 여러분의 영역을 더욱 확장하세요!<br/><br/>ORANG&ORANG 멤버십 서비스는 글로벌 진출을 희망하는 스타트업과 중소기업을 지원하기 위한 아이디어에서 출발했습니다. 당사의 멤버십 서비스를 통해 ORANG's Crew와 장/단기간 함께 할 수 있으며, 브랜드 아이덴티티를 정착시키고 협업 구조를 강화하는데 도움이 됩니다. <br/><br/>한국, 중국, 대만, 베트남, 싱가포르 등 아시아 국가, 프랑스, 이탈리아, 독일 등 유럽 국가, 북미 등 다양한 국가의 모든 회원들과 협업이 가능합니다.</p>
            <p style={{fontSize:'18px', fontWeight:'bold'}}><spans style={{color:'#FF920D'}}>ORANG & ORANG</spans>과 함께 하면 비즈니스에 집중할 수 있습니다.</p>
          </div>
        </div>
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
