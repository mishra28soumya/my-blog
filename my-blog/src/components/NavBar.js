import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="border-b-4 border-blue-600 text-center fixed top-0 w-full bg-blue-400 font-bold text-lg text-black">
            <ul>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/" className="pl-6 pr-7">
                        Home
                    </Link>
                </li>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/about" className="pl-6 pr-7">
                        About
                    </Link>
                </li>
                <li className="inline-block pt-4 pb-4">
                    <Link to="/articleslist" className="pl-6 pr-7">
                        Articles List
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;