import propTypes from "prop-types";
import { useEffect, type ReactNode } from "react";

const Wrapper = ({
  classes,
  children,
}: {
  classes: string;
  children: ReactNode;
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className={`${
        classes ? classes : ""
      } w-full min-h-screen h-fit py-20 md:px-10`}
    >
      {children}
    </section>
  );
};

Wrapper.propTypes = {
  classes: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Wrapper;
