// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_API_URL: "http://localhost:4200",
  SERVER_API_URL: "http://localhost:5000",
  DARK_SKY_URL: "https://api.darksky.net/forecast/5bac16c1f3e50319994bb24e50ec5ec5"
};
