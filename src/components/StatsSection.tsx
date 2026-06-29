import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

const StatCounter: React.FC<StatItemProps> = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Ease-out quad formula
        const easeProgress = progress * (2 - progress);
        
        const currentCount = Math.floor(easeProgress * (end - start) + start);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center space-y-2 py-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#F56FA1] tracking-tight"
      >
        <span>{count.toLocaleString()}</span>
        <span>{suffix}</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#252525]/60"
      >
        {label}
      </motion.p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    { value: 3000, suffix: '+', label: 'Happy Customers' },
    { value: 6000, suffix: '+', label: 'Decorations Completed' },
    { value: 25, suffix: '+', label: 'Professional Decorators' },
    { value: 8, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFD8E8]/10 border-y border-[#FFD8E8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
