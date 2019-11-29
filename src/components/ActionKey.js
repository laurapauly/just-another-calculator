import React from "react";
import styled from "@emotion/styled";
import colors from "../utils/colors";

const Key = styled.button`
  all: unset;
  grid-column: ${props => props.span};
  background: ${colors.light};
  box-shadow: inset -3px -3px 0 ${colors.lightAccent};
  text-align: center;
  color: white;
  font-size: 30px;
  line-height: 80px;
  user-select: none;
  &:active {
    transform: scale(0.95);
  }
`;

export default function ActionKey({ action }) {
  let span = "";
  if (action === "next") {
    span = "span 4";
  }
  return <Key span={span}>{action}</Key>;
}
