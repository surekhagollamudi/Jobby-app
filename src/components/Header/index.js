import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const getLogin = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <ul className="container">
        <li>
          <Link to="/">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
        </li>
        <li>
          <div className="home-job-container">
            <Link to="/">
              <p className="home">Home</p>
            </Link>
            <Link to="/jobs">
              <p className="home">Jobs</p>
            </Link>
          </div>
        </li>
        <li>
          <button type="button" className="button" onClick={getLogin}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Header)
