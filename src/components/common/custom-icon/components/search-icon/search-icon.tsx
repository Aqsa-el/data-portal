import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

interface Props extends SvgIconProps {
  fontSize?: SvgIconProps["fontSize"];
  viewBox?: string;
}

export default function SearchIcon({
  fontSize = "xsmall",
  viewBox = "0 0 18 18",
  ...props /* Spread props to allow for svg icon specific props SvgIconProps e.g. "htmlColor". */
}: Props): JSX.Element {
  return (
    <SvgIcon fontSize={fontSize} viewBox={viewBox} {...props}>
      <path
        d="M14.5692 15.6566L10.4625 11.5499C10.0503 11.8625 9.60325 12.0971 9.12145 12.2537C8.64025 12.4097 8.13715 12.4877 7.61215 12.4877C6.25015 12.4877 5.09095 12.0158 4.13455 11.072C3.17815 10.1282 2.69995 8.975 2.69995 7.6124C2.69995 6.2504 3.17815 5.0912 4.13455 4.1348C5.09095 3.1784 6.25015 2.7002 7.61215 2.7002C8.97475 2.7002 10.128 3.1784 11.0718 4.1348C12.0156 5.0912 12.4875 6.2504 12.4875 7.6124C12.4875 8.1374 12.4125 8.6405 12.2625 9.1217C12.1125 9.6035 11.8749 10.0442 11.5497 10.4438L15.6753 14.5874C15.8253 14.7374 15.897 14.9156 15.8904 15.122C15.8844 15.3284 15.8064 15.5066 15.6564 15.6566C15.5064 15.8066 15.3252 15.8816 15.1128 15.8816C14.9004 15.8816 14.7192 15.8066 14.5692 15.6566ZM7.61215 10.9127C8.52475 10.9127 9.30295 10.5908 9.94675 9.947C10.5906 9.3032 10.9125 8.525 10.9125 7.6124C10.9125 6.6878 10.5936 5.9003 9.95575 5.2499C9.31855 4.6001 8.53735 4.2752 7.61215 4.2752C6.68755 4.2752 5.90005 4.6001 5.24965 5.2499C4.59985 5.9003 4.27495 6.6878 4.27495 7.6124C4.27495 8.5376 4.59985 9.3188 5.24965 9.956C5.90005 10.5938 6.68755 10.9127 7.61215 10.9127Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
