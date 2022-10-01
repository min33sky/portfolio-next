import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

interface Props {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center"
      >
        {/* Social icons */}
        <SocialIcon
          url="https://www.youtube.com/psg"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitch.com/psg"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.naver.com/psg"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex cursor-pointer items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
