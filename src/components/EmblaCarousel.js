import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Volume, VolumeX } from "lucide-react";
import ProgressBar from "./common/ProgressBar";
import Button from "./common/Button";
import { SlidesData } from "../utils/constants/constants";
import SideIcons from "./SideIcons";
import Banner from "./Banner";
import useCarousel from "../utils/hooks/useCarousel";
import IconTile from "./common/IconTile";
import useShare from "../utils/hooks/useShare";

const EmblaCarousel = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const {
    emblaRef,
    product,
    currentStory,
    currentProduct,
    handleSlideNavigation,
  } = useCarousel();
  const shareContent = useShare();

  const handleShare = () => {
    shareContent({
      text: "Share Product",
      title: product?.name,
      url: product?.story[currentProduct]?.src,
    });
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SlidesData.map((slide) => (
            <div className="embla__slide relative" key={slide?.id}>
              <div className="embla__slide__number">
                {product?.story[currentProduct]?.type === "image" && (
                  <img
                    src={product?.story[currentProduct]?.src}
                    alt="storyImage"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                )}
                {product?.story[currentProduct]?.type === "video" && (
                  <div className="w-full h-full relative flex">
                    <ReactPlayer
                      url={product?.story[currentProduct]?.src}
                      muted={isMuted}
                      playing={true}
                      width="100%"
                      height="100%"
                      ref={videoRef}
                    />
                  </div>
                )}
              </div>
              <div className="absolute top-0 flex left-0 w-full h-full">
                <div
                  onClick={() => {
                    handleSlideNavigation("left");
                  }}
                  className="w-1/2 h-full"
                />
                <div
                  onClick={() => handleSlideNavigation("right")}
                  className="w-1/2 h-full"
                />
              </div>
              {product?.story[currentProduct]?.type === "video" &&
                (!isMuted ? (
                  <IconTile
                    icon={
                      <Volume className="size-7 text-black" strokeWidth={1.5} />
                    }
                    showBackground={true}
                    onClick={() => setIsMuted((prev) => !prev)}
                    className="absolute top-24 right-4 p-3"
                  />
                ) : (
                  <IconTile
                    icon={
                      <VolumeX
                        className="size-7 text-black"
                        strokeWidth={1.5}
                      />
                    }
                    showBackground={true}
                    onClick={() => setIsMuted((prev) => !prev)}
                    className="absolute top-24 right-4 p-3"
                  />
                ))}
              <div className="absolute bottom-0 left-0 w-full flex h-fit p-3 pt-2">
                <div className="absolute px-4 bottom-full gap-2 left-0 flex w-full h-fit">
                  {product?.story?.map((product, index) => {
                    return (
                      <ProgressBar
                        key={product.id}
                        currProduct={currentProduct}
                        idx={index}
                        currStory={currentProduct}
                      />
                    );
                  })}
                </div>
                <Button
                  onClick={() => {
                    window.open(
                      SlidesData[currentStory].story[currentProduct].src,
                      "_blank"
                    );
                  }}
                >
                  <span>View Products</span>
                </Button>
              </div>
              <SideIcons
                currentStory={currentStory}
                handleShare={handleShare}
              />
              <Banner currStory={currentStory} currProduct={currentProduct} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
