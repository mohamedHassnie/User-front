module.exports = {
  apps: [
    {
      name: "genetic-frontend",
      script: "serve",
      args: "-s build 3000",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
