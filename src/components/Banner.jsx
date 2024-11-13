import { ShoppingBag, X } from "lucide-react";
import React from "react";
import { SlidesData } from "../utils/constants/constants";
import IconTile from "./common/IconTile";

const Banner = ({ currStory, currProduct }) => {
  return (
    <div className="w-full absolute top-4 flex justify-between px-4">
      <IconTile
        icon={<X className="size-7 text-black" strokeWidth={1.5} />}
        showBackground={true}
      />
      <span className="text-white my-auto mx-auto font-bold">
        Products&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Looks
      </span>
      <IconTile
        icon={<ShoppingBag className="size-7 text-black" strokeWidth={1.5} />}
        showBackground={true}
        onClick={() => {
          window.open(SlidesData[currStory].story[currProduct].src, "_blank");
        }}
      />
    </div>
  );
};

export default Banner;
