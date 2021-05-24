import Vue from 'vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',

    },
    theme: {
        themes: {
            light: {
                primary: '#2F4A64',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                // error: '#b71c1c',
                btnColor: '#12669c',
                background: 'e9e9e9',
                blue: '#449ace',
                green: '#449a63',
                yellow: "#F7DB68",

            },
        },
    },
});
