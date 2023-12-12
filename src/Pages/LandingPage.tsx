import { useState, useEffect } from 'react';
import Contacts from '../components/Contacts';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Style from "../portfolio.module.css"
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import DataAnalysis from '../components/DataAnalysis';

function LandingPage():JSX.Element {

  return (
    <div className={Style.landingPage}>
      <Nav/>
      <Header/>
      <Projects/>
      <DataAnalysis/>
      <Contacts/>
      <Footer/>
      </div>
  );
}

export default LandingPage;