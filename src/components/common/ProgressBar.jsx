import { SlidesData } from "../../utils/constants/constants";

const ProgressBar = ({ currProduct, idx, currStory }) => {
  return (
    <div className="w-full relative rounded-full h-1 overflow-hidden bg-black/40">
      <div
        style={{
          width: `${currProduct >= idx ? 100 : 0}%`,
          animationDuration:
            SlidesData[currStory].story[currProduct].type === "image"
              ? "5s"
              : SlidesData[currStory].story[currProduct].duration,
        }}
        className={`bg-white absolute top-0 left-0 rounded-full h-full ${
          currProduct === idx ? "animate-progress" : ""
        }`}
      />
    </div>
  );
};

export default ProgressBar;
