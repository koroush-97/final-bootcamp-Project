// import Image from "next/image";

// interface Props {
//   src: string;
//   alt: string;
//   width?: number;
//   height?: number;
//   classname?: string;
// }

// export function ImageView({ src, alt, width, height, classname = "" }: Props) {
//   return (
//     <Image
//       className={classname}
//       src={src}
//       alt={alt}
//       width={width}
//       height={height}
//     />
//   );
// }

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

export function ImageView({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
}: Props) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
    />
  );
}
