import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';

function Header({loginok}) {

  // 메뉴를 객체로 등록해서 사용
  const menus = ["T-shirts", "Tops", "Shirts", "Sweats", "Coat&Jaket", "pants"]

  // login Click: move to login page
  const navigate = useNavigate();
  const moveLogin = ()=>{
    navigate("/login");
  }

  // input key search event
  const search = (event) =>{
    // console.log(event.target.value)
    if(event.key === "Enter"){
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
    }
    
  }

  return (
    <header>
      <div className="login" onClick={moveLogin}>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <p>{loginok ? "logout" : "login"}</p>
        </div>
      </div>
      <div className="logo">
        <h1>
          <Link to="/">
            <img src="https://int.bape.com/cdn/shop/files/BAPE_LOGO_5ab56a10-b38a-4a10-8268-0c70116700f6.jpg?v=1721631550&width=500" alt="logo" />
          </Link>
        </h1>
      </div>
      <div className="nav">
        <ul>
          {
            menus.map((menu, idx) => (
              <li key={idx}>{menu}</li>
            ))
          }
        </ul>
        <div className="searach">
          <input 
          type="text" 
          placeholder="상품을 검색해보세요."
          onKeyPress={(event)=>search(event)} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </header>
  )
}

export default Header