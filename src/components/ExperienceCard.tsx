import { motion } from 'framer-motion';
import React from 'react';

export default function ExperienceCard() {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src="https://genshin.honeyhunterworld.com/img/h_368129.webp"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">리월의 옥형성</h4>
        <p className="mt-1 text-2xl font-bold">Genshin</p>
        <p className="py-5 uppercase text-gray-300">Started..... wwwww</p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
