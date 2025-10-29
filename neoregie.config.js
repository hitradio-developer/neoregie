module.exports = {
    apps: [{
      name: 'hitradio-ci-nextjs-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1, // Utilise tous les cœurs CPU
      exec_mode: 'cluster', // Mode cluster pour le scaling
      env: {
        NODE_ENV: 'production',
        PORT: 3009, // Changez si nécessaire
        HOST: '0.0.0.0',
      },
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      merge_logs: true
    }]
  }
