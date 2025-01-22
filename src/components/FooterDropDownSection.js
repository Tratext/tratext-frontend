"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function FooterDropDownSection({ links: { title, link } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between sm:hidden text-white text-[18px] font-semibold bg-[#181d24] rounded-lg p-4 w-full my-2 cursor-pointer"
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white"
        >
          <MdOutlineKeyboardArrowRight className="text-[24px]" />
        </motion.span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 overflow-hidden px-2"
          >
            {link.map((l, i) => (
              <Link
                href={l.url}
                key={i}
                className="xl:text-[16px] sm:text-[14px] text-[16px] text-white/80"
              >
                {l.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FooterDropDownSection;
