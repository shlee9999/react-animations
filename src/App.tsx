import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
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
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: white;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 100%;
  place-self: center; // 공부
`;
// const boxVariants: Variants = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       duration: 1,
//       bounce: 0.5,
//       delayChildren: 0.5,
//       staggerChildren: 0.2,
//     },
//   },
// };

const circleVariatns: Variants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.8,
      duration: 1,
    },
  },
};
const boxVariants = {
  // nico source
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariatns} />
        <Circle variants={circleVariatns} />
        <Circle variants={circleVariatns} />
        <Circle variants={circleVariatns} />
      </Box>
    </Wrapper>
  );
}

export default App;
