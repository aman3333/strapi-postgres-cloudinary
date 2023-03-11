module.exports = ({ env }) => ({
  apiToken: {
    salt: "XDXsAn5Kf9iGCfbvZyRAdlp0aSW67Iqm",
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
});
