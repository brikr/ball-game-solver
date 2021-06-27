import originalStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  ballSize: 25,
};

export const styled = originalStyled as ThemedStyledInterface<typeof theme>;
