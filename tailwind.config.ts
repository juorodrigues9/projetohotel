import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        status: {
          available: "#16a34a",
          occupied: "#dc2626",
          reserved: "#eab308",
          cleaning: "#2563eb",
          maintenance: "#6b7280"
        }
      }
    }
  },
  plugins: []
};

export default config;
