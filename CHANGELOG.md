# edge-react-gui

## 1.13.2 (2020-05-26)

- Fix flipinput crash on max spend Android

## 1.13.1 (2020-05-25)

- Fix flipinput crash on Android

## 1.13.0 (2020-05-22)

- Add buy support in India with new partner Transak
- Transfer button to easily transfer funds between wallets
- FIO
  - OBT data support
  - Custom ERC20 token support
  - Warning about access to FIO address when deleting FIO wallet
- New address modal with autocomplete FIO addresses
- Edge update version notification
- RTL text fixes
- Allow fee change even in locked transactions with partners or exchanges
- Force text entry to right of FlipInput amount
- Upgrade edge-core-js to v0.17.2
  - Prioritize the WazirX rate plugin when available.
- Upgrade edge-currency-accountbased to v0.7.6
  - Tezos - Add makeMutex to wrap makeSpend() to avoid entering it more than once
  - Refactor EOS plugin to remove owner key to support importing wallets
  - Add Ethereum Classic support
  - Remove ourReceiveAddresses from Tezos makeSpend
- Upgrade edge-exchange-plugins to v0.10.4
  - Add WazirX exchange rate provider
  - Fix Switchain ERC20 token sending issue and metadata
  - Fix swapInfo orderUri variable name across all swap partners
- Upgrade edge-components to v0.0.27
  - Add keyboardType and inputAccessoryViewId on FormFieldInput

## 1.12.4 (2020-05-14)

- Prevent excluded currency codes from appearing in wallet modal search results
- Temporarily exclude XTZ in exchange from-wallet selector

## 1.12.3 (2020-05-08)

- Upgrade edge-core-js to v0.17.1
  - Use constant-time comparisons for encryption & decryption.
  - Upgrade redux-keto dependency & fix uncovered type errors.
  - Improve git server error messages & rotation logic.
- Add Orchid (OXT) ERC20 token

## 1.12.2 (2020-05-04)

- Create and pay FIO Requests
- Connect wallets to FIO addresses
- Unstoppable Domains - added support for .kred .luxe and .xyz domains
- Fix Switchain ERC20 swap
- Fixed crashes on logout
- Additional promo code functionality
- Various other bug fixes
- Upgrade edge-currency-accountbased to v0.7.4
  - Refactor ETH and RSK to use common code
  - FIO performance improvements
  - isAccountAvailable() renamed to doesAccountExist()
- Simplex upgraded to support additional fiat currencies

## 1.12.1 (2020-04-17)

- New exchange provider Switchain
- Increased limit and added more countries to MoonPay
- New transaction details screen
- Enhanced deeplinking capabilities
- Bug fixes and visual enhancements
- ***BREAKING CHANGE*** Upgrade edge-core-js to v0.17.0
  - This release also renames all `pluginName` instances to `pluginId`. This affects all plugin types, but the core contains compatibility code so old currency plugins continue working (but not for rate or swap plugins, which are easier to just upgrade).
  - Breaking changes to the swap API:
    - Return a new `EdgeSwapResult` structure from `EdgeSwapQuote.approve`. This now contains the `destinationAddress` and `orderId` that used to exist on the `EdgeSwapQuote` type.
    - Merge the `EdgeSwapPluginQuote` and `EdgeSwapQuote` types into one.
      - The `EdgeSwapQuote.isEstimate` flag is no longer optional, but must be `true` or `false`.
      - Remove `EdgeSwapQuote.quoteUri`. Just concatenate `EdgeSwapInfo.orderUri` with `EdgeSwapResult.orderId` to get this.
    - Rename `EdgeSwapInfo.quoteUri` to `orderUri`.
    - Remove the deprecated `plugins` option from `EdgeSwapRequestOptions`.
  - Other breaking changes:
    - Remove deprecated `EdgeAccount.currencyTools`. Use `EdgeAccount.currencyConfig`.
    - Remove deprecated `EdgeAccount.exchangeTools`. Use `EdgeAccount.swapConfig`.
    - Remove deprecated `EdgeAccount.getExchangeQuote`. Use `EdgeAccount.fetchSwapQuote`.
    - Remove deprecated `EdgeAccount.pluginData`. Use `EdgeAccount.dataStore`.
    - Remove deprecated `EdgeIo.WebSocket`.

