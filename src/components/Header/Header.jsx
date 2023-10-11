import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <NavLink to="/" className="header-link"></NavLink>

      </div>
    </div>
  )
}

export default Header