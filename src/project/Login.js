import './Style_Login.css';
import logo from './logo.png';

function Login() {

  return(
      <div className="Login-card-container">
        
        <div className="Login-card">

          <div className="Login-card-logo">
            <img src={logo} alt="logo" />
            <div>ㅅ줭인</div>
          </div>

          <div className="Login-card-header">
            <h1>Sign In</h1>
            <div>Please login to use platform</div>
          </div>

          <form action="" className="Login-card-form">

            <div className="Form-item">
              <span className="Form-item-icon material-symbols-rounded">mail</span>
              <input type="text" placeholder="Enter Email" required autofocus />
            </div>

            <div className="Form-item">
              <span className="Form-item-icon material-symbols-rounded">lock</span>
              <input type="password" placeholder="Enter Password" required />
            </div>

            <div className="Form-item-other">
              <div className="Checkbox">
                <input type="checkbox" id="rememberMeCheckbox" />
                <label for="rememberMeCheckbox">Remember me</label>
              </div>
              <a href="/">I forgot my password</a>
            </div>

            <button type="submit">Sign In</button>

          </form>

          <div className="Login-card-footer">
            Don't have an account? <a href="/signup">Create a free account</a>.
          </div>

        </div>
        <div className="Login-card-social">
          <div>Other Sign-in Platform</div>

          <div className="Login-card-social-btns">

            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
            </a>

            <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
              </svg>
            </a>

          </div>
        </div>
      </div>
  );
}

export default Login;