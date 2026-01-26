"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
};

export default function VideoModal({
  isOpen,
  onClose,
  videoId,
}: VideoModalProps) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 text-white w-9 h-9 flex items-center justify-center hover:bg-black"
            >
              ✕
            </button>

            {/* Vimeo Embed */}
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
