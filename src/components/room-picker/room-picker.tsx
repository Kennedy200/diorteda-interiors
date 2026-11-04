"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { categoryById, rooms } from "@/config/collection/collection";

// Pick a room and see where to start. Without script, the first room shows and the shop links still work.
export function RoomPicker() {
  const [current, setCurrent] = useState(rooms[0].id);
  const room = rooms.find((r) => r.id === current) ?? rooms[0];
  const picks = room.picks.map(categoryById).filter((c) => c !== undefined);

  return (
    <MotionConfig reducedMotion="user">
      <div role="group" aria-label="Choose a room" className="flex flex-wrap gap-2">
        {rooms.map((r) => (
          <button
            key={r.id}
            type="button"
            aria-pressed={current === r.id}
            onClick={() => setCurrent(r.id)}
            className={`relative h-12 cursor-pointer rounded-full px-5 text-[1.0625rem] font-medium transition-[transform,color,background-color] duration-150 ease-out active:scale-[0.97] ${
              current === r.id ? "text-brand-dark" : "bg-surface-2 hover:bg-brand-soft"
            }`}
          >
            {current === r.id && (
              <motion.span
                layoutId="room-pill"
                className="absolute inset-0 rounded-full bg-brand-soft"
                transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
              />
            )}
            <span className="relative">{r.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-12">
        <div className="card relative aspect-[4/3] bg-surface-2 md:col-span-7 md:aspect-auto md:min-h-[34rem]">
          <AnimatePresence initial={false}>
            <motion.div
              key={room.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0"
            >
              <Image src={room.image} alt={room.imageAlt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div aria-live="polite" className="card flex flex-col justify-between gap-8 bg-surface-2 p-[clamp(1.5rem,3vw,2.5rem)] md:col-span-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="text-h3">For the {room.label.toLowerCase()}</h3>
              <p className="text-lead mt-3">{room.advice}</p>
              <ul className="mt-8 grid gap-1">
                {picks.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/shop#${category.id}`}
                      className="group flex items-center gap-4 rounded-2xl p-2 transition-colors duration-150 hover:bg-white"
                    >
                      <span className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <Image src={category.image} alt="" fill sizes="64px" className="object-cover" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[1.125rem] font-medium">{category.title}</span>
                        <span className="text-small block text-ink-soft">{category.short}</span>
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-5 shrink-0 text-brand transition-transform duration-200 ease-out group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
