import { useEffect, useRef, useState } from "react";
import { EMBLA_CAROUSEL_OPTIONS, SlidesData } from "../constants/constants";
import useEmblaCarousel from "embla-carousel-react";
import { convertToMiliSeconds } from "../helpers";

const useCarousel = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_CAROUSEL_OPTIONS);
  const intervalRef = useRef(null);
  const product = SlidesData[currentStory];

  const handleSlideNavigation = (type) => {
    if (type === "left") {
      if (currentProduct === 0) return;
      setCurrentProduct(
        (currentProduct - 1 + product.story.length) % product.story.length
      );
    }

    if (type === "right") {
      setCurrentProduct((currentProduct + 1) % product.story.length);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentProduct((currentProduct + 1) % product.story.length);
    }, convertToMiliSeconds(product.story[currentProduct].duration) || 5000);
    return () => clearInterval(intervalRef.current);
  }, [currentProduct]);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCurrentStory(emblaApi.selectedScrollSnap());
        setCurrentProduct(0);
      };
      emblaApi.on("select", onSelect);

      return () => emblaApi.off("select", onSelect);
    }
  }, [emblaApi]);
  return {
    emblaRef,
    product,
    currentProduct,
    currentStory,
    handleSlideNavigation,
  };
};

export default useCarousel;
