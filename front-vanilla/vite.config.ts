import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    open: false,
  },
  base: "/platzi-mokepon-game/",
})
