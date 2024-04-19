import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 
        'homehub-mfrn-qccujii5k-harsh-ranjan-jhas-projects.vercel.app',
        
    },
  },

  plugins: [react()],
});