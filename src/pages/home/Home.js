import React, { useState, useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./Home.css";
// constants
import { TOKEN_ENDPOINT } from "../../constants/endpoints";
import { BLOG_ROUTE, APPOINTMENT_ROUTE, APPOINTMENTS_ROUTE } from "../../constants/routes";
// components
import Nav from "../../components/nav/main/Nav";
import Loader from "../../components/loader/Loader"
import Footer from "../../components/footer/Footer"
import UserContext from "../../contexts/User";
// material-ui
import { IconButton } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

// lazy components
const Blog = lazy(() => import("../../components/blog/main/Blog"));
const Appointment = lazy(() => import("../../components/appointment/Appointment"));
const Appointments = lazy(() => import("../../components/appointments/main/Appointments"));

const Home = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleScrollEvents = () => {
            const scrollToTopBtn = document.querySelector(".home__scrollToTopBtn");
            scrollToTopBtn.style.transform = window.scrollY > 10 ? "scale(1)" : "scale(0)";
        };

        document.addEventListener("scroll", handleScrollEvents);
        return () => document.removeEventListener("scroll", handleScrollEvents);
    }, [])

    useEffect(() => {
        try {
            setLoading(true);
            const { token } = JSON.parse(localStorage.getItem("cc_task"));
            axios.post(TOKEN_ENDPOINT, { token }).then(res => {
                setUser(res.data);
                setLoading(false);
            }).catch(err => { });
        } catch (err) { setLoading(false); }
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {loading ? <Loader /> : null}
            <IconButton onClick={() => window.scrollTo(0, 0)} className="home__scrollToTopBtn" ><ArrowUpwardRoundedIcon /></IconButton>
            <div className="home">
                <Nav />
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route exact path={BLOG_ROUTE} component={Blog} />
                        <Route exact path={APPOINTMENT_ROUTE} component={Appointment} />
                        <Route exact path={APPOINTMENTS_ROUTE} component={Appointments} />
                        <Redirect to={BLOG_ROUTE} />
                    </Switch>
                </Suspense>
                <Footer />
            </div>
        </UserContext.Provider>
    );
};

export default Home;
