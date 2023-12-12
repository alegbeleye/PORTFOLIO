import { useState, useEffect } from 'react';
import LandingPage from './Pages/LandingPage';
import { motion } from 'framer-motion';
import Style from './portfolio.module.css'
import { Routes, Route } from 'react-router-dom';
import MoreInfo from './Pages/MoreInfo';

type mousePos = {
  mouseX: number;
  mouseY: number;
};

function App():JSX.Element {
  const [mousePos, setMousePos] = useState<mousePos>()
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePos({ mouseX: clientX-13, mouseY: clientY-15});
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
    <motion.div animate={{x:mousePos?mousePos.mouseX:0, y:mousePos?mousePos.mouseY:0}} transition={{stiffness:10, damping:0, restDelta: 0.9, type:"tween"}} className={Style.cursor}/>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/more-info/:id" element={<MoreInfo />} />
    </Routes>
    </>
  );
}

export default App;
