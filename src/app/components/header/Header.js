import Logo from "./Logo"
import NavLinks from "./NavLinks"

const Header = () => {
	return (
		<div className="shadow-lg shadow-indigo-500/40">
			<Logo />
			<NavLinks />
		</div>
	)
}

export default Header