- Upgrade edge-exchange-plugins to v0.10.2
  - Add Switchain swap plugin.
  - Pass promo codes to Changelly, ChangeNow, and Godex.
  - Fix ChangeNow on Android & add better logging.

- Upgrade edge-currency-accountbased to v0.7.2
  - Add cleaners v0.2.0 type checking
  - Fix duplicate FIO address after registration
  - Reprioritize EOS Hyperion nodes to resolve transaction history view issue

- Upgrade edge-login-ui-rn to v0.6.9
  - Visual fixes to Password Recovery and 2FA

## 1.12.0 (2020-04-07)

- Add FIO - register address, send, and receive
- Added additional Banxa payment methods
- Fix missing XLM transaction history
- Move Exchange side menu button
- Remove countries from Simplex Sell
- Add FIO currency support
  - Includes new screens to view and register new FIO addresses
- Upgrade edge-currency-accountbased to v0.7.1
  - FIO currency
  - XLM transaction history fix
- Upgrade edge-core-js to v0.16.25
  - Prioritize swap providers with active promo codes.

## 1.11.10 (2020-04-01)

- Reduced Bits of Gold fees
- Expanded price tracking for ERC20 tokens
- Updated Totle plugin
- Enhanced deeplinking
- Bug fixes
- Upgrade edge-exchange-plugins to v0.9.2
  - Increases number of asset prices retrieved from CoinCap to 500
  - Upgrade Totle plugin to new API
- Refactor edgeProvider
  - Fix lockInputs and set default to true
  - Handle the case where both nativeAmount and exchangeAmount are missing in a spend target
- Deeplinking and GuiPlugin refactor
  - Disable GUI plugins based on promo setup.
  - Inject linking parameters into EdgeProvider
  - Pass promo codes to fiat plugins via EdgeProvider & optional query parameter
  - Link into plugins apart from Simplex
  - Improve flexibility of plugin data format

## 1.11.9 (2020-03-24)

- Switch from jsc-android to react-native-v8 to fix Samsung S7 device family crashes

## 1.11.8 (2020-03-24)

- Fix error message on Create Wallet caused by partially enabled FIO wallet

## 1.11.7 (2020-03-23)

- Bits of Gold support for Buy in Israel
- Add Metronome ERC20 token
- Bug fixes and visual improvements
- Add priority setting for exchange rate providers
- Fix white screen crash on settings screen
- Enhanced deeplink support
- Upgrade edge-login-ui-rn to v0.6.8
  - Added auto-scroll on terms and conditions screen
- Upgrade edge-currency-accountbased to v0.6.9
  - Add response error checking to fetch() calls
  - Fixed crash when Etherscan API returned text rather than a number by adding decimal and hex regex to response validation

## 1.11.6

- Added support for Cred

## 1.11.5

- Implement Greymass Fuel for EOS send
- Support buying with iDEAL in Netherlands through Banxa
- Exchange Settings now has an option to select Preferred Provider or Best Exchange Rate
- Visual and text updates
- Bug fixes

## 1.11.4

- New Visual Improvements
- Buy Crypto with ApplePay now supported in United States
- Automatically add recipient address in notes after a send transaction for easy viewing
- Improved wallet search
- Minor bug fixes

## 1.11.3

- Update BSV address to use 1 format
- Remove Bitcoin Cash prefix from BCH addresses
- Add ETHBNT as a default token
- Fixed BNB Syncing
- Fixed Wallet Picker to use the same wallet order from the Wallets List screen
- Visual and text improvements
- Minor bug fixes

## 1.11.2

