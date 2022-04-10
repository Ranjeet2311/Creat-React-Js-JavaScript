import React, { useState } from "react";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import { motion } from "framer-motion";

function Headline({ description }) {
  const [underline, setUnderline] = useState(false);

  const text = "Heading for this news is not available ";

  const dDecsription = text.substring(0, 46);

  function onMouseEnter() {
    setUnderline(true);
  }

  function onMouseLeave() {
    setUnderline((prVal) => {
      return !prVal;
    });
  }

  return (
    <div
      className="headline"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="new-pop-up">
        <motion.div
          animate={{
            scale: [0.1, 1.2, 1, 1.2],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            times: [1, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <FiberNewIcon style={{ color: "red" }} />
        </motion.div>
      </div>
      <h1
        style={{
          color: underline ? "#5fb6e7" : null,
          textDecoration: underline ? "underline" : null,
        }}
      >
        {description ? description : dDecsription}
      </h1>
    </div>
  );
}

export default Headline;
