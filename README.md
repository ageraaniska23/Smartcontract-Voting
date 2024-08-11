
# Voting Smartcontract

A Smartcontract that enables voting based on wallet addresses and associated registered data.


## PolygonScan

https://amoy.polygonscan.com/address/0x791B8052dB2fA260E0dBf92Ec6112D414e40bF9d#code


## Fitur

- add partisipa
- add and register voters upon admin verification
- view all participants
- view total number of voters
- Voting
- view all participant data
- view winning results

## Setup

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PRIVATE_KEY=""`
`REPORT_GAS=true`
`POLYGONSCAN_API_KEY=""`
`THIRDWEB_API_KEY=""`


POLYGONSCAN_API_KEY : https://polygonscan.com/myapikey

PRIVATE_KEY : your private key wallet

THIRDWEB_API_KEY : https://thirdweb.com/dashboard/settings/api-keys

### RPC

hardhat.config.ts
```typescript
......
polygon_amoy: {
      url: `https://80002.rpc.thirdweb.com/${process.env.THIRDWEB_API_KEY}`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
......
```

get rpc : https://thirdweb.com/chainlist




## Running

install Package :

```bash
  npm install
```

Compile Smartcontract :

```bash
  npx hardhat compile
```


Deploy Smartcontract :
```bash
  npx hardhat run ignition/modules/Vote.ts --network polygon_amoy
```

Verify Smartcontract :
```bash
  npx hardhat Verify <Contract address> --network polygon_amoy
```


## Authors

- [@ageraaniska](https://github.com/ageraaniska23)

