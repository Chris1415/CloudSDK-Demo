import { useState, useEffect } from "react";

export function useHover(ref): {
  hovered: boolean;
} {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return { hovered };
}
