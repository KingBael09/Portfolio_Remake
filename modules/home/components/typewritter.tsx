import React from "react";
import Typewriter from "typewriter-effect";

const Typewritter: React.FC = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Student",
            "Pro Coder!",
            "Full-Stack Dev",
            "Linux Enthusiast",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default Typewritter;
