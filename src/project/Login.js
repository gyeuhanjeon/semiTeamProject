import styled from "styled-components";


const Sytles = styled.div`
body {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: linear-gradient(to right, #333399, #ff00cc);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 450px;
  background: rgba(255, 255, 255, .5);
  padding: 4rem;
  border-radius: 10px;
  position: relative;
}

.login-card::before {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, .15);
  inset: 0;
  transform: rotate(-5deg);
  z-index: -1;
}

.login-card-logo {
  margin-bottom: 2rem;
}

.login-card-logo img {
  width: 60px;
}

.login-card-logo,
.login-card-header,
.login-card-footer {
  text-align: center;
}

.login-card a {
  text-decoration: none;
  color: #35339a;
}

.login-card a:hover {
  text-decoration: underline;
}

.login-card-header {
  margin-bottom: 2rem;
}

.login-card-header h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: .5rem;
}

.login-card-header h1 + div {
  font-size: calc(1rem * .8);
  opacity: .8;
}

.login-card-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.login-card-form .form-item {
  position: relative;
}

.login-card-form .form-item .form-item-icon {
  position: absolute;
  top: .82rem;
  left: 1.4rem;
  font-size: 1.3rem;
  opacity: .4;
}

.login-card-form .checkbox {
  display: flex;
  align-items: center;
  gap: 7px;
}

.login-card-form .form-item-other {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(1rem * .8);
  margin-bottom: .5rem;
}

.login-card-footer {
  margin-top: 1.5rem;
  font-size: calc(1rem * .8);
}

.login-card input[type="text"],
.login-card input[type="password"],
.login-card input[type="email"] {
  border: none;
  outline: none;
  background: rgba(255, 255, 255, .3);
  padding: 1rem 1.5rem;
  padding-left: calc(1rem * 3.5);
  border-radius: 100px;
  width: 100%;
  transition: background .5s;
}

.login-card input:focus {
  background: white;
}

.login-card input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: black;
}

.login-card-form button {
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background .5s;
}

.login-card-form button:hover {
  background-color: rgba(0, 0, 0, .85);
  cursor: pointer;
}

.login-card-social {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  margin-top: 3rem;
}

.login-card-social > div {
  opacity: .8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: calc(1rem * .8);
}

.login-card-social-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.login-card-social-btns a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, .6);
  border-radius: 100px;
  transition: all .5s;
}

.login-card-social-btns a:hover {
  background: white;
  transform: scale(1.1);
}

/* Responsive */

@media (max-width: 768px) {
  body {
    padding: 2rem 0;
  }  

  .login-card {
    width: 300px;
    padding: 2rem;
  }
}`

function Login() {

    return(
      <Sytles>
      <body>
        {/* // <!-- login-card-container 의 시작 --> */}
  <div className="login_card_container">
    

    {/* <!-- login-card 의 시작--> */}
    <div className="login-card">

      {/* <!-- login-card-logo --> */}
      <div className="login-card-logo">
        <img src="logo.png" alt="logo" />
      </div>

      {/* <!-- login-card-header --> */}
      <div className="login-card-header">
        <h1>Sign In</h1>
        <div>Please login to use platform</div>
      </div>

      {/* <!-- login-card-form 의 시작--> */}
      <form action="" className="login-card-form">

        <div className="form-item">
          <span className="form-item-icon material-symbols-rounded">mail</span>
          <input type="text" placeholder="Enter Email" required autofocus />
        </div>

        <div className="form-item">
          <span className="form-item-icon material-symbols-rounded">lock</span>
          <input type="password" placeholder="Enter Password" required />
        </div>

        <div className="form-item-other">
          <div className="checkbox">
            <input type="checkbox" id="rememberMeCheckbox" />
            <label for="rememberMeCheckbox">Remember me</label>
          </div>
          <a href="#">I forgot my password</a>
        </div>

        <button type="submit">Sign In</button>

      </form>
      {/* <!-- login-card-form 의 끝--> */}

      {/* <!-- login-card-footer 의 시작 --> */}
      <div className="login-card-footer">
        Don't have an account? <a href="#">Create a free account</a>.
      </div>
      {/* <!-- login-card-footer 의 끝 --> */}

    </div>
    {/* <!-- login-card 의 끝--> */}

    {/* <!-- login-card-social 의 시작 --> */}
    <div className="login-card-social">
      <div>Other Sign-in Platform</div>

      {/* <!-- login-card-social-btns 의 시작 --> */}
      <div className="login-card-social-btns">

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
          </svg>
        </a>

        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
          </svg>
        </a>

      </div>
      {/* <!-- login-card-social-btns 의 끝 --> */}

    </div>
    {/* <!-- login-card-social 의 끝 --> */}

  </div>
  {/* <!-- login-card-container 의 끝 --> */}
  </body>
  </Sytles>

);
}
export default Login;