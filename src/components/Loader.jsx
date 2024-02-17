import { Html, useProgress } from "@react-three/drei"
const Loader = () => {
  const {progress} = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[#915eff] text-3xl mt-10 font-bold">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader