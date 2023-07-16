import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/react";

const colors = {
    primary: {
        50: "#FFFFFF",
        100: "#E6EDF9",
        200: "#CDDAF2",
        300: "#B4C7EB",
        400: "#9BB4E4",
        500: "#82A1DD",
        600: "#699ECE",
        700: "#5199BF",
        800: "#3896B0",
        900: "#5165F6",
    },

    neutral: {
        50: "#E0E4E9",
        100: "#CDD3DA",
        200: "#ABB4C2",
        300: "#8A95AA",
        400: "#697694",
        500: "#718096",
        600: "#526380",
        700: "#364A6C",
        800: "#4E525A",
        900: "#2A2B2E",
    },
};
const theme = extendTheme({
    colors,
    fonts: {
        heading: "Bruno Ace",
        body: "Bruno Ace",
    },
    styles: {
        global: {
            "@font-face": [
                {
                    fontFamily: "Bruno Ace",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    src: `
                url('/fonts/Bruno Ace.woff2') format('woff2'),
                url('/fonts/Bruno Ace.woff') format('woff')
              `,
                    unicodeRange: "U+0000-FFFF",
                },
            ],
        },
    },

});

export default theme;
