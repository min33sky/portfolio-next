import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>

      <motion.img
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[400px]"
        src="https://image.fmkorea.com/files/attach/new2/20220313/4366334374/3971144225/4429059878/083a19a3e1a82e95e93d5ce6a05b9be1.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline-offset-3 underline decoration-[#F7AB0A]/50 decoration-wavy">
            little
          </span>{' '}
          background
        </h4>

        <p className="text-left text-sm tracking-wider">
          인간은 태어날 때부터 세상에 대한 동경심과 호기심을 가지며, 이것은
          세상을 인지하는 이치이자 이성을 구축하는 근본이다. 이나즈마 사람들의
          세계도 똑같다. 오래전부터 비바람과 천둥번개, 하늘과 바다가 존재했고…
          「라이덴 쇼군」도 있었다. 엄마는 어린아이가 잠들 무렵 쇼군이 마신의
          종족을 무찔렀던 전설을 들려주었다. 소년과 소녀가 섬을 돌아다니던 어느
          날, 뇌격의 일검으로 만들어진 협곡과 우뚝 솟은 무시무시한 창백한 뱀
          뼈가 눈앞에 나타났다. 병사들이 전선을 뛰어다니며 「진리가 웅대하듯
          번개 신 또한 영원하리」라고 외쳤다. 백성들이 안정된 생활을 할 수 있는
          것은 쇼군과 그에 충성을 다하는 삼봉행 덕분이니. 「라이덴 쇼군」의
          명성은 이나즈마에 대대로 전해 내려오는 신앙으로 변했다.
        </p>
      </div>
    </motion.div>
  );
}
