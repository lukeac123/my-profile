"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@mantine/core";
import { categoryColors } from "./BlogList";
import { useState } from "react";
import { clsx } from "clsx";
import styles from "./BlogsFilter.module.css";

export const BlogsFilter = () => {
  const [blogFilter, setBlogFilter] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleFilterChange = (category: string) => {
    setBlogFilter(category);
    router.push(`${pathname}?category=${category.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className={styles.filterContainer}>
      {Object.entries(categoryColors).map((category) => {
        return (
          <Button
            className={clsx({
              [styles.filterButtonSelected]: blogFilter === category[0],
            })}
            disabled={blogFilter === category[0]}
            key={category[0]}
            onClick={() => handleFilterChange(category[0])}
            color={`${category[1]}`}
          >
            {category[0]}
          </Button>
        );
      })}
      <Button color="black" onClick={() => handleFilterChange("")}>
        Reset
      </Button>
    </div>
  );
};
