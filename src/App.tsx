import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 15px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const boxVariants: Variants = {
  hover: {
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: '100px',
  },
  drag: {
    backgroundColor: 'rgb(76, 209, 55)',
    // transition: {
    //   duration: 0.5,
    //   bounce: 0.5,
    // },
  },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={1}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
