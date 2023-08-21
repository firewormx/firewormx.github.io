import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>SuperM</em> with our easy to use app,
          and get your products delivered straight to your doorstep.
        </p>
        <Link to="/learnreact/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://raw.githubusercontent.com/firewormx/firewormx.github.io/main/learnreact/home.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}
