import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 200px;
  background: linear-gradient(135deg, #e09, #d0e);
`;
const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  width: 400px;
  height: 400px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;
function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{clicked ? <Circle layoutId="Circle" style={{ borderRadius: 50 }} /> : null}</Box>
      <Box>{clicked ? null : <Circle layoutId="Circle" style={{ borderRadius: 0 }} />}</Box>
    </Wrapper>
  );
}

export default App;
