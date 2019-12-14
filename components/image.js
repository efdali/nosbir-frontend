import React from "react";
import { IMAGE_URL, GROUP_IMAGE_URL } from "../utils/constants";
export default function Image(props) {
  if (props.withoutUrl)
    return <img src={props.src} className={props.className} alt={props.alt} />;
  return (
    <img
      src={
        !props.group
          ? `${IMAGE_URL}${props.src}`
          : `${GROUP_IMAGE_URL}${props.src}`
      }
      className={props.className}
      alt={props.alt}
    />
  );
}
