"use client";

import { useEffect, useState } from "react";

export function useTypewriter(fullText: string, speed = 28) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [fullText, speed]);
  return text;
}

export function useCountUp(to = 20, durationMs = 1200) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(t) {
      const p = Math.min(1, (t - start) / durationMs);
      setN(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [to, durationMs]);
  return n;
}
