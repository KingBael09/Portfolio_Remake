import React from "react";
import styles from "./styles/Skills.module.scss";
import { SkillData } from "@data/skillsData";
import SkillCard from "./components/skillCard";
import dynamic from "next/dynamic";
import { motion, Transition, Variants } from "framer-motion";
import Component from "@layout/componentTransition";

const SkillModal = dynamic(() => import("./components/customModal"));

const ParentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  // exit: { opacity: 0, x: 50 },
};

const ParentTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  staggerChildren: 0.1,
};

const SkillsPage = () => {
  return (
    <>
      <SkillModal />
      <motion.div
        variants={ParentVariants}
        initial="hidden"
        animate="visible"
        transition={ParentTransition}
        layout
        className={styles.container}
      >
        {SkillData.map((e) => {
          return (
            <SkillCard
              key={e.name}
              data={e}
              component={motion.button}
              variants={ParentVariants}
              transition={ParentTransition}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default SkillsPage;
