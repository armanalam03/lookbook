import React, { useEffect } from "react";
import IconTile from "./common/IconTile";
import { Bookmark, Heart, Share2 } from "lucide-react";
import scn from "scn";

const SideIcons = ({ currentStory, handleShare }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  useEffect(() => {
    const liked = localStorage.getItem(currentStory);
    if (liked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [currentStory]);

  const handleLikeUnlike = () => {
    if (isLiked) {
      localStorage.removeItem(currentStory);
      setIsLiked(false);
    } else {
      localStorage.setItem(currentStory, true);
      setIsLiked(true);
    }
  };

  return (
    <div className="w-fit absolute flex flex-col gap-8 bottom-28 right-0 pr-4">
      <IconTile
        icon={
          <Heart
            className={scn("size-7")}
            strokeWidth={isLiked ? 0 : 1.5}
            fill={isLiked ? "red" : "none"}
          />
        }
        onClick={handleLikeUnlike}
      />
      <IconTile icon={<Bookmark className="size-7" strokeWidth={1.5} />} />
      <IconTile
        icon={<Share2 className="size-7" strokeWidth={1.5} />}
        onClick={handleShare}
      />
    </div>
  );
};

export default SideIcons;
