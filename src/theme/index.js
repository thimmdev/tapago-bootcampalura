import { typographyVariants } from './typographyVariants'

const colors = {
    background: {
        light: {
            color: '#FFFFFFF',
        },
        main: {
            color: '#F2F2F2',
        },
    },

    borders: '#F1F1F1', 

    primary: { 
        color:'#91D738',
        contrast: '#FFFFFF'
    },

    secondary: {
        color: '#6600B3',
        contrast: '#FFFFFF',
    },

    tertiary: '#88989E',
    darkcolor: '#070C0E',
}


 export default {
     colors,
     typographyVariants,
     borderRadius: '8px',
     fontFamily: '\'Dosis\', sans-serif',
     transition: '200ms ease-in-out',
 }