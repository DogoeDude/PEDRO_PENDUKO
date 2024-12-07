"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Scene } from "./types/game";

type SceneContainerProps = {
  scene: Scene;
  onChoice: (nextScene: string) => void;
};

export function SceneContainer({ scene, onChoice }: SceneContainerProps) {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const img = new window.Image();
    img.src = scene.background;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [scene.background]);

  return (
    <div className="relative w-full h-screen">
      {/* {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )} */}

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={scene.background}
          alt="Scene background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Container */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 
        transition-transform duration-300 transform 
        ${isTextVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
          {scene.title}
        </h2>
        <p className="mb-6 font-[family-name:var(--font-geist-mono)] text-sm">
          {scene.description}
        </p>

        <div className="flex flex-col gap-3">
          {scene.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => onChoice(choice.nextScene)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg
              transition-colors duration-200 text-left"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Text Button */}
      <button
        onClick={() => setIsTextVisible(!isTextVisible)}
        className="absolute bottom-2 right-2 z-10 p-2 rounded-full bg-white/10
        hover:bg-white/20 text-white"
      >
        {isTextVisible ? "▼" : "▲"}
      </button>
    </div>
  );
}
