"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type StackModalProps = {
  onClose: () => void;
};

const StackModal = ({ onClose }: StackModalProps) => {
  const [open, setOpen] = useState(true);

  const setClose = () => {
    onClose();
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black/80"
    >
      <div className="w-full max-w-md rounded-xl bg-white p-6 text-center">
        <h2 className="mb-4 text-2xl font-bold">Tech Stack</h2>
        <ul className="space-y-2 text-gray-700">
          <li>🚀 Next.js (App Router)</li>
          <li>🎨 Tailwind CSS</li>
          <li>🎞️ Framer Motion</li>
        </ul>
        <button
          className="mt-6 rounded-full bg-[#0f172b] px-4 py-2 text-white transition hover:bg-[#314158]"
          onClick={setClose}
        >
          Got it, show me the project
        </button>
      </div>
    </motion.div>
  );
};

export default StackModal;
