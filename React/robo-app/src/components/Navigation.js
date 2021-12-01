import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className='navigation-container'>
      <div>
        <Link to='/' className='links'>
          Home
        </Link>
      </div>
      <div>
        <Link to='/robot-list' className='links'>
          Lista roboti
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
