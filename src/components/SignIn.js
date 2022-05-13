import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/SignIn.scss';

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };   ////계산된 속성명 사용

  loginClickHandler = () => {
    const { email, password } = this.state;
    fetch("http://10.58.2.17:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }; 

  render() {
    const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것
    return (
      <>
        {isOpen ? (  

         ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
        /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
	      ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
        ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
         /// true인 상태로 있어서 화면이 안꺼진다.
      
          <div className="modal">
            <div onClick={close}>
              <div className="loginModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="modalContents" onClick={isOpen}>
                  <img
                    className="signinIcon"
                    src="/Images/SignIn/signinIcon.png"
                  />
                  <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="이메일"
                    onChange={this.loginHandler}
                  />
                  <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={this.loginHandler}
                  />
                  <div className="loginMid">
                    <label className="autoLogin">
                      {" "}
                      <input type="checkbox" id="hint" /> 로그인 유지하기
                    </label>
                    <div className="autoLogin">아이디/비밀번호 찾기</div>
                  </div>
                  <button className="loginBtn" onClick={this.loginClickHandler}>
                    {" "}
                    로그인{" "}
                  </button>
                  <div className="socialBox">
                    <div className="kakao">
                      <div className="kakaoText">카카오 계정으로 신규가입</div>
                    </div>
                    <div className="facebook">
                      <div className="facebookText">
                        페이스북 계정으로 신규가입
                      </div>
                    </div>
                  </div>
                  <div className="loginEnd">
                    <div className="noUser">비회원 주문 조회</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (<div>Error</div>)}
      </>
    );
  }
}

export default SignIn;