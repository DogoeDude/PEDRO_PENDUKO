"use client";

import { useState } from "react";
import { SceneContainer } from "./components/scene-container";
import { scenes } from "./data/scenes";
import type { Scene } from "./components/types/game";

export default function Home() {
  const [currentScene, setCurrentScene] = useState<Scene>(scenes.intro);

  const handleSceneChange = (nextSceneId: string) => {
    const nextScene = scenes[nextSceneId];
    if (nextScene) {
      setCurrentScene(nextScene);
    } else {
      console.error(`Scene ${nextSceneId} not found`);
    }
  };

  return (
    <main className="min-h-screen">
      <SceneContainer scene={currentScene} onChoice={handleSceneChange} />
    </main>
  );
}
