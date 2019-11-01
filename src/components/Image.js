import React from "react";
import {BASE_IMAGE_URL} from '../utils/constant';
export default function Image(props) {
  const { src,alt,className,width,height } = props;
  return (
    <img
    src={BASE_IMAGE_URL+src}
    alt={alt}
    className={className}
    width={width}
    height={height}
  />
  );
}

Image.defaultProps={
    className:"img-rounded",
    width:42,
    height:42
}
