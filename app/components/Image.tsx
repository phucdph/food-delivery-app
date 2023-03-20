import { useState, useEffect } from "react";
import placeholderImg from "~/assets/placeholder.png";
import type { BoxProps } from "./Box";
import Box from "./Box";

interface Props extends BoxProps<"img"> {}

const MyImage: React.FC<Props> = (props) => {
  const { src, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(placeholderImg);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
      };
      img.onerror = () => {
        setImgSrc(placeholderImg);
      };
    }
  }, [src]);

  return <Box as="img" src={imgSrc} alt={props.alt || ""} {...rest} />;
};
export default MyImage;
