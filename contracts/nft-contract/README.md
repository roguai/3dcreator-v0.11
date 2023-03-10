# TBD
# build
```
cargo build --target wasm32-unknown-unknown --release
```
# deploy
```
near login

near deploy --wasmFile ./target/wasm32-unknown-unknown/release/nft_simple.wasm --accountId contract.mynftcontract1.testnet
```