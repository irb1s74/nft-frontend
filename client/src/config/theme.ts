import {createTheme} from "@mui/material";
export const theme = createTheme({
        typography: {
            fontFamily: [
                'Rubik',
                '-apple-system',
                'Roboto',
                'sans-serif',
            ].join(','),
        },
        palette: {
            primary: {
                main: '#29253C'
            },
            secondary: {
                main: '#D73C3E'
            },
            background: {
                default: '#FOF1F2'
            },
            // text: {
            //     primary: '#040B11'
            // },
            //
            // action: {
            //     active: '#39AFA1',
            //     disabled: '#E0E0E0'
            // }
        },
        components: {
            // MuiButton: {
            //     styleOverrides: {},
            //     variants: [
            //         {
            //             props: {variant: 'contained'},
            //             style: {
            //                 color: "#FFF"
            //             }
            //         }
            //     ]
            // }
        }
    },
)