import React from "react";
import { NavLink } from "react-router-dom";

import Footer from '../../Components/Footer';

import Team from "./Team";
import SubHeader from "./SubHeader";

const About = () => {
    return (
        <div>
            <SubHeader />
            <div className="row">
                <div className="col-4 p-5 mt-5">
                    <h5 className="px-5 mt-5 display-4 text-capitalize">This is About Page</h5>
                </div>
                <div className="col-6 p-5 mt-5">
                    <p className="text-justify pt-2 mt-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <Team />
            <NavLink className="btn btn-success p-2 m-5" to="/home">
                {" "}
                Home
            </NavLink>
            <Footer />
        </div>
    );
};

export default About;
