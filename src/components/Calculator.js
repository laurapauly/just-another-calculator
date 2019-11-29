import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";
import Display from "./Display";
import ActionKey from "./ActionKey";
import NumberKey from "./NumberKey";

const Grid = styled.div`
  width: 400px;
  height: 500px;
  border: solid ${colors.lining};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default function Calculator() {
  return (
    <Grid>
      <Display />
      <NumberKey number={7} />
      <NumberKey number={8} />
      <NumberKey number={9} />
      <ActionKey action={"/"} />
      <NumberKey number={4} />
      <NumberKey number={5} />
      <NumberKey number={6} />
      <ActionKey action={"x"} />
      <NumberKey number={1} />
      <NumberKey number={2} />
      <NumberKey number={3} />
      <ActionKey action={"-"} />
      <NumberKey number={0} />
      <ActionKey action={"+"} />
      <ActionKey action={"next"} />
    </Grid>
  );
}
