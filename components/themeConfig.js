import { extendTheme } from "@chakra-ui/react";

const APP_BACKGROUND_CSS = {
  backgroundColor: "transparent !important",
  backgroundImage:
    "linear-gradient(170deg, #000032 0%, #030017 66%) !important",
  marginTop: '100px'
};

const BOX_BACKGROUND_CSS = {
  backgroundColor: "#04001B !important",
  border: "1px solid #0D0063 !important",
};

const basicColor = {
  color: "#FFAE00"
};

const themeConfig = extendTheme({
  styles: {
    global: {
      body: APP_BACKGROUND_CSS,
      ".css-peuyfp": APP_BACKGROUND_CSS,
      ".css-1m9myj5": APP_BACKGROUND_CSS,
      h2: {
        color: "#fff",
        textAlign: "left",
      },
      ".css-9krbo7": BOX_BACKGROUND_CSS,
      ".chakra-card": BOX_BACKGROUND_CSS,

      ".css-h94677": {
        "margin-bottom": "100px",
      },
      select: {
        color: "#fff",
      },
      '.css-7p9xsp >option': {
        backgroundColor: "#243d54 !important",
      },
      ".css-7p9xsp": {
        backgroundColor: "#243d54 !important",
        borderColor: '#15222e !important',
      },
      ".css-ot090u": {
        width: "48% !important",
          backgroundColor: "transparent !important",
      },
      ".css-tdnrhj tr:nth-of-type(odd) td": {
        background: "#1d3144fa !important",
        color: "whiteAlpha.900",
        borderBottom: '1px solid #ffae0042!important',
      },
      ".css-5aj3s7": {
        bg: "#000 !important",
        color: "#ffffffc4 !important",
      },
      ".css-13xmx3x": {
        display: 'flex',
        justifyContent: "space-between",
        background: "#01002b !important",
        borderBottom: "1px solid #FFAE00",
        position: 'fixed',
        width: '100%',
        zIndex: '999',
        top: '0',
      },
      ".css-1v4xcoh": {
        fontWeight: 'bold',
        fontFamily: 'system-ui',
        color: '#fff',
      },
      ".css-jmtlyg a": {
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        textDecoration: "none",
        // color: "#FFF !important",
      },
      ".css-70qvj9": {
        a: {
          display: 'flex',
          alignItems: 'center',
        },
      },
      ".css-1bsg0uq": basicColor,
      ".css-1lj9i74": {
        background: '#FFAE00 !important',
      },
      ".css-gk5ovj": {
        margin: '15px !important',
        border: '1px solid #ffae0042',
        minWidth: '250px !important',
        backgroundColor: 'rgb(29 49 68) !important',
        _hover: {
          border: '1px solid #FFAE00',
          '.css-idk41n': {
            background: '#FFAE00 !important',
            border: '1px solid #FFAE00',
          },
        },
        '.css-idk41n': {
          border: '1px solid #ffae0042',
          backgroundColor: '#243b50',
          width: '65%',
          fontWeight: 'normal'
        },
      },
      '.css-gk5ovj > div:first-of-type': {
        width: '120px',
        height: '120px !important',
        margin: '0 auto !important',
      },
      '.css-gk5ovj > div:first-of-type img': {
        width: '100%',
        height: 'auto !important',
      },
      '.css-xcux2s': {
        background: '#FFAE00 !important',
        minWidth: '70px !important',
      },
      '.css-1syq16t': {
        paddingBottom: '70px !important',
      },
      '.chakra-divider.css-svjswr': {
        borderColor: '#FFAE00 !important'
      },
      '.chakra-button.css-9y3v5v': {
        backgroundColor: '#FFAE00 !important'
      },
      '.chakra-heading.css-13l19bq': {
        fontWeight: 'normal',
        marginBottom: '10px',
      },
      '.chakra-card.css-3b8wp5' : {
        backgroundColor: 'rgb(29 49 68)!important',
        border: '1px solid #ffae0042 !important',
      },
      '.css-6rntpj': {
        paddingTop: '20px',
      },
      '.chakra-card__header.css-1sl53ol':{
        backgroundColor: '#fbaf31',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',

      },
      '.chakra-modal__content-container': {
        background: '#101a23c7',
      },
      '.chakra-modal__content': {
        background: '#09253e !important',
        color: '#fff !important',
        maxWidth:  '50% !important',
        minHeight: '400px'
      },
      '.chakra-modal__header': {
        textAlign: 'left !important',
        borderBottom: '1px solid #ffffff30',
        marginRight: '0 !important',
      },
      '.chakra-button.css-jut409': {
        background: '#FFAE00 !important',
      },
      '.chakra-modal__footer': {
        borderTop: '1px solid #ffffff30'
      },
      '.chakra-table.css-5605sr' : {
        border: '1px solid #ffae0042!important',
        backgroundColor: 'rgb(29 49 68)!important',
        color: '#fff',
      },
      '.chakra-table.css-5605sr thead th' : {
        backgroundColor: 'rgb(29 49 68)!important',
        color: '#fff',
        borderBottom: '1px solid #ffae0042!important',
      },
      '.chakra-table.css-5605sr td' : {
        borderBottom: '1px solid #ffae0042!important',
        color: 'inherit !important'
      },
      '.chakra-stack.css-1h4ws66': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '15px',
        p: {
          margin: '0px !important',
          fontWeight: 'bold',
        },
        a: {
          margin: '0px !important',
          fontSize: '15px',
        },
      },
      '.css-sxr4g6': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '.css-d4y2u8::-webkit-scrollbar-track': {
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
          backgroundColor: '#F5F5F5',
        },

        '.css-d4y2u8::-webkit-scrollbar': {
          width: '6px',
          backgroundColor: '#F5F5F5',
        },

        '.css-d4y2u8::-webkit-scrollbar-thumb': {
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          backgroundColor: '#09253e',
        },
     },
  },
});

export default themeConfig;
