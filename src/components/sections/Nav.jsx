import Container from "../utils/Container"
import logo from '../../assets/logo.svg'

const Nav = ({ links }) => {
  return (
    <div className="shadow-sm py-3 sticky top-0 left-0">
      <Container className="flex justify-between items-center gap-3">
        <a href="#">
          <img src={logo} alt="Mint" className="max-w-[80px]" />
        </a>
        <nav>
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a href="#" className="font-medium text-primary hover:text-secondary transition-colors">Work</a>
            </li>
            <li>
              <a href="#" className="font-medium text-primary hover:text-secondary transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="font-medium text-primary hover:text-secondary transition-colors">Blog</a>
            </li>
            <li>
              <a href="#" className="font-medium text-primary hover:text-secondary transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Nav
