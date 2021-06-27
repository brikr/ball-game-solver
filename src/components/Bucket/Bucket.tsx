import React from "react";
import { colors } from "../../util/constants";
import { styled } from "../../util/theme";
import { Color } from "../../util/types";

const Wrapper = styled.div`
  ${({ theme }) => `
    width: ${theme.ballSize}px;
    height: ${(theme.ballSize + 5) * 4}px;

    display: flex;
    flex-direction: column-reverse;

    border: 2px solid white;
    border-radius: 6px;

    padding: 0 5px 5px;
  `}
`;

const Ball = styled.div<{ colorId: Color }>`
  ${({ theme, colorId }) => `
    width: ${theme.ballSize}px;
    height: ${theme.ballSize}px;
    border-radius: 50%;
    background-color: ${colors[colorId]};

    margin-top: 5px;
  `}
`;

interface Props {
  contents: Color[];
}

const Bucket: React.FC<Props> = ({ contents }) => {
  return (
    <Wrapper>
      {contents.map((ballColor, idx) => (
        <Ball colorId={ballColor} key={idx}></Ball>
      ))}
    </Wrapper>
  );
};

export default Bucket;
