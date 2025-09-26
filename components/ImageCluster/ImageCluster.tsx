import { HTMLAttributes } from "react";
import Image from "next/image";
import styles from "./ImageCluster.module.css";
import { clsx } from "clsx";

export interface ImageClusterProps extends HTMLAttributes<HTMLDivElement> {
  imgSrcArray: string[];
}

export const ImageCluster = ({ imgSrcArray, className }: ImageClusterProps) => {
  return (
    <div className={clsx(styles.gallery, className)}>
      {imgSrcArray.map((img, index) => {
        return (
          <Image
            className={styles.img}
            key={img}
            alt={img}
            src={img}
            width="500"
            height="500"
            priority
          />
        );
      })}
    </div>
  );
};
