//refactored, not the original from aceternity
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative py-4">
        {data.map((item, index) => (
          <div key={index} className="relative pb-4 pl-10 md:pl-12">
            <span className="sr-only">{item.title}</span>
            {/* bolinha aqui */}
            <div className="absolute left-0 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
              <div className="h-2.5 w-2.5 rounded-full bg-sidebar-accent-foreground" />
            </div>
            {item.content}
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute left-3 top-0 w-[2px] overflow-hidden bg-border [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-secondary-foreground via-primary to-transparent"
          />
        </div>
      </div>
    </div>
  );
};