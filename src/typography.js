import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.8,
  googleFonts: [
    {
      name: "Raleway",
      styles: ["300", "400", "800"]
    },
    {
      name: "Roboto",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Raleway"],
  bodyWeight: 400
});

export default typography;
