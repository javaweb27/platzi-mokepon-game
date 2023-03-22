import { css } from "@emotion/css"

export const btn = css({
  "height": "2.4rem",
  "width": "6rem",
  "backgroundColor": "#0E8388",
  "color": "white",
  "borderRadius": "9999px",
  "&:disabled": {
    opacity: 0.7,
    filter: "grayscale(.9)",
  },
})
