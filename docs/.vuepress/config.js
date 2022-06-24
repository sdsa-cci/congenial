const { defaultTheme } = require("@vuepress/theme-default");
const { copyCodePlugin } = require("vuepress-plugin-copy-code2");

module.exports = {
  port: 3000,
  base: "/congenial/",
  title: "TPNRD APIs",
  description: "New TPNRD SAM Application",
  plugins: [copyCodePlugin(), "@snowdog/vuepress-plugin-pdf-export"],
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
        link: "/users/",
        collapsible: true,
        children: [
          {
            text: "Add users",
            link: "/users/add",
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
            text: "User Exists",
            link: "/users/check",
          },
          {
            text: "Validations",
            link: "/users/validations",
          },
          {
            text: "User Details On Key",
            link: "/users/detailsOnKey",
          },
          {
            text: "Change Password",
            link: "/users/changePassword",
          },
          {
            text: "Forgot Password",
            link: "/users/forgotPassword",
          },
          {
            text: "Confirm Forgot Password",
            link: "/users/confirmForgotPassword",
          },
        ],
      },
      {
        text: "Claims Module",
        link: "/claims/",
        collapsible: true,
        children: [
          {
            text: "Add Claim",
            link: "/claims/add",
          },
          {
            text: "Delete Claim",
            link: "/claims/delete",
          },
        ],
      },
      {
        text: "Fields Module",
        link: "/fields/",
        collapsible: true,
        children: [
          {
            text: "Get Registered Fields",
            link: "/fields/registered",
          },
          {
            text: "Add field",
            link: "/fields/add",
          },
          {
            text: "Update field",
            link: "/fields/update",
          },
          {
            text: "Delete field",
            link: "/fields/delete",
          },
        ],
      },
      {
        text: "Dashboard Module",
        link: "/dashboard/",
        collapsible: true,
        children: [
          {
            text: "Get GeoJSON",
            link: "/dashboard/geojson",
          },
          {
            text: "Get Waterdata",
            link: "/dashboard/waterdata",
          },
          {
            text: "Get Graphdata",
            link: "/dashboard/graphdata",
          },
        ],
      },
      {
        text: "Farm Practices Module",
        link: "/practices/",
        collapsible: true,
        children: [
          {
            text: "Get Farm Practices",
            link: "/practices/getpractices",
          },
          {
            text: "Add/Update Farm Practices",
            link: "/practices/addupdate",
          },
          {
            text: "Add Farm Practices (Multiple fields)",
            link: "/practices/addtomultiple",
          },
        ],
      },
      {
        text: "Share fields Module",
        link: "/shares/",
        collapsible: true,
        children: [
          {
            text: "Share field",
            link: "/shares/add",
          },
          {
            text: "Update shared field",
            link: "/shares/update",
          },
        ],
      },
      {
        text: "Geo Optix Module",
        link: "/geooptix/",
        collapsible: true,
        children: [
          {
            text: "Get all wells",
            link: "/geooptix/wells",
          },
          {
            text: "Get well summary/statistics",
            link: "/geooptix/summary",
          },
          {
            text: "Get well pumped vol",
            link: "/geooptix/volumes",
          },
        ],
      },
      {
        text: "GIS Module",
        link: "/gis/",
        collapsible: true,
        children: [
          {
            text: "Search irrig unit",
            link: "/gis/search",
          },
          {
            text: "Add/Update land unit",
            link: "/gis/updateland",
          },
          {
            text: "Add/Update wells",
            link: "/gis/updatewell",
          },
          {
            text: "Add/Update irrig units",
            link: "/gis/updateunit",
          },
        ],
      },
    ],
  }),
};
