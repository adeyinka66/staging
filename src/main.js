import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const vuetify = createVuetify({
    components,
    directives,
})


//antd
import { DatePicker } from 'ant-design-vue';
import { Popover } from 'ant-design-vue';
import { Drawer } from 'ant-design-vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(Drawer)

app.mount('#app')
