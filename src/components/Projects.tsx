import { motion } from 'framer-motion';
import React from 'react';

export default function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
            key={i}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-64 w-64"
              src="https://ac-p2.namu.la/20221004sac/261a51bf491fd5e388ceb280fc6850470dfa55017bd08d6518b5184a264e79c7.jpg"
              alt="  "
            />

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                UPS clone
              </h4>

              <p className="text-center text-lg md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
                nobis saepe beatae! Minus aliquam, nisi, dolores vero
                voluptatibus cupiditate sit illo neque consectetur ratione
                facilis numquam necessitatibus sed est modi!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </motion.div>
  );
}
