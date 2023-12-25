import { style } from "@vanilla-extract/css";

export const header = style({
	marginBottom: "16px",
	display: "grid",
});

export const thumbnail = style({
	width: "100%",
	aspectRatio: "16 / 9",
});

export const title = style({
	marginTop: "16px",
	fontSize: "2rem",
});

export const date = style({
	display: "block",
});