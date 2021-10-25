import React from "react";
import "./Footer.css";
// constants
import * as LINKS from "../../constants/urls";
// material-ui
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Footer = () => {
    return (
        <footer className="flex-rw">
            <ul className="footer-list-top" style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
                <li>
                    <h4 className="footer-list-header">Services</h4></li>
                <li><a href={LINKS.INDIVIDUAL_CONSULTATION_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Individual Consultation</a></li>
                <li><a href={LINKS.CRISIS_INTERVENTION_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Crisis Intervention</a></li>
                <li><a href={LINKS.GROUP_COUNSELLING_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Group Counselling</a></li>

                <li><a href={LINKS.PSYCHIATRIC_SERVICES_URL} target="_blank" rel="noreferrer" itemprop="significantLink" className="generic-anchor footer-list-anchor">Psychiatric Services</a></li>

                <li><a href={LINKS.GATE_KEEPERS_TRAINING_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Gatekeepers' Training</a></li>

                <li><a href={LINKS.HELP_A_FRIEND_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Help A Friend</a></li>

                <li><a href={LINKS.AFTER_HOUR_SERVICES_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">After Hour Services</a></li>
            </ul>
            <ul className="footer-list-top" style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>
                <li><h4 className="footer-list-header">Insta-Links</h4></li>
                <li><a href={LINKS.IWG_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Institute wellness group</a></li>
                <li><a href={LINKS.SWG_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Students welfare group</a></li>
                <li><a href={LINKS.YOUR_DOST_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">YourDost</a></li>

                <li><a href={LINKS.MEDALL_URL} target="_blank" rel="noreferrer" itemprop="significantLink" className="generic-anchor footer-list-anchor">Medall</a></li>

                <li><a href={LINKS.RCPSYCH_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Royal College of Psychiatrists</a></li>

                <li><a href={LINKS.PSA_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Pennstate Student Affairs</a></li>

                <li><a href={LINKS.JED_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Jed foundation</a></li>

                <li><a href={LINKS.MIGHTY_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Mighty</a></li>
            </ul>
            <ul className="footer-list-top" style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
                <li id='help'>
                    <h4 className="footer-list-header">Links</h4></li>
                <li><a href={LINKS.REACH_US_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Reach Us</a></li>
                <li><a href={LINKS.HAPPENINGS_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Happenings</a></li>
                <li id='find-a-store'><a href={LINKS.FAQ_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>
                <li id='user-registration'><a href={LINKS.TOM_URL} target="_blank" rel="noreferrer" className="generic-anchor footer-list-anchor" itemprop="significantLink">Theme Of The Month</a></li>
                <li id='order-tracking'><a href={LINKS.PEOPLE_URL} target="_blank" rel="noreferrer" itemprop="significantLink" className="generic-anchor footer-list-anchor">People</a></li>
            </ul>
            <section className="footer-social-section flex-rw" style={{ marginTop: "30px" }}>
                <span className="footer-social-overlap footer-social-connect" style={{ fontSize: "45px" }}>
                    CONNECT <span className="footer-social-small" style={{ fontSize: "35px" }}>with</span> US
                </span>
                <span className="footer-social-overlap footer-social-icons-wrapper" style={{ backgroundColor: "#1d2410" }}>
                    <a href={LINKS.CC_IITKGP_URL} target="_blank" rel="noreferrer" className="generic-anchor" title="Website" itemprop="significantLink"><LanguageRoundedIcon /></a>
                    <a href={LINKS.CC_IITKGP_FB_URL} target="_blank" rel="noreferrer" className="generic-anchor" title="Facebook" itemprop="significantLink"><FacebookIcon /></a>
                    <a href={LINKS.CC_IITKGP_YT_URL} target="_blank" rel="noreferrer" className="generic-anchor" title="Youtube" itemprop="significantLink"><YouTubeIcon /></a>
                    <a href={LINKS.CC_IITKGP_MAIL_URL} className="generic-anchor" title="Email"><EmailRoundedIcon /></a>
                </span>
            </section>
            <section className="footer-bottom-section flex-rw">
                <div className="footer-bottom-wrapper" style={{ fontSize: "15px" }}>
                    Copyright © Counselling Centre - IIT Kharagpur 2021 - All Rights Reserved -
                </div>
            </section>
        </footer>

    );
};

export default Footer;
