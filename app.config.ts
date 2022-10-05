import "dotenv/config";

type ENV_TYPES = "development" | "master" | "staging" | "production";

const GET_CUSTOM_CONFIG = {
  development: {
    name: "Advancly Widget Dev",
    slug: "advanclywidgetdev",
    bundleIdentifier: "com.advancly.widget.dev",
    version: "1.0.0",
    versionCode: 1,
  },
  master: {
    name: "Advancly Widget Master",
    slug: "advanclywidgetmaster",
    bundleIdentifier: "com.advancly.widget",
    version: "1.0.0",
    versionCode: 1,
  },
  staging: {
    name: "Advancly Widget Staging",
    slug: "advanclywidgetstaging",
    bundleIdentifier: "com.advancly.widget.staging",
    version: "1.0.0",
    versionCode: 1,
  },
  production: {
    name: "Advancly Widget", // Please don't change this
    slug: "advancly Widget", // Please don't change this
    bundleIdentifier: "com.advancly.widget", // Please don't change this
    version: "1.0.0",
    versionCode: 1,
  },
};

const enviroment = process.env.NODE_ENV ? process.env.NODE_ENV : "development"; // Default to development
const ENV_CONFIG = GET_CUSTOM_CONFIG[enviroment as ENV_TYPES];

export default ({ config }: any) => {
  return {
    ...config,
    name: ENV_CONFIG.name,
    slug: ENV_CONFIG.slug,
    version: ENV_CONFIG.version,
    ios: {
      bundleIdentifier: ENV_CONFIG.bundleIdentifier,
      buildNumber: ENV_CONFIG.version,
    },
    android: {
      package: ENV_CONFIG.bundleIdentifier,
      versionCode: ENV_CONFIG.versionCode,
    },
  };
};
