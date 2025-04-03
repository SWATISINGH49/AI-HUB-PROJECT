// App.js

import React from 'react';
import './Css/App.css'; // Import your CSS file for App styling
import Final from './Final';
import Tlist from './Components/Tlist';
import ColumnsWithIcons from './Components/ColumnsWithIcons';
import Navbar from './Components/Navbar';
import TwoColumnLayout from './Components/TwoColumnLayout';
import Accordion from './Components/Accordion';
import WhiteColumn from './Components/WhiteColumn';
import Layout from './Components/Layout';
import Steps from './Components/Steps';
import QAndA from './Components/QAndA';
import Fast from './Components/Fast';
import Bslide from './Components/Bslide';
import Footer from './Components/Footer';
import RoundButton from './Components/RoundButton';
import ScrollButton from './Components/ScrollButton';
import PlanYourTrip from './Components/PlanYourTrip';
import Top from './Components/Top';
import Header from './Components/Header';
import Pricing from './Components/Pricing';
import MovingTextComponent from './Components/MovingTextComponent';
import Platform from './Components/Platform';
import LatestNewsCards from './Components/LatestNewsCards';
import LineDot from './Components/LineDot';
import BendingLine from './Components/BendingLine';
import CurlyLinesWithMovingDot from './Components/CurlyLinesWithMovingDot';
import AnimatedSVG from './Components/AnimatedSVG';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Top />
      <MovingTextComponent/>
      <ColumnsWithIcons />
      
      <TwoColumnLayout />
      {/* <Accordion /> */}
      <WhiteColumn />
      <Layout />
      <QAndA />
      <LatestNewsCards/>
      <Platform/>
      <Fast />
      <Bslide />
      <Steps />
      <LineDot />
      {/* <Pricing /> */}
      {/* <CurlyLinesWithMovingDot/> */}
      <Footer />
      {/* <AnimatedSVG/> */}
      {/* <BendingLine/> */}
      <RoundButton />
     <ScrollButton />
     
      
    </div>
  );
}

export default App;



