/* eslint-disable @next/next/no-img-element */
"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden h-[100vh] px-10">
      <Slider />
    </motion.div>
  );
}