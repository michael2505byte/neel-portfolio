"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

export default function Modal({ isOpen, imageSrc, title, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div
        className="relative max-w-2xl max-h-[90vh] w-full bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="relative w-full h-[70vh] bg-gray-200 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
            priority
          />
        </div>

        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
            <p className="text-sm font-medium">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
