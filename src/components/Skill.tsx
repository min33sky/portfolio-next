import { motion } from 'framer-motion';
import React from 'react';
interface Props {
  directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://ac-p2.namu.la/20210501/4ea73537f18954e49f705c97ec980092e62dd6570989fa01a2119cc8dedc1abc.png"
        className="transitio h-24 w-24 rounded-full border border-gray-500 object-cover filter
          duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
      />
      <div
        className="absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80
      md:h-28 md:w-28 xl:h-32 xl:w-32"
      >
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
