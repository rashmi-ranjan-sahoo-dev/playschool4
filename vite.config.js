import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // listen on all addresses (0.0.0.0), supports IPv4 and IPv6
    port: 5173,
    open: true, // automatically open the browser
  },
});
