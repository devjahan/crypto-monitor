import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { Box, IconButton } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const BOX_CSS = css`
  .css-q9dy3c {
    width: 300px;
  }
`;

const Carousel = ({ cryptoCurrencies }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handlePrev = () => {
    carouselRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    carouselRef.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setCanScrollLeft(carouselRef.current.scrollLeft > 0);
        setCanScrollRight(
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth <
          carouselRef.current.scrollWidth
        );
      }
    };

    carouselRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      carouselRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box css={BOX_CSS} mb={10}>
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {cryptoCurrencies?.map((coin, index) => (
          <Card
            img={coin.image}
            subtitle={coin.name}
            itemName={coin.symbol}
            key={index}
          />
        ))}
      </div>
      <Box display="flex" justifyContent="center" gap="10px">
        <IconButton
          icon={<MdKeyboardArrowLeft />}
          size="sm"
          colorScheme="blue"
          onClick={handlePrev}
          isDisabled={!canScrollLeft}
        />
        <IconButton
          icon={<MdKeyboardArrowRight />}
          size="sm"
          colorScheme="blue"
          onClick={handleNext}
          isDisabled={!canScrollRight}
          data-testid="Next"
        />
      </Box>
    </Box>
  );
};

export default Carousel;