module.exports = {
  jit: true,
  content: ["./src/**/*", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
