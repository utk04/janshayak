// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Proxy /api to your backend at port 5000
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        // keep path as /api/...
      },
      // Proxy socket.io websocket & polling requests
      "/socket.io": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
