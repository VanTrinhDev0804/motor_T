/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link ,Route} from 'react-router-dom';

const menus = [
    {
        path : "/Home",
        name : "Trang chủ",
        exact : true,
    },
    {
        path : "/Motor-List",
        name : "Motor",
        exact : false,
    },
    {
        path : "/Contact",
        name : "Liên hệ",
        exact : false,
    },
    {
        path : "/Service",
        name : "Dịch Vụ",
        exact : false,
    },
];

const MenuLink = ({lable, to , onExact })=>{
    return (
        <Route
            path = { to }
            exact = {onExact}
            children = {({match})=>{
                var active = match ? 'active' : '';
                return (
                    <li className={`nav-item mr-5 ${active} `} >
                        <Link to ={to} className="nav-link  text-uppercase text-white" >{lable}</Link>
                    </li>
                );
            }}/>
    );
}

function showMenuLink(menus){
    var result = null;
    if( menus.length > 0){
        result = menus.map((menu, index)=>{
            return (
                <MenuLink
                    key = {index}
                    lable= {menu.name}
                    to ={menu.path}
                    onExact ={menu.exact}
                />
            );
        });
    }
    return result;
}

function Menu(){
        return (
            <div className="header row w-100 ">
                <div className="navbar navbar-expand  header__Navbar col-8">
                    <ul className="navbar-nav  ">
                        {showMenuLink(menus)}
                    </ul>
                </div>
                <div id="btn_opLogin" className="header_logo col-2 h-100">
                    <img className="header_logo_img" src="../img/main/logoshop.png" alt="logoshopmotor" />
                </div>
                <div className="col-2 d-flex align-self-center">
                    <a id="login" className=" No_DangNhap header_login h-100 text-decoration-none  text-center" >
                        <div className=" mt-1">
                            <i className="bi bi-person-circle"></i>
                            <p id="User">ĐĂNG NHẬP</p>
                        </div>
                    </a>
                </div>
            </div>

    );
    }


export default Menu;