import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    Simple Dashboard V1
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/">
                                Github
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}
