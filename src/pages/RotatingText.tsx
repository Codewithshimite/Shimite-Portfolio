// // src/components/RotatingText.tsx
// "use client";

// import React, {
//   forwardRef,
//   useCallback,
//   useEffect,
//   useImperativeHandle,
//   useMemo,
//   useState,
// } from "react";
// import { motion, AnimatePresence, Transition } from "framer-motion";

// import "../styles/RotatingText.scss"; // Ensure this file exists or remove this import if unnecessary

// function cn(...classes: (string | undefined | null | boolean)[]): string {
//   return classes.filter(Boolean).join(" ");
// }

// // Define the component's props and reference methods
// export interface RotatingTextRef {
//   next: () => void;
//   previous: () => void;
//   jumpTo: (index: number) => void;
//   reset: () => void;
// }

// export interface RotatingTextProps
//   extends Omit<
//     React.ComponentPropsWithoutRef<typeof motion.span>,
//     "children" | "transition" | "initial" | "animate" | "exit"
//   > {
//   texts: string[];
//   transition?: Transition;
//   initial?: any;
//   animate?: any;
//   exit?: any;
//   animatePresenceMode?: "sync" | "wait";
//   animatePresenceInitial?: boolean;
//   rotationInterval?: number;
//   staggerDuration?: number;
//   staggerFrom?: "first" | "last" | "center" | "random" | number;
//   loop?: boolean;
//   auto?: boolean;
//   splitBy?: string;
//   onNext?: (index: number) => void;
//   mainClassName?: string;
//   splitLevelClassName?: string;
//   elementLevelClassName?: string;
// }

// const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
//   (props) => {
//     const {
//       texts,
//       transition = { type: "spring", damping: 25, stiffness: 300 },
//       initial = { y: "100%", opacity: 0 },
//       animate = { y: 0, opacity: 1 },
//       exit = { y: "-120%", opacity: 0 },
//       animatePresenceMode = "wait",
//       animatePresenceInitial = false,
//       rotationInterval = 5000,
//       staggerDuration = 0,
//       staggerFrom = "first",
//       loop = true,
//       auto = true,
//       splitBy = "characters",
//       onNext,
//       mainClassName,
//       splitLevelClassName,
//       elementLevelClassName,
//       ...rest
//     } = props;

//     const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

//     const splitIntoCharacters = (text: string): string[] => {
//       if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
//         const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
//         return Array.from(segmenter.segment(text), (segment) => (segment as any).segment);
//       }
//       return Array.from(text);
//     };

//     const elements = useMemo(() => {
//       const currentText: string = texts[currentTextIndex];
//       if (splitBy === "characters") {
//         const words = currentText.split(" ");
//         return words.map((word, i) => ({
//           characters: splitIntoCharacters(word),
//           needsSpace: i !== words.length - 1,
//         }));
//       }
//       if (splitBy === "words") {
//         return currentText.split(" ").map((word, i, arr) => ({
//           characters: [word],
//           needsSpace: i !== arr.length - 1,
//         }));
//       }
//       if (splitBy === "lines") {
//         return currentText.split("\n").map((line, i, arr) => ({
//           characters: [line],
//           needsSpace: i !== arr.length - 1,
//         }));
//       }
//       return currentText.split(splitBy).map((part, i, arr) => ({
//         characters: [part],
//         needsSpace: i !== arr.length - 1,
//       }));
//     }, [texts, currentTextIndex, splitBy]);

//     const getStaggerDelay = useCallback(
//       (index: number, totalChars: number): number => {
//         const total = totalChars;
//         if (staggerFrom === "first") return index * staggerDuration;
//         if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
//         if (staggerFrom === "center") {
//           const center = Math.floor(total / 2);
//           return Math.abs(center - index) * staggerDuration;
//         }
//         if (staggerFrom === "random") {
//           const randomIndex = Math.floor(Math.random() * total);
//           return Math.abs(randomIndex - index) * staggerDuration;
//         }
//         return Math.abs((staggerFrom as number) - index) * staggerDuration;
//       },
//       [staggerFrom, staggerDuration]
//     );

//     const handleIndexChange = useCallback(
//       (newIndex: number) => {
//         setCurrentTextIndex(newIndex);
//         if (onNext) onNext(newIndex);
//       },
//       [onNext]
//     );

//     const next = useCallback(() => {
//       const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
//       if (nextIndex !== currentTextIndex) handleIndexChange(nextIndex);
//     }, [currentTextIndex, texts.length, loop, handleIndexChange]);

//     useEffect(() => {
//       if (!auto) return;
//       const intervalId = setInterval(next, rotationInterval);
//       return () => clearInterval(intervalId);
//     }, [next, rotationInterval, auto]);

//     return (
//       <motion.span className={cn("text-rotate", mainClassName)} {...rest} layout transition={transition}>
//         <span className="text-rotate-sr-only bg-danger">{texts[currentTextIndex]}</span>
//         <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
//           <motion.div key={currentTextIndex} className="text-rotate" layout>
//             {elements.map((wordObj, wordIndex) => (
//               <span key={wordIndex} className={cn("text-rotate-word", splitLevelClassName)}>
//                 {wordObj.characters.map((char, charIndex) => (
//                   <motion.span key={charIndex} initial={initial} animate={animate} exit={exit} transition={{ ...transition, delay: getStaggerDelay(charIndex, elements.length) }} className={cn("text-rotate-element text-light", elementLevelClassName)}>
//                     {char}
//                   </motion.span>
//                 ))}
//                 {wordObj.needsSpace && <span className="text-rotate-space"> </span>}
//               </span>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </motion.span>
//     );
//   }
// );

// RotatingText.displayName = "RotatingText";
// export default RotatingText;