- Fixed RSK synchronization
- Resolved delayed app notifications
- Fixed various wallet list display issues
- Enhanced ETH network performance

## 1.11.1

- Wallet list fixes
- Update Banxa GB

## 1.11.0

- Redesign of Wallet List and Transaction History screens
- Improved 2FA Background Notifications
- Safello - Sell
- Safello - Denmark region support added
- Safello - Additional payment method added for Sweden
- Support new DAI and SAI
- Other minor fixes

## 1.10.3

- FIO Registration URL update

## 1.10.2

- Improve EOS & Ethereum connectivity.
- Fix spends from large UFO & other non-Bitcoin wallets.
- Add visual indication for syncing wallets.
- Improve wallet selector search.
- Add Banxa GB support.

## 1.10.1

- Add KYC notices for Fox Exchange & CoinSwitch.
- Fix Tezos support.
- Fix Firebase tracking crash bug.

## 1.10.0

- Integration of Compound
- Settings Send Logs button
- Developer mode URI sticky will continue for all accounts on device of last URI entered
- Affiliate links
- Exchange Screen able to search wallet in wallet picker

## 1.9.8

- Emergency EOS fix (part 2)

## 1.9.7

- Emergency EOS fix
- Minor UX bug-fixes
- Minor Bity updates
- Remove uninhabited and non-sovereign locations

## 1.9.5

- Integrate RSK
- Request reviews in-app
- Re-work the custom fee UI

## 1.9.4

- Hot fix for Edge Login

## 1.9.3

- Improved notifications
- Integration of BNB
- Buy sell buttons separated

## 1.9.2

- Fix Tezos balance updating bug

## 1.9.1

- Fix DASH max fee issue
- Improve API transaction broadcasting reliability for Bitcoin-related coins
- Enable Tezos (XTZ)
- Add Anthem Gold (AGLD) as preferred token
- UI notification improvements

## 1.9.0

- Improved stability when coming in and out of background
- Integrate Safello for buying in Nordic countries and Europe
- Integrate Bits of Gold for selling to Israeli and European bank account
- Integrate CoinSwitch for swapping coins

## 1.8.3

- Add LibertyX plugin
- Add MoonPay plugin
- Fix EOS syncing issues
- Improve Bitcoin & related coins connection reliability

## 1.8.2

- Fix all-zero exchange rates

## 1.8.1

- Fix the minimum Android SDK version to 23+ (Android 6)

## 1.8.0

- React native upgrade + visual fixes
- Prefer fixed-rate quotes over estimates

## 1.6.0

- EOS support
- Implementing deep linking of bitcoin, ethereum, bitcoincash, dash, and edge URIs
- Add Wyre plugin to support buy/sell of Bitcoin and Ethereum from US bank account
- Add Chinese, Korean, French, and Vietnamese translations
- Add support for IMP and IRR fiat currencies

## 1.5.0

- Add Changenow as an exchange provider
- Use new colored currency icons
- Allow signin/singout of ShapeShift via Settings screen

## 1.4.5

- Update to v2 of Coinbase API

## 1.4.3

- Big performance boost when logging in and syncing wallets
- Add support for Monero bulletproofs which fixes Monero spending
- Allow users to enable/disable exchange providers
- Fix occasional "Token is not supported" error in Exchange screen
- Enable viewing xpub for more currencies
- Fix crash on large accounts when tapping top right menu button immediately after login
- Fix hang when using Simplex from some Android devices

## 1.4.2

- Fix Shapeshift account error dropdown
- Fix oversized exchange button when going back from confirmation
- Fix missing email text field for password recovery setup
- Fix tappability of wallet list option button

## 1.4.1

- Fix Shapeshift activation when using Google Login
- Fix incorrect fiat amounts when exchange ERC20 tokens
- Fix query to Shapeshift authentication on Android devices

## 1.4.0

