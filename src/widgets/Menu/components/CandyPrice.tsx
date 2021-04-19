import React from "react";
import styled from "styled-components";
import { CandyRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  candyPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CandyPrice: React.FC<Props> = ({ candyPriceUsd }) => {
  return candyPriceUsd ? (
    <PriceLink href="https://candyswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank">
      <CandyRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${candyPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CandyPrice);