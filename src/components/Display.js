import styled from "@emotion/styled";
import colors from "../utils/colors";
import React from "react";

const NumberDisplay = styled.div`
  grid-area: 1 / 1 / 1 / 5;
  background: ${colors.dark};
  box-shadow: inset 0 -3px 0 ${colors.darkAccent};
`;

export default function Display() {
  return <NumberDisplay></NumberDisplay>;
}