- Support Changelly.com in Exchange functionality
- Support for Stellar (XLM)
- Add ability to select custom nodes for Bitcoin and similar currencies
- Support for ShapeShift membership
- Add Spanish, Italian, and Russian translations
- Implement device size based UI scaling

## 1.3.4

- Fix Payment Protocol support on Android
- Change DGB P2SH address to "S" address
- Prevent TouchID button from being tapped after login
- Prevent create wallet button Done button from being tapped multiple times
- Fix white screen hang upon login if an incoming transaction happens
- Implement new modal manager
- Fix React error that FlatList key is not a string
- Fix address wrapping in Simplex plugin
- Fix horizontal gap in Android transaction list
- Fix horizontal gap in Android wallet list
- Fix double tap bug on Change Password modal
- Change Redux actions to use Flow types instead of action creators

edge-login-ui:

- Add scaling to login screen
- Add popup of 2FA reset request warning for all accounts on device

edge-currency-bitcoin:

- Add eboost
- Fix Payment Protocol support on Android

## 1.3.3

- Fix BIP70 support for Bitcoin Cash
- Change warning text when doing Edge Login to full access application
- Add XMR/XRP PaymentID/Destination Tag button to Send Confirmation screen
- Show 2FA reset warning as soon as app launches for all accounts on device
- Speed up logins by moving 2FA reset check to background
- Add device size font/button scaling to create account screens
- Show denomination when getting max amount error at exchange screen
- Update to React Native 0.55
- Fix crash when user taps on incoming funds dropdown
- Fix editing of fiat amount in transaction details if using foreign locale
- Add Terms of Service menu button

## 1.3.0

- Add support for ERC20 Tether, Digibyte, Bitcoin Gold, and Vertcoin
- Support buying Litecoin with credit card
- Add toggle to show fiat balances of wallets in Wallet List screen
- Add per transaction PIN spending limits
- Show transaction/event history of Simplex transactions
- Fix occasional error popup on login/logout
- Add onboarding screens for new accounts
- Fix QBO file format bugs causing errored imports
- Fix persistence of category field in transaction details
- Switch to Bugsnag for crash reporting
- Fix sweeping private keys for several currencies
- Fix slow max spend for several currencies
- Fix Cancel of sweeping private key not re-enabling scanner
- Fix several crashes
- Add cards to empty LTC, BTC, ETH, and BCH wallets to show user link to buy with credit card
- Do not show "No Amount Specified" error when user first scans Monero/XRP QR codes

## 1.2.4

- Add BIP70 support
- Change password reminder logic to step off twice as quickly after correct password
- Fix mint progress bar to be on top of blue region
- Remove IMP fiat currency since we don't have exchange rates for it
- Make show account balance toggle persistent
- Make progress bar start at about 10%
- Change settings for password recovery to show "Setup Password Recovery"
- Fix dropdown for iPhone X

edge-currency-bitcoin:

- BIP70
- Fix sweeping private keys for QTUM, DASH, LTC, FTC, XZC
- Rename UFO Coin -> UFO

edge-currency-ethereum:

- Update REP contract address

edge-currency-ripple:

- Switch currency name to XRP
- Update block explorer

## 1.2.3

- Bump Monero library 0.0.8
- Check for errors in encodeUri from invalid addresses
- Poll Edge Core for new QR code address if current public address is invalid

## 1.2.2

- Fix bugs with QBO/CSV export
- Add support for uniqueIdentifer (XRP destination tag / Monero payment ID)

## 1.2.1

- Support to hold, send, and receive Monero (XMR)
- Support to hold, send, and receive Ripple (XRP)
- Support for buying and selling Bitcoin using credit card via Simplex integration
- Ability to sweep private keys for Bitcoin, Bitcoin Cash, Litecoin, and Dash.
- Add side menu buttons for send/scan, request, exchange, buy, and sweep
- Remove Share button for view master private key modal
- Change progress bar to horizontally animated line
- Show more decimal places for fiat amounts if needed
- Make entire transaction notes tappable
- Fix Shapeshift order logic to prevent errors and speed up response
- Performance optimizations
- Add tracking of referral link used for install
- App behavior modification per referral link
- Export transaction history to CSV and Quickbooks (QBO) files
- Ability to restore deleted wallets

