var SmartCityToken = artifacts.require("./SmartCityToken.sol");
var SmartCityCrowdsale = artifacts.require("./SmartCityCrowdsale.sol");

const OWNER = web3.eth.accounts[0];
const WALLET = web3.eth.accounts[1];
const TOTAL_SUPPLY = 252862966307692;
const START_TIME = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1000;
const TOKEN_CAP_PH1 = 821804640;
const TOKEN_CAP_PH2 = 821804641;

module.exports = function(deployer) {
  deployer.deploy(SmartCityToken,
                  OWNER,                                        // _ownerAddress
                  1535760000                                    // _startTime: 01 Sep 2018 00:00:00 GMT
                  ).then(function() {
    return deployer.deploy(
       SmartCityCrowdsale,
       SmartCityToken.address,                                  // _tokenAddress
       OWNER,                                                   // _tokenOwner
       WALLET,                                                  // _walletAddress
       START_TIME,                                              // _startTime
	   TOKEN_CAP_PH1,                                           // _tokenCapPhaseOne
	   TOKEN_CAP_PH2                                            // _tokenCapPhaseTwo
       );
  });
};

/*
module.exports = function(deployer) {
  deployer.deploy(SmartCityToken,
                  OWNER,                                        // _ownerAddress
                  1535760000                                    // _startTime: 01 Sep 2018 00:00:00 GMT
                  ).then(function() {
    return deployer.deploy(
       obsolete_SmartCityCrowdsale,
       SmartCityToken.address,                                  // _tokenAddress
       OWNER,                                                   // _tokenOwner
       WALLET,                                                  // _walletAddress
       1535760000,                                              // _startTime
	   1535770000,												// _endTime
	   86400													// _timeAfterSoftCap
       );
  });
};
*/