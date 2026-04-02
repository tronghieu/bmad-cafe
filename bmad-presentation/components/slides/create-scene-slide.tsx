import { SlideScene, type SlideSceneProps } from "@/components/slide-scene";

export function createSceneSlide(props: SlideSceneProps) {
  return function SceneSlide() {
    return <SlideScene {...props} />;
  };
}
