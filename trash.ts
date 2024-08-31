const lah = {
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },

  plugins: [
    "@react-native-firebase/app",
    [
      "expo-build-properties",
      {
        ios: {
          useFrameworks: "static",
        },
      },
    ],
  ],
};
