# TBD
# build
```
cargo build --target wasm32-unknown-unknown --release
```
# deploy
```
near login

near deploy --wasmFile main.wasm --accountId contract.mynftcontract1.testnet
```