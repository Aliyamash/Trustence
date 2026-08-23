module.exports = {
  apps: [
    {
      name: "trustence-web",
      script: "./node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3000",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "700M",
      env: { NODE_ENV: "production" },
    },
  ],
};
