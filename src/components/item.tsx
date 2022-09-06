import React, { ReactElement } from "react";
import { ProgramQuery } from "../types/program-types";
import styled from "styled-components";
import { global_sizes } from "../style/global_sizes";

const BlockItem = styled.div`
  width: 150px;
  margin-right: 18px;
  position: relative;
  max-height: 264px;
  @media (max-width: ${global_sizes.mobile_width}px) {
    max-height: auto;
    width: auto;
  }
`;

const BlockImage = styled.div`
  width: 150px;
  height: 199.5px;
  display: inline-block;
  position: relative;
  @media (max-width: ${global_sizes.mobile_width}px) {
    max-height: auto;
    width: auto;
  }
`;

const CustomImage = styled.img`
  width: 150px;
  height: 199.5px;
  display: inline-block;
`;

const TitleImage = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

const ButtonPlus = styled.div`
  position: absolute;
  bottom: 6px;
  right: 6px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Item = ({ program }: { program: ProgramQuery }): ReactElement => {
  return (
    <BlockItem>
      <BlockImage>
        <CustomImage
          src={program.thumnail.url}
          alt={
            program.thumnail.alt.length > 80
              ? `${program.thumnail.alt.substring(0, 80)}...`
              : program.thumnail.alt
          }
        />
        <ButtonPlus
          onClick={() => {
            alert("On fait quoi ?");
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </ButtonPlus>
      </BlockImage>
      <TitleImage>
        {program.name.length > 30
          ? `${program.name.substring(0, 30)}...`
          : program.name}
      </TitleImage>
    </BlockItem>
  );
};

export default Item;
