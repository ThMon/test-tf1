import React, { ReactElement } from "react";
import { ProgramQuery } from "../types/program-types";
import Item from "./item";
import Carousel from "react-multi-carousel";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { global_sizes } from "../style/global_sizes";

const BlockCaroussel = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1000px;
  height: 318px;
  margin: auto;
  padding: 0 100px;
  @media (max-width: ${global_sizes.mobile_width}px) {
    max-width: 400px;
  }
`;

const ButtonSide = styled("button")<{
  top?: number | string;
  bottom?: number | string;
  right?: number | string;
  left?: number | string;
}>`
  background-color: #313132;
  box-shadow: 0px 2px 4px rgba(38, 40, 47, 0.4);
  color: white;
  font-size: 30px;
  position: absolute;
  top: ${(props) => (props.top ? props.top : 0)}px;
  bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
  right: ${(props) => (props.right ? props.right : 0)}px;
  left: ${(props) => (props.left ? props.left : 0)}px;
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

const CarouselButtonGroup = ({
  next,
  previous,
}: CarouselButtonGroupProps): ReactElement => {
  return (
    <>
      {previous !== undefined && (
        <ButtonSide left={74} top={80} onClick={() => previous()}>
          <i className="fa-solid fa-angle-left"></i>
        </ButtonSide>
      )}
      {next !== undefined && (
        <ButtonSide left="auto" top={80} right={41} onClick={() => next()}>
          <i className="fa-solid fa-angle-right"></i>
        </ButtonSide>
      )}
    </>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: global_sizes.mobile_width },
    items: 6,
  },
  mobile: {
    breakpoint: { max: global_sizes.mobile_width, min: 0 },
    items: 1,
  },
};

const Slider = ({ programs }: { programs: ProgramQuery[] }): ReactElement => {
  return (
    <BlockCaroussel>
      {programs.length > 0 && (
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={10000}
          infinite={true}
          slidesToSlide={window.innerWidth >= global_sizes.mobile_width ? 6 : 1}
          partialVisible={false}
          customButtonGroup={<CarouselButtonGroup />}
        >
          {programs.map((program) => {
            return <Item program={program} />;
          })}
        </Carousel>
      )}
    </BlockCaroussel>
  );
};

export default Slider;
