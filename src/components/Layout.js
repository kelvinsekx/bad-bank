import { Outlet, Link } from "react-router-dom";
import './layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <div id="company-name">
            <Link to="/">
                Bad Bank
            </Link>
        </div>
        <ul>
          <li>
            <Link to="/create-account">Create Account</Link>
          </li>
          <li>
            <Link to="/deposit">Deposit</Link>
          </li>
          <li>
            <Link to="/withdraw">Withdraw</Link>
          </li>
          <li>
            <Link to="/all-data">All Data</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;