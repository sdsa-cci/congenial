const { defaultTheme } = require("@vuepress/theme-default");
const { copyCodePlugin } = require("vuepress-plugin-copy-code2");

module.exports = {
  port: 3000,
  base: '/congenial/',
  title: "TPNRD APIs",
  description: "New TPNRD SAM Application",
  plugins: [copyCodePlugin(), '@snowdog/vuepress-plugin-pdf-export'],
  theme: defaultTheme({
    logo: "./favicon.ico",
    navbar: [
      {
        text: "Home",
        link: "/",
      },
    ],
    sidebar: [
      {
        text: "User Module",
        link: "/users",
        children: [
          {
            text: "Add users",
            link: "/users/#add-users",
          },
          {
            text: "Profile",
            link: "/users/profile",
          },
          {
            text: "Update user",
            link: "/users/update",
          },
          {
            text: "User Existence",
            link: "/users/check",
          },
          {
            text: "Validations",
            link: "/users/validations",
          },
        ],
      },
      {
        text: "Claims Module",
        link: "/claims/",
        children: [],
      },
      {
        text: "Fields Module",
        link: "/fields/",
        children: [],
      },
      {
        text: "Dashboard Module",
        link: "/dashboard/",
        children: [],
      },
      {
        text: "Farm Practices",
        link: "/farm-practices/",
        children: [],
      },
    ],
  }),
};
