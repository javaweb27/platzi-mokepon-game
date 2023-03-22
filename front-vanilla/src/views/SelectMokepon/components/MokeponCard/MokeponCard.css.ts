import { css } from "@emotion/css"

export const card = css({
  "display": "flex",
  "input": {
    display: "none",
  },
  "color": "#ffffffb7",
  "label": {
    borderRadius: "16px",
    padding: "7px",
    backgroundColor: "#00000029",
    transition: "backgroundColor 0.07s linear",
  },
  "input:checked + label": {
    backgroundColor: "#00000070",
    color: "#CBE4DE",
  },
  "& img": {
    width: "127px",
    marginBottom: "0.7rem",
    filter: "brightness(0.7)",
    transition: "filter 0.07s cubic-bezier(0.4, 0, 1, 1)",
  },
  "input:checked + label img": {
    filter: "none",
  },
  "& p": { textAlign: "center", fontSize: "1.4rem" },
})