## 1.1.3

- Add links to ShapeShift order ID in transaction notes field
- Fix errors when switching wallets in Exchange screen
- Change Ethereum add-token URI format to `token-info`

edge-currency-bitcoin:

- Fix timeout errors on iOS due to react-native-tcp
- Improve Electrum server selection
- Improve spending reliability by broadcasting to API services as well as Electrum nodes

## 1.1.2

- Improve performance when selecting a wallet with lots of transactions
- Add support for FTC and XZC blockchains
- Add support for HUR and IND ERC20 tokens
- Utilize ShapeShift “precise” orders for accurate receive amounts
- Add progress indicator for wallet syncing transactions from network
- Fix token still appearing when custom token is deleted
- Use ‘bits’ as the default BTC and BCH denomination for new accounts
- Add ability to scan QR code to add custom token

edge-exchange-plugins

- Add CoinCap as an exchange rate source to cover more coins and tokens

edge-currency-bitcoin:

- Fix persistent timeout errors when sending LTC, BCH, BTC, and Dash

## 1.0.9

- Add BCH to default wallets for new accounts
- Fix hang for offline login
- Enable landscape mode for iOS tablets
- Fix rendering issues in landscape mode

edge-currency-bitcoin:

- Improve networking code to save server status/states more often. Fixes LTC connectivity issues

edge-core-js

- Remove dropped transactions from being reported to GUI

## 1.0.8

- Fix unconfirmed transactions having incorrect date
- Fix incorrect sort order of unconfirmed transactions
- Fix Request screen Copy button when using legacy addresses for BCH/LTC

## 1.0.7

- Significantly improved performance for accounts with large wallets
- Fix occasional crash when uploading logs
- Reduce disk storage requirements for app logs
- Allow displaying of legacy address formats for BCH and LTC
- Use new popup menu library to fix offscreen visibility issues
- Dynamic check of token availability from ShapeShift
- Change wording in wallet option popup
- Change styling of side menu drawer
- Only ask for Contacts permission when needed
- Dynamically size transaction details notes field
- Fix editing fiat value in transation details

edge-currency-ethereum:

- Allow Ethereum token currency codes to be 2-7 characters instead of 3-5
- Allow mixed case Ethereum token contract addresses
- Fix corrupt nativeAmount for some token transactions (ie. EOS)
- Show error when spending a Ethereum token when not enough ETH is available
- Dynamically set gas price using ethgasstation.info

edge-core-js:

- Fix account and wallet data sync while logged in
- Fix corrupt fiat amount in transactions to prevent GUI from crashing
- Improve error handling of TCP connection failures

## 1.0.6

- Fix crash on startup for Samsung Note 8 (update edge-login-ui-rn)
- Fix crash on login and signup on some Android devices (update react-native-fast-crypto)
- Fix missing popup on login when 2FA reset was requested
- Change custom Ethereum gas price to use GWei

## 1.0.5

- Improve handling of failed connection to blockchain nodes

## 1.0.4

- Fix Wallet List dropdown selector on iPhone X
- Use correct Bitcoin Cash logo

## 1.0.3

Improvements

- Add more info to Contact permission popup on use of Contacts information
- Make new Litecoin, Dash, and Bitcoin Cash wallets default to BIP44 mnemonic seeds

Fixes

- Minimize network requests on exchange screen
- Fix input corruption on Exchange screen
- Fix mining fee and max spend on exchange screen
- Fix PIN changes from Settings screen
- Properly show newly added custom tokens
- Make Ethereum spends more reliable
- Fix numeric entry on different locale numpads
- Fix exchange screen to provide spinner feedback while getting order
- Prevent spends to addresses of different format. Ie. LTC to BTC
