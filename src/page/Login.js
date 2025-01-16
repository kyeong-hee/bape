import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setLoginOK}) {
  const navigate = useNavigate();

  const login = (event)=>{
    event.preventDefault(); //form이 새로고침 되는 걸 방지 함 
    setLoginOK(true);
    navigate("/")
  }


  return (
    <div>
      {/* 입력한 정보 제출할 때는 form 태그 작성(ex: login 등...) */}
      <form onSubmit={(event)=>login(event)}>
        <div className="loginform">
          <div className="idpw">
            <div className="id">
              <label htmlFor='id'>ID</label>
              <input type="text" id='id' />
            </div>
            <div className="pw">
              <label htmlFor="pw">PW</label>
              <input type="password" id='pw' />
            </div>
            <button type="submit">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login