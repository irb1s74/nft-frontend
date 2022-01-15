import {createTheme} from "@mui/material";

export const theme = createTheme({
        typography: {
            fontFamily: [
                'Rubik',
                '-apple-system',
                'Roboto',
                'sans-serif',
            ].join(','),
            h5: {
                fontWeight: 'bold'
            }

        },
        palette: {
            primary: {
                main: '#29253C'
            },
            secondary: {
                main: '#DA4A5E'
            },
            background: {
                default: '#FCFBFE'
            },

            // text: {
            //     primary: '#040B11'
            // },
            //

            //Buttons
            action: {
                // active: '#DA4A5E', // default состояние
                // hover: "#DA4A5E", //hover
                // disabled: '#E0E0E0'// выключено
                // disabledBackground:"#DA4A5E"
            }
            //

            //hr
            // divider:{
            //
            // }
        },
        components: {
            MuiButton: {
                styleOverrides: {},
                variants: [
                    {
                        props: {variant: 'text'},
                        style: {
                            color: "#DA4A5E"
                        }
                    }
                ]
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '5px',
                        marginBottom: '15px',
                    }
                },
                variants: [
                    {
                        props: {selected: true},
                        style: {
                            textDecoration: "none",
                            color: "#DA4A5E"
                        }
                    }
                ]
            }
        }
    },
)