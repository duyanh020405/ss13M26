import './assets/main.css';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles'; // Import Vuetify styles
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Initialize the Vue application
const app = createApp(App);

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});

// Use Vuetify in the app
app.use(vuetify);

// Mount the application
app.mount('#app'); // Ensure this matches your HTML element's ID
