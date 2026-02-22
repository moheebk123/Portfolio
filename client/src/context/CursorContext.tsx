import { createContext, useEffect, useState, type ReactNode } from "react";
import propTypes from "prop-types";

export const CursorContext = createContext({
  cursorPosition: {
    x: 0,
    y: 0,
  },
  mouseEnterHandler: () => {},
  mouseLeaveHandler: () => {},
});

const CursorProvider = ({ children }: {children: ReactNode}) => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBackground, setCursorBackground] = useState("default");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: "#fff",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPosition.x - 72,
      y: cursorPosition.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const mouseEnterHandler = () => {
    setCursorBackground("text");
  };

  const mouseLeaveHandler = () => {
    setCursorBackground("default");
  };

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBackground,
        mouseEnterHandler,
        mouseLeaveHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

CursorProvider.propTypes = {
  children: propTypes.node,
};

export default CursorProvider;
