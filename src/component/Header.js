import React from "react";

function Header() {
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content" > 
          <nav className="navbar navbar-default navbar-fixed-top"  style={{background:'#333333', display: 'flex', justifyContent: 'space-between'  }}>
              <div className="row" 
              // style={{ width: '80vw' }} 
              >
                <div className="col-md-3 col-sm-3">
                  <div className="site-title" style={{ whiteSpace: "nowrap" }}>
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>CÔNG TY CỔ PHẦN TRUYỀN THÔNG YANTA</h3>
                    </a>
                  </div>
                </div>
     
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          TRANG CHỦ
                        </a>
                      </li>
                      <li>
                        {/* <a href="/#about">About</a> */}
                        <a href="/ui-ux">CHÍNH SÁCH VỀ QUYÊN RIÊNG TƯ</a>
                      </li>
                      <li>
                        <a href="/#skill">ĐIỀU KHOẢN & ĐIỀU KIỆN</a>
                      </li>
                      <li>
                        <a href="/#resume">LIÊN HỆ</a>
                      </li>
                      <li>
                        <a href="/#service">VỀ CHÚNG TÔI</a>
                      </li>
                      {/* <li>
                        <a href="/#blog">Blog</a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
