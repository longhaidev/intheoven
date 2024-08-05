import React from "react";
import { Button } from "@mui/material";
export default function CustomButton({ type, content, handleClick, sx = {} }) {
  const primaryStyle = {
    color: "var(--text-color-secondary)",
    backgroundColor: `var(--button-bg-primary)`,
    "&:hover": {
      backgroundColor: "var(--button-bg-hover-primary))",
      border: "1px solid var(--button-bg-hover-primary)",
      color: "var(--text-color-hover)",
    },
    ...sx,
  };
  const secondaryStyle = {
    color: "var(--text-color-button)",
    backgroundColor: `var(--button-bg-secondary)`,
    border: "1px solid var(--button-bg-primary)",
    "&:hover": {
      backgroundColor: "var(--button-bg-hover-secondary)",
      border: "1px solid var(--button-bg-hover-primary)",
      color: "var(--text-color-secondary)",
    },
    ...sx,
  };
  return (
    <Button
      sx={type === "primary" ? primaryStyle : secondaryStyle}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
}
