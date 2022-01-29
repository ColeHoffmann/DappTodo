module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Network id match
    }
  },

  solc: {  
    optimizer: {
      enabled: true,
      runs: 200
    }
   }
  
}