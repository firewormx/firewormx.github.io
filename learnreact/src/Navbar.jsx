import { NavLink } from "react-router-dom";
import { Badge } from "@mantine/core";

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="navbar">
      <NavLink to="/learnreact/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/learnreact/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/learnreact/about"
          >
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/learnreact/products"
          >
            Products
          </NavLink>
        </li>
        <li style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
          <NavLink to="/learnreact/cart" className="nav-item nav-cart btn btn-accent">
            Cart
          </NavLink>
          {cartCount > 0 && (
            <Badge
              size="sm"
              color="red"
              style={{ position: "absolute", top: -6, right: -10 }}
            >
              {cartCount}
            </Badge>
          )}
        </li>
      </ul>
    </nav>
  );
}
