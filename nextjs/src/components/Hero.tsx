"use client";
import { useState, useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const metrics = [
  { value: "sub-60s", label: "failover time (Mirror-DB)" },
  { value: "sub-1s", label: "ingestion latency (Eventlogger)" },
  { value: "90%", label: "dashboard creation time cut" },
  { value: "40%", label: "database load reduction" },
  { value: "15 hrs/wk", label: "reporting effort saved" },
  { value: "10+", label: "services integrated" },
];

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  
  const [typedValues, setTypedValues] = useState<string[]>(metrics.map(() => ""));
  const [visibleRows, setVisibleRows] = useState<boolean[]>(metrics.map(() => false));
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (prefersReducedMotion) {
      setTypedValues(metrics.map(m => m.value));
      setVisibleRows(metrics.map(() => true));
      setShowCursor(false);
      return;
    }

    let timeoutIds: NodeJS.Timeout[] = [];
    
    const t1 = setTimeout(() => {
      setShowCursor(true);
      
      const t2 = setTimeout(() => {
        setShowCursor(false);
        
        metrics.forEach((metric, rowIndex) => {
          const staggerDelay = rowIndex * 80;
          
          const t3 = setTimeout(() => {
            setVisibleRows(prev => {
              const next = [...prev];
              next[rowIndex] = true;
              return next;
            });
            
            const chars = metric.value.split("");
            chars.forEach((char, charIndex) => {
              const t4 = setTimeout(() => {
                setTypedValues(prev => {
                  const next = [...prev];
                  next[rowIndex] = metric.value.substring(0, charIndex + 1);
                  return next;
                });
              }, charIndex * 30);
              timeoutIds.push(t4);
            });
          }, staggerDelay);
          timeoutIds.push(t3);
        });
      }, 400);
      timeoutIds.push(t2);
    }, 300);
    timeoutIds.push(t1);

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [mounted, prefersReducedMotion]);

  return (
    <section className="pt-32 pb-16 min-h-[90vh] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-8">
        
        {/* Left Column */}
        <div className="w-full md:w-[55%] flex flex-col items-start">
          <p className="font-mono text-[13px] text-secondary mb-4">
            pratham agrawal
          </p>
          <h1 className="text-[clamp(40px,5vw,72px)] font-bold text-primary leading-tight">
            Backend &<br />
            Data Infrastructure<br />
            Engineer.
          </h1>
          <p className="font-sans text-base text-secondary max-w-[480px] mt-6 leading-relaxed">
            Building high-throughput pipelines, distributed systems,
            and LLM-powered automation. Currently at Affinsys AI.
          </p>
          
          <div className="flex flex-row items-center gap-6 mt-8">
            <a href="#projects" className="text-[15px] font-sans text-accent hover:text-accent/80 transition-colors">
              → View my work
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[15px] font-sans text-secondary hover:text-primary transition-colors flex items-center gap-1">
              resume.pdf <span className="font-mono text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column (Metrics Panel) */}
        <div className="w-full md:w-[45%]">
          <div className="bg-surface border border-border rounded p-[24px_28px]">
            <div className="font-mono text-[11px] text-secondary uppercase tracking-[0.1em] mb-4">
              system / metrics
            </div>
            
            <hr className="border-t border-border mb-2" />
            
            <div className="flex flex-col relative min-h-[220px]">
              {showCursor && (
                <div className="absolute top-2 left-0 font-mono text-[18px] text-metric opacity-80 animate-pulse">
                  |
                </div>
              )}
              
              {metrics.map((metric, i) => (
                <div 
                  key={i} 
                  className={`flex justify-between items-center py-2 border-b border-border last:border-0 transition-all duration-200 ${
                    mounted && !prefersReducedMotion && !visibleRows[i] 
                      ? "opacity-0 translate-y-1" 
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="font-mono text-[18px] text-metric min-h-[27px]">
                    {typedValues[i] || metric.value}
                  </div>
                  <div className="font-mono text-[12px] text-secondary text-right">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-t border-border mt-4 mb-4" />
            
            <div className="font-mono text-[11px] text-secondary flex items-center gap-2">
              <span className="text-accent text-[14px] leading-none">●</span> currently · Affinsys AI, Bangalore
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
