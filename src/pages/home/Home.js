import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
// constants
import { TOKEN_ENDPOINT } from "../../constants/endpoints";
// contexts
// components
import Nav from "../../components/nav/Nav";
import Blog from "../../components/blog/main/Blog"
// import Appointment from "./components/appointment/main/Appointment"
import Footer from "../../components/footer/Footer"
import UserContext from "../../contexts/User";

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            const { token } = JSON.parse(localStorage.getItem("cc_task"));
            axios.post(TOKEN_ENDPOINT, { token }).then(res => setUser(res.data)).catch(err => { });
        } catch (err) { }
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            <div className="home">
                <Nav />
                <Blog />
                {/* <Appointment /> */}
                <Footer />
            </div>
        </UserContext.Provider>
    );
};

export default Home;
