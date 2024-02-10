import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
// import ".env";
// https://vitejs.dev/config/
// console.log('env',loadEnv())
export default defineConfig({
  plugins: [react()],
  define:{
    "process.env.VITE_DJANGO_BACKEND_URL":JSON.stringify(process.env.VITE_DJANGO_BACKEND_URL)
  }
});

