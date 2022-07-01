(this["webpackJsonp@pancakeswap/interface"] = this["webpackJsonp@pancakeswap/interface"] || []).push([
  [1], {
    121: function(e) {
      e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
    },
    154: function(e) {
      e.exports = JSON.parse('{"name":"PancakeSwap Default List","timestamp":"2021-03-17T09:56:23Z","version":{"major":2,"minor":1,"patch":0},"tags":{},"logoURI":"https://exchange.pancakeswap.finance/images/pancakeswap.png","keywords":["pancake","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xae13d989dac2f0debff460ac112a837c89baa7cd","chainId":97,"decimals":18,"logoURI":"https://pancake.kiemtienonline360.com/images/coins/0xae13d989dac2f0debff460ac112a837c89baa7cd.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7","chainId":97,"decimals":18,"logoURI":"https://pancake.kiemtienonline360.com/images/coins/0x78867bbeef44f2326bf8ddd1941a4439382ef2a7.png"},{"name":"USDT Token","symbol":"USDT","address":"0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684","chainId":97,"decimals":18,"logoURI":"https://pancake.kiemtienonline360.com/images/coins/0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684.png"},{"name":"ETH Token","symbol":"ETH","address":"0x8babbb98678facc7342735486c851abd7a0d17ca","chainId":97,"decimals":18,"logoURI":"https://pancake.kiemtienonline360.com/images/coins/0x8babbb98678facc7342735486c851abd7a0d17ca.png"},{"name":"DAI Token","symbol":"DAI","address":"0x8a9424745056Eb399FD19a0EC26A14316684e274","chainId":97,"decimals":18,"logoURI":"https://pancake.kiemtienonline360.com/images//coins/0x8a9424745056eb399fd19a0ec26a14316684e274.png"},{"name":"CAKE Token","symbol":"CAKE","address":"0xF9f93cF501BFaDB6494589Cb4b4C15dE49E85D0e","chainId":97,"decimals":9,"logoURI":"https://pancake.kiemtienonline360.com/images/coins/0xf9f93cf501bfadb6494589cb4b4c15de49e85d0e.png"},{"name":"Safemoon Token","symbol":"SAFEMOON","address":"0xDAcbdeCc2992a63390d108e8507B98c7E2B5584a","chainId":97,"decimals":18,"logoURI":"https://pancake.kiemtienonline360.com/images/coins/0xdacbdecc2992a63390d108e8507b98c7e2b5584a.png"}]}')
    },
    248: function(e) {
      e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    249: function(e) {
      e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    279: function(e) {
      e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    280: function(e) {
      e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
    },
    281: function(e) {
      e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
    },
    392: function(e, t) {},
    492: function(e, t) {},
    512: function(e, t, n) {
      "use strict";
      n.r(t);
      var r, a, i = n(0),
        c = n.n(i),
        o = n(79),
        s = n.n(o),
        l = n(3),
        u = n(9),
        d = n(4),
        b = Object(d.createGlobalStyle)(r || (r = Object(u.a)(["\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), (function(e) {
          return e.theme.colors.background
        })),
        p = n(7),
        j = n.n(p),
        f = n(31),
        h = n(11),
        m = n(43),
        y = n(44),
        O = n(270),
        v = n(21),
        x = n(56),
        g = n(125),
        C = n(17),
        w = n(183),
        k = n(126),
        T = n(127),
        I = n(272),
        E = n(144),
        N = n(12),
        R = n(128),
        S = n(10),
        U = n(14),
        A = n(15),
        P = n(129),
        B = n(84),
        M = n(20),
        L = function(e) {
          Object(U.a)(n, e);
          var t = Object(A.a)(n);

          function n(e, r, a) {
            var i;
            return Object(S.a)(this, n), (i = t.call(this, e)).code = r, i.data = a, i
          }
          return n
        }(Object(P.a)(Error)),
        D = function e(t, n, r) {
          var a = this;
          Object(S.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(f.a)(j.a.mark((function e() {
            var t, n, r, i, c, o, s, l, u, d, b, p, f, h;
            return j.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return console.info("Clearing batch", a.batch), t = a.batch, a.batch = [], a.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(a.url, {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                      accept: "application/json"
                    },
                    body: JSON.stringify(t.map((function(e) {
                      return e.request
                    })))
                  });
                case 7:
                  n = e.sent, e.next = 14;
                  break;
                case 10:
                  return e.prev = 10, e.t0 = e.catch(4), t.forEach((function(e) {
                    return (0, e.reject)(new Error("Failed to send batch call"))
                  })), e.abrupt("return");
                case 14:
                  if (n.ok) {
                    e.next = 17;
                    break
                  }
                  return t.forEach((function(e) {
                    return (0, e.reject)(new L("".concat(n.status, ": ").concat(n.statusText), -32e3))
                  })), e.abrupt("return");
                case 17:
                  return e.prev = 17, e.next = 20, n.json();
                case 20:
                  r = e.sent, e.next = 27;
                  break;
                case 23:
                  return e.prev = 23, e.t1 = e.catch(17), t.forEach((function(e) {
                    return (0, e.reject)(new Error("Failed to parse JSON response"))
                  })), e.abrupt("return");
                case 27:
                  i = t.reduce((function(e, t) {
                    return e[t.request.id] = t, e
                  }), {}), c = Object(R.a)(r);
                  try {
                    for (c.s(); !(o = c.n()).done;) s = o.value, l = i[s.id], u = l.resolve, d = l.reject, b = l.request.method, u && ("error" in s ? d(new L(null === s || void 0 === s || null === (p = s.error) || void 0 === p ? void 0 : p.message, null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.code, null === s || void 0 === s || null === (h = s.error) || void 0 === h ? void 0 : h.data)) : "result" in s ? u(s.result) : d(new L("Received unexpected JSON-RPC response to ".concat(b, " request."), -32e3, s)))
                  } catch (j) {
                    c.e(j)
                  } finally {
                    c.f()
                  }
                case 30:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [4, 10],
              [17, 23]
            ])
          }))), this.sendAsync = function(e, t) {
            a.request(e.method, e.params).then((function(n) {
              return t(null, {
                jsonrpc: "2.0",
                id: e.id,
                result: n
              })
            })).catch((function(e) {
              return t(e, null)
            }))
          }, this.request = function() {
            var e = Object(f.a)(j.a.mark((function e(t, n) {
              var r, i;
              return j.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ("string" === typeof t) {
                      e.next = 2;
                      break
                    }
                    return e.abrupt("return", a.request(t.method, t.params));
                  case 2:
                    if ("eth_chainId" !== t) {
                      e.next = 4;
                      break
                    }
                    return e.abrupt("return", "0x".concat(a.chainId.toString(16)));
                  case 4:
                    return i = new Promise((function(e, r) {
                      a.batch.push({
                        request: {
                          jsonrpc: "2.0",
                          id: a.nextId++,
                          method: t,
                          params: n
                        },
                        resolve: e,
                        reject: r
                      })
                    })), a.batchTimeoutId = null !== (r = a.batchTimeoutId) && void 0 !== r ? r : setTimeout(a.clearBatch, a.batchWaitTimeMs), e.abrupt("return", i);
                  case 7:
                  case "end":
                    return e.stop()
                }
              }), e)
            })));
            return function(t, n) {
              return e.apply(this, arguments)
            }
          }(), this.chainId = t, this.url = n;
          var i = new URL(n);
          this.host = i.host, this.path = i.pathname, this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50
        },
        _ = function(e) {
          Object(U.a)(n, e);
          var t = Object(A.a)(n);

          function n(e) {
            var r, a = e.urls,
              i = e.defaultChainId;
            return Object(S.a)(this, n), Object(M.a)(i || 1 === Object.keys(a).length, "defaultChainId is a required argument with >1 url"), (r = t.call(this, {
              supportedChainIds: Object.keys(a).map((function(e) {
                return Number(e)
              }))
            })).providers = void 0, r.currentChainId = void 0, r.currentChainId = i || Number(Object.keys(a)[0]), r.providers = Object.keys(a).reduce((function(e, t) {
              return e[Number(t)] = new D(Number(t), a[Number(t)]), e
            }), {}), r
          }
          return Object(N.a)(n, [{
            key: "provider",
            get: function() {
              return this.providers[this.currentChainId]
            }
          }, {
            key: "activate",
            value: function() {
              var e = Object(f.a)(j.a.mark((function e() {
                return j.a.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", {
                        provider: this.providers[this.currentChainId],
                        chainId: this.currentChainId,
                        account: null
                      });
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));
              return function() {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "getProvider",
            value: function() {
              var e = Object(f.a)(j.a.mark((function e() {
                return j.a.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", this.providers[this.currentChainId]);
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));
              return function() {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "getChainId",
            value: function() {
              var e = Object(f.a)(j.a.mark((function e() {
                return j.a.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", this.currentChainId);
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));
              return function() {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "getAccount",
            value: function() {
              var e = Object(f.a)(j.a.mark((function e() {
                return j.a.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", null);
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })));
              return function() {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "deactivate",
            value: function() {
              return null
            }
          }]), n
        }(B.AbstractConnector),
        Y = "https://data-seed-prebsc-1-s1.binance.org:8545",
        z = parseInt(null !== "97" ? "97" : "56");
      var F, q = new _({
        urls: Object(C.a)({}, z, Y)
      });
      var V, W = new k.a({
          supportedChainIds: [97]
        }),
        H = new E.BscConnector({
          supportedChainIds: [97]
        }),
        Q = new T.b({
          rpc: Object(C.a)({}, z, Y),
          bridge: "https://bridge.walletconnect.org",
          qrcode: !0,
          pollingInterval: 15e3
        }),
        K = (new I.a({
          url: Y,
          appName: "Uniswap",
          appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"
        }), a = {}, Object(C.a)(a, l.l.Injected, W), Object(C.a)(a, l.l.WalletConnect, Q), Object(C.a)(a, l.l.BSC, H), a),
        G = n(27),
        X = n(13),
        J = n(6),
        $ = "0x2638737D14e2e02C56b7769e2c5c8F52d352017a",
        Z = J.a.BSCTESTNET,
        ee = new J.j(Z, "0x8a9424745056Eb399FD19a0EC26A14316684e274", 18, "DAI", "Dai Stablecoin"),
        te = new J.j(Z, "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7", 18, "BUSD", "Binance USD"),
        ne = new J.j(Z, "0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684", 18, "USDT", "Tether USD"),
        re = new J.j(Z, "0x8babbb98678facc7342735486c851abd7a0d17ca", 18, "ETH", "Ethereum"),
        ae = new J.j(Z, "0xae13d989dac2f0debff460ac112a837c89baa7cd", 18, "WBNB", "Wrapped BNB"),
        ie = (V = {}, Object(C.a)(V, J.a.MAINNET, [J.n[J.a.MAINNET]]), Object(C.a)(V, J.a.BSCTESTNET, [J.n[J.a.BSCTESTNET]]), V),
        ce = Object(X.a)(Object(X.a)({}, ie), {}, Object(C.a)({}, Z, [].concat(Object(G.a)(ie[Z]), [ee, te, ne, re]))),
        oe = Object(C.a)({}, Z, {}),
        se = Object(X.a)(Object(X.a)({}, ie), {}, Object(C.a)({}, Z, [].concat(Object(G.a)(ie[Z]), [ee, te, ne]))),
        le = Object(X.a)(Object(X.a)({}, ie), {}, Object(C.a)({}, Z, [].concat(Object(G.a)(ie[Z]), [ee, te, ne]))),
        ue = Object(C.a)({}, Z, [
          [te, ae],
          [ne, te],
          [ne, ae],
          [ee, ne],
          [ee, ae]
        ]),
        de = "NETWORK",
        be = 80,
        pe = 1200,
        je = new J.g(J.e.BigInt(1), J.e.BigInt(1e4)),
        fe = J.e.BigInt(1e4),
        he = new J.g(J.e.BigInt(100), fe),
        me = new J.g(J.e.BigInt(300), fe),
        ye = new J.g(J.e.BigInt(500), fe),
        Oe = new J.g(J.e.BigInt(1e3), fe),
        ve = new J.g(J.e.BigInt(1500), fe),
        xe = J.e.exponentiate(J.e.BigInt(10), J.e.BigInt(16));

      function ge() {
        var e = Object(x.d)(),
          t = Object(x.d)(de);
        return e.active ? e : t
      }
      var Ce, we, ke, Te = n(22),
        Ie = Object(Te.b)("app/updateBlockNumber"),
        Ee = Object(Te.b)("app/toggleWalletModal"),
        Ne = Object(Te.b)("app/toggleSettingsMenu"),
        Re = Object(Te.b)("app/addPopup"),
        Se = Object(Te.b)("app/removePopup");

      function Ue() {
        var e = ge().chainId;
        return Object(v.d)((function(t) {
          return t.application.blockNumber[null !== e && void 0 !== e ? e : -1]
        }))
      }

      function Ae() {
        var e = Object(v.c)();
        return Object(i.useCallback)((function(t) {
          e(Se({
            key: t
          }))
        }), [e])
      }
      var Pe = d.default.div(Ce || (Ce = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),
        Be = Object(d.default)(Pe)(we || (we = Object(u.a)(["\n  width: 100%;\n  align-items: center;\n"]))),
        Me = d.default.div(ke || (ke = Object(u.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"])), (function(e) {
          var t = e.gap;
          return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t
        }), (function(e) {
          var t = e.justify;
          return t && t
        })),
        Le = Pe,
        De = n(527),
        _e = n(96),
        Ye = n(68),
        ze = {
          pending: Object(Te.b)("lists/fetchTokenList/pending"),
          fulfilled: Object(Te.b)("lists/fetchTokenList/fulfilled"),
          rejected: Object(Te.b)("lists/fetchTokenList/rejected")
        },
        Fe = Object(Te.b)("lists/acceptListUpdate"),
        qe = Object(Te.b)("lists/addList"),
        Ve = Object(Te.b)("lists/removeList"),
        We = Object(Te.b)("lists/selectList");
      Object(Te.b)("lists/rejectVersionUpdate");

      function He(e) {
        return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch)
      }
      var Qe, Ke, Ge, Xe, Je, $e = n(275),
        Ze = Object(d.default)($e.Box)(Qe || (Qe = Object(u.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), (function(e) {
          return e.align || "center"
        }), (function(e) {
          return e.padding
        }), (function(e) {
          return e.border
        }), (function(e) {
          return e.borderRadius
        })),
        et = Object(d.default)(Ze)(Ke || (Ke = Object(u.a)(["\n  justify-content: space-between;\n"]))),
        tt = d.default.div(Ge || (Ge = Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n"]))),
        nt = Object(d.default)(Ze)(Xe || (Xe = Object(u.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"])), (function(e) {
          var t = e.gap;
          return t && "-".concat(t)
        }), (function(e) {
          var t = e.justify;
          return t && t
        }), (function(e) {
          return e.gap
        })),
        rt = Object(d.default)(Ze)(Je || (Je = Object(u.a)(["\n  width: fit-content;\n  margin: ", ";\n"])), (function(e) {
          var t = e.gap;
          return t && "-".concat(t)
        })),
        at = Ze,
        it = n(1);

      function ct(e) {
        var t = e.popKey,
          n = e.listUrl,
          r = e.oldList,
          a = e.newList,
          o = e.auto,
          s = Ae(),
          u = Object(i.useCallback)((function() {
            return s(t)
          }), [t, s]),
          d = Object(v.c)(),
          b = Object(i.useCallback)((function() {
            o || (d(Fe(n)), u())
          }), [o, d, n, u]),
          p = Object(i.useMemo)((function() {
            return Object(Ye.b)(r.tokens, a.tokens)
          }), [a.tokens, r.tokens]),
          j = p.added,
          f = p.changed,
          h = p.removed,
          m = Object(i.useMemo)((function() {
            return Object.keys(f).reduce((function(e, t) {
              return e + Object.keys(f[t]).length
            }), 0)
          }), [f]);
        return Object(it.jsx)(nt, {
          children: Object(it.jsx)(Me, {
            style: {
              flex: "1"
            },
            gap: "8px",
            children: o ? Object(it.jsxs)(l.y, {
              children: ['The token list "', r.name, '" has been updated to', " ", Object(it.jsx)("strong", {
                children: He(a.version)
              }), "."]
            }) : Object(it.jsxs)(it.Fragment, {
              children: [Object(it.jsxs)("div", {
                children: [Object(it.jsxs)(l.y, {
                  fontSize: "14px",
                  children: ['An update is available for the token list "', r.name, '" (', He(r.version), " to ", He(a.version), ")."]
                }), Object(it.jsxs)("ul", {
                  children: [j.length > 0 ? Object(it.jsxs)("li", {
                    children: [j.map((function(e, t) {
                      return Object(it.jsxs)(c.a.Fragment, {
                        children: [Object(it.jsx)("strong", {
                          title: e.address,
                          children: e.symbol
                        }), t === j.length - 1 ? null : ", "]
                      }, "".concat(e.chainId, "-").concat(e.address))
                    })), " ", "added"]
                  }) : null, h.length > 0 ? Object(it.jsxs)("li", {
                    children: [h.map((function(e, t) {
                      return Object(it.jsxs)(c.a.Fragment, {
                        children: [Object(it.jsx)("strong", {
                          title: e.address,
                          children: e.symbol
                        }), t === h.length - 1 ? null : ", "]
                      }, "".concat(e.chainId, "-").concat(e.address))
                    })), " ", "removed"]
                  }) : null, m > 0 ? Object(it.jsxs)("li", {
                    children: [m, " tokens updated"]
                  }) : null]
                })]
              }), Object(it.jsxs)(nt, {
                children: [Object(it.jsx)("div", {
                  style: {
                    flexGrow: 1,
                    marginRight: 12
                  },
                  children: Object(it.jsx)(l.c, {
                    onClick: b,
                    children: "Accept update"
                  })
                }), Object(it.jsx)("div", {
                  style: {
                    flexGrow: 1
                  },
                  children: Object(it.jsx)(l.c, {
                    onClick: u,
                    children: "Dismiss"
                  })
                })]
              })]
            })
          })
        })
      }
      var ot = n(525),
        st = n(526),
        lt = n(99),
        ut = n(29),
        dt = n(514),
        bt = n(24),
        pt = n(276);

      function jt(e) {
        try {
          return Object(ut.getAddress)(e)
        } catch (t) {
          return !1
        }
      }
      var ft = {
        56: "",
        97: "testnet."
      };

      function ht(e, t, n) {
        var r = "https://".concat(ft[e] || ft[J.a.MAINNET], "bscscan.com");
        switch (n) {
          case "transaction":
            return "".concat(r, "/tx/").concat(t);
          case "token":
            return "".concat(r, "/token/").concat(t);
          case "address":
          default:
            return "".concat(r, "/address/").concat(t)
        }
      }

      function mt(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          n = jt(e);
        if (!n) throw Error("Invalid 'address' parameter '".concat(e, "'."));
        return "".concat(n.substring(0, t + 2), "...").concat(n.substring(42 - t))
      }

      function yt(e) {
        return e.mul(bt.a.from(1e4).add(bt.a.from(1e3))).div(bt.a.from(1e4))
      }

      function Ot(e, t) {
        if (t < 0 || t > 1e4) throw Error("Unexpected slippage value: ".concat(t));
        return [J.e.divide(J.e.multiply(e.raw, J.e.BigInt(1e4 - t)), J.e.BigInt(1e4)), J.e.divide(J.e.multiply(e.raw, J.e.BigInt(1e4 + t)), J.e.BigInt(1e4))]
      }

      function vt(e, t, n, r) {
        if (!jt(e) || e === dt.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
        return new lt.a(e, t, function(e, t) {
          return t ? function(e, t) {
            return e.getSigner(t).connectUnchecked()
          }(e, t) : e
        }(n, r))
      }

      function xt(e, t, n) {
        return vt($, pt.a, t, n)
      }
      var gt, Ct, wt, kt, Tt, It = n(58),
        Et = d.default.button(gt || (gt = Object(u.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function(e) {
          return e.disabled ? "default" : "pointer"
        }), (function(e) {
          var t = e.theme;
          return e.disabled ? t.colors.textSubtle : t.colors.primary
        }), (function(e) {
          return e.disabled ? null : "underline"
        }), (function(e) {
          return e.disabled ? null : "underline"
        })),
        Nt = Object(d.default)(m.b)(Ct || (Ct = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function(e) {
          return e.theme.colors.primary
        })),
        Rt = d.default.a(wt || (wt = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function(e) {
          return e.theme.colors.primary
        }));

      function St(e) {
        var t = e.target,
          n = void 0 === t ? "_blank" : t,
          r = e.href,
          a = e.rel,
          c = void 0 === a ? "noopener noreferrer" : a,
          o = Object(It.a)(e, ["target", "href", "rel"]),
          s = Object(i.useCallback)((function(e) {
            "_blank" === n || e.ctrlKey || e.metaKey || e.preventDefault()
          }), [n]);
        return Object(it.jsx)(Rt, Object(X.a)({
          target: n,
          rel: c,
          href: r,
          onClick: s
        }, o))
      }
      var Ut, At, Pt, Bt, Mt = Object(d.keyframes)(kt || (kt = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
        Lt = d.default.img(Tt || (Tt = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"])), Mt),
        Dt = Object(d.default)(nt)(Ut || (Ut = Object(u.a)(["\n  flex-wrap: nowrap;\n"])));

      function _t(e) {
        var t = e.hash,
          n = e.success,
          r = e.summary,
          a = ge().chainId,
          c = Object(i.useContext)(d.ThemeContext);
        return Object(it.jsxs)(Dt, {
          children: [Object(it.jsx)("div", {
            style: {
              paddingRight: 16
            },
            children: n ? Object(it.jsx)(ot.a, {
              color: c.colors.success,
              size: 24
            }) : Object(it.jsx)(st.a, {
              color: c.colors.failure,
              size: 24
            })
          }), Object(it.jsxs)(Me, {
            gap: "8px",
            children: [Object(it.jsx)(l.y, {
              children: null !== r && void 0 !== r ? r : "Hash: ".concat(t.slice(0, 8), "...").concat(t.slice(58, 65))
            }), a && Object(it.jsx)(St, {
              href: ht(a, t, "transaction"),
              children: "View on bscscan"
            })]
          })]
        })
      }
      var Yt, zt, Ft, qt = Object(d.default)(De.a)(At || (At = Object(u.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]))),
        Vt = d.default.div(Pt || (Pt = Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ", " {\n    min-width: 290px;\n  }\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.theme.mediaQueries.sm
        })),
        Wt = d.default.div(Bt || (Bt = Object(u.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"])), (function(e) {
          return e.theme.colors.tertiary
        })),
        Ht = Object(_e.a)(Wt);

      function Qt(e) {
        var t = e.removeAfterMs,
          n = e.content,
          r = e.popKey,
          a = Ae(),
          c = Object(i.useCallback)((function() {
            return a(r)
          }), [r, a]);
        Object(i.useEffect)((function() {
          if (null !== t) {
            var e = setTimeout((function() {
              c()
            }), t);
            return function() {
              clearTimeout(e)
            }
          }
        }), [t, c]);
        var o, s = Object(i.useContext)(d.ThemeContext);
        if ("txn" in n) {
          var l = n.txn,
            u = l.hash,
            b = l.success,
            p = l.summary;
          o = Object(it.jsx)(_t, {
            hash: u,
            success: b,
            summary: p
          })
        } else if ("listUpdate" in n) {
          var j = n.listUpdate,
            f = j.listUrl,
            h = j.oldList,
            m = j.newList,
            y = j.auto;
          o = Object(it.jsx)(ct, {
            popKey: r,
            listUrl: f,
            oldList: h,
            newList: m,
            auto: y
          })
        }
        var O = Object(_e.b)({
          from: {
            width: "100%"
          },
          to: {
            width: "0%"
          },
          config: {
            duration: null !== t && void 0 !== t ? t : void 0
          }
        });
        return Object(it.jsxs)(Vt, {
          children: [Object(it.jsx)(qt, {
            color: s.colors.textSubtle,
            onClick: c
          }), o, null !== t ? Object(it.jsx)(Ht, {
            style: O
          }) : null]
        })
      }
      var Kt = d.default.div(Yt || (Yt = Object(u.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) {
          return e.height
        }), (function(e) {
          return e.height ? "0 auto;" : 0
        }), (function(e) {
          return e.height ? "20px" : 0
        }), (function(e) {
          return e.theme.mediaQueries.sm
        })),
        Gt = d.default.div(zt || (zt = Object(u.a)(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
        Xt = Object(d.default)(Me)(Ft || (Ft = Object(u.a)(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) {
          return e.theme.mediaQueries.sm
        }));

      function Jt() {
        var e = function() {
          var e = Object(v.d)((function(e) {
            return e.application.popupList
          }));
          return Object(i.useMemo)((function() {
            return e.filter((function(e) {
              return e.show
            }))
          }), [e])
        }();
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsx)(Xt, {
            gap: "20px",
            children: e.map((function(e) {
              return Object(it.jsx)(Qt, {
                content: e.content,
                popKey: e.key,
                removeAfterMs: e.removeAfterMs
              }, e.key)
            }))
          }), Object(it.jsx)(Kt, {
            height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0,
            children: Object(it.jsx)(Gt, {
              children: e.slice(0).reverse().map((function(e) {
                return Object(it.jsx)(Qt, {
                  content: e.content,
                  popKey: e.key,
                  removeAfterMs: e.removeAfterMs
                }, e.key)
              }))
            })
          })]
        })
      }
      var $t, Zt, en, tn, nn = n(113),
        rn = Object(d.keyframes)($t || ($t = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
        an = d.default.svg(Zt || (Zt = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), rn, (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        }), (function(e) {
          var t = e.stroke,
            n = e.theme;
          return null !== t && void 0 !== t ? t : n.colors.primary
        }));

      function cn(e) {
        var t = e.size,
          n = void 0 === t ? "16px" : t,
          r = e.stroke,
          a = Object(It.a)(e, ["size", "stroke"]);
        return Object(it.jsx)(an, Object(X.a)(Object(X.a)({
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          size: n,
          stroke: r
        }, a), {}, {
          children: Object(it.jsx)("path", {
            d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }))
      }
      var on, sn, ln, un = d.default.div(en || (en = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]))),
        dn = d.default.h2(tn || (tn = Object(u.a)(["\n  color: ", ";\n"])), (function(e) {
          return e.theme.colors.primaryDark
        }));

      function bn(e) {
        var t = e.children,
          n = Object(nn.b)().t,
          r = Object(x.d)().active,
          a = Object(x.d)(de),
          c = a.active,
          o = a.error,
          s = a.activate,
          u = function() {
            var e = Object(x.d)(),
              t = e.activate,
              n = e.active,
              r = Object(i.useState)(!1),
              a = Object(h.a)(r, 2),
              c = a[0],
              o = a[1];
            return Object(i.useEffect)((function() {
              W.isAuthorized().then((function(e) {
                var n = window.localStorage.getItem(l.A);
                e && n || g.isMobile && window.ethereum && n ? t(W, void 0, !0).catch((function() {
                  o(!0)
                })) : o(!0)
              }))
            }), [t]), Object(i.useEffect)((function() {
              n && o(!0)
            }), [n]), c
          }();
        Object(i.useEffect)((function() {
            !u || c || o || r || s(q)
          }), [u, c, o, s, r]),
          function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = Object(x.d)(),
              n = t.active,
              r = t.error,
              a = t.activate;
            Object(i.useEffect)((function() {
              var t = window.ethereum;
              if (t && t.on && !n && !r && !e) {
                var i = function() {
                    a(W, void 0, !0).catch((function(e) {
                      console.error("Failed to activate after chain changed", e)
                    }))
                  },
                  c = function(e) {
                    e.length > 0 && a(W, void 0, !0).catch((function(e) {
                      console.error("Failed to activate after accounts changed", e)
                    }))
                  };
                return t.on("chainChanged", i), t.on("accountsChanged", c),
                  function() {
                    t.removeListener && (t.removeListener("chainChanged", i), t.removeListener("accountsChanged", c))
                  }
              }
            }), [n, r, e, a])
          }(!u);
        var d = Object(i.useState)(!1),
          b = Object(h.a)(d, 2),
          p = b[0],
          j = b[1];
        return Object(i.useEffect)((function() {
          var e = setTimeout((function() {
            j(!0)
          }), 600);
          return function() {
            clearTimeout(e)
          }
        }), []), u ? !r && o ? Object(it.jsx)(un, {
          children: Object(it.jsx)(dn, {
            children: n("unknownError")
          })
        }) : r || c ? t : p ? Object(it.jsx)(un, {
          children: Object(it.jsx)(cn, {})
        }) : null : null
      }
      var pn, jn, fn, hn, mn, yn, On, vn, xn, gn = d.default.div(on || (on = Object(u.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), (function(e) {
          return e.padding
        }), (function(e) {
          return e.border
        }), (function(e) {
          return e.borderRadius
        })),
        Cn = gn,
        wn = Object(d.default)(gn)(sn || (sn = Object(u.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.theme.colors.invertedContrast
        })),
        kn = Object(d.default)(gn)(ln || (ln = Object(u.a)(["\n  background-color: ", ";\n"])), (function(e) {
          return e.theme.colors.tertiary
        })),
        Tn = n(194),
        In = (n(416), n(53)),
        En = Object(_e.a)(Tn.b),
        Nn = Object(d.default)(En)(pn || (pn = Object(u.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"]))),
        Rn = Object(_e.a)(Tn.a),
        Sn = Object(d.default)((function(e) {
          e.minHeight, e.maxHeight, e.mobile, e.isOpen;
          var t = Object(It.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
          return Object(it.jsx)(Rn, Object(X.a)({}, t))
        })).attrs({
          "aria-label": "dialog"
        })(jn || (jn = Object(u.a)(["\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ", ";\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ", ";\n\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 20px;\n\n    ", " {\n      width: 65vw;\n    }\n    ", " {\n      width: 85vw;\n    }\n  }\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.theme.colors.invertedContrast
        }), Object(In.b)(.95, "#191326"), (function(e) {
          return e.mobile ? "flex-end" : "center"
        }), (function(e) {
          var t = e.maxHeight;
          return t && Object(d.css)(fn || (fn = Object(u.a)(["\n        max-height: ", "vh;\n      "])), t)
        }), (function(e) {
          var t = e.minHeight;
          return t && Object(d.css)(hn || (hn = Object(u.a)(["\n        min-height: ", "vh;\n      "])), t)
        }), (function(e) {
          return e.theme.mediaQueries.lg
        }), (function(e) {
          return e.theme.mediaQueries.sm
        }));

      function Un(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          r = e.minHeight,
          a = void 0 !== r && r,
          i = e.maxHeight,
          c = void 0 === i ? 50 : i,
          o = e.initialFocusRef,
          s = e.children,
          l = Object(_e.c)(t, null, {
            config: {
              duration: 200
            },
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            }
          });
        return Object(it.jsx)(it.Fragment, {
          children: l.map((function(e) {
            var t = e.item,
              r = e.key,
              i = e.props;
            return t && Object(it.jsx)(Nn, {
              style: i,
              onDismiss: n,
              initialFocusRef: o,
              children: Object(it.jsxs)(Sn, {
                "aria-label": "dialog content",
                minHeight: a,
                maxHeight: c,
                mobile: g.isMobile,
                children: [!o && g.isMobile ? Object(it.jsx)("div", {
                  tabIndex: 1
                }) : null, s]
              })
            }, r)
          }))
        })
      }
      var An, Pn, Bn = d.default.div(mn || (mn = Object(u.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]))),
        Mn = Object(d.default)(Me)(yn || (yn = Object(u.a)(["\n  padding: 24px;\n"]))),
        Ln = Object(d.default)(Be)(On || (On = Object(u.a)(["\n  padding: 40px 0;\n"]))),
        Dn = Object(d.default)(Mn)(vn || (vn = Object(u.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        })),
        _n = d.default.div(xn || (xn = Object(u.a)(["\n  align-items: center;\n  display: flex;\n\n  & > ", " {\n    flex: 1;\n  }\n"])), l.o),
        Yn = function(e) {
          var t = e.children,
            n = e.onDismiss;
          return Object(it.jsxs)(_n, {
            children: [Object(it.jsx)(l.o, {
              children: t
            }), Object(it.jsx)(l.p, {
              onClick: n,
              variant: "text",
              children: Object(it.jsx)(l.j, {
                color: "primary"
              })
            })]
          })
        },
        zn = Object(d.default)(Lt)(An || (An = Object(u.a)(["\n  height: ", ";\n  width: ", ";\n"])), (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        })),
        Fn = function(e) {
          var t = e.onDismiss,
            n = e.pendingText;
          return Object(it.jsx)(Bn, {
            children: Object(it.jsxs)(Mn, {
              children: [Object(it.jsx)(Yn, {
                onDismiss: t,
                children: "Waiting for confirmation"
              }), Object(it.jsx)(Ln, {
                children: Object(it.jsx)(zn, {
                  src: "/images/blue-loader.svg",
                  alt: "loader",
                  size: "90px"
                })
              }), Object(it.jsxs)(Me, {
                gap: "12px",
                justify: "center",
                children: [Object(it.jsx)(Me, {
                  gap: "12px",
                  justify: "center",
                  children: Object(it.jsx)(l.y, {
                    fontSize: "14px",
                    children: Object(it.jsx)("strong", {
                      children: n
                    })
                  })
                }), Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: "Confirm this transaction in your wallet"
                })]
              })]
            })
          })
        },
        qn = n(528),
        Vn = function(e) {
          var t = e.onDismiss,
            n = e.chainId,
            r = e.hash,
            a = Object(i.useContext)(d.ThemeContext);
          return Object(it.jsx)(Bn, {
            children: Object(it.jsxs)(Mn, {
              children: [Object(it.jsx)(Yn, {
                onDismiss: t,
                children: "Transaction submitted"
              }), Object(it.jsx)(Ln, {
                children: Object(it.jsx)(qn.a, {
                  strokeWidth: .5,
                  size: 97,
                  color: a.colors.primary
                })
              }), Object(it.jsxs)(Me, {
                gap: "8px",
                justify: "center",
                children: [n && r && Object(it.jsx)(l.r, {
                  href: ht(n, r, "transaction"),
                  children: "View on BscScan"
                }), Object(it.jsx)(l.c, {
                  onClick: t,
                  mt: "20px",
                  children: "Close"
                })]
              })]
            })
          })
        },
        Wn = function(e) {
          var t = e.isOpen,
            n = e.onDismiss,
            r = e.attemptingTxn,
            a = e.hash,
            i = e.pendingText,
            c = e.content,
            o = ge().chainId;
          return o ? Object(it.jsx)(Un, {
            isOpen: t,
            onDismiss: n,
            maxHeight: 90,
            children: r ? Object(it.jsx)(Fn, {
              onDismiss: n,
              pendingText: i
            }) : a ? Object(it.jsx)(Vn, {
              chainId: o,
              hash: a,
              onDismiss: n
            }) : c()
          }) : null
        },
        Hn = function(e) {
          var t = e.title,
            n = e.bottomContent,
            r = e.onDismiss,
            a = e.topContent;
          return Object(it.jsxs)(Bn, {
            children: [Object(it.jsxs)(Mn, {
              children: [Object(it.jsx)(Yn, {
                onDismiss: r,
                children: t
              }), a()]
            }), Object(it.jsx)(Dn, {
              gap: "12px",
              children: n()
            })]
          })
        },
        Qn = n(529),
        Kn = function(e) {
          var t = e.message,
            n = e.onDismiss,
            r = Object(i.useContext)(d.ThemeContext);
          return Object(it.jsxs)(Bn, {
            children: [Object(it.jsxs)(Mn, {
              children: [Object(it.jsx)(Yn, {
                onDismiss: n,
                children: "Error"
              }), Object(it.jsxs)(Me, {
                style: {
                  marginTop: 20,
                  padding: "2rem 0"
                },
                gap: "24px",
                justify: "center",
                children: [Object(it.jsx)(Qn.a, {
                  color: r.colors.failure,
                  style: {
                    strokeWidth: 1.5
                  },
                  size: 64
                }), Object(it.jsx)(l.y, {
                  fontSize: "16px",
                  color: "failure",
                  style: {
                    textAlign: "center",
                    width: "85%"
                  },
                  children: t
                })]
              })]
            }), Object(it.jsx)(Dn, {
              gap: "12px",
              children: Object(it.jsx)(l.c, {
                onClick: n,
                children: "Dismiss"
              })
            })]
          })
        },
        Gn = Wn,
        Xn = {
          translations: [],
          setTranslations: function() {}
        },
        Jn = Object(i.createContext)(Xn),
        $n = /%(.*?)%/,
        Zn = function(e, t, n) {
          var r = e.find((function(e) {
            return e.data.stringId === t
          }));
          if (r) {
            var a = r.data.text;
            return a.includes("%") ? function(e, t) {
              var n = $n.exec(e)[0],
                r = e.split(" ").indexOf(n),
                a = t.split(" ")[r];
              return e.replace(n, a)
            }(a, n) : a
          }
          return n
        },
        er = function(e, t) {
          var n = Object(i.useContext)(Jn).translations;
          return "error" === n[0] ? t : n.length > 0 ? Zn(n, e, t) : null
        },
        tr = function() {
          var e = Object(i.useContext)(Jn).translations;
          return Object(i.useCallback)((function(t, n) {
            return "error" === e[0] ? n : e.length > 0 ? Zn(e, t, n) : n
          }), [e])
        },
        nr = d.default.div(Pn || (Pn = Object(u.a)(["\n  margin-bottom: 40px;\n"])));
      var rr, ar = function(e) {
          var t = e.activeIndex,
            n = void 0 === t ? 0 : t,
            r = tr();
          return Object(it.jsx)(nr, {
            children: Object(it.jsxs)(l.d, {
              activeIndex: n,
              scale: "sm",
              variant: "subtle",
              children: [Object(it.jsx)(l.e, {
                id: "swap-nav-link",
                to: "/swap",
                as: m.b,
                children: r(1142, "Swap")
              }), Object(it.jsx)(l.e, {
                id: "pool-nav-link",
                to: "/pool",
                as: m.b,
                children: r(262, "Liquidity")
              }), Object(it.jsx)(l.e, {
                id: "pool-nav-link",
                as: "a",
                href: "https://www.binance.org/en/bridge?utm_source=PancakeSwap",
                target: "_blank",
                rel: "noreferrer noopener",
                children: "Bridge"
              })]
            })
          })
        },
        ir = n(119),
        cr = n(121),
        or = n(248),
        sr = new ir.b(cr),
        lr = n(165),
        ur = function(e) {
          Object(U.a)(n, e);
          var t = Object(A.a)(n);

          function n(e, r) {
            var a;
            return Object(S.a)(this, n), (a = t.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0, a.tags = void 0, a.tokenInfo = e, a.tags = r, a
          }
          return Object(N.a)(n, [{
            key: "logoURI",
            get: function() {
              return this.tokenInfo.logoURI
            }
          }]), n
        }(J.j),
        dr = (rr = {}, Object(C.a)(rr, J.a.MAINNET, {}), Object(C.a)(rr, J.a.BSCTESTNET, {}), rr),
        br = "undefined" !== typeof WeakMap ? new WeakMap : null;

      function pr(e) {
        var t = Object(v.d)((function(e) {
          return e.lists.byUrl
        }));
        return Object(i.useMemo)((function() {
          var n;
          if (!e) return dr;
          var r = null === (n = t[e]) || void 0 === n ? void 0 : n.current;
          if (!r) return dr;
          try {
            return function(e) {
              var t = null === br || void 0 === br ? void 0 : br.get(e);
              if (t) return t;
              var n = e.tokens.reduce((function(t, n) {
                var r, a, i, c = null !== (r = null === (a = n.tags) || void 0 === a || null === (i = a.map((function(t) {
                    var n;
                    if (null === (n = e.tags) || void 0 === n ? void 0 : n[t]) return Object(X.a)(Object(X.a)({}, e.tags[t]), {}, {
                      id: t
                    })
                  }))) || void 0 === i ? void 0 : i.filter((function(e) {
                    return Boolean(e)
                  }))) && void 0 !== r ? r : [],
                  o = new ur(n, c);
                if (void 0 !== t[o.chainId][o.address]) throw Error("Duplicate tokens.");
                return Object(X.a)(Object(X.a)({}, t), {}, Object(C.a)({}, o.chainId, Object(X.a)(Object(X.a)({}, t[o.chainId]), {}, Object(C.a)({}, o.address, o))))
              }), Object(X.a)({}, dr));
              return null === br || void 0 === br || br.set(e, n), n
            }(r)
          } catch (a) {
            return console.error("Could not show token list due to error", a), dr
          }
        }), [t, e])
      }

      function jr() {
        return Object(v.d)((function(e) {
          return e.lists.selectedListUrl
        }))
      }

      function fr() {
        return pr(jr())
      }
      var hr = /^0x[a-fA-F0-9]{40}$/,
        mr = /^0x[a-f0-9]*$/;

      function yr(e) {
        if (!hr.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
        if (!mr.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
        return "".concat(e.address, "-").concat(e.callData)
      }

      function Or(e) {
        var t = e.split("-");
        if (2 !== t.length) throw new Error("Invalid call key: ".concat(e));
        return {
          address: t[0],
          callData: t[1]
        }
      }
      var vr = Object(Te.b)("multicall/addMulticallListeners"),
        xr = Object(Te.b)("multicall/removeMulticallListeners"),
        gr = Object(Te.b)("multicall/fetchingMulticallResults"),
        Cr = Object(Te.b)("multicall/errorFetchingMulticallResults"),
        wr = Object(Te.b)("multicall/updateMulticallResults");

      function kr(e) {
        return -1 !== ["string", "number"].indexOf(typeof e)
      }

      function Tr(e) {
        return void 0 === e || Array.isArray(e) && e.every((function(e) {
          return kr(e) || Array.isArray(e) && e.every(kr)
        }))
      }
      var Ir = {
          valid: !1,
          blockNumber: void 0,
          data: void 0
        },
        Er = {
          blocksPerFetch: 1 / 0
        };

      function Nr(e, t) {
        var n = ge().chainId,
          r = Object(v.d)((function(e) {
            return e.multicall.callResults
          })),
          a = Object(v.c)(),
          c = Object(i.useMemo)((function() {
            var t, n, r;
            return JSON.stringify(null !== (t = null === e || void 0 === e || null === (n = e.filter((function(e) {
              return Boolean(e)
            }))) || void 0 === n || null === (r = n.map(yr)) || void 0 === r ? void 0 : r.sort()) && void 0 !== t ? t : [])
          }), [e]);
        return Object(i.useEffect)((function() {
          var e = JSON.parse(c);
          if (n && 0 !== e.length) {
            var r = e.map((function(e) {
              return Or(e)
            }));
            return a(vr({
                chainId: n,
                calls: r,
                options: t
              })),
              function() {
                a(xr({
                  chainId: n,
                  calls: r,
                  options: t
                }))
              }
          }
        }), [n, a, t, c]), Object(i.useMemo)((function() {
          return e.map((function(e) {
            var t;
            if (!n || !e) return Ir;
            var a = null === (t = r[n]) || void 0 === t ? void 0 : t[yr(e)];
            return {
              valid: !0,
              data: (null === a || void 0 === a ? void 0 : a.data) && "0x" !== (null === a || void 0 === a ? void 0 : a.data) ? a.data : null,
              blockNumber: null === a || void 0 === a ? void 0 : a.blockNumber
            }
          }))
        }), [r, e, n])
      }
      var Rr = {
          valid: !1,
          result: void 0,
          loading: !1,
          syncing: !1,
          error: !1
        },
        Sr = {
          valid: !0,
          result: void 0,
          loading: !0,
          syncing: !0,
          error: !1
        };

      function Ur(e, t, n, r) {
        if (!e) return Rr;
        var a = e.valid,
          i = e.data,
          c = e.blockNumber;
        if (!a) return Rr;
        if (a && !c) return Sr;
        if (!t || !n || !r) return Sr;
        var o, s = i && i.length > 2,
          l = (null !== c && void 0 !== c ? c : 0) < r;
        if (s && i) try {
          o = t.decodeFunctionResult(n, i)
        } catch (u) {
          return console.error("Result data parsing failed", n, i), {
            valid: !0,
            loading: !1,
            error: !0,
            syncing: l,
            result: o
          }
        }
        return {
          valid: !0,
          loading: !1,
          syncing: l,
          result: o,
          error: !s
        }
      }

      function Ar(e, t, n, r, a) {
        var c = Object(i.useMemo)((function() {
            return t.getFunction(n)
          }), [t, n]),
          o = Object(i.useMemo)((function() {
            return c && Tr(r) ? t.encodeFunctionData(c, r) : void 0
          }), [r, t, c]),
          s = Nr(Object(i.useMemo)((function() {
            return c && e && e.length > 0 && o ? e.map((function(e) {
              return e && o ? {
                address: e,
                callData: o
              } : void 0
            })) : []
          }), [e, o, c]), a),
          l = Ue();
        return Object(i.useMemo)((function() {
          return s.map((function(e) {
            return Ur(e, t, c, l)
          }))
        }), [c, s, t, l])
      }

      function Pr(e, t, n, r) {
        var a = Object(i.useMemo)((function() {
            var n;
            return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
          }), [e, t]),
          c = Nr(Object(i.useMemo)((function() {
            return e && a && Tr(n) ? [{
              address: e.address,
              callData: e.interface.encodeFunctionData(a, n)
            }] : []
          }), [e, a, n]), r)[0],
          o = Ue();
        return Object(i.useMemo)((function() {
          return Ur(c, null === e || void 0 === e ? void 0 : e.interface, a, o)
        }), [c, e, a, o])
      }
      var Br = n(152),
        Mr = n.n(Br),
        Lr = Object(Te.b)("user/updateMatchesDarkMode"),
        Dr = Object(Te.b)("user/updateUserDarkMode"),
        _r = Object(Te.b)("user/updateUserExpertMode"),
        Yr = Object(Te.b)("user/updateUserSlippageTolerance"),
        zr = Object(Te.b)("user/updateUserDeadline"),
        Fr = Object(Te.b)("user/addSerializedToken"),
        qr = Object(Te.b)("user/removeSerializedToken"),
        Vr = Object(Te.b)("user/addSerializedPair"),
        Wr = Object(Te.b)("user/removeSerializedPair"),
        Hr = Object(Te.b)("user/muteAudio"),
        Qr = Object(Te.b)("user/unmuteAudio"),
        Kr = "IS_DARK";

      function Gr(e) {
        return {
          chainId: e.chainId,
          address: e.address,
          decimals: e.decimals,
          symbol: e.symbol,
          name: e.name
        }
      }

      function Xr(e) {
        return new J.j(e.chainId, e.address, e.decimals, e.symbol, e.name)
      }

      function Jr() {
        return Object(v.d)((function(e) {
          return e.user.userExpertMode
        }))
      }

      function $r() {
        var e = Object(v.c)();
        return [Object(v.d)((function(e) {
          return e.user.userSlippageTolerance
        })), Object(i.useCallback)((function(t) {
          e(Yr({
            userSlippageTolerance: t
          }))
        }), [e])]
      }

      function Zr() {
        var e = Object(v.c)();
        return [Object(v.d)((function(e) {
          return e.user.userDeadline
        })), Object(i.useCallback)((function(t) {
          e(zr({
            userDeadline: t
          }))
        }), [e])]
      }

      function ea() {
        var e = ge().chainId,
          t = Object(v.d)((function(e) {
            return e.user.tokens
          }));
        return Object(i.useMemo)((function() {
          var n;
          return e ? Object.values(null !== (n = t[e]) && void 0 !== n ? n : {}).map(Xr) : []
        }), [t, e])
      }

      function ta(e) {
        return {
          token0: Gr(e.token0),
          token1: Gr(e.token1)
        }
      }

      function na(e) {
        var t = Object(h.a)(e, 2),
          n = t[0],
          r = t[1];
        return new J.j(n.chainId, J.f.getAddress(n, r), 18, "Cake-LP", "Pancake LPs")
      }
      var ra, aa = n(112),
        ia = n(279),
        ca = n(280),
        oa = n(281),
        sa = n(249),
        la = (ra = {}, Object(C.a)(ra, J.a.MAINNET, "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"), Object(C.a)(ra, J.a.BSCTESTNET, "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"), ra);

      function ua(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r = ge(),
          a = r.library,
          c = r.account;
        return Object(i.useMemo)((function() {
          if (!e || !t || !a) return null;
          try {
            return vt(e, t, a, n && c ? c : void 0)
          } catch (r) {
            return console.error("Failed to get contract", r), null
          }
        }), [e, t, a, n, c])
      }

      function da(e, t) {
        return ua(e, cr, t)
      }

      function ba(e) {
        var t = ge().chainId;
        if (t) switch (t) {
          case J.a.MAINNET:
          case J.a.BSCTESTNET:
        }
        return ua(undefined, ia, e)
      }

      function pa(e, t) {
        return ua(e, ca, t)
      }

      function ja() {
        var e = ge().chainId;
        return ua(e && la[e], sa, !1)
      }

      function fa() {
        var e = ge().chainId,
          t = ea(),
          n = fr();
        return Object(i.useMemo)((function() {
          return e ? t.reduce((function(e, t) {
            return e[t.address] = t, e
          }), Object(X.a)({}, n[e])) : {}
        }), [e, t, n])
      }
      var ha = /^0x[a-fA-F0-9]{64}$/;

      function ma(e, t, n) {
        return e && e.length > 0 ? e : t && ha.test(t) ? Object(lr.b)(t) : n
      }

      function ya(e) {
        var t = ge().chainId,
          n = fa(),
          r = jt(e),
          a = da(r || void 0, !1),
          c = function(e, t) {
            return ua(e, or, t)
          }(r || void 0, !1),
          o = r ? n[r] : void 0,
          s = Pr(o ? void 0 : a, "name", void 0, Er),
          l = Pr(o ? void 0 : c, "name", void 0, Er),
          u = Pr(o ? void 0 : a, "symbol", void 0, Er),
          d = Pr(o ? void 0 : c, "symbol", void 0, Er),
          b = Pr(o ? void 0 : a, "decimals", void 0, Er);
        return Object(i.useMemo)((function() {
          if (o) return o;
          if (t && r) {
            if (b.loading || u.loading || s.loading) return null;
            var e, n, a, i;
            if (b.result) return new J.j(t, r, b.result[0], ma(null === (e = u.result) || void 0 === e ? void 0 : e[0], null === (n = d.result) || void 0 === n ? void 0 : n[0], "UNKNOWN"), ma(null === (a = s.result) || void 0 === a ? void 0 : a[0], null === (i = l.result) || void 0 === i ? void 0 : i[0], "Unknown Token"))
          }
        }), [r, t, b.loading, b.result, u.loading, u.result, d.result, o, s.loading, s.result, l.result])
      }

      function Oa(e) {
        var t = "BNB" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
          n = ya(t ? void 0 : e);
        return t ? J.d : n
      }

      function va(e) {
        var t = ja(),
          n = Object(i.useMemo)((function() {
            return e ? e.map(jt).filter((function(e) {
              return !1 !== e
            })).sort() : []
          }), [e]),
          r = function(e, t, n, r) {
            var a = Object(i.useMemo)((function() {
                var n;
                return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
              }), [e, t]),
              c = Nr(Object(i.useMemo)((function() {
                return e && a && n && n.length > 0 ? n.map((function(t) {
                  return {
                    address: e.address,
                    callData: e.interface.encodeFunctionData(a, t)
                  }
                })) : []
              }), [n, e, a]), r),
              o = Ue();
            return Object(i.useMemo)((function() {
              return c.map((function(t) {
                return Ur(t, null === e || void 0 === e ? void 0 : e.interface, a, o)
              }))
            }), [a, e, c, o])
          }(t, "getEthBalance", n.map((function(e) {
            return [e]
          })));
        return Object(i.useMemo)((function() {
          return n.reduce((function(e, t, n) {
            var a, i, c = null === r || void 0 === r || null === (a = r[n]) || void 0 === a || null === (i = a.result) || void 0 === i ? void 0 : i[0];
            return c && (e[t] = J.c.ether(J.e.BigInt(c.toString()))), e
          }), {})
        }), [n, r])
      }

      function xa(e, t) {
        var n = Object(i.useMemo)((function() {
            var e;
            return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
              return !1 !== jt(null === e || void 0 === e ? void 0 : e.address)
            }))) && void 0 !== e ? e : []
          }), [t]),
          r = Ar(Object(i.useMemo)((function() {
            return n.map((function(e) {
              return e.address
            }))
          }), [n]), sr, "balanceOf", [e]),
          a = Object(i.useMemo)((function() {
            return r.some((function(e) {
              return e.loading
            }))
          }), [r]);
        return [Object(i.useMemo)((function() {
          return e && n.length > 0 ? n.reduce((function(e, t, n) {
            var a, i, c = null === r || void 0 === r || null === (a = r[n]) || void 0 === a || null === (i = a.result) || void 0 === i ? void 0 : i[0],
              o = c ? J.e.BigInt(c.toString()) : void 0;
            return o && (e[t.address] = new J.k(t, o)), e
          }), {}) : {}
        }), [e, n, r]), a]
      }

      function ga(e, t) {
        return xa(e, t)[0]
      }

      function Ca(e, t) {
        var n = ga(e, [t]);
        if (t) return n[t.address]
      }

      function wa(e, t) {
        var n = Object(i.useMemo)((function() {
            var e;
            return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
              return e instanceof J.j
            }))) && void 0 !== e ? e : []
          }), [t]),
          r = ga(e, n),
          a = va(Object(i.useMemo)((function() {
            var e;
            return null !== (e = null === t || void 0 === t ? void 0 : t.some((function(e) {
              return e === J.d
            }))) && void 0 !== e && e
          }), [t]) ? [e] : []);
        return Object(i.useMemo)((function() {
          var n;
          return null !== (n = null === t || void 0 === t ? void 0 : t.map((function(t) {
            if (e && t) return t instanceof J.j ? r[t.address] : t === J.d ? a[e] : void 0
          }))) && void 0 !== n ? n : []
        }), [e, t, a, r])
      }

      function ka(e, t) {
        return wa(e, [t])[0]
      }

      function Ta(e, t) {
        var n = Object(i.useState)(t && t(e) ? e : void 0),
          r = Object(h.a)(n, 2),
          a = r[0],
          c = r[1];
        return Object(i.useEffect)((function() {
          c((function(n) {
            return !t || t(e) ? e : n
          }))
        }), [t, e]), a
      }

      function Ia(e) {
        return null !== e && void 0 !== e
      }
      var Ea = n(282),
        Na = n(192),
        Ra = n.n(Na),
        Sa = n(157),
        Ua = n(158);
      var Aa = new TextDecoder;

      function Pa(e) {
        var t = function(e) {
            if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
            for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++) t[n] = parseInt(e.substr(2 * n, 2), 16);
            return t
          }(e),
          n = Object(Sa.getCodec)(t);
        switch (n) {
          case "ipfs-ns":
            var r = Object(Sa.rmPrefix)(t),
              a = new Ra.a(r);
            return "ipfs://".concat(Object(Ua.toB58String)(a.multihash));
          case "ipns-ns":
            var i = Object(Sa.rmPrefix)(t),
              c = new Ra.a(i),
              o = Object(Ua.decode)(c.multihash);
            return "identity" === o.name ? "ipns://".concat(Aa.decode(o.digest).trim()) : "ipns://".concat(Object(Ua.toB58String)(c.multihash));
          default:
            throw new Error("Unrecognized codec: ".concat(n))
        }
      }
      var Ba = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;

      function Ma(e) {
        var t = e.match(Ba);
        if (t) return {
          ensName: "".concat(t[1].toLowerCase(), "eth"),
          ensPath: t[3]
        }
      }

      function La(e) {
        var t, n;
        switch (e.split(":")[0].toLowerCase()) {
          case "https":
            return [e];
          case "http":
            return ["https".concat(e.substr(4)), e];
          case "ipfs":
            var r = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
            return ["https://cloudflare-ipfs.com/ipfs/".concat(r, "/"), "https://ipfs.io/ipfs/".concat(r, "/")];
          case "ipns":
            var a = null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
            return ["https://cloudflare-ipfs.com/ipns/".concat(a, "/"), "https://ipfs.io/ipns/".concat(a, "/")];
          default:
            return []
        }
      }
      var Da = n(91);

      function _a(e) {
        return /^0x0*$/.test(e)
      }

      function Ya(e) {
        var t = Object(i.useMemo)((function() {
            return e ? Ma(e) : void 0
          }), [e]),
          n = function(e) {
            var t, n, r, a = Object(i.useMemo)((function() {
                if (!e) return [void 0];
                try {
                  return e ? [Object(Da.namehash)(e)] : [void 0]
                } catch (t) {
                  return [void 0]
                }
              }), [e]),
              c = Pr(ba(!1), "resolver", a),
              o = null === (t = c.result) || void 0 === t ? void 0 : t[0],
              s = Pr(pa(o && _a(o) ? void 0 : o, !1), "contenthash", a);
            return {
              contenthash: null !== (n = null === (r = s.result) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : null,
              loading: c.loading || s.loading
            }
          }(null === t || void 0 === t ? void 0 : t.ensName);
        return Object(i.useMemo)((function() {
          return t ? n.contenthash ? La(Pa(n.contenthash)) : [] : e ? La(e) : []
        }), [t, n.contenthash, e])
      }
      var za, Fa = n(530),
        qa = {};

      function Va(e) {
        var t = e.srcs,
          n = e.alt,
          r = Object(It.a)(e, ["srcs", "alt"]),
          a = Object(i.useState)(0),
          c = Object(h.a)(a, 2)[1],
          o = t.find((function(e) {
            return !qa[e]
          }));
        return o ? Object(it.jsx)("img", Object(X.a)(Object(X.a)({}, r), {}, {
          alt: n,
          src: o,
          onError: function() {
            o && (qa[o] = !0), c((function(e) {
              return e + 1
            }))
          }
        })) : Object(it.jsx)(Fa.a, Object(X.a)({}, r))
      }
      var Wa = Object(d.default)(Va)(za || (za = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"])), (function(e) {
        return e.size
      }), (function(e) {
        return e.size
      }));

      function Ha(e) {
        var t = e.logoURI,
          n = e.style,
          r = e.size,
          a = void 0 === r ? "24px" : r,
          i = e.alt,
          c = Ya(t);
        return Object(it.jsx)(Wa, {
          alt: i,
          size: a,
          srcs: c,
          style: n
        })
      }
      var Qa, Ka, Ga, Xa = n(538),
        Ja = n(151);

      function $a(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          r = Object(i.useRef)();
        Object(i.useEffect)((function() {
          r.current = e
        }), [e]), Object(i.useEffect)((function() {
          function e() {
            var e = r.current;
            e && e()
          }
          if (null !== t) {
            n && e();
            var a = setInterval(e, t);
            return function() {
              return clearInterval(a)
            }
          }
        }), [t, n])
      }
      var Za, ei = d.default.div(Qa || (Qa = Object(u.a)(["\n  z-index: 9999;\n\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 4px 8px 0 ", ";\n  color: ", ";\n  border-radius: 8px;\n"])), (function(e) {
          return e.show ? "visible" : "hidden"
        }), (function(e) {
          return e.show ? 1 : 0
        }), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.theme.colors.tertiary
        }), Object(In.b)(.9, "#2F80ED"), (function(e) {
          return e.theme.colors.textSubtle
        })),
        ti = d.default.div(Ka || (Ka = Object(u.a)(["\n  display: inline-block;\n"]))),
        ni = d.default.div(Ga || (Ga = Object(u.a)(["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ", ";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"])), (function(e) {
          return e.theme.colors.tertiary
        }), (function(e) {
          return e.theme.colors.invertedContrast
        }));

      function ri(e) {
        var t, n, r = e.content,
          a = e.show,
          c = e.children,
          o = e.placement,
          s = void 0 === o ? "auto" : o,
          l = Object(i.useState)(null),
          u = Object(h.a)(l, 2),
          d = u[0],
          b = u[1],
          p = Object(i.useState)(null),
          j = Object(h.a)(p, 2),
          f = j[0],
          m = j[1],
          y = Object(i.useState)(null),
          O = Object(h.a)(y, 2),
          v = O[0],
          x = O[1],
          g = Object(Xa.a)(d, f, {
            placement: s,
            strategy: "fixed",
            modifiers: [{
              name: "offset",
              options: {
                offset: [8, 8]
              }
            }, {
              name: "arrow",
              options: {
                element: v
              }
            }]
          }),
          C = g.styles,
          w = g.update,
          k = g.attributes;
        return $a(Object(i.useCallback)((function() {
          w && w()
        }), [w]), a ? 100 : null), Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsx)(ti, {
            ref: b,
            children: c
          }), Object(it.jsx)(Ja.a, {
            children: Object(it.jsxs)(ei, Object(X.a)(Object(X.a)({
              show: a,
              ref: m,
              style: C.popper
            }, k.popper), {}, {
              children: [r, Object(it.jsx)(ni, Object(X.a)({
                className: "arrow-".concat(null !== (t = null === (n = k.popper) || void 0 === n ? void 0 : n["data-popper-placement"]) && void 0 !== t ? t : ""),
                ref: x,
                style: C.arrow
              }, k.arrow))]
            }))
          })]
        })
      }
      var ai, ii = d.default.div(Za || (Za = Object(u.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"])));

      function ci(e) {
        var t = e.text,
          n = Object(It.a)(e, ["text"]);
        return Object(it.jsx)(ri, Object(X.a)({
          content: Object(it.jsx)(ii, {
            children: t
          })
        }, n))
      }

      function oi(e) {
        var t = e.children,
          n = Object(It.a)(e, ["children"]),
          r = Object(i.useState)(!1),
          a = Object(h.a)(r, 2),
          c = a[0],
          o = a[1],
          s = Object(i.useCallback)((function() {
            return o(!0)
          }), [o]),
          l = Object(i.useCallback)((function() {
            return o(!1)
          }), [o]);
        return Object(it.jsx)(ci, Object(X.a)(Object(X.a)({}, n), {}, {
          show: c,
          children: Object(it.jsx)("div", {
            onMouseEnter: s,
            onMouseLeave: l,
            children: t
          })
        }))
      }
      var si, li = d.default.div(ai || (ai = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"])), (function(e) {
        return e.theme.colors.invertedContrast
      }), (function(e) {
        return e.theme.colors.textSubtle
      }));

      function ui(e) {
        var t = e.text,
          n = Object(i.useState)(!1),
          r = Object(h.a)(n, 2),
          a = r[0],
          c = r[1],
          o = Object(i.useCallback)((function() {
            return c(!0)
          }), [c]),
          s = Object(i.useCallback)((function() {
            return c(!1)
          }), [c]);
        return Object(it.jsx)("span", {
          style: {
            marginLeft: 4
          },
          children: Object(it.jsx)(ci, {
            text: t,
            show: a,
            children: Object(it.jsx)(li, {
              onClick: o,
              onMouseEnter: o,
              onMouseLeave: s,
              children: Object(it.jsx)(Fa.a, {
                size: 16
              })
            })
          })
        })
      }
      var di, bi, pi, ji = Object(d.default)(Va)(si || (si = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"])), (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        })),
        fi = function(e) {
          return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(e, "/logo.png")
        },
        hi = d.default.img(di || (di = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"])), (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        })),
        mi = Object(d.default)(Va)(bi || (bi = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"])), (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        }));

      function yi(e) {
        var t, n, r = e.currency,
          a = e.size,
          c = void 0 === a ? "24px" : a,
          o = e.style,
          s = Ya(r instanceof ur ? r.logoURI : void 0),
          l = Object(i.useMemo)((function() {
            return r === J.d ? [] : r instanceof J.j ? r instanceof ur ? [].concat(Object(G.a)(s), ["/images/coins/".concat(null !== (t = null === r || void 0 === r ? void 0 : r.address) && void 0 !== t ? t : "token", ".png"), fi(r.address)]) : ["/".concat(null !== (e = null === r || void 0 === r ? void 0 : r.address) && void 0 !== e ? e : "token", ".png"), fi(r.address)] : [];
            var e, t
          }), [r, s]);
        return r === J.d ? Object(it.jsx)(hi, {
          src: "/images/coins/bnb.png",
          size: c,
          style: o
        }) : (null === r || void 0 === r ? void 0 : r.symbol) ? Object(it.jsx)(ji, {
          size: c,
          srcs: l,
          alt: "".concat(null !== (t = null === r || void 0 === r ? void 0 : r.symbol) && void 0 !== t ? t : "token", " logo"),
          style: o
        }) : Object(it.jsx)(mi, {
          size: c,
          srcs: l,
          alt: "".concat(null !== (n = null === r || void 0 === r ? void 0 : r.symbol) && void 0 !== n ? n : "token", " logo"),
          style: o
        })
      }
      var Oi = d.default.div(pi || (pi = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"])), (function(e) {
        var t = e.theme;
        return e.disable ? "transparent" : t.colors.tertiary
      }), (function(e) {
        return !e.disable && "pointer"
      }), (function(e) {
        var t = e.theme;
        return !e.disable && t.colors.invertedContrast
      }), (function(e) {
        var t = e.theme;
        return e.disable && t.colors.tertiary
      }), (function(e) {
        return e.disable && "0.4"
      }));

      function vi(e) {
        var t = e.chainId,
          n = e.onSelect,
          r = e.selectedCurrency,
          a = tr();
        return Object(it.jsxs)(Me, {
          gap: "md",
          children: [Object(it.jsxs)(nt, {
            children: [Object(it.jsx)(l.y, {
              fontSize: "14px",
              children: "Common bases"
            }), Object(it.jsx)(ui, {
              text: a(1204, "These tokens are commonly paired with other tokens.")
            })]
          }), Object(it.jsxs)(nt, {
            gap: "4px",
            children: [Object(it.jsxs)(Oi, {
              onClick: function() {
                r && Object(J.o)(r, J.d) || n(J.d)
              },
              disable: r === J.d,
              children: [Object(it.jsx)(yi, {
                currency: J.d,
                style: {
                  marginRight: 8
                }
              }), Object(it.jsx)(l.y, {
                children: "BNB"
              })]
            }), (t ? se[t] : []).map((function(e) {
              var t = r instanceof J.j && r.address === e.address;
              return Object(it.jsxs)(Oi, {
                onClick: function() {
                  return !t && n(e)
                },
                disable: t,
                children: [Object(it.jsx)(yi, {
                  currency: e,
                  style: {
                    marginRight: 8
                  }
                }), Object(it.jsx)(l.y, {
                  children: e.symbol
                })]
              }, e.address)
            }))]
          })]
        })
      }
      var xi, gi, Ci, wi, ki, Ti, Ii, Ei, Ni, Ri = n(292),
        Si = Object(d.default)(rt)(xi || (xi = Object(u.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), (function(e) {
          return e.theme.colors.primary
        })),
        Ui = Object(d.default)(Me)(gi || (gi = Object(u.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]))),
        Ai = Object(d.default)(et)(Ci || (Ci = Object(u.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"])), (function(e) {
          return !e.disabled && "pointer"
        }), (function(e) {
          return e.disabled && "none"
        }), (function(e) {
          var t = e.theme;
          return !e.disabled && t.colors.invertedContrast
        }), (function(e) {
          var t = e.disabled,
            n = e.selected;
          return t || n ? .5 : 1
        })),
        Pi = d.default.input(wi || (wi = Object(u.a)(["\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ", ";\n  border-style: solid;\n  border: 1px solid ", ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ", ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"])), (function(e) {
          return e.theme.colors.text
        }), (function(e) {
          return e.theme.colors.tertiary
        }), (function(e) {
          return e.theme.colors.textDisabled
        }), (function(e) {
          return e.theme.colors.primary
        })),
        Bi = d.default.div(ki || (ki = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        })),
        Mi = d.default.div(Ti || (Ti = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), (function(e) {
          return e.theme.colors.tertiary
        }));

      function Li(e) {
        return e instanceof J.j ? e.address : e === J.d ? "ETHER" : ""
      }
      var Di = Object(d.default)(l.y)(Ii || (Ii = Object(u.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]))),
        _i = d.default.div(Ei || (Ei = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"])), (function(e) {
          return e.theme.colors.tertiary
        }), (function(e) {
          return e.theme.colors.textSubtle
        }));

      function Yi(e) {
        var t = e.balance;
        return Object(it.jsx)(Di, {
          title: t.toExact(),
          children: t.toSignificant(4)
        })
      }
      var zi = d.default.div(Ni || (Ni = Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n"])));

      function Fi(e) {
        var t = e.currency;
        if (!(t instanceof ur)) return Object(it.jsx)("span", {});
        var n = t.tags;
        if (!n || 0 === n.length) return Object(it.jsx)("span", {});
        var r = n[0];
        return Object(it.jsxs)(zi, {
          children: [Object(it.jsx)(oi, {
            text: r.description,
            children: Object(it.jsx)(_i, {
              children: r.name
            }, r.id)
          }), n.length > 1 ? Object(it.jsx)(oi, {
            text: n.slice(1).map((function(e) {
              var t = e.name,
                n = e.description;
              return "".concat(t, ": ").concat(n)
            })).join("; \n"),
            children: Object(it.jsx)(_i, {
              children: "..."
            })
          }) : null]
        })
      }

      function qi(e) {
        var t = e.currency,
          n = e.onSelect,
          r = e.isSelected,
          a = e.otherSelected,
          c = e.style,
          o = ge(),
          s = o.account,
          u = o.chainId,
          d = Li(t),
          b = function(e, t) {
            var n;
            return t === J.d || Boolean(t instanceof J.j && (null === (n = e[t.chainId]) || void 0 === n ? void 0 : n[t.address]))
          }(fr(), t),
          p = function(e) {
            return !!ea().find((function(t) {
              return Object(J.o)(e, t)
            }))
          }(t),
          j = ka(null !== s && void 0 !== s ? s : void 0, t),
          f = function() {
            var e = Object(v.c)();
            return Object(i.useCallback)((function(t, n) {
              e(qr({
                chainId: t,
                address: n
              }))
            }), [e])
          }(),
          h = function() {
            var e = Object(v.c)();
            return Object(i.useCallback)((function(t) {
              e(Fr({
                serializedToken: Gr(t)
              }))
            }), [e])
          }();
        return Object(it.jsxs)(Ai, {
          style: c,
          className: "token-item-".concat(d),
          onClick: function() {
            return r ? null : n()
          },
          disabled: r,
          selected: a,
          children: [Object(it.jsx)(yi, {
            currency: t,
            size: "24px"
          }), Object(it.jsxs)(Le, {
            children: [Object(it.jsx)(l.y, {
              title: t.name,
              children: t.symbol
            }), Object(it.jsxs)(Si, {
              children: [b || !p || t instanceof ur ? null : Object(it.jsxs)(l.y, {
                children: ["Added by user", Object(it.jsx)(Et, {
                  onClick: function(e) {
                    e.stopPropagation(), u && t instanceof J.j && f(u, t.address)
                  },
                  children: "(Remove)"
                })]
              }), b || p || t instanceof ur ? null : Object(it.jsxs)(l.y, {
                children: ["Found by address", Object(it.jsx)(Et, {
                  onClick: function(e) {
                    e.stopPropagation(), t instanceof J.j && h(t)
                  },
                  children: "(Add)"
                })]
              })]
            })]
          }), Object(it.jsx)(Fi, {
            currency: t
          }), Object(it.jsx)(rt, {
            style: {
              justifySelf: "flex-end"
            },
            children: j ? Object(it.jsx)(Yi, {
              balance: j
            }) : s ? Object(it.jsx)(cn, {}) : null
          })]
        })
      }

      function Vi(e) {
        var t = e.height,
          n = e.currencies,
          r = e.selectedCurrency,
          a = e.onCurrencySelect,
          c = e.otherCurrency,
          o = e.fixedListRef,
          s = e.showETH,
          l = Object(i.useMemo)((function() {
            return s ? [J.b.ETHER].concat(Object(G.a)(n)) : Object(G.a)(n)
          }), [n, s]),
          u = Object(i.useCallback)((function(e) {
            var t = e.data,
              n = e.index,
              i = e.style,
              o = t[n],
              s = Boolean(r && Object(J.o)(r, o)),
              l = Boolean(c && Object(J.o)(c, o));
            return Object(it.jsx)(qi, {
              style: i,
              currency: o,
              isSelected: s,
              onSelect: function() {
                return a(o)
              },
              otherSelected: l
            })
          }), [a, c, r]),
          d = Object(i.useCallback)((function(e, t) {
            return Li(t[e])
          }), []);
        return Object(it.jsx)(Ri.a, {
          height: t,
          ref: o,
          width: "100%",
          itemData: l,
          itemCount: l.length,
          itemSize: 56,
          itemKey: d,
          children: u
        })
      }

      function Wi(e, t) {
        if (0 === t.length) return e;
        var n = jt(t);
        if (n) return e.filter((function(e) {
          return e.address === n
        }));
        var r = t.toLowerCase().split(/\s+/).filter((function(e) {
          return e.length > 0
        }));
        if (0 === r.length) return e;
        var a = function(e) {
          var t = e.toLowerCase().split(/\s+/).filter((function(e) {
            return e.length > 0
          }));
          return r.every((function(e) {
            return 0 === e.length || t.some((function(t) {
              return t.startsWith(e) || t.endsWith(e)
            }))
          }))
        };
        return e.filter((function(e) {
          var t = e.symbol,
            n = e.name;
          return t && a(t) || n && a(n)
        }))
      }
      var Hi, Qi = Object(d.default)(rt)(Hi || (Hi = Object(u.a)(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])), (function(e) {
        return e.theme.colors.invertedContrast
      }), (function(e) {
        return e.theme.colors.text
      }));

      function Ki(e) {
        var t = e.toggleSortOrder,
          n = e.ascending;
        return Object(it.jsx)(Qi, {
          onClick: t,
          children: Object(it.jsx)(l.y, {
            fontSize: "14px",
            children: n ? "\u2191" : "\u2193"
          })
        })
      }

      function Gi(e) {
        var t = function() {
            var e = ge().account,
              t = fa(),
              n = ga(null !== e && void 0 !== e ? e : void 0, Object(i.useMemo)((function() {
                return Object.values(null !== t && void 0 !== t ? t : {})
              }), [t]));
            return null !== n && void 0 !== n ? n : {}
          }(),
          n = Object(i.useMemo)((function() {
            return function(e) {
              return function(t, n) {
                var r, a, i = (r = e[t.address], a = e[n.address], r && a ? r.greaterThan(a) ? -1 : r.equalTo(a) ? 0 : 1 : r && r.greaterThan("0") ? -1 : a && a.greaterThan("0") ? 1 : 0);
                return 0 !== i ? i : t.symbol && n.symbol ? t.symbol.toLowerCase() < n.symbol.toLowerCase() ? -1 : 1 : t.symbol || n.symbol ? -1 : 0
              }
            }(null !== t && void 0 !== t ? t : {})
          }), [t]);
        return Object(i.useMemo)((function() {
          return e ? function(e, t) {
            return -1 * n(e, t)
          } : n
        }), [e, n])
      }

      function Xi(e) {
        var t = e.selectedCurrency,
          n = e.onCurrencySelect,
          r = e.otherSelectedCurrency,
          a = e.showCommonBases,
          c = e.onDismiss,
          o = e.isOpen,
          s = (e.onChangeList, Object(nn.b)().t),
          u = ge().chainId,
          b = (Object(i.useContext)(d.ThemeContext), Object(i.useRef)()),
          p = Object(i.useState)(""),
          j = Object(h.a)(p, 2),
          f = j[0],
          m = j[1],
          y = Object(i.useState)(!1),
          O = Object(h.a)(y, 2),
          x = O[0],
          g = O[1],
          C = fa(),
          w = jt(f),
          k = ya(f),
          T = Object(i.useMemo)((function() {
            var e = f.toLowerCase().trim();
            return "" === e || "b" === e || "bn" === e || "bnb" === e
          }), [f]),
          I = Gi(x),
          E = Object(v.d)((function(e) {
            return e.user.audioPlay
          })),
          N = Object(i.useMemo)((function() {
            return w ? k ? [k] : [] : Wi(Object.values(C), f)
          }), [w, k, C, f]),
          R = Object(i.useMemo)((function() {
            if (k) return [k];
            var e = N.sort(I),
              t = f.toLowerCase().split(/\s+/).filter((function(e) {
                return e.length > 0
              }));
            return t.length > 1 ? e : [].concat(Object(G.a)(k ? [k] : []), Object(G.a)(e.filter((function(e) {
              var n;
              return (null === (n = e.symbol) || void 0 === n ? void 0 : n.toLowerCase()) === t[0]
            }))), Object(G.a)(e.filter((function(e) {
              var n;
              return (null === (n = e.symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== t[0]
            }))))
          }), [N, f, k, I]),
          S = Object(i.useCallback)((function(e) {
            if (n(e), c(), E) {
              var t = document.getElementById("bgMusic");
              t && t.play()
            }
          }), [c, n, E]);
        Object(i.useEffect)((function() {
          o && m("")
        }), [o]);
        var U = Object(i.useRef)(),
          A = Object(i.useCallback)((function(e) {
            var t, n = e.target.value,
              r = jt(n);
            m(r || n), null === (t = b.current) || void 0 === t || t.scrollTo(0)
          }), []),
          P = Object(i.useCallback)((function(e) {
            if ("Enter" === e.key)
              if ("bnb" === f.toLowerCase().trim()) S(J.d);
              else if (R.length > 0) {
              var t;
              (null === (t = R[0].symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== f.trim().toLowerCase() && 1 !== R.length || S(R[0])
            }
          }), [R, S, f]),
          B = (function() {
            var e, t, n = jr(),
              r = Object(v.d)((function(e) {
                return e.lists.byUrl
              })),
              a = n ? r[n] : void 0;
            e = null === a || void 0 === a ? void 0 : a.current, t = null === a || void 0 === a ? void 0 : a.pendingUpdate, null === a || void 0 === a || a.loadingRequestId
          }(), tr());
        return Object(it.jsxs)(Le, {
          style: {
            width: "100%",
            flex: "1 1"
          },
          children: [Object(it.jsxs)(Ui, {
            gap: "14px",
            children: [Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(l.y, {
                children: [B(82, "Select a token"), Object(it.jsx)(ui, {
                  text: B(128, "Find a token by searching for its name or symbol or by pasting its address below.")
                })]
              }), Object(it.jsx)(l.j, {
                onClick: c
              })]
            }), Object(it.jsx)(Pi, {
              type: "text",
              id: "token-search-input",
              placeholder: s("tokenSearchPlaceholder"),
              value: f,
              ref: U,
              onChange: A,
              onKeyDown: P
            }), a && Object(it.jsx)(vi, {
              chainId: u,
              onSelect: S,
              selectedCurrency: t
            }), Object(it.jsxs)(et, {
              children: [Object(it.jsx)(l.y, {
                fontSize: "14px",
                children: B(126, "Token name")
              }), Object(it.jsx)(Ki, {
                ascending: x,
                toggleSortOrder: function() {
                  return g((function(e) {
                    return !e
                  }))
                }
              })]
            })]
          }), Object(it.jsx)(Bi, {}), Object(it.jsx)("div", {
            style: {
              flex: "1"
            },
            children: Object(it.jsx)(Ea.a, {
              disableWidth: !0,
              children: function(e) {
                var n = e.height;
                return Object(it.jsx)(Vi, {
                  height: n,
                  showETH: T,
                  currencies: R,
                  onCurrencySelect: S,
                  otherCurrency: r,
                  selectedCurrency: t,
                  fixedListRef: b
                })
              }
            })
          }), null]
        })
      }
      var Ji = n(531),
        $i = n(285),
        Zi = n(286),
        ec = n.n(Zi),
        tc = "pancakeswap",
        nc = [tc],
        rc = n(154),
        ac = new ec.a({
          allErrors: !0
        }).compile($i);

      function ic(e, t) {
        return cc.apply(this, arguments)
      }

      function cc() {
        return (cc = Object(f.a)(j.a.mark((function e(t, n) {
          var r, a, i, c, o, s, l, u, d, b, p, f, h;
          return j.a.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t !== tc) {
                  e.next = 2;
                  break
                }
                return e.abrupt("return", rc);
              case 2:
                if (!(r = Ma(t))) {
                  e.next = 25;
                  break
                }
                return e.prev = 4, e.next = 7, n(r.ensName);
              case 7:
                c = e.sent, e.next = 14;
                break;
              case 10:
                throw e.prev = 10, e.t0 = e.catch(4), console.error("Failed to resolve ENS name: ".concat(r.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(r.ensName));
              case 14:
                e.prev = 14, o = Pa(c), e.next = 22;
                break;
              case 18:
                throw e.prev = 18, e.t1 = e.catch(14), console.error("Failed to translate contenthash to URI", c), new Error("Failed to translate contenthash to URI: ".concat(c));
              case 22:
                a = La("".concat(o).concat(null !== (i = r.ensPath) && void 0 !== i ? i : "")), e.next = 26;
                break;
              case 25:
                a = La(t);
              case 26:
                s = 0;
              case 27:
                if (!(s < a.length)) {
                  e.next = 57;
                  break
                }
                return l = a[s], u = s === a.length - 1, d = void 0, e.prev = 31, e.next = 34, fetch(l);
              case 34:
                d = e.sent, e.next = 43;
                break;
              case 37:
                if (e.prev = 37, e.t2 = e.catch(31), console.error("Failed to fetch list", t, e.t2), !u) {
                  e.next = 42;
                  break
                }
                throw new Error("Failed to download list ".concat(t));
              case 42:
                return e.abrupt("continue", 54);
              case 43:
                if (d.ok) {
                  e.next = 47;
                  break
                }
                if (!u) {
                  e.next = 46;
                  break
                }
                throw new Error("Failed to download list ".concat(t));
              case 46:
                return e.abrupt("continue", 54);
              case 47:
                return e.next = 49, d.json();
              case 49:
                if (b = e.sent, ac(b)) {
                  e.next = 53;
                  break
                }
                throw h = null !== (p = null === (f = ac.errors) || void 0 === f ? void 0 : f.reduce((function(e, t) {
                  var n, r = "".concat(t.dataPath, " ").concat(null !== (n = t.message) && void 0 !== n ? n : "");
                  return e.length > 0 ? "".concat(e, "; ").concat(r) : "".concat(r)
                }), "")) && void 0 !== p ? p : "unknown error", new Error("Token list failed validation: ".concat(h));
              case 53:
                return e.abrupt("return", b);
              case 54:
                s++, e.next = 27;
                break;
              case 57:
                throw new Error("Unrecognized list URL protocol.");
              case 58:
              case "end":
                return e.stop()
            }
          }), e, null, [
            [4, 10],
            [14, 18],
            [31, 37]
          ])
        })))).apply(this, arguments)
      }
      var oc = [{
          constant: !0,
          inputs: [{
            name: "node",
            type: "bytes32"
          }],
          name: "resolver",
          outputs: [{
            name: "resolverAddress",
            type: "address"
          }],
          payable: !1,
          stateMutability: "view",
          type: "function"
        }],
        sc = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        lc = [{
          constant: !0,
          inputs: [{
            internalType: "bytes32",
            name: "node",
            type: "bytes32"
          }],
          name: "contenthash",
          outputs: [{
            internalType: "bytes",
            name: "",
            type: "bytes"
          }],
          payable: !1,
          stateMutability: "view",
          type: "function"
        }];

      function uc(e, t) {
        return new lt.a(e, lc, t)
      }

      function dc(e, t) {
        return bc.apply(this, arguments)
      }

      function bc() {
        return (bc = Object(f.a)(j.a.mark((function e(t, n) {
          var r, a, i;
          return j.a.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = new lt.a(sc, oc, n), a = Object(Da.namehash)(t), e.next = 4, r.resolver(a);
              case 4:
                return i = e.sent, e.abrupt("return", uc(i, n).contenthash(a));
              case 6:
              case "end":
                return e.stop()
            }
          }), e)
        })))).apply(this, arguments)
      }

      function pc() {
        var e = ge(),
          t = e.chainId,
          n = e.library,
          r = Object(v.c)(),
          a = Object(i.useCallback)((function(e) {
            if (!n || t !== J.a.MAINNET) {
              if (z === J.a.MAINNET) {
                var r = function() {
                  var e;
                  return F = null !== (e = F) && void 0 !== e ? e : new w.a(q.provider)
                }();
                if (r) return dc(e, r)
              }
              throw new Error("Could not construct mainnet ENS resolver")
            }
            return dc(e, n)
          }), [t, n]);
        return Object(i.useCallback)(function() {
          var e = Object(f.a)(j.a.mark((function e(t) {
            var n;
            return j.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return n = Object(Te.f)(), r(ze.pending({
                    requestId: n,
                    url: t
                  })), e.abrupt("return", ic(t, a).then((function(e) {
                    return r(ze.fulfilled({
                      url: t,
                      tokenList: e,
                      requestId: n
                    })), e
                  })).catch((function(e) {
                    throw console.error("Failed to get list at url ".concat(t), e), r(ze.rejected({
                      url: t,
                      requestId: n,
                      errorMessage: e.message
                    })), e
                  })));
                case 3:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function(t) {
            return e.apply(this, arguments)
          }
        }(), [r, a])
      }

      function jc(e, t) {
        var n = Object(i.useRef)(t);
        Object(i.useEffect)((function() {
          n.current = t
        }), [t]), Object(i.useEffect)((function() {
          var t = function(t) {
            var r, a;
            null !== (r = null === (a = e.current) || void 0 === a ? void 0 : a.contains(t.target)) && void 0 !== r && r || n.current && n.current()
          };
          return document.addEventListener("mousedown", t),
            function() {
              document.removeEventListener("mousedown", t)
            }
        }), [e])
      }
      var fc, hc, mc, yc, Oc;
      var vc = Object(d.default)(Et)(fc || (fc = Object(u.a)(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"])), (function(e) {
          return e.disabled ? "0.4" : "1"
        })),
        xc = d.default.div(hc || (hc = Object(u.a)(["\n  z-index: 100;\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ", ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"])), (function(e) {
          return e.show ? "visible" : "hidden"
        }), (function(e) {
          return e.show ? 1 : 0
        }), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.theme.colors.tertiary
        }), (function(e) {
          return e.theme.colors.textSubtle
        })),
        gc = d.default.div(mc || (mc = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"]))),
        Cc = d.default.div(yc || (yc = Object(u.a)(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));

      function wc(e) {
        var t = e.listUrl,
          n = Object(i.useMemo)((function() {
            var e;
            return null === (e = Ma(t)) || void 0 === e ? void 0 : e.ensName
          }), [t]),
          r = Object(i.useMemo)((function() {
            if (!n) {
              var e = t.toLowerCase();
              if (e.startsWith("ipfs://") || e.startsWith("ipns://")) return t;
              try {
                return new URL(t).host
              } catch (r) {
                return
              }
            }
          }), [t, n]);
        return Object(it.jsx)(it.Fragment, {
          children: null !== n && void 0 !== n ? n : r
        })
      }

      function kc(e) {
        return "list-row-".concat(e.replace(/\./g, "-"))
      }
      var Tc = Object(i.memo)((function(e) {
          var t = e.listUrl,
            n = e.onBack,
            r = Object(v.d)((function(e) {
              return e.lists.byUrl
            })),
            a = jr(),
            c = Object(v.c)(),
            o = r[t],
            s = o.current,
            u = o.pendingUpdate,
            d = t === a,
            b = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = Object(i.useState)(e),
                n = Object(h.a)(t, 2),
                r = n[0],
                a = n[1],
                c = Object(i.useCallback)((function() {
                  return a((function(e) {
                    return !e
                  }))
                }), []);
              return [r, c]
            }(!1),
            p = Object(h.a)(b, 2),
            j = p[0],
            f = p[1],
            m = Object(i.useRef)(),
            y = Object(i.useState)(),
            O = Object(h.a)(y, 2),
            x = O[0],
            g = O[1],
            C = Object(i.useState)(),
            w = Object(h.a)(C, 2),
            k = w[0],
            T = w[1],
            I = Object(Xa.a)(x, k, {
              placement: "auto",
              strategy: "fixed",
              modifiers: [{
                name: "offset",
                options: {
                  offset: [8, 8]
                }
              }]
            }),
            E = I.styles,
            N = I.attributes;
          jc(m, j ? f : void 0);
          var R = Object(i.useCallback)((function() {
              d || (c(We(t)), n())
            }), [c, d, t, n]),
            S = Object(i.useCallback)((function() {
              u && c(Fe(t))
            }), [c, t, u]),
            U = Object(i.useCallback)((function() {
              "REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && c(Ve(t))
            }), [c, t]),
            A = tr();
          return s ? Object(it.jsxs)(at, {
            align: "center",
            padding: "16px",
            id: kc(t),
            children: [s.logoURI ? Object(it.jsx)(Ha, {
              style: {
                marginRight: "1rem"
              },
              logoURI: s.logoURI,
              alt: "".concat(s.name, " list logo")
            }) : Object(it.jsx)("div", {
              style: {
                width: "24px",
                height: "24px",
                marginRight: "1rem"
              }
            }), Object(it.jsxs)(Le, {
              style: {
                flex: "1"
              },
              children: [Object(it.jsx)(at, {
                children: Object(it.jsx)(l.y, {
                  bold: d,
                  fontSize: "16px",
                  style: {
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: s.name
                })
              }), Object(it.jsx)(at, {
                style: {
                  marginTop: "4px"
                },
                children: Object(it.jsx)(Cc, {
                  title: t,
                  children: Object(it.jsx)(wc, {
                    listUrl: t
                  })
                })
              })]
            }), Object(it.jsxs)(gc, {
              ref: m,
              children: [Object(it.jsx)("div", {
                style: {
                  display: "inline-block"
                },
                ref: g,
                children: Object(it.jsx)(l.c, {
                  style: {
                    width: "32px",
                    marginRight: "8px"
                  },
                  onClick: f,
                  variant: "secondary",
                  children: Object(it.jsx)(l.i, {})
                })
              }), j && Object(it.jsxs)(xc, Object(X.a)(Object(X.a)({
                show: !0,
                ref: T,
                style: E.popper
              }, N.popper), {}, {
                children: [Object(it.jsx)("div", {
                  children: s && He(s.version)
                }), Object(it.jsx)(Mi, {}), Object(it.jsx)(St, {
                  href: "https://tokenlists.org/token-list?url=".concat(t),
                  children: A(1206, "View list")
                }), Object(it.jsx)(vc, {
                  onClick: U,
                  disabled: 1 === Object.keys(r).length,
                  children: "Remove list"
                }), u && Object(it.jsx)(vc, {
                  onClick: S,
                  children: "Update list"
                })]
              }))]
            }), d ? Object(it.jsx)(l.c, {
              disabled: !0,
              style: {
                width: "5rem",
                minWidth: "5rem"
              },
              children: "Selected"
            }) : Object(it.jsx)(it.Fragment, {
              children: Object(it.jsx)(l.c, {
                className: "select-button",
                style: {
                  width: "5rem",
                  minWidth: "4.5rem"
                },
                onClick: R,
                children: "Select"
              })
            })]
          }, t) : null
        })),
        Ic = d.default.div(Oc || (Oc = Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n"])));

      function Ec(e) {
        var t, n = e.onDismiss,
          r = e.onBack,
          a = Object(i.useState)(""),
          c = Object(h.a)(a, 2),
          o = c[0],
          s = c[1],
          u = Object(v.c)(),
          d = Object(v.d)((function(e) {
            return e.lists.byUrl
          })),
          b = Boolean(null === (t = d[o]) || void 0 === t ? void 0 : t.loadingRequestId),
          p = Object(i.useState)(null),
          j = Object(h.a)(p, 2),
          f = j[0],
          m = j[1],
          y = Object(i.useCallback)((function(e) {
            s(e.target.value), m(null)
          }), []),
          O = pc(),
          x = Object(i.useCallback)((function() {
            b || (m(null), O(o).then((function() {
              s("")
            })).catch((function(e) {
              m(e.message), u(Ve(o))
            })))
          }), [b, u, O, o]),
          g = Object(i.useMemo)((function() {
            return La(o).length > 0 || Boolean(Ma(o))
          }), [o]),
          C = Object(i.useCallback)((function(e) {
            g && "Enter" === e.key && x()
          }), [x, g]),
          w = Object(i.useMemo)((function() {
            return Object.keys(d).filter((function(e) {
              return Boolean(d[e].current)
            })).sort((function(e, t) {
              var n = d[e].current,
                r = d[t].current;
              return n && r ? n.name.toLowerCase() < r.name.toLowerCase() ? -1 : n.name.toLowerCase() === r.name.toLowerCase() ? 0 : 1 : n ? -1 : r ? 1 : 0
            }))
          }), [d]),
          k = tr();
        return Object(it.jsxs)(Le, {
          style: {
            width: "100%",
            flex: "1 1"
          },
          children: [Object(it.jsx)(Ui, {
            children: Object(it.jsxs)(et, {
              children: [Object(it.jsx)("div", {
                children: Object(it.jsx)(Ji.a, {
                  style: {
                    cursor: "pointer"
                  },
                  onClick: r
                })
              }), Object(it.jsx)(l.y, {
                fontSize: "20px",
                children: k(1208, "Manage Lists")
              }), Object(it.jsx)(l.j, {
                onClick: n
              })]
            })
          }), Object(it.jsx)(Bi, {}), Object(it.jsxs)(Ui, {
            gap: "14px",
            children: [Object(it.jsxs)(l.y, {
              bold: !0,
              children: ["Add a list", " ", Object(it.jsx)(ui, {
                text: k(999, "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens.")
              })]
            }), Object(it.jsxs)(at, {
              children: [Object(it.jsx)(Pi, {
                type: "text",
                id: "list-add-input",
                placeholder: "https:// or ipfs:// or ENS name",
                value: o,
                onChange: y,
                onKeyDown: C,
                style: {
                  height: "2.75rem",
                  borderRadius: 12,
                  padding: "12px"
                }
              }), Object(it.jsx)(l.c, {
                onClick: x,
                style: {
                  maxWidth: "4em",
                  marginLeft: "1em"
                },
                disabled: !g,
                children: "Add"
              })]
            }), f ? Object(it.jsx)(l.y, {
              color: "failure",
              title: f,
              style: {
                textOverflow: "ellipsis",
                overflow: "hidden"
              },
              children: f
            }) : null]
          }), Object(it.jsx)(Bi, {}), Object(it.jsx)(Ic, {
            children: w.map((function(e) {
              return Object(it.jsx)(Tc, {
                listUrl: e,
                onBack: r
              }, e)
            }))
          }), Object(it.jsx)(Bi, {}), Object(it.jsx)("div", {
            style: {
              padding: "16px",
              textAlign: "center"
            },
            children: Object(it.jsx)(St, {
              href: "https://tokenlists.org",
              children: "Browse lists"
            })
          })]
        })
      }
      var Nc, Rc, Sc;

      function Uc(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          r = e.onCurrencySelect,
          a = e.selectedCurrency,
          c = e.otherSelectedCurrency,
          o = Object(i.useState)(!1),
          s = Object(h.a)(o, 2),
          l = s[0],
          u = s[1],
          d = Ta(t);
        Object(i.useEffect)((function() {
          t && !d && u(!1)
        }), [t, d]);
        var b = Object(i.useCallback)((function(e) {
            r(e), n()
          }), [n, r]),
          p = Object(i.useCallback)((function() {
            u(!0)
          }), []),
          j = Object(i.useCallback)((function() {
            u(!1)
          }), []),
          f = !jr();
        return Object(it.jsx)(Un, {
          isOpen: t,
          onDismiss: n,
          maxHeight: 90,
          minHeight: l ? 40 : f ? 0 : 80,
          children: l ? Object(it.jsx)(Ec, {
            onDismiss: n,
            onBack: j
          }) : Object(it.jsx)(Xi, {
            isOpen: t,
            onDismiss: n,
            onCurrencySelect: b,
            onChangeList: p,
            selectedCurrency: a,
            otherSelectedCurrency: c,
            showCommonBases: !1
          })
        })
      }
      var Ac, Pc = d.default.div(Nc || (Nc = Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"])), (function(e) {
          var t = e.sizeraw;
          return e.margin && "".concat((t / 3 + 8).toString(), "px")
        })),
        Bc = Object(d.default)(yi)(Rc || (Rc = Object(u.a)(["\n  z-index: 2;\n"]))),
        Mc = Object(d.default)(yi)(Sc || (Sc = Object(u.a)(["\n  position: absolute;\n  left: ", ";\n"])), (function(e) {
          var t = e.sizeraw;
          return "".concat((t / 2).toString(), "px")
        }));

      function Lc(e) {
        var t = e.currency0,
          n = e.currency1,
          r = e.size,
          a = void 0 === r ? 16 : r,
          i = e.margin,
          c = void 0 !== i && i;
        return Object(it.jsxs)(Pc, {
          sizeraw: a,
          margin: c,
          children: [t && Object(it.jsx)(Bc, {
            currency: t,
            size: "".concat(a.toString(), "px")
          }), n && Object(it.jsx)(Mc, {
            currency: n,
            size: "".concat(a.toString(), "px"),
            sizeraw: a
          })]
        })
      }
      var Dc, _c, Yc, zc, Fc, qc, Vc, Wc, Hc, Qc = d.default.input(Ac || (Ac = Object(u.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function(e) {
          var t = e.error,
            n = e.theme;
          return t ? n.colors.failure : n.colors.text
        }), (function(e) {
          var t = e.align;
          return t && t
        }), (function(e) {
          return e.theme.colors.textSubtle
        })),
        Kc = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
        Gc = c.a.memo((function(e) {
          var t = e.value,
            n = e.onUserInput,
            r = e.placeholder,
            a = Object(It.a)(e, ["value", "onUserInput", "placeholder"]);
          return Object(it.jsx)(Qc, Object(X.a)(Object(X.a)({}, a), {}, {
            value: t,
            onChange: function(e) {
              var t;
              ("" === (t = e.target.value.replace(/,/g, ".")) || Kc.test(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && n(t)
            },
            inputMode: "decimal",
            title: "Token Amount",
            autoComplete: "off",
            autoCorrect: "off",
            type: "text",
            pattern: "^[0-9]*[.,]?[0-9]*$",
            placeholder: r || "0.0",
            minLength: 1,
            maxLength: 79,
            spellCheck: "false"
          }))
        })),
        Xc = d.default.div(Dc || (Dc = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"])), (function(e) {
          return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"
        })),
        Jc = d.default.button(_c || (_c = Object(u.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ", ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"])), (function(e) {
          var t = e.selected,
            n = e.theme;
          return t ? n.colors.text : "#FFFFFF"
        }), (function(e) {
          var t = e.theme;
          return Object(In.a)(.05, t.colors.input)
        })),
        $c = d.default.div(Yc || (Yc = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), (function(e) {
          return e.theme.colors.text
        }), (function(e) {
          var t = e.theme;
          return Object(In.a)(.2, t.colors.textSubtle)
        })),
        Zc = d.default.span(zc || (zc = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),
        eo = d.default.div(Fc || (Fc = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"])), (function(e) {
          return e.hideInput ? "8px" : "20px"
        }), (function(e) {
          return e.theme.colors.background
        })),
        to = d.default.div(qc || (qc = Object(u.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"])), (function(e) {
          return e.theme.colors.input
        }), (function(e) {
          return e.theme.shadows.inset
        }));

      function no(e) {
        var t = e.value,
          n = e.onUserInput,
          r = e.onMax,
          a = e.showMaxButton,
          c = e.label,
          o = e.onCurrencySelect,
          s = e.currency,
          u = e.disableCurrencySelect,
          d = void 0 !== u && u,
          b = e.hideBalance,
          p = void 0 !== b && b,
          j = e.pair,
          f = void 0 === j ? null : j,
          m = e.hideInput,
          y = void 0 !== m && m,
          O = e.otherCurrency,
          v = e.id,
          x = e.showCommonBases,
          g = Object(i.useState)(!1),
          C = Object(h.a)(g, 2),
          w = C[0],
          k = C[1],
          T = ge().account,
          I = ka(null !== T && void 0 !== T ? T : void 0, null !== s && void 0 !== s ? s : void 0),
          E = tr(),
          N = c || E(132, "Input"),
          R = Object(i.useCallback)((function() {
            k(!1)
          }), [k]);
        return Object(it.jsxs)(eo, {
          id: v,
          children: [Object(it.jsxs)(to, {
            hideInput: y,
            children: [!y && Object(it.jsx)($c, {
              children: Object(it.jsxs)(et, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: N
                }), T && Object(it.jsx)(l.y, {
                  onClick: r,
                  fontSize: "14px",
                  style: {
                    display: "inline",
                    cursor: "pointer"
                  },
                  children: !p && s && I ? "Balance: ".concat(null === I || void 0 === I ? void 0 : I.toSignificant(6)) : " -"
                })]
              })
            }), Object(it.jsxs)(Xc, {
              style: y ? {
                padding: "0",
                borderRadius: "8px"
              } : {},
              selected: d,
              children: [!y && Object(it.jsxs)(it.Fragment, {
                children: [Object(it.jsx)(Gc, {
                  className: "token-amount-input",
                  value: t,
                  onUserInput: function(e) {
                    n(e)
                  }
                }), T && s && a && "To" !== c && Object(it.jsx)(l.c, {
                  onClick: r,
                  scale: "sm",
                  variant: "text",
                  children: "MAX"
                })]
              }), Object(it.jsx)(Jc, {
                selected: !!s,
                className: "open-currency-select-button",
                onClick: function() {
                  d || k(!0)
                },
                children: Object(it.jsxs)(Zc, {
                  children: [f ? Object(it.jsx)(Lc, {
                    currency0: f.token0,
                    currency1: f.token1,
                    size: 16,
                    margin: !0
                  }) : s ? Object(it.jsx)(yi, {
                    currency: s,
                    size: "24px",
                    style: {
                      marginRight: "8px"
                    }
                  }) : null, f ? Object(it.jsxs)(l.y, {
                    children: [null === f || void 0 === f ? void 0 : f.token0.symbol, ":", null === f || void 0 === f ? void 0 : f.token1.symbol]
                  }) : Object(it.jsx)(l.y, {
                    children: (s && s.symbol && s.symbol.length > 20 ? "".concat(s.symbol.slice(0, 4), "...").concat(s.symbol.slice(s.symbol.length - 5, s.symbol.length)) : null === s || void 0 === s ? void 0 : s.symbol) || E(1196, "Select a currency")
                  }), !d && Object(it.jsx)(l.i, {})]
                })
              })]
            })]
          }), !d && o && Object(it.jsx)(Uc, {
            isOpen: w,
            onDismiss: R,
            onCurrencySelect: o,
            selectedCurrency: s,
            otherSelectedCurrency: O,
            showCommonBases: x
          })]
        })
      }
      var ro = d.default.div(Vc || (Vc = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"]))),
        ao = d.default.div(Wc || (Wc = Object(u.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]))),
        io = Object(d.default)(Ji.a)(Hc || (Hc = Object(u.a)(["\n  color: ", ";\n"])), (function(e) {
          return e.theme.colors.text
        }));

      function co() {
        var e = tr();
        return Object(it.jsx)(ro, {
          children: Object(it.jsxs)(et, {
            style: {
              padding: "1rem"
            },
            children: [Object(it.jsx)(m.b, {
              to: "/pool",
              children: Object(it.jsx)(io, {})
            }), Object(it.jsx)(ao, {
              children: "Import Pool"
            }), Object(it.jsx)(ui, {
              text: e(256, "Use this tool to find pairs that do not automatically appear in the interface.")
            })]
          })
        })
      }

      function oo(e) {
        var t = e.adding,
          n = tr();
        return Object(it.jsx)(ro, {
          children: Object(it.jsxs)(et, {
            style: {
              padding: "1rem"
            },
            children: [Object(it.jsx)(m.b, {
              to: "/pool",
              children: Object(it.jsx)(io, {})
            }), Object(it.jsxs)(ao, {
              children: [t ? n(258, "Add") : n(260, "Remove"), " Liquidity"]
            }), Object(it.jsx)(ui, {
              text: t ? n(264, "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.") : n(266, "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.")
            })]
          })
        })
      }
      var so = n(532),
        lo = n(533);

      function uo(e) {
        var t, n, r = null === (t = Pr(da(null === e || void 0 === e ? void 0 : e.address, !1), "totalSupply")) || void 0 === t || null === (n = t.result) || void 0 === n ? void 0 : n[0];
        return e && r ? new J.k(e, r.toString()) : void 0
      }

      function bo(e) {
        if (e === J.d) return "BNB";
        if (e instanceof J.j) return e.address;
        throw new Error("invalid currency")
      }
      var po, jo, fo, ho, mo, yo, Oo, vo, xo, go, Co;

      function wo(e, t) {
        return t && e === J.d ? J.n[t] : e instanceof J.j ? e : void 0
      }

      function ko(e, t) {
        var n = e && t ? wo(e.currency, t) : void 0;
        return n && e ? new J.k(n, e.raw) : void 0
      }

      function To(e) {
        return e.equals(J.n[e.chainId]) ? J.d : e
      }
      var Io = d.default.div(po || (po = Object(u.a)(["\n  position: relative;\n"]))),
        Eo = d.default.div(jo || (jo = Object(u.a)(["\n  padding: 2px;\n\n  ", "\n"])), (function(e) {
          return e.clickable ? Object(d.css)(fo || (fo = Object(u.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null
        })),
        No = d.default.div(ho || (ho = Object(u.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"])), (function(e) {
          return e.theme.colors.tertiary
        })),
        Ro = d.default.div(mo || (mo = Object(u.a)(["\n  margin-top: 1rem;\n"]))),
        So = Object(d.default)(l.y)(yo || (yo = Object(u.a)(["\n  color: ", ";\n"])), (function(e) {
          var t = e.theme,
            n = e.severity;
          return 3 === n || 4 === n ? t.colors.failure : 2 === n ? t.colors.binance : 1 === n ? t.colors.text : t.colors.success
        })),
        Uo = d.default.button(Oo || (Oo = Object(u.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.theme.colors.textSubtle
        }), (function(e) {
          return e.theme.colors.tertiary
        }), (function(e) {
          return e.theme.colors.tertiary
        })),
        Ao = d.default.span(vo || (vo = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]))),
        Po = d.default.div(xo || (xo = Object(u.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])), (function(e) {
          var t = e.theme;
          return Object(In.b)(.9, t.colors.failure)
        }), (function(e) {
          return e.theme.colors.failure
        })),
        Bo = d.default.div(go || (go = Object(u.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])), (function(e) {
          var t = e.theme;
          return Object(In.b)(.9, t.colors.failure)
        }));

      function Mo(e) {
        var t = e.error;
        return Object(it.jsxs)(Po, {
          children: [Object(it.jsx)(Bo, {
            children: Object(it.jsx)(Qn.a, {
              size: 24
            })
          }), Object(it.jsx)("p", {
            children: t
          })]
        })
      }
      var Lo, Do, _o = Object(d.default)(Me)(Co || (Co = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])), (function(e) {
          var t = e.theme;
          return Object(In.b)(.9, t.colors.primary)
        }), (function(e) {
          return e.theme.colors.primary
        })),
        Yo = Object(d.default)(et)(Lo || (Lo = Object(u.a)(["\n  height: 24px;\n"]))),
        zo = Object(d.default)(Cn)(Do || (Do = Object(u.a)(["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          var t = e.theme;
          return Object(In.a)(.06, t.colors.invertedContrast)
        }));

      function Fo(e) {
        var t = e.pair,
          n = e.showUnwrapped,
          r = void 0 !== n && n,
          a = ge().account,
          c = r ? t.token0 : To(t.token0),
          o = r ? t.token1 : To(t.token1),
          s = Object(i.useState)(!1),
          u = Object(h.a)(s, 2),
          d = u[0],
          b = u[1],
          p = Ca(null !== a && void 0 !== a ? a : void 0, t.liquidityToken),
          j = uo(t.liquidityToken),
          f = t && j && p && J.e.greaterThanOrEqual(j.raw, p.raw) ? [t.getLiquidityValue(t.token0, j, p, !1), t.getLiquidityValue(t.token1, j, p, !1)] : [void 0, void 0],
          m = Object(h.a)(f, 2),
          y = m[0],
          O = m[1];
        return Object(it.jsx)(it.Fragment, {
          children: p && Object(it.jsx)(l.f, {
            children: Object(it.jsx)(l.g, {
              children: Object(it.jsxs)(Me, {
                gap: "12px",
                children: [Object(it.jsx)(Yo, {
                  children: Object(it.jsx)(rt, {
                    children: Object(it.jsx)(l.y, {
                      style: {
                        textTransform: "uppercase",
                        fontWeight: 600
                      },
                      fontSize: "14px",
                      color: "textSubtle",
                      children: "LP Tokens in your Wallet"
                    })
                  })
                }), Object(it.jsxs)(Yo, {
                  onClick: function() {
                    return b(!d)
                  },
                  children: [Object(it.jsxs)(rt, {
                    children: [Object(it.jsx)(Lc, {
                      currency0: c,
                      currency1: o,
                      margin: !0,
                      size: 20
                    }), Object(it.jsxs)(l.y, {
                      fontSize: "14px",
                      children: [c.symbol, "/", o.symbol]
                    })]
                  }), Object(it.jsx)(rt, {
                    children: Object(it.jsx)(l.y, {
                      fontSize: "14px",
                      children: p ? p.toSignificant(4) : "-"
                    })
                  })]
                }), Object(it.jsxs)(Me, {
                  gap: "4px",
                  children: [Object(it.jsxs)(Yo, {
                    children: [Object(it.jsxs)(l.y, {
                      fontSize: "14px",
                      children: [c.symbol, ":"]
                    }), y ? Object(it.jsx)(rt, {
                      children: Object(it.jsx)(l.y, {
                        ml: "6px",
                        fontSize: "14px",
                        children: null === y || void 0 === y ? void 0 : y.toSignificant(6)
                      })
                    }) : "-"]
                  }), Object(it.jsxs)(Yo, {
                    children: [Object(it.jsxs)(l.y, {
                      fontSize: "14px",
                      children: [o.symbol, ":"]
                    }), O ? Object(it.jsx)(rt, {
                      children: Object(it.jsx)(l.y, {
                        ml: "6px",
                        fontSize: "14px",
                        children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
                      })
                    }) : "-"]
                  })]
                })]
              })
            })
          })
        })
      }

      function qo(e) {
        var t = e.pair,
          n = ge().account,
          r = To(t.token0),
          a = To(t.token1),
          c = Object(i.useState)(!1),
          o = Object(h.a)(c, 2),
          s = o[0],
          u = o[1],
          d = Ca(null !== n && void 0 !== n ? n : void 0, t.liquidityToken),
          b = uo(t.liquidityToken),
          p = d && b && J.e.greaterThanOrEqual(b.raw, d.raw) ? new J.g(d.raw, b.raw) : void 0,
          j = t && b && d && J.e.greaterThanOrEqual(b.raw, d.raw) ? [t.getLiquidityValue(t.token0, b, d, !1), t.getLiquidityValue(t.token1, b, d, !1)] : [void 0, void 0],
          f = Object(h.a)(j, 2),
          y = f[0],
          O = f[1];
        return Object(it.jsx)(zo, {
          children: Object(it.jsxs)(Me, {
            gap: "12px",
            children: [Object(it.jsxs)(Yo, {
              onClick: function() {
                return u(!s)
              },
              style: {
                cursor: "pointer"
              },
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(Lc, {
                  currency0: r,
                  currency1: a,
                  margin: !0,
                  size: 20
                }), Object(it.jsx)(l.y, {
                  children: r && a ? "".concat(r.symbol, "/").concat(a.symbol) : Object(it.jsx)(Ao, {
                    children: "Loading"
                  })
                })]
              }), Object(it.jsx)(rt, {
                children: s ? Object(it.jsx)(so.a, {
                  size: "20",
                  style: {
                    marginLeft: "10px"
                  }
                }) : Object(it.jsx)(lo.a, {
                  size: "20",
                  style: {
                    marginLeft: "10px"
                  }
                })
              })]
            }), s && Object(it.jsxs)(Me, {
              gap: "8px",
              children: [Object(it.jsxs)(Yo, {
                children: [Object(it.jsx)(rt, {
                  children: Object(it.jsxs)(l.y, {
                    children: ["Pooled ", r.symbol, ":"]
                  })
                }), y ? Object(it.jsxs)(rt, {
                  children: [Object(it.jsx)(l.y, {
                    ml: "6px",
                    children: null === y || void 0 === y ? void 0 : y.toSignificant(6)
                  }), Object(it.jsx)(yi, {
                    size: "20px",
                    style: {
                      marginLeft: "8px"
                    },
                    currency: r
                  })]
                }) : "-"]
              }), Object(it.jsxs)(Yo, {
                children: [Object(it.jsx)(rt, {
                  children: Object(it.jsxs)(l.y, {
                    children: ["Pooled ", a.symbol, ":"]
                  })
                }), O ? Object(it.jsxs)(rt, {
                  children: [Object(it.jsx)(l.y, {
                    ml: "6px",
                    children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
                  }), Object(it.jsx)(yi, {
                    size: "20px",
                    style: {
                      marginLeft: "8px"
                    },
                    currency: a
                  })]
                }) : "-"]
              }), Object(it.jsxs)(Yo, {
                children: [Object(it.jsx)(l.y, {
                  children: "Your pool tokens:"
                }), Object(it.jsx)(l.y, {
                  children: d ? d.toSignificant(4) : "-"
                })]
              }), Object(it.jsxs)(Yo, {
                children: [Object(it.jsx)(l.y, {
                  children: "Your pool share:"
                }), Object(it.jsx)(l.y, {
                  children: p ? "".concat(p.toFixed(2), "%") : "-"
                })]
              }), Object(it.jsxs)(et, {
                marginTop: "10px",
                children: [Object(it.jsx)(l.c, {
                  as: m.b,
                  to: "/add/".concat(bo(r), "/").concat(bo(a)),
                  style: {
                    width: "48%"
                  },
                  children: "Add"
                }), Object(it.jsx)(l.c, {
                  as: m.b,
                  style: {
                    width: "48%"
                  },
                  to: "/remove/".concat(bo(r), "/").concat(bo(a)),
                  children: "Remove"
                })]
              })]
            })]
          })
        })
      }
      var Vo, Wo = new ir.b(aa.abi);

      function Ho(e) {
        var t = ge().chainId,
          n = Object(i.useMemo)((function() {
            return e.map((function(e) {
              var n = Object(h.a)(e, 2),
                r = n[0],
                a = n[1];
              return [wo(r, t), wo(a, t)]
            }))
          }), [t, e]),
          r = Ar(Object(i.useMemo)((function() {
            return n.map((function(e) {
              var t = Object(h.a)(e, 2),
                n = t[0],
                r = t[1];
              return n && r && !n.equals(r) ? J.f.getAddress(n, r) : void 0
            }))
          }), [n]), Wo, "getReserves");
        return Object(i.useMemo)((function() {
          return r.map((function(e, t) {
            var r = e.result,
              a = e.loading,
              i = n[t][0],
              c = n[t][1];
            if (a) return [Vo.LOADING, null];
            if (!i || !c || i.equals(c)) return [Vo.INVALID, null];
            if (!r) return [Vo.NOT_EXISTS, null];
            var o = r.reserve0,
              s = r.reserve1,
              l = i.sortsBefore(c) ? [i, c] : [c, i],
              u = Object(h.a)(l, 2),
              d = u[0],
              b = u[1];
            return [Vo.EXISTS, new J.f(new J.k(d, o.toString()), new J.k(b, s.toString()))]
          }))
        }), [r, n])
      }

      function Qo(e, t) {
        return Ho([
          [e, t]
        ])[0]
      }! function(e) {
        e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
      }(Vo || (Vo = {}));
      var Ko = n(524);

      function Go(e, t, n) {
        var r = Pr(da(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(i.useMemo)((function() {
          return [t, n]
        }), [t, n])).result;
        return Object(i.useMemo)((function() {
          return e && r ? new J.k(e, r.toString()) : void 0
        }), [e, r])
      }
      var Xo;
      ! function(e) {
        e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
      }(Xo || (Xo = {}));
      var Jo = Object(Te.b)("swap/selectCurrency"),
        $o = Object(Te.b)("swap/switchCurrencies"),
        Zo = Object(Te.b)("swap/typeInput"),
        es = Object(Te.b)("swap/replaceSwapState"),
        ts = Object(Te.b)("swap/setRecipient"),
        ns = Object(Te.b)("transactions/addTransaction"),
        rs = Object(Te.b)("transactions/clearAllTransactions"),
        as = Object(Te.b)("transactions/finalizeTransaction"),
        is = Object(Te.b)("transactions/checkedTransaction");

      function cs() {
        var e = ge(),
          t = e.chainId,
          n = e.account,
          r = Object(v.c)();
        return Object(i.useCallback)((function(e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = a.summary,
            c = a.approval;
          if (n && t) {
            var o = e.hash;
            if (!o) throw Error("No transaction hash found.");
            r(ns({
              hash: o,
              from: n,
              chainId: t,
              approval: c,
              summary: i
            }))
          }
        }), [r, t, n])
      }

      function os() {
        var e, t = ge().chainId,
          n = Object(v.d)((function(e) {
            return e.transactions
          }));
        return t && null !== (e = n[t]) && void 0 !== e ? e : {}
      }

      function ss(e) {
        return (new Date).getTime() - e.addedTime < 864e5
      }
      var ls, us, ds = new J.g(J.e.BigInt(20), J.e.BigInt(1e4)),
        bs = new J.g(J.e.BigInt(1e4), J.e.BigInt(1e4)),
        ps = bs.subtract(ds);

      function js(e) {
        var t = e ? bs.subtract(e.route.pairs.reduce((function(e) {
            return e.multiply(ps)
          }), bs)) : void 0,
          n = e && t ? e.priceImpact.subtract(t) : void 0;
        return {
          priceImpactWithoutFee: n ? new J.g(null === n || void 0 === n ? void 0 : n.numerator, null === n || void 0 === n ? void 0 : n.denominator) : void 0,
          realizedLPFee: t && e && (e.inputAmount instanceof J.k ? new J.k(e.inputAmount.token, t.multiply(e.inputAmount.raw).quotient) : J.c.ether(t.multiply(e.inputAmount.raw).quotient))
        }
      }

      function fs(e, t) {
        var n, r, a = (r = t, new J.g(J.e.BigInt(Math.floor(r)), J.e.BigInt(1e4)));
        return n = {}, Object(C.a)(n, Xo.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(a)), Object(C.a)(n, Xo.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(a)), n
      }

      function hs(e) {
        return (null === e || void 0 === e ? void 0 : e.lessThan(ve)) ? (null === e || void 0 === e ? void 0 : e.lessThan(ye)) ? (null === e || void 0 === e ? void 0 : e.lessThan(me)) ? (null === e || void 0 === e ? void 0 : e.lessThan(he)) ? 0 : 1 : 2 : 3 : 4
      }

      function ms(e, t) {
        return e ? t ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : ""
      }

      function ys(e, t) {
        var n = ge().account,
          r = e instanceof J.k ? e.token : void 0,
          a = Go(r, null !== n && void 0 !== n ? n : void 0, t),
          c = function(e, t) {
            var n = os();
            return Object(i.useMemo)((function() {
              return "string" === typeof e && "string" === typeof t && Object.keys(n).some((function(r) {
                var a = n[r];
                if (!a) return !1;
                if (a.receipt) return !1;
                var i = a.approval;
                return !!i && i.spender === t && i.tokenAddress === e && ss(a)
              }))
            }), [n, t, e])
          }(null === r || void 0 === r ? void 0 : r.address, t),
          o = Object(i.useMemo)((function() {
            return e && t ? e.currency === J.d ? ls.APPROVED : a ? a.lessThan(e) ? c ? ls.PENDING : ls.NOT_APPROVED : ls.APPROVED : ls.UNKNOWN : ls.UNKNOWN
          }), [e, a, c, t]),
          s = da(null === r || void 0 === r ? void 0 : r.address),
          l = cs(),
          u = Object(i.useCallback)(Object(f.a)(j.a.mark((function n() {
            var a, i;
            return j.a.wrap((function(n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  if (o === ls.NOT_APPROVED) {
                    n.next = 3;
                    break
                  }
                  return console.error("approve was called unnecessarily"), n.abrupt("return");
                case 3:
                  if (r) {
                    n.next = 6;
                    break
                  }
                  return console.error("no token"), n.abrupt("return");
                case 6:
                  if (s) {
                    n.next = 9;
                    break
                  }
                  return console.error("tokenContract is null"), n.abrupt("return");
                case 9:
                  if (e) {
                    n.next = 12;
                    break
                  }
                  return console.error("missing amount to approve"), n.abrupt("return");
                case 12:
                  if (t) {
                    n.next = 15;
                    break
                  }
                  return console.error("no spender"), n.abrupt("return");
                case 15:
                  return a = !1, n.next = 18, s.estimateGas.approve(t, Ko.a).catch((function() {
                    return a = !0, s.estimateGas.approve(t, e.raw.toString())
                  }));
                case 18:
                  return i = n.sent, n.abrupt("return", s.approve(t, a ? e.raw.toString() : Ko.a, {
                    gasLimit: yt(i)
                  }).then((function(n) {
                    l(n, {
                      summary: "Approve ".concat(e.currency.symbol),
                      approval: {
                        tokenAddress: r.address,
                        spender: t
                      }
                    })
                  })).catch((function(e) {
                    throw console.error("Failed to approve token", e), e
                  })));
                case 20:
                case "end":
                  return n.stop()
              }
            }), n)
          }))), [o, r, s, e, t, l]);
        return [o, u]
      }! function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED"
      }(ls || (ls = {})),
      function(e) {
        e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
      }(us || (us = {}));
      var Os = Object(Te.b)("mint/typeInputMint"),
        vs = Object(Te.b)("mint/resetMintState"),
        xs = n(184);

      function gs(e, t) {
        var n = Object(i.useState)(e),
          r = Object(h.a)(n, 2),
          a = r[0],
          c = r[1];
        return Object(i.useEffect)((function() {
          var n = setTimeout((function() {
            c(e)
          }), t);
          return function() {
            clearTimeout(n)
          }
        }), [e, t]), a
      }

      function Cs(e) {
        var t = jt(e),
          n = function(e) {
            var t, n, r, a = gs(e, 200),
              c = Object(i.useMemo)((function() {
                if (!a || !jt(a)) return [void 0];
                try {
                  return a ? [Object(Da.namehash)("".concat(a.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                } catch (e) {
                  return [void 0]
                }
              }), [a]),
              o = Pr(ba(!1), "resolver", c),
              s = null === (t = o.result) || void 0 === t ? void 0 : t[0],
              l = Pr(pa(s && !_a(s) ? s : void 0, !1), "name", c),
              u = a !== e;
            return {
              ENSName: u ? null : null !== (n = null === (r = l.result) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : null,
              loading: u || o.loading || l.loading
            }
          }(t || void 0),
          r = function(e) {
            var t, n, r, a = gs(e, 200),
              c = Object(i.useMemo)((function() {
                if (!a) return [void 0];
                try {
                  return a ? [Object(Da.namehash)(a)] : [void 0]
                } catch (e) {
                  return [void 0]
                }
              }), [a]),
              o = Pr(ba(!1), "resolver", c),
              s = null === (t = o.result) || void 0 === t ? void 0 : t[0],
              l = Pr(pa(s && !_a(s) ? s : void 0, !1), "addr", c),
              u = a !== e;
            return {
              address: u ? null : null !== (n = null === (r = l.result) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : null,
              loading: u || o.loading || l.loading
            }
          }(e);
        return {
          loading: n.loading || r.loading,
          address: t || r.address,
          name: n.ENSName ? n.ENSName : !t && r.address && e || null
        }
      }

      function ws(e, t) {
        var n = ge().chainId,
          r = Object(i.useMemo)((function() {
            return n ? ce[n] : []
          }), [n]),
          a = Object(i.useMemo)((function() {
            return Mr()(r, (function(e) {
              return r.map((function(t) {
                return [e, t]
              }))
            })).filter((function(e) {
              var t = Object(h.a)(e, 2),
                n = t[0],
                r = t[1];
              return n.address !== r.address
            }))
          }), [r]),
          c = n ? [wo(e, n), wo(t, n)] : [void 0, void 0],
          o = Object(h.a)(c, 2),
          s = o[0],
          l = o[1],
          u = Ho(Object(i.useMemo)((function() {
            return s && l ? [
              [s, l]
            ].concat(Object(G.a)(r.map((function(e) {
              return [s, e]
            }))), Object(G.a)(r.map((function(e) {
              return [l, e]
            }))), Object(G.a)(a)).filter((function(e) {
              return Boolean(e[0] && e[1])
            })).filter((function(e) {
              var t = Object(h.a)(e, 2),
                n = t[0],
                r = t[1];
              return n.address !== r.address
            })).filter((function(e) {
              var t = Object(h.a)(e, 2),
                r = t[0],
                a = t[1];
              if (!n) return !0;
              var i = oe[n];
              if (!i) return !0;
              var c = i[r.address],
                o = i[a.address];
              return !c && !o || !(c && !c.find((function(e) {
                return a.equals(e)
              }))) && !(o && !o.find((function(e) {
                return r.equals(e)
              })))
            })) : []
          }), [s, l, r, a, n]));
        return Object(i.useMemo)((function() {
          return Object.values(u.filter((function(e) {
            return Boolean(e[0] === Vo.EXISTS && e[1])
          })).reduce((function(e, t) {
            var n, r = Object(h.a)(t, 2)[1];
            return e[r.liquidityToken.address] = null !== (n = e[r.liquidityToken.address]) && void 0 !== n ? n : r, e
          }), {}))
        }), [u])
      }
      var ks = n(287);

      function Ts() {
        return Object(v.d)((function(e) {
          return e.swap
        }))
      }

      function Is(e, t) {
        if (e && t) try {
          var n = Object(xs.parseUnits)(e, t.decimals).toString();
          if ("0" !== n) return t instanceof J.j ? new J.k(t, J.e.BigInt(n)) : J.c.ether(J.e.BigInt(n))
        } catch (r) {
          console.info('Failed to parse input amount: "'.concat(e, '"'), r)
        }
      }
      var Es = ["0xb7926c0430afb07aa7defde6da862ae0bde767bc", "0x2638737D14e2e02C56b7769e2c5c8F52d352017a", "0x2638737D14e2e02C56b7769e2c5c8F52d352017a"];

      function Ns(e, t) {
        return e.route.path.some((function(e) {
          return e.address === t
        })) || e.route.pairs.some((function(e) {
          return e.liquidityToken.address === t
        }))
      }

      function Rs() {
        var e, t, n, r, a, c, o, s = ge().account,
          l = Ts(),
          u = l.independentField,
          d = l.typedValue,
          b = l[Xo.INPUT].currencyId,
          p = l[Xo.OUTPUT].currencyId,
          j = l.recipient,
          f = Oa(b),
          m = Oa(p),
          y = Cs(null !== j && void 0 !== j ? j : void 0),
          O = null !== (e = null === j ? s : y.address) && void 0 !== e ? e : null,
          v = wa(null !== s && void 0 !== s ? s : void 0, [null !== f && void 0 !== f ? f : void 0, null !== m && void 0 !== m ? m : void 0]),
          x = u === Xo.INPUT,
          g = Is(d, null !== (t = x ? f : m) && void 0 !== t ? t : void 0),
          w = function(e, t) {
            var n = ws(null === e || void 0 === e ? void 0 : e.currency, t);
            return Object(i.useMemo)((function() {
              var r;
              return e && t && n.length > 0 && null !== (r = J.l.bestTradeExactIn(n, e, t, {
                maxHops: 3,
                maxNumResults: 1
              })[0]) && void 0 !== r ? r : null
            }), [n, e, t])
          }(x ? g : void 0, null !== m && void 0 !== m ? m : void 0),
          k = function(e, t) {
            var n = ws(e, null === t || void 0 === t ? void 0 : t.currency);
            return Object(i.useMemo)((function() {
              var r;
              return e && t && n.length > 0 && null !== (r = J.l.bestTradeExactOut(n, e, t, {
                maxHops: 3,
                maxNumResults: 1
              })[0]) && void 0 !== r ? r : null
            }), [n, e, t])
          }(null !== f && void 0 !== f ? f : void 0, x ? void 0 : g),
          T = x ? w : k,
          I = (n = {}, Object(C.a)(n, Xo.INPUT, v[0]), Object(C.a)(n, Xo.OUTPUT, v[1]), n),
          E = (r = {}, Object(C.a)(r, Xo.INPUT, null !== f && void 0 !== f ? f : void 0), Object(C.a)(r, Xo.OUTPUT, null !== m && void 0 !== m ? m : void 0), r);
        (s || (a = "Connect Wallet"), g) || (a = null !== (c = a) && void 0 !== c ? c : "Enter an amount");
        E[Xo.INPUT] && E[Xo.OUTPUT] || (a = null !== (o = a) && void 0 !== o ? o : "Select a token");
        var N, R = jt(O);
        if (O && R) {
          if (-1 !== Es.indexOf(R) || w && Ns(w, R) || k && Ns(k, R)) {
            var S;
            a = null !== (S = a) && void 0 !== S ? S : "Invalid recipient"
          }
        } else a = null !== (N = a) && void 0 !== N ? N : "Enter a recipient";
        var U = $r(),
          A = Object(h.a)(U, 1)[0],
          P = T && A && fs(T, A),
          B = [I[Xo.INPUT], P ? P[Xo.INPUT] : null],
          M = B[0],
          L = B[1];
        return M && L && M.lessThan(L) && (a = "Insufficient ".concat(L.currency.symbol, " balance")), {
          currencies: E,
          currencyBalances: I,
          parsedAmount: g,
          v2Trade: null !== T && void 0 !== T ? T : void 0,
          inputError: a
        }
      }

      function Ss(e) {
        if ("string" === typeof e) {
          var t = jt(e);
          if (t) return t;
          if ("BNB" === e.toUpperCase()) return "BNB";
          if (!1 === t) return "BNB"
        }
        return null !== "BNB" ? "BNB" : ""
      }
      var Us = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
        As = /^0x[a-fA-F0-9]{40}$/;

      function Ps(e) {
        var t, n = Ss(e.inputCurrency),
          r = Ss(e.outputCurrency);
        n === r && ("string" === typeof e.outputCurrency ? n = "" : r = "");
        var a, i = function(e) {
          return "string" !== typeof e ? null : jt(e) || (Us.test(e) || As.test(e) ? e : null)
        }(e.recipient);
        return t = {}, Object(C.a)(t, Xo.INPUT, {
          currencyId: n
        }), Object(C.a)(t, Xo.OUTPUT, {
          currencyId: r
        }), Object(C.a)(t, "typedValue", "string" !== typeof(a = e.exactAmount) || isNaN(parseFloat(a)) ? "" : a), Object(C.a)(t, "independentField", function(e) {
          return "string" === typeof e && "output" === e.toLowerCase() ? Xo.OUTPUT : Xo.INPUT
        }(e.exactField)), Object(C.a)(t, "recipient", i), t
      }

      function Bs() {
        var e = ge().chainId,
          t = Object(v.c)(),
          n = function() {
            var e = Object(y.g)().search;
            return Object(i.useMemo)((function() {
              return e && e.length > 1 ? Object(ks.parse)(e, {
                parseArrays: !1,
                ignoreQueryPrefix: !0
              }) : {}
            }), [e])
          }(),
          r = Object(i.useState)(),
          a = Object(h.a)(r, 2),
          c = a[0],
          o = a[1];
        return Object(i.useEffect)((function() {
          if (e) {
            var r = Ps(n);
            t(es({
              typedValue: r.typedValue,
              field: r.independentField,
              inputCurrencyId: r[Xo.INPUT].currencyId,
              outputCurrencyId: r[Xo.OUTPUT].currencyId,
              recipient: r.recipient
            })), o({
              inputCurrencyId: r[Xo.INPUT].currencyId,
              outputCurrencyId: r[Xo.OUTPUT].currencyId
            })
          }
        }), [t, e]), c
      }
      var Ms = J.e.BigInt(0);

      function Ls() {
        return Object(v.d)((function(e) {
          return e.mint
        }))
      }

      function Ds(e) {
        if (e) return e.currency === J.d ? J.e.greaterThan(e.raw, xe) ? J.c.ether(J.e.subtract(e.raw, xe)) : J.c.ether(J.e.BigInt(0)) : e
      }
      var _s, Ys, zs, Fs, qs, Vs = d.default.div(_s || (_s = Object(u.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n  padding: 16px;\n"])), (function(e) {
          return e.theme.colors.borderColor
        })),
        Ws = n(130),
        Hs = Object(Te.d)({
          name: "toasts",
          initialState: {
            data: []
          },
          reducers: {
            push: function(e, t) {
              var n = t.payload,
                r = e.data.findIndex((function(e) {
                  return e.id === t.payload.id
                }));
              r >= 0 && e.data.splice(r, 1), e.data.unshift(n)
            },
            remove: function(e, t) {
              var n = e.data.findIndex((function(e) {
                return e.id === t.payload
              }));
              n >= 0 && e.data.splice(n, 1)
            },
            clear: function(e) {
              e.data = []
            }
          }
        }),
        Qs = Hs.actions,
        Ks = Qs.clear,
        Gs = Qs.remove,
        Xs = Qs.push,
        Js = Hs.reducer,
        $s = function() {
          var e = Object(v.c)();
          return Object(i.useMemo)((function() {
            var t = function(t) {
              return e(Xs(t))
            };
            return {
              toastError: function(e, n) {
                return t({
                  id: Object(Ws.kebabCase)(e),
                  type: l.D.DANGER,
                  title: e,
                  description: n
                })
              },
              toastInfo: function(e, n) {
                return t({
                  id: Object(Ws.kebabCase)(e),
                  type: l.D.INFO,
                  title: e,
                  description: n
                })
              },
              toastSuccess: function(e, n) {
                return t({
                  id: Object(Ws.kebabCase)(e),
                  type: l.D.SUCCESS,
                  title: e,
                  description: n
                })
              },
              toastWarning: function(e, n) {
                return t({
                  id: Object(Ws.kebabCase)(e),
                  type: l.D.WARNING,
                  title: e,
                  description: n
                })
              },
              push: t,
              remove: function(t) {
                return e(Gs(t))
              },
              clear: function() {
                return e(Ks())
              }
            }
          }), [e])
        },
        Zs = function() {
          var e = Object(x.d)(),
            t = e.activate,
            n = e.deactivate,
            r = $s().toastError;
          return {
            login: Object(i.useCallback)((function(e) {
              var n = K[e];
              n ? t(n, function() {
                var e = Object(f.a)(j.a.mark((function e(t) {
                  return j.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        window.localStorage.removeItem(l.A), t instanceof x.a ? r("Unsupported Chain Id", "Unsupported Chain Id Error. Check your chain Id.") : t instanceof k.b || t instanceof E.NoBscProviderError ? r("Provider Error", "No provider was found") : t instanceof k.c || t instanceof T.a ? (n instanceof T.b && (n.walletConnectProvider = null), r("Authorization Error", "Please authorize to access your account")) : r(t.name, t.message);
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function(t) {
                  return e.apply(this, arguments)
                }
              }()) : r("Can't find connector", "The connector config is wrong")
            }), []),
            logout: n
          }
        },
        el = function(e) {
          var t = tr(),
            n = Zs(),
            r = n.login,
            a = n.logout,
            i = Object(l.F)(r, a).onPresentConnectModal;
          return Object(it.jsx)(l.c, Object(X.a)(Object(X.a)({
            onClick: i
          }, e), {}, {
            children: t(292, "Unlock Wallet")
          }))
        },
        tl = Object(d.default)(l.f)(Ys || (Ys = Object(u.a)(["\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n  z-index: 5;\n"])));

      function nl(e) {
        var t = e.children;
        return Object(it.jsx)(tl, {
          children: t
        })
      }
      var rl = d.default.div(zs || (zs = Object(u.a)(["\n  position: relative;\n"]))),
        al = Object(d.default)(l.y)(Fs || (Fs = Object(u.a)(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"])), (function(e) {
          return e.theme.colors.primary
        })),
        il = d.default.span(qs || (qs = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"])));

      function cl(e) {
        var t, n, r, a, i, c, o, s, u = e.noLiquidity,
          d = e.price,
          b = e.currencies,
          p = e.parsedAmounts,
          j = e.poolTokenPercentage,
          f = e.onAdd;
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsxs)(et, {
            children: [Object(it.jsxs)(l.y, {
              children: [null === (t = b[us.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " Deposited"]
            }), Object(it.jsxs)(rt, {
              children: [Object(it.jsx)(yi, {
                currency: b[us.CURRENCY_A],
                style: {
                  marginRight: "8px"
                }
              }), Object(it.jsx)(l.y, {
                children: null === (n = p[us.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(6)
              })]
            })]
          }), Object(it.jsxs)(et, {
            children: [Object(it.jsxs)(l.y, {
              children: [null === (r = b[us.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol, " Deposited"]
            }), Object(it.jsxs)(rt, {
              children: [Object(it.jsx)(yi, {
                currency: b[us.CURRENCY_B],
                style: {
                  marginRight: "8px"
                }
              }), Object(it.jsx)(l.y, {
                children: null === (a = p[us.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(6)
              })]
            })]
          }), Object(it.jsxs)(et, {
            children: [Object(it.jsx)(l.y, {
              children: "Rates"
            }), Object(it.jsx)(l.y, {
              children: "1 ".concat(null === (i = b[us.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.toSignificant(4), " ").concat(null === (c = b[us.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol)
            })]
          }), Object(it.jsx)(et, {
            style: {
              justifyContent: "flex-end"
            },
            children: Object(it.jsx)(l.y, {
              children: "1 ".concat(null === (o = b[us.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.invert().toSignificant(4), " ").concat(null === (s = b[us.CURRENCY_A]) || void 0 === s ? void 0 : s.symbol)
            })
          }), Object(it.jsxs)(et, {
            children: [Object(it.jsx)(l.y, {
              children: "Share of Pool:"
            }), Object(it.jsxs)(l.y, {
              children: [u ? "100" : null === j || void 0 === j ? void 0 : j.toSignificant(4), "%"]
            })]
          }), Object(it.jsx)(l.c, {
            mt: "20px",
            onClick: f,
            children: u ? er(250, "Create Pool & Supply") : er(252, "Confirm Supply")
          })]
        })
      }

      function ol(e) {
        var t, n, r, a, i, c, o, s, u = e.currencies,
          d = e.noLiquidity,
          b = e.poolTokenPercentage,
          p = e.price;
        return Object(it.jsx)(Me, {
          gap: "md",
          children: Object(it.jsxs)(nt, {
            justify: "space-around",
            gap: "4px",
            children: [Object(it.jsxs)(Me, {
              justify: "center",
              children: [Object(it.jsx)(l.y, {
                children: null !== (t = null === p || void 0 === p ? void 0 : p.toSignificant(6)) && void 0 !== t ? t : "-"
              }), Object(it.jsxs)(l.y, {
                fontSize: "14px",
                color: "textSubtle",
                pt: 1,
                children: [null === (n = u[us.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol, " per ", null === (r = u[us.CURRENCY_A]) || void 0 === r ? void 0 : r.symbol]
              })]
            }), Object(it.jsxs)(Me, {
              justify: "center",
              children: [Object(it.jsx)(l.y, {
                children: null !== (a = null === p || void 0 === p || null === (i = p.invert()) || void 0 === i ? void 0 : i.toSignificant(6)) && void 0 !== a ? a : "-"
              }), Object(it.jsxs)(l.y, {
                fontSize: "14px",
                color: "textSubtle",
                pt: 1,
                children: [null === (c = u[us.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, " per ", null === (o = u[us.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol]
              })]
            }), Object(it.jsxs)(Me, {
              justify: "center",
              children: [Object(it.jsxs)(l.y, {
                children: [d && p ? "100" : null !== (s = (null === b || void 0 === b ? void 0 : b.lessThan(je)) ? "<0.01" : null === b || void 0 === b ? void 0 : b.toFixed(2)) && void 0 !== s ? s : "0", "%"]
              }), Object(it.jsx)(l.y, {
                fontSize: "14px",
                color: "textSubtle",
                pt: 1,
                children: "Share of Pool"
              })]
            })]
          })
        })
      }

      function sl(e) {
        var t, n, r, a, c, o, s, u, d, b, p, m = e.match.params,
          y = m.currencyIdA,
          O = m.currencyIdB,
          x = e.history,
          g = ge(),
          w = g.account,
          k = g.chainId,
          T = g.library,
          I = Oa(y),
          E = Oa(O),
          N = tr(),
          R = Boolean(k && (I && Object(J.o)(I, J.n[k]) || E && Object(J.o)(E, J.n[k]))),
          S = Jr(),
          U = Ls(),
          A = U.independentField,
          P = U.typedValue,
          B = U.otherTypedValue,
          M = function(e, t) {
            var n, r, a, c, o, s, l, u = ge(),
              d = u.account,
              b = u.chainId,
              p = Ls(),
              j = p.independentField,
              f = p.typedValue,
              m = p.otherTypedValue,
              y = j === us.CURRENCY_A ? us.CURRENCY_B : us.CURRENCY_A,
              O = Object(i.useMemo)((function() {
                var n;
                return n = {}, Object(C.a)(n, us.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(C.a)(n, us.CURRENCY_B, null !== t && void 0 !== t ? t : void 0), n
              }), [e, t]),
              v = Qo(O[us.CURRENCY_A], O[us.CURRENCY_B]),
              x = Object(h.a)(v, 2),
              g = x[0],
              w = x[1],
              k = uo(null === w || void 0 === w ? void 0 : w.liquidityToken),
              T = g === Vo.NOT_EXISTS || Boolean(k && J.e.equal(k.raw, Ms)),
              I = wa(null !== d && void 0 !== d ? d : void 0, [O[us.CURRENCY_A], O[us.CURRENCY_B]]),
              E = (n = {}, Object(C.a)(n, us.CURRENCY_A, I[0]), Object(C.a)(n, us.CURRENCY_B, I[1]), n),
              N = Is(f, O[j]),
              R = Object(i.useMemo)((function() {
                if (T) return m && O[y] ? Is(m, O[y]) : void 0;
                if (N) {
                  var n = ko(N, b),
                    r = [wo(e, b), wo(t, b)],
                    a = r[0],
                    i = r[1];
                  if (a && i && n && w) {
                    var c = y === us.CURRENCY_B ? t : e,
                      o = y === us.CURRENCY_B ? w.priceOf(a).quote(n) : w.priceOf(i).quote(n);
                    return c === J.d ? J.c.ether(o.raw) : o
                  }
                }
              }), [T, m, O, y, N, e, b, t, w]),
              S = (r = {}, Object(C.a)(r, us.CURRENCY_A, j === us.CURRENCY_A ? N : R), Object(C.a)(r, us.CURRENCY_B, j === us.CURRENCY_A ? R : N), r),
              U = Object(i.useMemo)((function() {
                if (T) {
                  var t = S[us.CURRENCY_A],
                    n = S[us.CURRENCY_B];
                  return t && n ? new J.h(t.currency, n.currency, t.raw, n.raw) : void 0
                }
                var r = wo(e, b);
                return w && r ? w.priceOf(r) : void 0
              }), [b, e, T, w, S]),
              A = Object(i.useMemo)((function() {
                var e = S[us.CURRENCY_A],
                  t = S[us.CURRENCY_B],
                  n = [ko(e, b), ko(t, b)],
                  r = n[0],
                  a = n[1];
                if (w && k && r && a) return w.getLiquidityMinted(k, r, a)
              }), [S, b, w, k]),
              P = Object(i.useMemo)((function() {
                if (A && k) return new J.g(A.raw, k.add(A).raw)
              }), [A, k]);
            d || (o = "Connect Wallet"), g === Vo.INVALID && (o = null !== (s = o) && void 0 !== s ? s : er(136, "Invalid pair")), S[us.CURRENCY_A] && S[us.CURRENCY_B] || (o = null !== (l = o) && void 0 !== l ? l : er(84, "Enter an amount"));
            var B, M, L = S[us.CURRENCY_A],
              D = S[us.CURRENCY_B];
            return L && (null === E || void 0 === E || null === (a = E[us.CURRENCY_A]) || void 0 === a ? void 0 : a.lessThan(L)) && (o = "Insufficient ".concat(null === (B = O[us.CURRENCY_A]) || void 0 === B ? void 0 : B.symbol, " balance")), D && (null === E || void 0 === E || null === (c = E[us.CURRENCY_B]) || void 0 === c ? void 0 : c.lessThan(D)) && (o = "Insufficient ".concat(null === (M = O[us.CURRENCY_B]) || void 0 === M ? void 0 : M.symbol, " balance")), {
              dependentField: y,
              currencies: O,
              pair: w,
              pairState: g,
              currencyBalances: E,
              parsedAmounts: S,
              price: U,
              noLiquidity: T,
              liquidityMinted: A,
              poolTokenPercentage: P,
              error: o
            }
          }(null !== I && void 0 !== I ? I : void 0, null !== E && void 0 !== E ? E : void 0),
          L = M.dependentField,
          D = M.currencies,
          _ = M.pair,
          Y = M.pairState,
          z = M.currencyBalances,
          F = M.parsedAmounts,
          q = M.price,
          V = M.noLiquidity,
          W = M.liquidityMinted,
          H = M.poolTokenPercentage,
          Q = M.error,
          K = function(e) {
            var t = Object(v.c)();
            return {
              onFieldAInput: Object(i.useCallback)((function(n) {
                t(Os({
                  field: us.CURRENCY_A,
                  typedValue: n,
                  noLiquidity: !0 === e
                }))
              }), [t, e]),
              onFieldBInput: Object(i.useCallback)((function(n) {
                t(Os({
                  field: us.CURRENCY_B,
                  typedValue: n,
                  noLiquidity: !0 === e
                }))
              }), [t, e])
            }
          }(V),
          Z = K.onFieldAInput,
          ee = K.onFieldBInput,
          te = !Q,
          ne = Object(i.useState)(!1),
          re = Object(h.a)(ne, 2),
          ae = re[0],
          ie = re[1],
          ce = Object(i.useState)(!1),
          oe = Object(h.a)(ce, 2),
          se = oe[0],
          le = oe[1],
          ue = Zr(),
          de = Object(h.a)(ue, 1)[0],
          be = $r(),
          pe = Object(h.a)(be, 1)[0],
          je = Object(i.useState)(""),
          fe = Object(h.a)(je, 2),
          he = fe[0],
          me = fe[1],
          ye = (r = {}, Object(C.a)(r, A, P), Object(C.a)(r, L, V ? B : null !== (t = null === (n = F[L]) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : ""), r),
          Oe = [us.CURRENCY_A, us.CURRENCY_B].reduce((function(e, t) {
            return Object(X.a)(Object(X.a)({}, e), {}, Object(C.a)({}, t, Ds(z[t])))
          }), {}),
          ve = [us.CURRENCY_A, us.CURRENCY_B].reduce((function(e, t) {
            var n, r;
            return Object(X.a)(Object(X.a)({}, e), {}, Object(C.a)({}, t, null === (n = Oe[t]) || void 0 === n ? void 0 : n.equalTo(null !== (r = F[t]) && void 0 !== r ? r : "0")))
          }), {}),
          xe = ys(F[us.CURRENCY_A], $),
          Ce = Object(h.a)(xe, 2),
          we = Ce[0],
          ke = Ce[1],
          Te = ys(F[us.CURRENCY_B], $),
          Ie = Object(h.a)(Te, 2),
          Ee = Ie[0],
          Ne = Ie[1],
          Re = cs();

        function Se() {
          return Ue.apply(this, arguments)
        }

        function Ue() {
          return (Ue = Object(f.a)(j.a.mark((function e() {
            var t, n, r, a, i, c, o, s, l, u, d, b, p, h, m, y, O;
            return j.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (k && T && w) {
                    e.next = 2;
                    break
                  }
                  return e.abrupt("return");
                case 2:
                  if (n = xt(0, T, w), r = F[us.CURRENCY_A], a = F[us.CURRENCY_B], r && a && I && E) {
                    e.next = 6;
                    break
                  }
                  return e.abrupt("return");
                case 6:
                  return t = {}, Object(C.a)(t, us.CURRENCY_A, Ot(r, V ? 0 : pe)[0]), Object(C.a)(t, us.CURRENCY_B, Ot(a, V ? 0 : pe)[0]), i = t, c = Math.ceil(Date.now() / 1e3) + de, I === J.d || E === J.d ? (p = E === J.d, o = n.estimateGas.addLiquidityETH, s = n.addLiquidityETH, l = [null !== (d = null === (b = wo(p ? I : E, k)) || void 0 === b ? void 0 : b.address) && void 0 !== d ? d : "", (p ? r : a).raw.toString(), i[p ? us.CURRENCY_A : us.CURRENCY_B].toString(), i[p ? us.CURRENCY_B : us.CURRENCY_A].toString(), w, c], u = bt.a.from((p ? a : r).raw.toString())) : (o = n.estimateGas.addLiquidity, s = n.addLiquidity, l = [null !== (h = null === (m = wo(I, k)) || void 0 === m ? void 0 : m.address) && void 0 !== h ? h : "", null !== (y = null === (O = wo(E, k)) || void 0 === O ? void 0 : O.address) && void 0 !== y ? y : "", r.raw.toString(), a.raw.toString(), i[us.CURRENCY_A].toString(), i[us.CURRENCY_B].toString(), w, c], u = null), o = function() {
                    var e = Object(f.a)(j.a.mark((function e() {
                      return j.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.abrupt("return", 5e6);
                          case 1:
                          case "end":
                            return e.stop()
                        }
                      }), e)
                    })));
                    return function() {
                      return e.apply(this, arguments)
                    }
                  }(), le(!0), e.next = 13, o.apply(void 0, Object(G.a)(l).concat([u ? {
                    value: u
                  } : {}])).then((function(e) {
                    return s.apply(void 0, Object(G.a)(l).concat([Object(X.a)(Object(X.a)({}, u ? {
                      value: u
                    } : {}), {}, {
                      gasLimit: e,
                      gasPrice: 2e10
                    })])).then((function(e) {
                      var t, n, r, a;
                      le(!1), Re(e, {
                        summary: "Add ".concat(null === (t = F[us.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === (n = D[us.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " and ").concat(null === (r = F[us.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(3), " ").concat(null === (a = D[us.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol)
                      }), me(e.hash)
                    }))
                  })).catch((function(e) {
                    le(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                  }));
                case 13:
                case "end":
                  return e.stop()
              }
            }), e)
          })))).apply(this, arguments)
        }
        var Ae = function() {
            var e, t, n, r;
            return V ? Object(it.jsx)(Me, {
              gap: "20px",
              children: Object(it.jsx)(wn, {
                mt: "20px",
                borderRadius: "20px",
                children: Object(it.jsxs)(tt, {
                  children: [Object(it.jsx)(l.y, {
                    fontSize: "48px",
                    mr: "8px",
                    children: "".concat(null === (e = D[us.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (t = D[us.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol)
                  }), Object(it.jsx)(Lc, {
                    currency0: D[us.CURRENCY_A],
                    currency1: D[us.CURRENCY_B],
                    size: 30
                  })]
                })
              })
            }) : Object(it.jsxs)(Me, {
              gap: "20px",
              children: [Object(it.jsxs)(tt, {
                style: {
                  marginTop: "20px"
                },
                children: [Object(it.jsx)(l.y, {
                  fontSize: "48px",
                  mr: "8px",
                  children: null === W || void 0 === W ? void 0 : W.toSignificant(6)
                }), Object(it.jsx)(Lc, {
                  currency0: D[us.CURRENCY_A],
                  currency1: D[us.CURRENCY_B],
                  size: 30
                })]
              }), Object(it.jsx)(at, {
                children: Object(it.jsx)(l.y, {
                  fontSize: "24px",
                  children: "".concat(null === (n = D[us.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, "/").concat(null === (r = D[us.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol, " Pool Tokens")
                })
              }), Object(it.jsx)(l.y, {
                small: !0,
                textAlign: "left",
                padding: "8px 0 0 0 ",
                style: {
                  fontStyle: "italic"
                },
                children: "Output is estimated. If the price changes by more than ".concat(pe / 100, "% your transaction will revert.")
              })]
            })
          },
          Pe = function() {
            return Object(it.jsx)(cl, {
              price: q,
              currencies: D,
              parsedAmounts: F,
              noLiquidity: V,
              onAdd: Se,
              poolTokenPercentage: H
            })
          },
          Le = "Supplying ".concat(null === (a = F[us.CURRENCY_A]) || void 0 === a ? void 0 : a.toSignificant(6), " ").concat(null === (c = D[us.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, " and ").concat(null === (o = F[us.CURRENCY_B]) || void 0 === o ? void 0 : o.toSignificant(6), " ").concat(null === (s = D[us.CURRENCY_B]) || void 0 === s ? void 0 : s.symbol),
          De = Object(i.useCallback)((function(e) {
            var t = bo(e);
            t === O ? x.push("/add/".concat(O, "/").concat(y)) : x.push("/add/".concat(t, "/").concat(O))
          }), [O, x, y]),
          _e = Object(i.useCallback)((function(e) {
            var t = bo(e);
            y === t ? O ? x.push("/add/".concat(O, "/").concat(t)) : x.push("/add/".concat(t)) : x.push("/add/".concat(y || "BNB", "/").concat(t))
          }), [y, x, O]),
          Ye = Object(i.useCallback)((function() {
            ie(!1), he && Z(""), me("")
          }), [Z, he]);
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsx)(ar, {
            activeIndex: 1
          }), Object(it.jsxs)(nl, {
            children: [Object(it.jsx)(oo, {
              adding: !0
            }), Object(it.jsxs)(rl, {
              children: [Object(it.jsx)(Gn, {
                isOpen: ae,
                onDismiss: Ye,
                attemptingTxn: se,
                hash: he,
                content: function() {
                  return Object(it.jsx)(Hn, {
                    title: V ? N(1154, "You are creating a pool") : N(1156, "You will receive"),
                    onDismiss: Ye,
                    topContent: Ae,
                    bottomContent: Pe
                  })
                },
                pendingText: Le
              }), Object(it.jsx)(l.g, {
                children: Object(it.jsxs)(Me, {
                  gap: "20px",
                  children: [V && Object(it.jsx)(Be, {
                    children: Object(it.jsx)(Vs, {
                      children: Object(it.jsxs)(Me, {
                        gap: "12px",
                        children: [Object(it.jsx)(l.y, {
                          children: N(1158, "You are the first liquidity provider.")
                        }), Object(it.jsx)(l.y, {
                          children: N(1160, "The ratio of tokens you add will set the price of this pool.")
                        }), Object(it.jsx)(l.y, {
                          children: N(1162, "Once you are happy with the rate click supply to review.")
                        })]
                      })
                    })
                  }), Object(it.jsx)(no, {
                    value: ye[us.CURRENCY_A],
                    onUserInput: Z,
                    onMax: function() {
                      var e, t;
                      Z(null !== (e = null === (t = Oe[us.CURRENCY_A]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                    },
                    onCurrencySelect: De,
                    showMaxButton: !ve[us.CURRENCY_A],
                    currency: D[us.CURRENCY_A],
                    id: "add-liquidity-input-tokena",
                    showCommonBases: !1
                  }), Object(it.jsx)(Be, {
                    children: Object(it.jsx)(l.a, {
                      color: "textSubtle"
                    })
                  }), Object(it.jsx)(no, {
                    value: ye[us.CURRENCY_B],
                    onUserInput: ee,
                    onCurrencySelect: _e,
                    onMax: function() {
                      var e, t;
                      ee(null !== (e = null === (t = Oe[us.CURRENCY_B]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                    },
                    showMaxButton: !ve[us.CURRENCY_B],
                    currency: D[us.CURRENCY_B],
                    id: "add-liquidity-input-tokenb",
                    showCommonBases: !1
                  }), D[us.CURRENCY_A] && D[us.CURRENCY_B] && Y !== Vo.INVALID && Object(it.jsxs)("div", {
                    children: [Object(it.jsx)(l.y, {
                      style: {
                        textTransform: "uppercase",
                        fontWeight: 600
                      },
                      color: "textSubtle",
                      fontSize: "12px",
                      mb: "2px",
                      children: V ? N(1164, "Initial prices and pool share") : N(1166, "Prices and pool share")
                    }), Object(it.jsx)(Vs, {
                      children: Object(it.jsx)(ol, {
                        currencies: D,
                        poolTokenPercentage: H,
                        noLiquidity: V,
                        price: q
                      })
                    })]
                  }), w ? Object(it.jsxs)(Me, {
                    gap: "md",
                    children: [(we === ls.NOT_APPROVED || we === ls.PENDING || Ee === ls.NOT_APPROVED || Ee === ls.PENDING) && te && Object(it.jsxs)(et, {
                      children: [we !== ls.APPROVED && Object(it.jsx)(l.c, {
                        onClick: ke,
                        disabled: we === ls.PENDING,
                        style: {
                          width: Ee !== ls.APPROVED ? "48%" : "100%"
                        },
                        children: we === ls.PENDING ? Object(it.jsxs)(il, {
                          children: ["Approving ", null === (u = D[us.CURRENCY_A]) || void 0 === u ? void 0 : u.symbol]
                        }) : "Approve ".concat(null === (d = D[us.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol)
                      }), Ee !== ls.APPROVED && Object(it.jsx)(l.c, {
                        onClick: Ne,
                        disabled: Ee === ls.PENDING,
                        style: {
                          width: we !== ls.APPROVED ? "48%" : "100%"
                        },
                        children: Ee === ls.PENDING ? Object(it.jsxs)(il, {
                          children: ["Approving ", null === (b = D[us.CURRENCY_B]) || void 0 === b ? void 0 : b.symbol]
                        }) : "Approve ".concat(null === (p = D[us.CURRENCY_B]) || void 0 === p ? void 0 : p.symbol)
                      })]
                    }), Object(it.jsx)(l.c, {
                      onClick: function() {
                        S ? Se() : ie(!0)
                      },
                      disabled: !te || we !== ls.APPROVED || Ee !== ls.APPROVED,
                      variant: !te && F[us.CURRENCY_A] && F[us.CURRENCY_B] ? "danger" : "primary",
                      width: "100%",
                      children: null !== Q && void 0 !== Q ? Q : "Supply"
                    })]
                  }) : Object(it.jsx)(el, {
                    width: "100%"
                  })]
                })
              })]
            })]
          }), _ && !V && Y !== Vo.INVALID ? Object(it.jsx)(Me, {
            style: {
              minWidth: "20rem",
              marginTop: "1rem"
            },
            children: Object(it.jsx)(Fo, {
              showUnwrapped: R,
              pair: _
            })
          }) : null]
        })
      }
      var ll = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

      function ul(e) {
        var t = e.match.params.currencyIdA.match(ll);
        return (null === t || void 0 === t ? void 0 : t.length) ? Object(it.jsx)(y.a, {
          to: "/add/".concat(t[1], "/").concat(t[2])
        }) : Object(it.jsx)(sl, Object(X.a)({}, e))
      }

      function dl(e) {
        var t = e.match.params,
          n = t.currencyIdA,
          r = t.currencyIdB;
        return n.toLowerCase() === r.toLowerCase() ? Object(it.jsx)(y.a, {
          to: "/add/".concat(n)
        }) : Object(it.jsx)(sl, Object(X.a)({}, e))
      }
      var bl = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

      function pl(e) {
        var t = e.match.params.tokens;
        if (!bl.test(t)) return Object(it.jsx)(y.a, {
          to: "/pool"
        });
        var n = t.split("-"),
          r = Object(h.a)(n, 2),
          a = r[0],
          i = r[1];
        return Object(it.jsx)(y.a, {
          to: "/remove/".concat(a, "/").concat(i)
        })
      }
      var jl, fl, hl, ml, yl, Ol, vl, xl, gl, Cl, wl = d.default.div(jl || (jl = Object(u.a)(["\n  margin-bottom: 16px;\n"]))),
        kl = d.default.div(fl || (fl = Object(u.a)(["\n  padding: 0 4px;\n"]))),
        Tl = d.default.div(hl || (hl = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ", ":first-child {\n    padding-left: 0;\n  }\n\n  ", ":last-child {\n    padding-right: 0;\n  }\n\n  ", " {\n    flex-direction: row;\n  }\n"])), kl, kl, (function(e) {
          return e.theme.mediaQueries.sm
        })),
        Il = d.default.div(ml || (ml = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]))),
        El = [{
          label: "0.1%",
          value: .1
        }, {
          label: "0.5%",
          value: .5
        }, {
          label: "1%",
          value: 1
        }],
        Nl = function(e) {
          var t = e.translateString,
            n = $r(),
            r = Object(h.a)(n, 2),
            a = r[0],
            c = r[1],
            o = Object(i.useState)(a / 100),
            s = Object(h.a)(o, 2),
            u = s[0],
            d = s[1],
            b = Object(i.useState)(null),
            p = Object(h.a)(b, 2),
            j = p[0],
            f = p[1];
          return Object(i.useEffect)((function() {
            try {
              var e = 100 * u;
              !Number.isNaN(e) && e > 0 && e < 5e3 ? (c(e), f(null)) : f(t(1144, "Enter a valid slippage percentage"))
            } catch (n) {
              f(t(1144, "Enter a valid slippage percentage"))
            }
          }), [u, f, c, t]), Object(i.useEffect)((function() {
            a < 50 ? f(t(1146, "Your transaction may fail")) : a > 500 && f(t(1148, "Your transaction may be frontrun"))
          }), [a, f, t]), Object(it.jsxs)(wl, {
            children: [Object(it.jsxs)(Il, {
              children: [Object(it.jsx)(l.y, {
                style: {
                  fontWeight: 600
                },
                children: t(88, "Slippage tolerance")
              }), Object(it.jsx)(ui, {
                text: t(186, "Your transaction will revert if the price changes unfavorably by more than this percentage.")
              })]
            }), Object(it.jsxs)(Tl, {
              children: [Object(it.jsx)(l.n, {
                mb: ["8px", 0],
                mr: [0, "8px"],
                children: El.map((function(e) {
                  var t = e.label,
                    n = e.value;
                  return Object(it.jsx)(kl, {
                    children: Object(it.jsx)(l.c, {
                      variant: u === n ? "primary" : "tertiary",
                      onClick: function() {
                        return d(n)
                      },
                      children: t
                    })
                  }, n)
                }))
              }), Object(it.jsxs)(l.n, {
                alignItems: "center",
                children: [Object(it.jsx)(kl, {
                  children: Object(it.jsx)(l.q, {
                    type: "number",
                    scale: "lg",
                    step: .1,
                    min: .1,
                    placeholder: "5%",
                    value: u,
                    onChange: function(e) {
                      var t = e.target.value;
                      d(parseFloat(t))
                    },
                    isWarning: null !== j
                  })
                }), Object(it.jsx)(kl, {
                  children: Object(it.jsx)(l.y, {
                    fontSize: "18px",
                    children: "%"
                  })
                })]
              })]
            }), j && Object(it.jsx)(l.y, {
              mt: "8px",
              color: "failure",
              children: j
            })]
          })
        },
        Rl = d.default.div(yl || (yl = Object(u.a)(["\n  margin-bottom: 16px;\n"]))),
        Sl = d.default.div(Ol || (Ol = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]))),
        Ul = d.default.div(vl || (vl = Object(u.a)(["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n\n  & > ", " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"])), l.q, l.y),
        Al = function(e) {
          var t = e.translateString,
            n = Zr(),
            r = Object(h.a)(n, 2),
            a = r[0],
            c = r[1],
            o = Object(i.useState)(a / 60),
            s = Object(h.a)(o, 2),
            u = s[0],
            d = s[1],
            b = Object(i.useState)(null),
            p = Object(h.a)(b, 2),
            j = p[0],
            f = p[1];
          return Object(i.useEffect)((function() {
            try {
              var e = 60 * u;
              !Number.isNaN(e) && e > 0 ? (c(e), f(null)) : f(t(1150, "Enter a valid deadline"))
            } catch (n) {
              f(t(1150, "Enter a valid deadline"))
            }
          }), [u, f, c, t]), Object(it.jsxs)(Rl, {
            children: [Object(it.jsxs)(Sl, {
              children: [Object(it.jsx)(l.y, {
                style: {
                  fontWeight: 600
                },
                children: t(90, "Transaction deadline")
              }), Object(it.jsx)(ui, {
                text: t(188, "Your transaction will revert if it is pending for more than this long.")
              })]
            }), Object(it.jsxs)(Ul, {
              children: [Object(it.jsx)(l.q, {
                type: "number",
                step: "1",
                min: "1",
                value: u,
                onChange: function(e) {
                  var t = e.target.value;
                  d(parseInt(t, 10))
                }
              }), Object(it.jsx)(l.y, {
                children: "Minutes"
              })]
            }), j && Object(it.jsx)(l.y, {
              mt: "8px",
              color: "failure",
              children: j
            })]
          })
        },
        Pl = function() {
          return null
        },
        Bl = function(e) {
          var t = e.onDismiss,
            n = void 0 === t ? Pl : t,
            r = e.translateString;
          return Object(it.jsxs)(l.t, {
            title: r(1200, "Settings"),
            onDismiss: n,
            children: [Object(it.jsx)(Nl, {
              translateString: r
            }), Object(it.jsx)(Al, {
              translateString: r
            })]
          })
        },
        Ml = function() {
          return null
        },
        Ll = function(e, t) {
          return t.addedTime - e.addedTime
        },
        Dl = function(e) {
          var t = e.onDismiss,
            n = void 0 === t ? Ml : t,
            r = e.translateString,
            a = ge(),
            c = a.account,
            o = a.chainId,
            s = os(),
            u = Object(i.useMemo)((function() {
              return Object.values(s).filter(ss).sort(Ll)
            }), [s]);
          return Object(it.jsxs)(l.t, {
            title: r(1202, "Recent transactions"),
            onDismiss: n,
            children: [!c && Object(it.jsxs)(l.n, {
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              children: [Object(it.jsx)(l.y, {
                mb: "8px",
                bold: !0,
                children: "Please connect your wallet to view your recent transactions"
              }), Object(it.jsx)(l.c, {
                variant: "tertiary",
                scale: "sm",
                onClick: n,
                children: "Close"
              })]
            }), c && o && 0 === u.length && Object(it.jsxs)(l.n, {
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              children: [Object(it.jsx)(l.y, {
                mb: "8px",
                bold: !0,
                children: "No recent transactions"
              }), Object(it.jsx)(l.c, {
                variant: "tertiary",
                scale: "sm",
                onClick: n,
                children: "Close"
              })]
            }), c && o && u.map((function(e) {
              var t = e.hash,
                n = e.summary,
                r = function(e) {
                  var t = e.hash,
                    n = e.receipt;
                  return t ? t && 1 === (null === n || void 0 === n ? void 0 : n.status) ? {
                    icon: Object(it.jsx)(l.h, {
                      color: "success"
                    }),
                    color: "success"
                  } : {
                    icon: Object(it.jsx)(l.m, {
                      color: "failure"
                    }),
                    color: "failure"
                  } : {
                    icon: Object(it.jsx)(cn, {}),
                    color: "text"
                  }
                }(e),
                a = r.icon,
                i = r.color;
              return Object(it.jsx)(it.Fragment, {
                children: Object(it.jsxs)(l.n, {
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: "4px",
                  children: [Object(it.jsx)(l.r, {
                    href: ht(o, t, "transaction"),
                    color: i,
                    children: null !== n && void 0 !== n ? n : t
                  }), a]
                }, t)
              })
            }))]
          })
        },
        _l = function() {
          return Object(it.jsx)(l.w, {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: Object(it.jsx)("path", {
              d: "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
              fill: "currentColor"
            })
          })
        },
        Yl = d.default.div(xl || (xl = Object(u.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 24px;\n"])), (function(e) {
          return e.theme.colors.borderColor
        })),
        zl = d.default.div(gl || (gl = Object(u.a)(["\n  flex: 1;\n"]))),
        Fl = function(e) {
          var t = e.title,
            n = e.description,
            r = e.children,
            a = tr(),
            i = Object(l.E)(Object(it.jsx)(Bl, {
              translateString: a
            })),
            c = Object(h.a)(i, 1)[0],
            o = Object(l.E)(Object(it.jsx)(Dl, {
              translateString: a
            })),
            s = Object(h.a)(o, 1)[0];
          return Object(it.jsxs)(Yl, {
            children: [Object(it.jsxs)(l.n, {
              alignItems: "center",
              children: [Object(it.jsxs)(zl, {
                children: [Object(it.jsx)(l.o, {
                  mb: "8px",
                  children: t
                }), n && Object(it.jsx)(l.y, {
                  color: "textSubtle",
                  fontSize: "14px",
                  children: n
                })]
              }), Object(it.jsx)(l.p, {
                variant: "text",
                onClick: c,
                title: a(1200, "Settings"),
                children: Object(it.jsx)(l.k, {
                  width: "24px",
                  color: "currentColor"
                })
              }), Object(it.jsx)(l.p, {
                variant: "text",
                onClick: s,
                title: a(1202, "Recent transactions"),
                children: Object(it.jsx)(_l, {})
              })]
            }), r && Object(it.jsx)(l.y, {
              mt: "16px",
              children: r
            })]
          })
        };

      function ql() {
        var e = Object(i.useContext)(d.ThemeContext),
          t = ge().account,
          n = tr(),
          r = function() {
            var e = ge().chainId,
              t = fa(),
              n = Object(i.useMemo)((function() {
                var t;
                return e && null !== (t = ue[e]) && void 0 !== t ? t : []
              }), [e]),
              r = Object(i.useMemo)((function() {
                return e ? Mr()(Object.keys(t), (function(n) {
                  var r, a = t[n];
                  return (null !== (r = le[e]) && void 0 !== r ? r : []).map((function(e) {
                    return e.address === a.address ? null : [e, a]
                  })).filter((function(e) {
                    return null !== e
                  }))
                })) : []
              }), [t, e]),
              a = Object(v.d)((function(e) {
                return e.user.pairs
              })),
              c = Object(i.useMemo)((function() {
                if (!e || !a) return [];
                var t = a[e];
                return t ? Object.keys(t).map((function(e) {
                  return [Xr(t[e].token0), Xr(t[e].token1)]
                })) : []
              }), [a, e]),
              o = Object(i.useMemo)((function() {
                return c.concat(r).concat(n)
              }), [r, n, c]);
            return Object(i.useMemo)((function() {
              var e = o.reduce((function(e, t) {
                var n = Object(h.a)(t, 2),
                  r = n[0],
                  a = n[1],
                  i = r.sortsBefore(a),
                  c = i ? "".concat(r.address, ":").concat(a.address) : "".concat(a.address, ":").concat(r.address);
                return e[c] || (e[c] = i ? [r, a] : [a, r]), e
              }), {});
              return Object.keys(e).map((function(t) {
                return e[t]
              }))
            }), [o])
          }(),
          a = Object(i.useMemo)((function() {
            return r.map((function(e) {
              return {
                liquidityToken: na(e),
                tokens: e
              }
            }))
          }), [r]),
          c = xa(null !== t && void 0 !== t ? t : void 0, Object(i.useMemo)((function() {
            return a.map((function(e) {
              return e.liquidityToken
            }))
          }), [a])),
          o = Object(h.a)(c, 2),
          s = o[0],
          u = o[1],
          b = Object(i.useMemo)((function() {
            return a.filter((function(e) {
              var t, n = e.liquidityToken;
              return null === (t = s[n.address]) || void 0 === t ? void 0 : t.greaterThan("0")
            }))
          }), [a, s]),
          p = Ho(b.map((function(e) {
            return e.tokens
          }))),
          j = u || (null === p || void 0 === p ? void 0 : p.length) < b.length || (null === p || void 0 === p ? void 0 : p.some((function(e) {
            return !e
          }))),
          f = p.map((function(e) {
            return Object(h.a)(e, 2)[1]
          })).filter((function(e) {
            return Boolean(e)
          }));
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsx)(ar, {
            activeIndex: 1
          }), Object(it.jsxs)(nl, {
            children: [Object(it.jsx)(Fl, {
              title: n(262, "Liquidity"),
              description: n(1168, "Add liquidity to receive LP tokens"),
              children: Object(it.jsx)(l.c, {
                id: "join-pool-button",
                as: m.b,
                to: "/add/BNB",
                children: n(168, "Add Liquidity")
              })
            }), Object(it.jsx)(Me, {
              gap: "lg",
              justify: "center",
              children: Object(it.jsx)(l.g, {
                children: Object(it.jsxs)(Me, {
                  gap: "12px",
                  style: {
                    width: "100%"
                  },
                  children: [Object(it.jsxs)(et, {
                    padding: "0 8px",
                    children: [Object(it.jsx)(l.y, {
                      color: e.colors.text,
                      children: n(107, "Your Liquidity")
                    }), Object(it.jsx)(ui, {
                      text: n(1170, "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below.")
                    })]
                  }), t ? j ? Object(it.jsx)(wn, {
                    padding: "40px",
                    children: Object(it.jsx)(l.y, {
                      color: "textDisabled",
                      textAlign: "center",
                      children: Object(it.jsx)(Ao, {
                        children: "Loading"
                      })
                    })
                  }) : (null === f || void 0 === f ? void 0 : f.length) > 0 ? Object(it.jsx)(it.Fragment, {
                    children: f.map((function(e) {
                      return Object(it.jsx)(qo, {
                        pair: e
                      }, e.liquidityToken.address)
                    }))
                  }) : Object(it.jsx)(wn, {
                    padding: "40px",
                    children: Object(it.jsx)(l.y, {
                      color: "textDisabled",
                      textAlign: "center",
                      children: n(104, "No liquidity found.")
                    })
                  }) : Object(it.jsx)(wn, {
                    padding: "40px",
                    children: Object(it.jsx)(l.y, {
                      color: "textDisabled",
                      textAlign: "center",
                      children: n(156, "Connect to a wallet to view your liquidity.")
                    })
                  }), Object(it.jsxs)("div", {
                    children: [Object(it.jsxs)(l.y, {
                      fontSize: "14px",
                      style: {
                        padding: ".5rem 0 .5rem 0"
                      },
                      children: [n(106, "Don't see a pool you joined?"), " ", Object(it.jsx)(Nt, {
                        id: "import-pool-link",
                        to: "/find",
                        children: n(108, "Import it.")
                      })]
                    }), Object(it.jsx)(l.y, {
                      fontSize: "14px",
                      style: {
                        padding: ".5rem 0 .5rem 0"
                      },
                      children: n(1172, "Or, if you staked your LP tokens in a farm, unstake them to see them here.")
                    })]
                  })]
                })
              })
            })]
          })]
        })
      }

      function Vl() {
        var e, t = ge().account,
          n = Object(i.useState)(!1),
          r = Object(h.a)(n, 2),
          a = r[0],
          c = r[1],
          o = Object(i.useState)(Cl.TOKEN1),
          s = Object(h.a)(o, 2),
          u = s[0],
          d = s[1],
          b = Object(i.useState)(J.d),
          p = Object(h.a)(b, 2),
          j = p[0],
          f = p[1],
          m = Object(i.useState)(null),
          y = Object(h.a)(m, 2),
          O = y[0],
          x = y[1],
          g = Qo(null !== j && void 0 !== j ? j : void 0, null !== O && void 0 !== O ? O : void 0),
          C = Object(h.a)(g, 2),
          w = C[0],
          k = C[1],
          T = function() {
            var e = Object(v.c)();
            return Object(i.useCallback)((function(t) {
              e(Vr({
                serializedPair: ta(t)
              }))
            }), [e])
          }(),
          I = tr();
        Object(i.useEffect)((function() {
          k && T(k)
        }), [k, T]);
        var E = w === Vo.NOT_EXISTS || Boolean(w === Vo.EXISTS && k && J.e.equal(k.reserve0.raw, J.e.BigInt(0)) && J.e.equal(k.reserve1.raw, J.e.BigInt(0))),
          N = Ca(null !== t && void 0 !== t ? t : void 0, null === k || void 0 === k ? void 0 : k.liquidityToken),
          R = Boolean(N && J.e.greaterThan(N.raw, J.e.BigInt(0))),
          S = Object(i.useCallback)((function(e) {
            u === Cl.TOKEN0 ? f(e) : x(e)
          }), [u]),
          U = Object(i.useCallback)((function() {
            c(!1)
          }), [c]),
          A = Object(it.jsx)(wn, {
            padding: "45px 10px",
            children: Object(it.jsx)(l.y, {
              style: {
                textAlign: "center"
              },
              children: t ? I(208, "Select a token to find your liquidity.") : I(1174, "Connect to a wallet to find pools")
            })
          });
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsx)(ar, {
            activeIndex: 1
          }), Object(it.jsxs)(nl, {
            children: [Object(it.jsx)(co, {}), Object(it.jsxs)(l.g, {
              children: [Object(it.jsxs)(Me, {
                gap: "md",
                children: [Object(it.jsx)(l.c, {
                  onClick: function() {
                    c(!0), d(Cl.TOKEN0)
                  },
                  startIcon: j ? Object(it.jsx)(yi, {
                    currency: j,
                    style: {
                      marginRight: ".5rem"
                    }
                  }) : null,
                  endIcon: Object(it.jsx)(l.i, {
                    width: "24px",
                    color: "white"
                  }),
                  width: "100%",
                  children: j ? j.symbol : I(82, "Select a Token")
                }), Object(it.jsx)(Be, {
                  children: Object(it.jsx)(l.a, {
                    color: "textSubtle"
                  })
                }), Object(it.jsx)(l.c, {
                  onClick: function() {
                    c(!0), d(Cl.TOKEN1)
                  },
                  startIcon: O ? Object(it.jsx)(yi, {
                    currency: O,
                    style: {
                      marginRight: ".5rem"
                    }
                  }) : null,
                  endIcon: Object(it.jsx)(l.i, {
                    width: "24px",
                    color: "white"
                  }),
                  width: "100%",
                  children: O ? O.symbol : I(82, "Select a Token")
                }), R && Object(it.jsx)(Be, {
                  style: {
                    justifyItems: "center",
                    backgroundColor: "",
                    padding: "12px 0px",
                    borderRadius: "12px"
                  },
                  children: Object(it.jsx)(l.y, {
                    style: {
                      textAlign: "center"
                    },
                    children: I(210, "Pool found!")
                  })
                }), j && O ? w === Vo.EXISTS ? R && k ? Object(it.jsx)(Fo, {
                  pair: k
                }) : Object(it.jsx)(wn, {
                  padding: "45px 10px",
                  children: Object(it.jsxs)(Me, {
                    gap: "sm",
                    justify: "center",
                    children: [Object(it.jsx)(l.y, {
                      style: {
                        textAlign: "center"
                      },
                      children: I(212, "You don\u2019t have liquidity in this pool yet.")
                    }), Object(it.jsx)(Nt, {
                      to: "/add/".concat(bo(j), "/").concat(bo(O)),
                      children: Object(it.jsx)(l.y, {
                        style: {
                          textAlign: "center"
                        },
                        children: I(168, "Add Liquidity")
                      })
                    })]
                  })
                }) : E ? Object(it.jsx)(wn, {
                  padding: "45px 10px",
                  children: Object(it.jsxs)(Me, {
                    gap: "sm",
                    justify: "center",
                    children: [Object(it.jsx)(l.y, {
                      style: {
                        textAlign: "center"
                      },
                      children: I(214, "No pool found.")
                    }), Object(it.jsx)(Nt, {
                      to: "/add/".concat(bo(j), "/").concat(bo(O)),
                      children: "Create pool."
                    })]
                  })
                }) : w === Vo.INVALID ? Object(it.jsx)(wn, {
                  padding: "45px 10px",
                  children: Object(it.jsx)(Me, {
                    gap: "sm",
                    justify: "center",
                    children: Object(it.jsx)(l.y, {
                      style: {
                        textAlign: "center"
                      },
                      children: I(136, "Invalid pair.")
                    })
                  })
                }) : w === Vo.LOADING ? Object(it.jsx)(wn, {
                  padding: "45px 10px",
                  children: Object(it.jsx)(Me, {
                    gap: "sm",
                    justify: "center",
                    children: Object(it.jsxs)(l.y, {
                      style: {
                        textAlign: "center"
                      },
                      children: ["Loading", Object(it.jsx)(il, {})]
                    })
                  })
                }) : null : A]
              }), Object(it.jsx)(Uc, {
                isOpen: a,
                onCurrencySelect: S,
                onDismiss: U,
                showCommonBases: !0,
                selectedCurrency: null !== (e = u === Cl.TOKEN0 ? O : j) && void 0 !== e ? e : void 0
              })]
            })]
          })]
        })
      }! function(e) {
        e[e.TOKEN0 = 0] = "TOKEN0", e[e.TOKEN1 = 1] = "TOKEN1"
      }(Cl || (Cl = {}));
      var Wl, Hl, Ql = n(2),
        Kl = n(534),
        Gl = n(535),
        Xl = d.default.input(Wl || (Wl = Object(u.a)(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ", ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ", ";\n  }\n  &::-ms-fill-upper {\n    background: ", ";\n  }\n"])), (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        }), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        }), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.size
        }), (function(e) {
          return e.size
        }), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.theme.colors.primaryDark
        }), (function(e) {
          return e.theme.colors.tertiary
        }), (function(e) {
          return e.theme.colors.primaryDark
        }), (function(e) {
          return e.theme.colors.tertiary
        }), (function(e) {
          return e.theme.colors.primaryDark
        }), (function(e) {
          return e.theme.colors.primaryDark
        }), (function(e) {
          return e.theme.colors.tertiary
        }));

      function Jl(e) {
        var t = e.value,
          n = e.onChange,
          r = e.min,
          a = void 0 === r ? 0 : r,
          c = e.step,
          o = void 0 === c ? 1 : c,
          s = e.max,
          l = void 0 === s ? 100 : s,
          u = e.size,
          d = void 0 === u ? 28 : u,
          b = Object(i.useCallback)((function(e) {
            n(parseInt(e.target.value))
          }), [n]);
        return Object(it.jsx)(Xl, {
          size: d,
          type: "range",
          value: t,
          style: {
            width: "90%",
            marginLeft: 15,
            marginRight: 15,
            padding: "15px 0"
          },
          onChange: b,
          "aria-labelledby": "input slider",
          step: o,
          min: a,
          max: l
        })
      }! function(e) {
        e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
      }(Hl || (Hl = {}));
      var $l, Zl, eu = Object(Te.b)("burn/typeInputBurn");

      function tu() {
        return Object(v.d)((function(e) {
          return e.burn
        }))
      }
      var nu, ru, au, iu, cu = d.default.div($l || ($l = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding: 24px;\n"])), (function(e) {
          return e.theme.colors.borderColor
        })),
        ou = d.default.div(Zl || (Zl = Object(u.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n"])));

      function su(e) {
        var t, n, r, a, c, o, s, u, b, p, m, y, O, x, g = e.history,
          w = e.match.params,
          k = w.currencyIdA,
          T = w.currencyIdB,
          I = null !== (t = Oa(k)) && void 0 !== t ? t : void 0,
          E = null !== (n = Oa(T)) && void 0 !== n ? n : void 0,
          N = ge(),
          R = N.account,
          S = N.chainId,
          U = N.library,
          A = tr(),
          P = Object(i.useMemo)((function() {
            return [wo(I, S), wo(E, S)]
          }), [I, E, S]),
          B = Object(h.a)(P, 2),
          M = B[0],
          L = B[1],
          D = Object(i.useContext)(d.ThemeContext),
          _ = tu(),
          Y = _.independentField,
          z = _.typedValue,
          F = function(e, t) {
            var n, r, a, i, c, o = ge(),
              s = o.account,
              l = o.chainId,
              u = tu(),
              d = u.independentField,
              b = u.typedValue,
              p = Qo(e, t),
              j = Object(h.a)(p, 2)[1],
              f = ga(null !== s && void 0 !== s ? s : void 0, [null === j || void 0 === j ? void 0 : j.liquidityToken]),
              m = null === f || void 0 === f ? void 0 : f[null !== (n = null === j || void 0 === j || null === (r = j.liquidityToken) || void 0 === r ? void 0 : r.address) && void 0 !== n ? n : ""],
              y = [wo(e, l), wo(t, l)],
              O = y[0],
              v = y[1],
              x = (a = {}, Object(C.a)(a, Hl.CURRENCY_A, O), Object(C.a)(a, Hl.CURRENCY_B, v), Object(C.a)(a, Hl.LIQUIDITY, null === j || void 0 === j ? void 0 : j.liquidityToken), a),
              g = uo(null === j || void 0 === j ? void 0 : j.liquidityToken),
              w = j && g && m && O && J.e.greaterThanOrEqual(g.raw, m.raw) ? new J.k(O, j.getLiquidityValue(O, g, m, !1).raw) : void 0,
              k = j && g && m && v && J.e.greaterThanOrEqual(g.raw, m.raw) ? new J.k(v, j.getLiquidityValue(v, g, m, !1).raw) : void 0,
              T = (i = {}, Object(C.a)(i, Hl.CURRENCY_A, w), Object(C.a)(i, Hl.CURRENCY_B, k), i),
              I = new J.g("0", "100");
            if (d === Hl.LIQUIDITY_PERCENT) I = new J.g(b, "100");
            else if (d === Hl.LIQUIDITY) {
              if (null === j || void 0 === j ? void 0 : j.liquidityToken) {
                var E = Is(b, j.liquidityToken);
                E && m && !E.greaterThan(m) && (I = new J.g(E.raw, m.raw))
              }
            } else if (x[d]) {
              var N = Is(b, x[d]),
                R = T[d];
              N && R && !N.greaterThan(R) && (I = new J.g(N.raw, R.raw))
            }
            var S, U, A = (c = {}, Object(C.a)(c, Hl.LIQUIDITY_PERCENT, I), Object(C.a)(c, Hl.LIQUIDITY, m && I && I.greaterThan("0") ? new J.k(m.token, I.multiply(m.raw).quotient) : void 0), Object(C.a)(c, Hl.CURRENCY_A, O && I && I.greaterThan("0") && w ? new J.k(O, I.multiply(w.raw).quotient) : void 0), Object(C.a)(c, Hl.CURRENCY_B, v && I && I.greaterThan("0") && k ? new J.k(v, I.multiply(k.raw).quotient) : void 0), c);
            return s || (S = "Connect Wallet"), A[Hl.LIQUIDITY] && A[Hl.CURRENCY_A] && A[Hl.CURRENCY_B] || (S = null !== (U = S) && void 0 !== U ? U : "Enter an amount"), {
              pair: j,
              parsedAmounts: A,
              error: S
            }
          }(null !== I && void 0 !== I ? I : void 0, null !== E && void 0 !== E ? E : void 0),
          q = F.pair,
          V = F.parsedAmounts,
          W = F.error,
          H = function() {
            var e = Object(v.c)();
            return {
              onUserInput: Object(i.useCallback)((function(t, n) {
                e(eu({
                  field: t,
                  typedValue: n
                }))
              }), [e])
            }
          }().onUserInput,
          Q = !W,
          K = Object(i.useState)(!1),
          X = Object(h.a)(K, 2),
          Z = X[0],
          ee = X[1],
          te = Object(i.useState)(!1),
          ne = Object(h.a)(te, 2),
          re = ne[0],
          ae = ne[1],
          ie = Object(i.useState)(!1),
          ce = Object(h.a)(ie, 2),
          oe = ce[0],
          se = ce[1],
          le = Object(i.useState)(""),
          ue = Object(h.a)(le, 2),
          de = ue[0],
          be = ue[1],
          pe = Zr(),
          je = Object(h.a)(pe, 1)[0],
          fe = $r(),
          he = Object(h.a)(fe, 1)[0],
          me = (b = {}, Object(C.a)(b, Hl.LIQUIDITY_PERCENT, V[Hl.LIQUIDITY_PERCENT].equalTo("0") ? "0" : V[Hl.LIQUIDITY_PERCENT].lessThan(new J.g("1", "100")) ? "<1" : V[Hl.LIQUIDITY_PERCENT].toFixed(0)), Object(C.a)(b, Hl.LIQUIDITY, Y === Hl.LIQUIDITY ? z : null !== (r = null === (a = V[Hl.LIQUIDITY]) || void 0 === a ? void 0 : a.toSignificant(6)) && void 0 !== r ? r : ""), Object(C.a)(b, Hl.CURRENCY_A, Y === Hl.CURRENCY_A ? z : null !== (c = null === (o = V[Hl.CURRENCY_A]) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== c ? c : ""), Object(C.a)(b, Hl.CURRENCY_B, Y === Hl.CURRENCY_B ? z : null !== (s = null === (u = V[Hl.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== s ? s : ""), b),
          ye = null === (p = V[Hl.LIQUIDITY_PERCENT]) || void 0 === p ? void 0 : p.equalTo(new J.g("1")),
          Oe = ua(null === q || void 0 === q || null === (m = q.liquidityToken) || void 0 === m ? void 0 : m.address, aa.abi, x),
          ve = Object(i.useState)(null),
          xe = Object(h.a)(ve, 2),
          Ce = xe[0],
          we = xe[1],
          ke = ys(V[Hl.LIQUIDITY], $),
          Te = Object(h.a)(ke, 2),
          Ie = Te[0],
          Ee = Te[1];

        function Ne() {
          return (Ne = Object(f.a)(j.a.mark((function e() {
            var t, n, r, a, i, c, o, s;
            return j.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (Oe && q && U) {
                    e.next = 2;
                    break
                  }
                  throw new Error("missing dependencies");
                case 2:
                  if (t = V[Hl.LIQUIDITY]) {
                    e.next = 5;
                    break
                  }
                  throw new Error("missing liquidity amount");
                case 5:
                  return e.next = 7, Oe.nonces(R);
                case 7:
                  n = e.sent, r = Math.ceil(Date.now() / 1e3) + je, a = [{
                    name: "name",
                    type: "string"
                  }, {
                    name: "version",
                    type: "string"
                  }, {
                    name: "chainId",
                    type: "uint256"
                  }, {
                    name: "verifyingContract",
                    type: "address"
                  }], i = {
                    name: "Pancake LPs",
                    version: "1",
                    chainId: S,
                    verifyingContract: q.liquidityToken.address
                  }, c = [{
                    name: "owner",
                    type: "address"
                  }, {
                    name: "spender",
                    type: "address"
                  }, {
                    name: "value",
                    type: "uint256"
                  }, {
                    name: "nonce",
                    type: "uint256"
                  }, {
                    name: "deadline",
                    type: "uint256"
                  }], o = {
                    owner: R,
                    spender: $,
                    value: t.raw.toString(),
                    nonce: n.toHexString(),
                    deadline: r
                  }, s = JSON.stringify({
                    types: {
                      EIP712Domain: a,
                      Permit: c
                    },
                    domain: i,
                    primaryType: "Permit",
                    message: o
                  }), U.send("eth_signTypedData_v4", [R, s]).then(Ql.m).then((function(e) {
                    we({
                      v: e.v,
                      r: e.r,
                      s: e.s,
                      deadline: r
                    })
                  })).catch((function(e) {
                    4001 !== (null === e || void 0 === e ? void 0 : e.code) && Ee()
                  }));
                case 15:
                case "end":
                  return e.stop()
              }
            }), e)
          })))).apply(this, arguments)
        }
        var Re = Object(i.useCallback)((function(e, t) {
            return we(null), H(e, t)
          }), [H]),
          Se = Object(i.useCallback)((function(e) {
            return Re(Hl.LIQUIDITY, e)
          }), [Re]),
          Ue = Object(i.useCallback)((function(e) {
            return Re(Hl.CURRENCY_A, e)
          }), [Re]),
          Ae = Object(i.useCallback)((function(e) {
            return Re(Hl.CURRENCY_B, e)
          }), [Re]),
          Pe = cs();

        function Le() {
          return De.apply(this, arguments)
        }

        function De() {
          return (De = Object(f.a)(j.a.mark((function e() {
            var t, n, r, a, i, c, o, s, l, u, d, b, p, f, h;
            return j.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (S && U && R) {
                    e.next = 2;
                    break
                  }
                  throw new Error("missing dependencies");
                case 2:
                  if (n = V[Hl.CURRENCY_A], r = V[Hl.CURRENCY_B], n && r) {
                    e.next = 5;
                    break
                  }
                  throw new Error("missing currency amounts");
                case 5:
                  if (a = xt(0, U, R), t = {}, Object(C.a)(t, Hl.CURRENCY_A, Ot(n, he)[0]), Object(C.a)(t, Hl.CURRENCY_B, Ot(r, he)[0]), i = t, I && E) {
                    e.next = 9;
                    break
                  }
                  throw new Error("missing tokens");
                case 9:
                  if (c = V[Hl.LIQUIDITY]) {
                    e.next = 12;
                    break
                  }
                  throw new Error("missing liquidity amount");
                case 12:
                  if (o = E === J.d, s = I === J.d || o, l = Math.ceil(Date.now() / 1e3) + je, M && L) {
                    e.next = 17;
                    break
                  }
                  throw new Error("could not wrap");
                case 17:
                  if (Ie !== ls.APPROVED) {
                    e.next = 21;
                    break
                  }
                  s ? (u = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"], d = [o ? M.address : L.address, c.raw.toString(), i[o ? Hl.CURRENCY_A : Hl.CURRENCY_B].toString(), i[o ? Hl.CURRENCY_B : Hl.CURRENCY_A].toString(), R, l]) : (u = ["removeLiquidity"], d = [M.address, L.address, c.raw.toString(), i[Hl.CURRENCY_A].toString(), i[Hl.CURRENCY_B].toString(), R, l]), e.next = 26;
                  break;
                case 21:
                  if (null === Ce) {
                    e.next = 25;
                    break
                  }
                  s ? (u = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"], d = [o ? M.address : L.address, c.raw.toString(), i[o ? Hl.CURRENCY_A : Hl.CURRENCY_B].toString(), i[o ? Hl.CURRENCY_B : Hl.CURRENCY_A].toString(), R, Ce.deadline, !1, Ce.v, Ce.r, Ce.s]) : (u = ["removeLiquidityWithPermit"], d = [M.address, L.address, c.raw.toString(), i[Hl.CURRENCY_A].toString(), i[Hl.CURRENCY_B].toString(), R, Ce.deadline, !1, Ce.v, Ce.r, Ce.s]), e.next = 26;
                  break;
                case 25:
                  throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                case 26:
                  return e.next = 28, Promise.all(u.map((function(e, t) {
                    var n;
                    return (n = a.estimateGas)[e].apply(n, Object(G.a)(d)).then(yt).catch((function(n) {
                      console.error("estimateGas failed", t, e, d, n)
                    }))
                  })));
                case 28:
                  if (b = e.sent, -1 !== (p = b.findIndex((function(e) {
                      return bt.a.isBigNumber(e)
                    })))) {
                    e.next = 34;
                    break
                  }
                  console.error("This transaction would fail. Please contact support."), e.next = 39;
                  break;
                case 34:
                  return f = u[p], h = b[p], se(!0), e.next = 39, a[f].apply(a, Object(G.a)(d).concat([{
                    gasLimit: h
                  }])).then((function(e) {
                    var t, n;
                    se(!1), Pe(e, {
                      summary: "Remove ".concat(null === (t = V[Hl.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === I || void 0 === I ? void 0 : I.symbol, " and ").concat(null === (n = V[Hl.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === E || void 0 === E ? void 0 : E.symbol)
                    }), be(e.hash)
                  })).catch((function(e) {
                    se(!1), console.error(e)
                  }));
                case 39:
                case "end":
                  return e.stop()
              }
            }), e)
          })))).apply(this, arguments)
        }

        function _e() {
          var e, t;
          return Object(it.jsxs)(Me, {
            gap: "md",
            style: {
              marginTop: "20px"
            },
            children: [Object(it.jsxs)(et, {
              align: "flex-end",
              children: [Object(it.jsx)(l.y, {
                fontSize: "24px",
                children: null === (e = V[Hl.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6)
              }), Object(it.jsxs)(rt, {
                gap: "4px",
                children: [Object(it.jsx)(yi, {
                  currency: I,
                  size: "24px"
                }), Object(it.jsx)(l.y, {
                  fontSize: "24px",
                  style: {
                    marginLeft: "10px"
                  },
                  children: null === I || void 0 === I ? void 0 : I.symbol
                })]
              })]
            }), Object(it.jsx)(rt, {
              children: Object(it.jsx)(Kl.a, {
                size: "16",
                color: D.colors.textSubtle
              })
            }), Object(it.jsxs)(et, {
              align: "flex-end",
              children: [Object(it.jsx)(l.y, {
                fontSize: "24px",
                children: null === (t = V[Hl.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(6)
              }), Object(it.jsxs)(rt, {
                gap: "4px",
                children: [Object(it.jsx)(yi, {
                  currency: E,
                  size: "24px"
                }), Object(it.jsx)(l.y, {
                  fontSize: "24px",
                  style: {
                    marginLeft: "10px"
                  },
                  children: null === E || void 0 === E ? void 0 : E.symbol
                })]
              })]
            }), Object(it.jsx)(l.y, {
              small: !0,
              color: "textSubtle",
              textAlign: "left",
              padding: "12px 0 0 0",
              style: {
                fontStyle: "italic"
              },
              children: "Output is estimated. If the price changes by more than ".concat(he / 100, "% your transaction will revert.")
            })]
          })
        }

        function Ye() {
          var e;
          return Object(it.jsxs)(it.Fragment, {
            children: [Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(l.y, {
                color: "textSubtle",
                children: ["LP ".concat(null === I || void 0 === I ? void 0 : I.symbol, "/").concat(null === E || void 0 === E ? void 0 : E.symbol), " Burned"]
              }), Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(Lc, {
                  currency0: I,
                  currency1: E,
                  margin: !0
                }), Object(it.jsx)(l.y, {
                  children: null === (e = V[Hl.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6)
                })]
              })]
            }), q && Object(it.jsxs)(it.Fragment, {
              children: [Object(it.jsxs)(et, {
                children: [Object(it.jsx)(l.y, {
                  color: "textSubtle",
                  children: A(1182, "Price")
                }), Object(it.jsxs)(l.y, {
                  children: ["1 ", null === I || void 0 === I ? void 0 : I.symbol, " = ", M ? q.priceOf(M).toSignificant(6) : "-", " ", null === E || void 0 === E ? void 0 : E.symbol]
                })]
              }), Object(it.jsxs)(et, {
                children: [Object(it.jsx)("div", {}), Object(it.jsxs)(l.y, {
                  children: ["1 ", null === E || void 0 === E ? void 0 : E.symbol, " = ", L ? q.priceOf(L).toSignificant(6) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol]
                })]
              })]
            }), Object(it.jsx)(l.c, {
              disabled: !(Ie === ls.APPROVED || null !== Ce),
              onClick: Le,
              children: A(1136, "Confirm")
            })]
          })
        }
        var ze = "Removing ".concat(null === (y = V[Hl.CURRENCY_A]) || void 0 === y ? void 0 : y.toSignificant(6), " ").concat(null === I || void 0 === I ? void 0 : I.symbol, " and ").concat(null === (O = V[Hl.CURRENCY_B]) || void 0 === O ? void 0 : O.toSignificant(6), " ").concat(null === E || void 0 === E ? void 0 : E.symbol),
          Fe = Object(i.useCallback)((function(e) {
            Re(Hl.LIQUIDITY_PERCENT, e.toString())
          }), [Re]),
          qe = I === J.d || E === J.d,
          Ve = Boolean(S && (I && Object(J.o)(J.n[S], I) || E && Object(J.o)(J.n[S], E))),
          We = Object(i.useCallback)((function(e) {
            T && bo(e) === T ? g.push("/remove/".concat(bo(e), "/").concat(k)) : g.push("/remove/".concat(bo(e), "/").concat(T))
          }), [k, T, g]),
          He = Object(i.useCallback)((function(e) {
            k && bo(e) === k ? g.push("/remove/".concat(T, "/").concat(bo(e))) : g.push("/remove/".concat(k, "/").concat(bo(e)))
          }), [k, T, g]),
          Qe = Object(i.useCallback)((function() {
            ee(!1), we(null), de && Re(Hl.LIQUIDITY_PERCENT, "0"), be("")
          }), [Re, de]),
          Ke = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
              r = Object(i.useState)((function() {
                return e
              })),
              a = Object(h.a)(r, 2),
              c = a[0],
              o = a[1],
              s = Object(i.useRef)(),
              l = Object(i.useCallback)((function(e) {
                o(e), s.current && clearTimeout(s.current), s.current = setTimeout((function() {
                  t(e), s.current = void 0
                }), n)
              }), [n, t]);
            return Object(i.useEffect)((function() {
              s.current && (clearTimeout(s.current), s.current = void 0), o(e)
            }), [e]), [c, l]
          }(Number.parseInt(V[Hl.LIQUIDITY_PERCENT].toFixed(0)), Fe),
          Ge = Object(h.a)(Ke, 2),
          Xe = Ge[0],
          Je = Ge[1];
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsxs)(nl, {
            children: [Object(it.jsx)(oo, {
              adding: !1
            }), Object(it.jsxs)(rl, {
              children: [Object(it.jsx)(Gn, {
                isOpen: Z,
                onDismiss: Qe,
                attemptingTxn: oe,
                hash: de || "",
                content: function() {
                  return Object(it.jsx)(Hn, {
                    title: A(1156, "You will receive"),
                    onDismiss: Qe,
                    topContent: _e,
                    bottomContent: Ye
                  })
                },
                pendingText: ze
              }), Object(it.jsxs)(Me, {
                gap: "md",
                children: [Object(it.jsx)(ou, {
                  children: Object(it.jsx)(cu, {
                    children: Object(it.jsxs)(Me, {
                      children: [Object(it.jsxs)(et, {
                        children: [Object(it.jsx)(l.y, {
                          children: "Amount"
                        }), Object(it.jsx)(al, {
                          onClick: function() {
                            ae(!re)
                          },
                          children: re ? A(1184, "Simple") : A(1186, "Detailed")
                        })]
                      }), Object(it.jsx)(l.n, {
                        justifyContent: "start",
                        children: Object(it.jsxs)(l.y, {
                          fontSize: "64px",
                          children: [me[Hl.LIQUIDITY_PERCENT], "%"]
                        })
                      }), !re && Object(it.jsxs)(it.Fragment, {
                        children: [Object(it.jsx)(l.n, {
                          mb: "8px",
                          children: Object(it.jsx)(Jl, {
                            value: Xe,
                            onChange: Je
                          })
                        }), Object(it.jsxs)(l.n, {
                          justifyContent: "space-around",
                          children: [Object(it.jsx)(l.c, {
                            variant: "tertiary",
                            scale: "sm",
                            onClick: function() {
                              return Re(Hl.LIQUIDITY_PERCENT, "25")
                            },
                            children: "25%"
                          }), Object(it.jsx)(l.c, {
                            variant: "tertiary",
                            scale: "sm",
                            onClick: function() {
                              return Re(Hl.LIQUIDITY_PERCENT, "50")
                            },
                            children: "50%"
                          }), Object(it.jsx)(l.c, {
                            variant: "tertiary",
                            scale: "sm",
                            onClick: function() {
                              return Re(Hl.LIQUIDITY_PERCENT, "75")
                            },
                            children: "75%"
                          }), Object(it.jsx)(l.c, {
                            variant: "tertiary",
                            scale: "sm",
                            onClick: function() {
                              return Re(Hl.LIQUIDITY_PERCENT, "100")
                            },
                            children: A(166, "Max")
                          })]
                        })]
                      })]
                    })
                  })
                }), !re && Object(it.jsxs)(it.Fragment, {
                  children: [Object(it.jsx)(Be, {
                    children: Object(it.jsx)(Gl.a, {
                      size: "16",
                      color: D.colors.textSubtle
                    })
                  }), Object(it.jsx)(ou, {
                    children: Object(it.jsx)(cu, {
                      children: Object(it.jsxs)(Me, {
                        gap: "10px",
                        children: [Object(it.jsxs)(et, {
                          children: [Object(it.jsx)(l.y, {
                            fontSize: "24px",
                            children: me[Hl.CURRENCY_A] || "-"
                          }), Object(it.jsxs)(rt, {
                            children: [Object(it.jsx)(yi, {
                              currency: I,
                              style: {
                                marginRight: "12px"
                              }
                            }), Object(it.jsx)(l.y, {
                              fontSize: "24px",
                              id: "remove-liquidity-tokena-symbol",
                              children: null === I || void 0 === I ? void 0 : I.symbol
                            })]
                          })]
                        }), Object(it.jsxs)(et, {
                          children: [Object(it.jsx)(l.y, {
                            fontSize: "24px",
                            children: me[Hl.CURRENCY_B] || "-"
                          }), Object(it.jsxs)(rt, {
                            children: [Object(it.jsx)(yi, {
                              currency: E,
                              style: {
                                marginRight: "12px"
                              }
                            }), Object(it.jsx)(l.y, {
                              fontSize: "24px",
                              id: "remove-liquidity-tokenb-symbol",
                              children: null === E || void 0 === E ? void 0 : E.symbol
                            })]
                          })]
                        }), S && (Ve || qe) ? Object(it.jsx)(et, {
                          style: {
                            justifyContent: "flex-end"
                          },
                          children: qe ? Object(it.jsx)(Nt, {
                            to: "/remove/".concat(I === J.d ? J.n[S].address : k, "/").concat(E === J.d ? J.n[S].address : T),
                            children: A(1188, "Receive WBNB")
                          }) : Ve ? Object(it.jsx)(Nt, {
                            to: "/remove/".concat(I && Object(J.o)(I, J.n[S]) ? "BNB" : k, "/").concat(E && Object(J.o)(E, J.n[S]) ? "BNB" : T),
                            children: A(1190, "Receive BNB")
                          }) : null
                        }) : null]
                      })
                    })
                  })]
                }), Object(it.jsxs)(ou, {
                  style: {
                    paddingBottom: "24px"
                  },
                  children: [re && Object(it.jsxs)(it.Fragment, {
                    children: [Object(it.jsx)(no, {
                      value: me[Hl.LIQUIDITY],
                      onUserInput: Se,
                      onMax: function() {
                        Re(Hl.LIQUIDITY_PERCENT, "100")
                      },
                      showMaxButton: !ye,
                      disableCurrencySelect: !0,
                      currency: null === q || void 0 === q ? void 0 : q.liquidityToken,
                      pair: q,
                      id: "liquidity-amount"
                    }), Object(it.jsx)(Be, {
                      children: Object(it.jsx)(Gl.a, {
                        size: "16",
                        color: D.colors.textSubtle
                      })
                    }), Object(it.jsx)(no, {
                      hideBalance: !0,
                      value: me[Hl.CURRENCY_A],
                      onUserInput: Ue,
                      onMax: function() {
                        return Re(Hl.LIQUIDITY_PERCENT, "100")
                      },
                      showMaxButton: !ye,
                      currency: I,
                      label: "Output",
                      onCurrencySelect: We,
                      id: "remove-liquidity-tokena"
                    }), Object(it.jsx)(Be, {
                      children: Object(it.jsx)(Kl.a, {
                        size: "16",
                        color: D.colors.textSubtle
                      })
                    }), Object(it.jsx)(no, {
                      hideBalance: !0,
                      value: me[Hl.CURRENCY_B],
                      onUserInput: Ae,
                      onMax: function() {
                        return Re(Hl.LIQUIDITY_PERCENT, "100")
                      },
                      showMaxButton: !ye,
                      currency: E,
                      label: "Output",
                      onCurrencySelect: He,
                      id: "remove-liquidity-tokenb"
                    })]
                  }), q && Object(it.jsxs)("div", {
                    style: {
                      padding: "24px"
                    },
                    children: [Object(it.jsxs)(l.n, {
                      justifyContent: "space-between",
                      mb: "8px",
                      children: ["Price:", Object(it.jsxs)("div", {
                        children: ["1 ", null === I || void 0 === I ? void 0 : I.symbol, " = ", M ? q.priceOf(M).toSignificant(6) : "-", " ", null === E || void 0 === E ? void 0 : E.symbol]
                      })]
                    }), Object(it.jsxs)(l.n, {
                      justifyContent: "space-between",
                      children: [Object(it.jsx)("div", {}), Object(it.jsxs)("div", {
                        children: ["1 ", null === E || void 0 === E ? void 0 : E.symbol, " = ", L ? q.priceOf(L).toSignificant(6) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol]
                      })]
                    })]
                  }), Object(it.jsx)("div", {
                    style: {
                      position: "relative"
                    },
                    children: R ? Object(it.jsxs)(et, {
                      children: [Object(it.jsx)(l.c, {
                        onClick: function() {
                          return Ne.apply(this, arguments)
                        },
                        variant: Ie === ls.APPROVED || null !== Ce ? "success" : "primary",
                        disabled: Ie !== ls.NOT_APPROVED || null !== Ce,
                        mr: "8px",
                        children: Ie === ls.PENDING ? Object(it.jsx)(Ao, {
                          children: "Approving"
                        }) : Ie === ls.APPROVED || null !== Ce ? "Approved" : "Approve"
                      }), Object(it.jsx)(l.c, {
                        onClick: function() {
                          ee(!0)
                        },
                        disabled: !Q || null === Ce && Ie !== ls.APPROVED,
                        variant: !Q && V[Hl.CURRENCY_A] && V[Hl.CURRENCY_B] ? "danger" : "primary",
                        children: W || "Remove"
                      })]
                    }) : Object(it.jsx)(el, {
                      width: "100%"
                    })
                  })]
                })]
              })]
            })]
          }), q ? Object(it.jsx)(Me, {
            style: {
              minWidth: "20rem",
              marginTop: "1rem"
            },
            children: Object(it.jsx)(Fo, {
              showUnwrapped: Ve,
              pair: q
            })
          }) : null]
        })
      }
      var lu = d.default.div(nu || (nu = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        })),
        uu = d.default.div(ru || (ru = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"])), (function(e) {
          var t = e.error,
            n = e.theme;
          return t ? n.colors.failure : n.colors.invertedContrast
        }), (function(e) {
          return e.error ? "step-end" : "step-start"
        }), (function(e) {
          return e.error ? "step-end" : "step-start"
        }), (function(e) {
          return e.theme.colors.invertedContrast
        })),
        du = d.default.div(au || (au = Object(u.a)(["\n  flex: 1;\n  padding: 1rem;\n"]))),
        bu = d.default.input(iu || (iu = Object(u.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), (function(e) {
          return e.theme.colors.invertedContrast
        }), (function(e) {
          return e.error ? "step-end" : "step-start"
        }), (function(e) {
          var t = e.error,
            n = e.theme;
          return t ? n.colors.failure : n.colors.primary
        }), (function(e) {
          return e.theme.colors.textDisabled
        }), (function(e) {
          return e.theme.colors.textDisabled
        }));

      function pu(e) {
        var t = e.id,
          n = e.value,
          r = e.onChange,
          a = ge().chainId,
          c = tr(),
          o = Cs(n),
          s = o.address,
          u = o.loading,
          d = o.name,
          b = Object(i.useCallback)((function(e) {
            var t = e.target.value.replace(/\s+/g, "");
            r(t)
          }), [r]),
          p = Boolean(n.length > 0 && !u && !s);
        return Object(it.jsx)(lu, {
          id: t,
          children: Object(it.jsx)(uu, {
            error: p,
            children: Object(it.jsx)(du, {
              children: Object(it.jsxs)(Me, {
                gap: "md",
                children: [Object(it.jsxs)(et, {
                  children: [Object(it.jsx)(l.y, {
                    color: "textSubtle",
                    fontWeight: 500,
                    fontSize: "14px",
                    children: c(1138, "Recipient")
                  }), s && a && Object(it.jsx)(St, {
                    href: ht(a, null !== d && void 0 !== d ? d : s, "address"),
                    style: {
                      fontSize: "14px"
                    },
                    children: c(116, "(View on BscScan)")
                  })]
                }), Object(it.jsx)(bu, {
                  className: "recipient-address-input",
                  type: "text",
                  autoComplete: "off",
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  spellCheck: "false",
                  placeholder: c(1140, "Wallet Address or ENS name"),
                  error: p,
                  pattern: "^(0x[a-fA-F0-9]{40})$",
                  onChange: b,
                  value: n
                })]
              })
            })
          })
        })
      }
      var ju, fu = n(536);

      function hu(e) {
        var t = e.priceImpact;
        return Object(it.jsx)(So, {
          fontSize: "14px",
          severity: hs(t),
          children: t ? t.lessThan(je) ? "<0.01%" : "".concat(t.toFixed(2), "%") : "-"
        })
      }

      function mu(e) {
        var t, n, r, a, c = e.trade,
          o = e.onConfirm,
          s = e.allowedSlippage,
          u = e.swapErrorMessage,
          d = e.disabledConfirm,
          b = Object(i.useState)(!1),
          p = Object(h.a)(b, 2),
          j = p[0],
          f = p[1],
          m = Object(i.useMemo)((function() {
            return fs(c, s)
          }), [s, c]),
          y = Object(i.useMemo)((function() {
            return js(c)
          }), [c]),
          O = y.priceImpactWithoutFee,
          v = y.realizedLPFee,
          x = hs(O),
          g = tr();
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsxs)(Me, {
            gap: "0px",
            children: [Object(it.jsxs)(et, {
              align: "center",
              children: [Object(it.jsx)(l.y, {
                fontSize: "14px",
                children: "Price"
              }), Object(it.jsxs)(l.y, {
                fontSize: "14px",
                style: {
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  textAlign: "right",
                  paddingLeft: "8px",
                  fontWeight: 500
                },
                children: [ms(c, j), Object(it.jsx)(Uo, {
                  onClick: function() {
                    return f(!j)
                  },
                  children: Object(it.jsx)(fu.a, {
                    size: 14
                  })
                })]
              })]
            }), Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: c.tradeType === J.m.EXACT_INPUT ? g(1210, "Minimum received") : g(220, "Maximum sold")
                }), Object(it.jsx)(ui, {
                  text: g(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.")
                })]
              }), Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: c.tradeType === J.m.EXACT_INPUT ? null !== (t = null === (n = m[Xo.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== t ? t : "-" : null !== (r = null === (a = m[Xo.INPUT]) || void 0 === a ? void 0 : a.toSignificant(4)) && void 0 !== r ? r : "-"
                }), Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  marginLeft: "4px",
                  children: c.tradeType === J.m.EXACT_INPUT ? c.outputAmount.currency.symbol : c.inputAmount.currency.symbol
                })]
              })]
            }), Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: g(226, "Price Impact")
                }), Object(it.jsx)(ui, {
                  text: g(224, "The difference between the market price and your price due to trade size.")
                })]
              }), Object(it.jsx)(hu, {
                priceImpact: O
              })]
            }), Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: g(228, "Liquidity Provider Fee")
                }), Object(it.jsx)(ui, {
                  text: g(999, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.")
                })]
              }), Object(it.jsx)(l.y, {
                fontSize: "14px",
                children: v ? "".concat(null === v || void 0 === v ? void 0 : v.toSignificant(6), " ").concat(c.inputAmount.currency.symbol) : "-"
              })]
            })]
          }), Object(it.jsxs)(nt, {
            children: [Object(it.jsx)(l.c, {
              onClick: o,
              disabled: d,
              variant: x > 2 ? "danger" : "primary",
              mt: "10px",
              id: "confirm-swap-or-send",
              width: "100%",
              children: x > 2 ? "Swap Anyway" : "Confirm Swap"
            }), u ? Object(it.jsx)(Mo, {
              error: u
            }) : null]
          })]
        })
      }
      var yu = Object(d.default)(l.y)(ju || (ju = Object(u.a)(["\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ", ";\n    font-weight: 600;\n  }\n"])), (function(e) {
        return e.theme.colors.primary
      }));

      function Ou(e) {
        var t, n, r = e.trade,
          a = e.allowedSlippage,
          c = e.recipient,
          o = e.showAcceptChanges,
          s = e.onAcceptChanges,
          u = Object(i.useMemo)((function() {
            return fs(r, a)
          }), [r, a]),
          b = hs(Object(i.useMemo)((function() {
            return js(r)
          }), [r]).priceImpactWithoutFee),
          p = Object(i.useContext)(d.ThemeContext);
        return Object(it.jsxs)(Me, {
          gap: "md",
          style: {
            marginTop: "20px"
          },
          children: [Object(it.jsxs)(et, {
            align: "flex-end",
            children: [Object(it.jsxs)(rt, {
              gap: "0px",
              children: [Object(it.jsx)(yi, {
                currency: r.inputAmount.currency,
                size: "24px",
                style: {
                  marginRight: "12px"
                }
              }), Object(it.jsx)(l.y, {
                fontSize: "24px",
                color: o && r.tradeType === J.m.EXACT_OUTPUT ? p.colors.primary : "text",
                children: r.inputAmount.toSignificant(6)
              })]
            }), Object(it.jsx)(rt, {
              gap: "0px",
              children: Object(it.jsx)(l.y, {
                fontSize: "24px",
                style: {
                  marginLeft: "10px",
                  fontWeight: 500
                },
                children: r.inputAmount.currency.symbol
              })
            })]
          }), Object(it.jsx)(rt, {
            children: Object(it.jsx)(Gl.a, {
              size: "16",
              color: p.colors.textSubtle,
              style: {
                marginLeft: "4px",
                minWidth: "16px"
              }
            })
          }), Object(it.jsxs)(et, {
            align: "flex-end",
            children: [Object(it.jsxs)(rt, {
              gap: "0px",
              children: [Object(it.jsx)(yi, {
                currency: r.outputAmount.currency,
                size: "24px",
                style: {
                  marginRight: "12px"
                }
              }), Object(it.jsx)(l.y, {
                fontSize: "24px",
                style: {
                  marginLeft: "10px",
                  fontWeight: 500
                },
                color: b > 2 ? p.colors.failure : o && r.tradeType === J.m.EXACT_INPUT ? p.colors.primary : "text",
                children: r.outputAmount.toSignificant(6)
              })]
            }), Object(it.jsx)(rt, {
              gap: "0px",
              children: Object(it.jsx)(l.y, {
                fontSize: "24px",
                style: {
                  marginLeft: "10px",
                  fontWeight: 500
                },
                children: r.outputAmount.currency.symbol
              })
            })]
          }), o ? Object(it.jsx)(_o, {
            justify: "flex-start",
            gap: "0px",
            children: Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(Qn.a, {
                  size: 20,
                  style: {
                    marginRight: "8px",
                    minWidth: 24
                  }
                }), Object(it.jsx)(l.y, {
                  color: "primary",
                  children: " Price Updated"
                })]
              }), Object(it.jsx)(l.c, {
                onClick: s,
                children: "Accept"
              })]
            })
          }) : null, Object(it.jsx)(Me, {
            justify: "flex-start",
            gap: "sm",
            style: {
              padding: "16px 0 0"
            },
            children: r.tradeType === J.m.EXACT_INPUT ? Object(it.jsxs)(yu, {
              children: ["Output is estimated. You will receive at least ", Object(it.jsxs)("span", {
                children: [null === (t = u[Xo.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(6), " ", r.outputAmount.currency.symbol]
              }), " or the transaction will revert."]
            }) : Object(it.jsxs)(yu, {
              children: ["Input is estimated. You will sell at most ", Object(it.jsxs)("span", {
                children: [null === (n = u[Xo.INPUT]) || void 0 === n ? void 0 : n.toSignificant(6), " ", r.inputAmount.currency.symbol]
              }), " or the transaction will revert."]
            })
          }), null !== c ? Object(it.jsx)(Me, {
            justify: "flex-start",
            gap: "sm",
            style: {
              padding: "16px 0 0"
            },
            children: Object(it.jsxs)(l.y, {
              children: ["Output will be sent to", " ", Object(it.jsx)("b", {
                title: c,
                children: jt(c) ? mt(c) : c
              })]
            })
          }) : null]
        })
      }

      function vu(e) {
        var t, n, r, a, c, o, s = e.trade,
          l = e.originalTrade,
          u = e.onAcceptChanges,
          d = e.allowedSlippage,
          b = e.onConfirm,
          p = e.onDismiss,
          j = e.recipient,
          f = e.swapErrorMessage,
          h = e.isOpen,
          m = e.attemptingTxn,
          y = e.txHash,
          O = Object(i.useMemo)((function() {
            return Boolean(s && l && (t = l, (e = s).tradeType !== t.tradeType || !Object(J.o)(e.inputAmount.currency, t.inputAmount.currency) || !e.inputAmount.equalTo(t.inputAmount) || !Object(J.o)(e.outputAmount.currency, t.outputAmount.currency) || !e.outputAmount.equalTo(t.outputAmount)));
            var e, t
          }), [l, s]),
          v = Object(i.useCallback)((function() {
            return s ? Object(it.jsx)(Ou, {
              trade: s,
              allowedSlippage: d,
              recipient: j,
              showAcceptChanges: O,
              onAcceptChanges: u
            }) : null
          }), [d, u, j, O, s]),
          x = Object(i.useCallback)((function() {
            return s ? Object(it.jsx)(mu, {
              onConfirm: b,
              trade: s,
              disabledConfirm: O,
              swapErrorMessage: f,
              allowedSlippage: d
            }) : null
          }), [d, b, O, f, s]),
          g = "Swapping ".concat(null === s || void 0 === s || null === (t = s.inputAmount) || void 0 === t ? void 0 : t.toSignificant(6), " ").concat(null === s || void 0 === s || null === (n = s.inputAmount) || void 0 === n || null === (r = n.currency) || void 0 === r ? void 0 : r.symbol, " for ").concat(null === s || void 0 === s || null === (a = s.outputAmount) || void 0 === a ? void 0 : a.toSignificant(6), " ").concat(null === s || void 0 === s || null === (c = s.outputAmount) || void 0 === c || null === (o = c.currency) || void 0 === o ? void 0 : o.symbol),
          C = Object(i.useCallback)((function() {
            return f ? Object(it.jsx)(Kn, {
              onDismiss: p,
              message: f
            }) : Object(it.jsx)(Hn, {
              title: "Confirm Swap",
              onDismiss: p,
              topContent: v,
              bottomContent: x
            })
          }), [p, x, v, f]);
        return Object(it.jsx)(Gn, {
          isOpen: h,
          onDismiss: p,
          attemptingTxn: m,
          hash: y,
          content: C,
          pendingText: g
        })
      }
      var xu, gu = n(537),
        Cu = Object(i.memo)((function(e) {
          var t = e.trade,
            n = Object(i.useContext)(d.ThemeContext);
          return Object(it.jsx)(l.n, {
            px: "1rem",
            py: "0.5rem",
            my: "0.5rem",
            style: {
              border: "1px solid ".concat(n.colors.tertiary),
              borderRadius: "1rem"
            },
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            children: t.route.path.map((function(e, t, n) {
              var r = t === n.length - 1;
              return Object(it.jsxs)(i.Fragment, {
                children: [Object(it.jsxs)(l.n, {
                  my: "0.5rem",
                  alignItems: "center",
                  style: {
                    flexShrink: 0
                  },
                  children: [Object(it.jsx)(yi, {
                    currency: e,
                    size: "1.5rem"
                  }), Object(it.jsx)(l.y, {
                    fontSize: "14px",
                    color: "text",
                    ml: "0.5rem",
                    children: e.symbol
                  })]
                }), r ? null : Object(it.jsx)(gu.a, {
                  color: "textSubtle"
                })]
              }, t)
            }))
          })
        }));

      function wu(e) {
        var t, n, r, a, i = e.trade,
          c = e.allowedSlippage,
          o = js(i),
          s = o.priceImpactWithoutFee,
          u = o.realizedLPFee,
          d = i.tradeType === J.m.EXACT_INPUT,
          b = fs(i, c),
          p = tr();
        return Object(it.jsx)(l.f, {
          children: Object(it.jsxs)(l.g, {
            children: [Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: d ? p(1210, "Minimum received") : p(220, "Maximum sold")
                }), Object(it.jsx)(ui, {
                  text: p(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.")
                })]
              }), Object(it.jsx)(rt, {
                children: Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: d ? null !== (t = "".concat(null === (n = b[Xo.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), " ").concat(i.outputAmount.currency.symbol)) && void 0 !== t ? t : "-" : null !== (r = "".concat(null === (a = b[Xo.INPUT]) || void 0 === a ? void 0 : a.toSignificant(4), " ").concat(i.inputAmount.currency.symbol)) && void 0 !== r ? r : "-"
                })
              })]
            }), Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: p(226, "Price Impact")
                }), Object(it.jsx)(ui, {
                  text: p(224, "The difference between the market price and estimated price due to trade size.")
                })]
              }), Object(it.jsx)(hu, {
                priceImpact: s
              })]
            }), Object(it.jsxs)(et, {
              children: [Object(it.jsxs)(rt, {
                children: [Object(it.jsx)(l.y, {
                  fontSize: "14px",
                  children: p(228, "Liquidity Provider Fee")
                }), Object(it.jsx)(ui, {
                  text: p(230, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.")
                })]
              }), Object(it.jsx)(l.y, {
                fontSize: "14px",
                children: u ? "".concat(u.toSignificant(4), " ").concat(i.inputAmount.currency.symbol) : "-"
              })]
            })]
          })
        })
      }

      function ku(e) {
        var t = e.trade,
          n = $r(),
          r = Object(h.a)(n, 1)[0],
          a = tr(),
          i = Boolean(t && t.route.path.length > 2);
        return Object(it.jsx)(Me, {
          gap: "md",
          children: t && Object(it.jsxs)(it.Fragment, {
            children: [Object(it.jsx)(wu, {
              trade: t,
              allowedSlippage: r
            }), i && Object(it.jsxs)(it.Fragment, {
              children: [Object(it.jsx)(No, {}), Object(it.jsxs)(Me, {
                style: {
                  padding: "0 24px"
                },
                children: [Object(it.jsxs)(rt, {
                  children: [Object(it.jsx)(l.y, {
                    fontSize: "14px",
                    children: "Route"
                  }), Object(it.jsx)(ui, {
                    text: a(999, "Routing through these tokens resulted in the best price for your trade.")
                  })]
                }), Object(it.jsx)(Cu, {
                  trade: t
                })]
              })]
            })]
          })
        })
      }
      var Tu, Iu, Eu, Nu = d.default.div(xu || (xu = Object(u.a)(["\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  z-index: 1;\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"])), (function(e) {
        return e.theme.colors.textSubtle
      }), (function(e) {
        return e.show ? "translateY(0%)" : "translateY(-100%)"
      }));

      function Ru(e) {
        var t, n = e.trade,
          r = Object(It.a)(e, ["trade"]),
          a = Ta(n, Ia);
        return Object(it.jsx)(Nu, {
          show: Boolean(n),
          children: Object(it.jsx)(ku, Object(X.a)(Object(X.a)({}, r), {}, {
            trade: null !== (t = null !== n && void 0 !== n ? n : a) && void 0 !== t ? t : void 0
          }))
        })
      }

      function Su(e) {
        var t, n, r, a, i, c = e.price,
          o = e.showInverted,
          s = e.setShowInverted,
          u = o ? null === c || void 0 === c ? void 0 : c.toSignificant(6) : null === c || void 0 === c || null === (t = c.invert()) || void 0 === t ? void 0 : t.toSignificant(6),
          d = Boolean((null === c || void 0 === c ? void 0 : c.baseCurrency) && (null === c || void 0 === c ? void 0 : c.quoteCurrency)),
          b = o ? "".concat(null === c || void 0 === c || null === (n = c.quoteCurrency) || void 0 === n ? void 0 : n.symbol, " per ").concat(null === c || void 0 === c || null === (r = c.baseCurrency) || void 0 === r ? void 0 : r.symbol) : "".concat(null === c || void 0 === c || null === (a = c.baseCurrency) || void 0 === a ? void 0 : a.symbol, " per ").concat(null === c || void 0 === c || null === (i = c.quoteCurrency) || void 0 === i ? void 0 : i.symbol);
        return Object(it.jsx)(l.y, {
          fontSize: "14px",
          style: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          },
          children: d ? Object(it.jsxs)(it.Fragment, {
            children: [null !== u && void 0 !== u ? u : "-", " ", b, Object(it.jsx)(Uo, {
              onClick: function() {
                return s(!o)
              },
              children: Object(it.jsx)(l.x, {
                width: "20px",
                color: "primary"
              })
            })]
          }) : "-"
        })
      }
      var Uu, Au, Pu = d.default.div(Tu || (Tu = Object(u.a)(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"])), (function(e) {
          var t = e.theme;
          return Object(In.b)(.6, t.colors.tertiary)
        })),
        Bu = d.default.div(Iu || (Iu = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]))),
        Mu = Object(d.default)(Qn.a)(Eu || (Eu = Object(u.a)(["\n  stroke: ", ";\n"])), (function(e) {
          return e.theme.colors.failure
        }));

      function Lu(e) {
        var t, n, r, a, c = e.token,
          o = ge().chainId,
          s = tr(),
          u = null !== (t = null === c || void 0 === c || null === (n = c.symbol) || void 0 === n ? void 0 : n.toLowerCase()) && void 0 !== t ? t : "",
          d = null !== (r = null === c || void 0 === c || null === (a = c.name) || void 0 === a ? void 0 : a.toLowerCase()) && void 0 !== r ? r : "",
          b = fa(),
          p = Object(i.useMemo)((function() {
            return !(!c || !o) && Object.keys(b).some((function(e) {
              var t, n, r = b[e];
              return !r.equals(c) && ((null === (t = r.symbol) || void 0 === t ? void 0 : t.toLowerCase()) === u || (null === (n = r.name) || void 0 === n ? void 0 : n.toLowerCase()) === d)
            }))
          }), [c, o, b, u, d]);
        return c ? Object(it.jsx)(Pu, {
          error: p,
          children: Object(it.jsxs)(nt, {
            gap: "6px",
            children: [Object(it.jsxs)(Me, {
              gap: "24px",
              children: [Object(it.jsx)(yi, {
                currency: c,
                size: "16px"
              }), Object(it.jsx)("div", {
                children: " "
              })]
            }), Object(it.jsxs)(Me, {
              gap: "10px",
              justify: "flex-start",
              children: [Object(it.jsxs)(l.y, {
                children: [c && c.name && c.symbol && c.name !== c.symbol ? "".concat(c.name, " (").concat(c.symbol, ")") : c.name || c.symbol, " "]
              }), o && Object(it.jsx)(St, {
                style: {
                  fontWeight: 400
                },
                href: ht(o, c.address, "token"),
                children: Object(it.jsxs)(l.y, {
                  title: c.address,
                  children: [mt(c.address), " ", s(116, "(View on BscScan)")]
                })
              })]
            })]
          })
        }) : null
      }

      function Du(e) {
        var t = e.isOpen,
          n = e.tokens,
          r = e.onConfirm,
          a = Object(i.useState)(!1),
          c = Object(h.a)(a, 2),
          o = c[0],
          s = c[1],
          u = Object(i.useCallback)((function() {
            return s((function(e) {
              return !e
            }))
          }), []),
          d = tr(),
          b = Object(i.useCallback)((function() {
            return null
          }), []);
        return Object(it.jsx)(Un, {
          isOpen: t,
          onDismiss: b,
          maxHeight: 90,
          children: Object(it.jsx)(Bu, {
            className: "token-warning-container",
            children: Object(it.jsxs)(Me, {
              gap: "lg",
              children: [Object(it.jsxs)(nt, {
                gap: "6px",
                children: [Object(it.jsx)(Mu, {}), Object(it.jsx)(l.y, {
                  color: "failure",
                  children: d(1128, "Token imported")
                })]
              }), Object(it.jsx)(l.y, {
                children: d(1130, "Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.")
              }), Object(it.jsx)(l.y, {
                children: d(1132, "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens.")
              }), Object(it.jsx)(l.y, {
                children: d(1134, "If you purchase an arbitrary token, you may be unable to sell it back.")
              }), n.map((function(e) {
                return Object(it.jsx)(Lu, {
                  token: e
                }, e.address)
              })), Object(it.jsxs)(et, {
                children: [Object(it.jsx)("div", {
                  children: Object(it.jsxs)("label", {
                    htmlFor: "understand-checkbox",
                    style: {
                      cursor: "pointer",
                      userSelect: "none"
                    },
                    children: [Object(it.jsx)("input", {
                      id: "understand-checkbox",
                      type: "checkbox",
                      className: "understand-checkbox",
                      checked: o,
                      onChange: u
                    }), " ", Object(it.jsx)(l.y, {
                      as: "span",
                      ml: "4px",
                      children: d(148, "I understand")
                    })]
                  })
                }), Object(it.jsx)(l.c, {
                  disabled: !o,
                  variant: "danger",
                  style: {
                    width: "140px"
                  },
                  className: "token-dismiss-button",
                  onClick: function() {
                    r()
                  },
                  children: d(150, "Continue")
                })]
              })]
            })
          })
        })
      }
      var _u, Yu, zu, Fu, qu, Vu = d.default.div(Uu || (Uu = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]))),
        Wu = Object(d.default)(Qn.a)(Au || (Au = Object(u.a)(["\n  stroke: ", ";\n"])), (function(e) {
          return e.theme.colors.failure
        }));

      function Hu(e) {
        var t = e.isOpen,
          n = e.transactionType,
          r = e.onConfirm,
          a = Object(i.useState)(!1),
          c = Object(h.a)(a, 2),
          o = c[0],
          s = c[1],
          u = Object(i.useCallback)((function() {
            return s((function(e) {
              return !e
            }))
          }), []),
          d = Object(i.useCallback)((function() {
            return null
          }), []);
        return Object(it.jsx)(Un, {
          isOpen: t,
          onDismiss: d,
          maxHeight: 90,
          children: Object(it.jsx)(Vu, {
            className: "token-warning-container",
            children: Object(it.jsxs)(Me, {
              gap: "lg",
              children: [Object(it.jsxs)(nt, {
                gap: "6px",
                children: [Object(it.jsx)(Wu, {}), Object(it.jsx)(l.y, {
                  color: "failure",
                  children: "Syrup Warning"
                })]
              }), "" !== n && Object(it.jsxs)(it.Fragment, {
                children: [Object(it.jsxs)(l.y, {
                  color: "failure",
                  children: ["Please be careful when ", Object(it.jsx)("strong", {
                    children: n
                  }), " SYRUP."]
                }), Object(it.jsx)(l.y, {
                  color: "failure",
                  children: "Buying" === n ? "You will not receive CAKE rewards for holding purchased SYRUP." : "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE."
                })]
              }), Object(it.jsxs)(et, {
                children: [Object(it.jsx)("div", {
                  children: Object(it.jsxs)("label", {
                    htmlFor: "understand-checkbox",
                    style: {
                      cursor: "pointer",
                      userSelect: "none"
                    },
                    children: [Object(it.jsx)("input", {
                      id: "understand-checkbox",
                      type: "checkbox",
                      className: "understand-checkbox",
                      checked: o,
                      onChange: u
                    }), " ", Object(it.jsx)(l.y, {
                      as: "span",
                      children: "I understand"
                    })]
                  })
                }), Object(it.jsx)(l.c, {
                  disabled: !o,
                  variant: "danger",
                  style: {
                    width: "140px"
                  },
                  onClick: function() {
                    s(!1), r()
                  },
                  children: "Continue"
                })]
              })]
            })
          })
        })
      }
      var Qu, Ku = Object(d.default)(Me)(_u || (_u = Object(u.a)(["\n  margin-top: 1.25rem;\n"]))),
        Gu = Object(d.default)(et)(Yu || (Yu = Object(u.a)(["\n  width: 50%;\n"]))),
        Xu = d.default.div(zu || (zu = Object(u.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ", ";\n"])), (function(e) {
          var t = e.theme,
            n = e.confirmed;
          return e.disabled ? t.colors.backgroundDisabled : n ? t.colors.success : t.colors.primary
        }), (function(e) {
          var t = e.theme,
            n = e.confirmed;
          return e.disabled ? t.colors.text : n ? t.colors.success : "#FFFFFF"
        })),
        Ju = d.default.div(Fu || (Fu = Object(u.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]))),
        $u = d.default.div(qu || (qu = Object(u.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"])), (function(e) {
          var t = e.theme,
            n = e.prevConfirmed;
          return Object(In.b)(.5, n ? t.colors.success : t.colors.primary)
        }), (function(e) {
          var t = e.theme;
          return e.prevConfirmed ? t.colors.primary : t.colors.backgroundDisabled
        }));

      function Zu(e) {
        var t = e.steps;
        return Object(it.jsx)(Ku, {
          justify: "center",
          children: Object(it.jsxs)(Gu, {
            children: [t.map((function(e, n) {
              return Object(it.jsxs)(Ju, {
                children: [Object(it.jsx)(Xu, {
                  confirmed: e,
                  disabled: !t[n - 1] && 0 !== n,
                  children: e ? "\u2713" : n + 1
                }), Object(it.jsx)($u, {
                  prevConfirmed: e
                })]
              }, n)
            })), Object(it.jsx)(Xu, {
              disabled: !t[t.length - 1],
              children: t.length + 1
            })]
          })
        })
      }

      function ed(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pe,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = ge(),
          c = a.account,
          o = a.chainId,
          s = a.library,
          l = Cs(r),
          u = l.address,
          d = null === r ? c : u;
        return Object(i.useMemo)((function() {
          if (!e || !d || !s || !c || !o) return [];
          var r = xt(0, s, c);
          if (!r) return [];
          var a = [];
          return a.push(J.i.swapCallParameters(e, {
            feeOnTransfer: !1,
            allowedSlippage: new J.g(J.e.BigInt(Math.floor(t)), fe),
            recipient: d,
            ttl: n
          })), e.tradeType === J.m.EXACT_INPUT && a.push(J.i.swapCallParameters(e, {
            feeOnTransfer: !0,
            allowedSlippage: new J.g(J.e.BigInt(Math.floor(t)), fe),
            recipient: d,
            ttl: n
          })), a.map((function(e) {
            return {
              parameters: e,
              contract: r
            }
          }))
        }), [c, t, o, n, s, d, e])
      }

      function td(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pe,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = ge(),
          c = a.account,
          o = a.chainId,
          s = a.library,
          l = ed(e, t, n, r),
          u = cs(),
          d = Cs(r),
          b = d.address,
          p = null === r ? c : b;
        return Object(i.useMemo)((function() {
          return e && s && c && o ? p ? {
            state: Qu.VALID,
            callback: function() {
              var t = Object(f.a)(j.a.mark((function t() {
                var n, a, i, o, s, d, b, f, h, m;
                return j.a.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, Promise.all(l.map((function(e) {
                        var t, n = e.parameters,
                          r = n.methodName,
                          a = n.args,
                          i = n.value,
                          c = e.contract,
                          o = !i || _a(i) ? {} : {
                            value: i
                          };
                        return (t = c.estimateGas)[r].apply(t, Object(G.a)(a).concat([o])).then((function(t) {
                          return {
                            call: e,
                            gasEstimate: t
                          }
                        })).catch((function(t) {
                          var n;
                          return console.info("Gas estimate failed, trying eth_call to extract error", e), (n = c.callStatic)[r].apply(n, Object(G.a)(a).concat([o])).then((function(n) {
                            return console.info("Unexpected successful call after failed estimate gas", e, t, n), {
                              call: e,
                              error: new Error("Unexpected issue with estimating the gas. Please try again.")
                            }
                          })).catch((function(t) {
                            var n;
                            switch (console.info("Call threw error", e, t), t.reason) {
                              case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                              case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                n = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                break;
                              default:
                                n = "The transaction cannot succeed due to error: ".concat(t.reason, ". This is probably an issue with one of the tokens you are swapping.")
                            }
                            return {
                              call: e,
                              error: new Error(n)
                            }
                          }))
                        }))
                      })));
                    case 2:
                      if (n = t.sent, a = n.find((function(e, t, n) {
                          return "gasEstimate" in e && (t === n.length - 1 || "gasEstimate" in n[t + 1])
                        }))) {
                        t.next = 9;
                        break
                      }
                      if (!((i = n.filter((function(e) {
                          return "error" in e
                        }))).length > 0)) {
                        t.next = 8;
                        break
                      }
                      throw i[i.length - 1].error;
                    case 8:
                      throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                    case 9:
                      return o = a.call, s = o.contract, d = o.parameters, b = d.methodName, f = d.args, h = d.value, m = a.gasEstimate, t.abrupt("return", s[b].apply(s, Object(G.a)(f).concat([Object(X.a)({
                        gasLimit: yt(m)
                      }, h && !_a(h) ? {
                        value: h,
                        from: c
                      } : {
                        from: c
                      })])).then((function(t) {
                        var n = e.inputAmount.currency.symbol,
                          a = e.outputAmount.currency.symbol,
                          i = e.inputAmount.toSignificant(3),
                          o = e.outputAmount.toSignificant(3),
                          s = "Swap ".concat(i, " ").concat(n, " for ").concat(o, " ").concat(a),
                          l = p === c ? s : "".concat(s, " to ").concat(r && jt(r) ? mt(r) : r);
                        return u(t, {
                          summary: l
                        }), t.hash
                      })).catch((function(e) {
                        throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, b, f, h), new Error("Swap failed: ".concat(e.message)))
                      })));
                    case 11:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })));
              return function() {
                return t.apply(this, arguments)
              }
            }(),
            error: null
          } : null !== r ? {
            state: Qu.INVALID,
            callback: null,
            error: "Invalid recipient"
          } : {
            state: Qu.LOADING,
            callback: null,
            error: null
          } : {
            state: Qu.INVALID,
            callback: null,
            error: "Missing dependencies"
          }
        }), [e, s, c, o, p, r, l, u])
      }! function(e) {
        e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
      }(Qu || (Qu = {}));
      var nd;
      ! function(e) {
        e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
      }(nd || (nd = {}));
      var rd = {
        wrapType: nd.NOT_APPLICABLE
      };

      function ad(e, t, n) {
        var r = ge(),
          a = r.chainId,
          c = r.account,
          o = function(e) {
            var t = ge().chainId;
            return ua(t ? J.n[t].address : void 0, oa, e)
          }(),
          s = ka(null !== c && void 0 !== c ? c : void 0, e),
          l = Object(i.useMemo)((function() {
            return Is(n, e)
          }), [e, n]),
          u = cs();
        return Object(i.useMemo)((function() {
          if (!o || !a || !e || !t) return rd;
          var n = l && s && !s.lessThan(l);
          return e === J.d && Object(J.o)(J.n[a], t) ? {
            wrapType: nd.WRAP,
            execute: n && l ? Object(f.a)(j.a.mark((function e() {
              var t;
              return j.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, o.deposit({
                      value: "0x".concat(l.raw.toString(16))
                    });
                  case 3:
                    t = e.sent, u(t, {
                      summary: "Wrap ".concat(l.toSignificant(6), " BNB to WBNB")
                    }), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                  case 10:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [0, 7]
              ])
            }))) : void 0,
            inputError: n ? void 0 : "Insufficient BNB balance"
          } : Object(J.o)(J.n[a], e) && t === J.d ? {
            wrapType: nd.UNWRAP,
            execute: n && l ? Object(f.a)(j.a.mark((function e() {
              var t;
              return j.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, o.withdraw("0x".concat(l.raw.toString(16)));
                  case 3:
                    t = e.sent, u(t, {
                      summary: "Unwrap ".concat(l.toSignificant(6), " WBNB to BNB")
                    }), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                  case 10:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [0, 7]
              ])
            }))) : void 0,
            inputError: n ? void 0 : "Insufficient WBNB balance"
          } : rd
        }), [o, a, e, t, l, s, u])
      }
      var id = function() {
        var e, t, n, r, a, c, o, s, u, b, p = Bs(),
          j = tr(),
          f = [Oa(null === p || void 0 === p ? void 0 : p.inputCurrencyId), Oa(null === p || void 0 === p ? void 0 : p.outputCurrencyId)],
          m = f[0],
          y = f[1],
          O = Object(i.useState)(!1),
          x = Object(h.a)(O, 2),
          g = x[0],
          w = x[1],
          k = Object(i.useState)(!1),
          T = Object(h.a)(k, 2),
          I = T[0],
          E = T[1],
          N = Object(i.useState)(""),
          R = Object(h.a)(N, 2),
          S = R[0],
          U = R[1],
          A = Object(i.useMemo)((function() {
            var e, t;
            return null !== (e = null === (t = [m, y]) || void 0 === t ? void 0 : t.filter((function(e) {
              return e instanceof J.j
            }))) && void 0 !== e ? e : []
          }), [m, y]),
          P = Object(i.useCallback)((function() {
            w(!0)
          }), []),
          B = Object(i.useCallback)((function() {
            E(!1), U("")
          }), []),
          M = ge().account,
          L = Object(i.useContext)(d.ThemeContext),
          D = function() {
            var e = Object(v.c)(),
              t = Jr(),
              n = Object(i.useCallback)((function() {
                e(_r({
                  userExpertMode: !t
                }))
              }), [t, e]);
            return [t, n]
          }(),
          _ = Object(h.a)(D, 1)[0],
          Y = Zr(),
          z = Object(h.a)(Y, 1)[0],
          F = $r(),
          q = Object(h.a)(F, 1)[0],
          V = Ts(),
          W = V.independentField,
          H = V.typedValue,
          Q = V.recipient,
          K = Rs(),
          G = K.v2Trade,
          Z = K.currencyBalances,
          ee = K.parsedAmount,
          te = K.currencies,
          ne = K.inputError,
          re = ad(te[Xo.INPUT], te[Xo.OUTPUT], H),
          ae = re.wrapType,
          ie = re.execute,
          ce = re.inputError,
          oe = ae !== nd.NOT_APPLICABLE,
          se = oe ? void 0 : G,
          le = oe ? (e = {}, Object(C.a)(e, Xo.INPUT, ee), Object(C.a)(e, Xo.OUTPUT, ee), e) : (t = {}, Object(C.a)(t, Xo.INPUT, W === Xo.INPUT ? ee : null === se || void 0 === se ? void 0 : se.inputAmount), Object(C.a)(t, Xo.OUTPUT, W === Xo.OUTPUT ? ee : null === se || void 0 === se ? void 0 : se.outputAmount), t),
          ue = function() {
            var e = Object(v.c)(),
              t = Object(i.useCallback)((function(t, n) {
                e(Jo({
                  field: t,
                  currencyId: n instanceof J.j ? n.address : n === J.d ? "BNB" : ""
                }))
              }), [e]);
            return {
              onSwitchTokens: Object(i.useCallback)((function() {
                e($o())
              }), [e]),
              onCurrencySelection: t,
              onUserInput: Object(i.useCallback)((function(t, n) {
                e(Zo({
                  field: t,
                  typedValue: n
                }))
              }), [e]),
              onChangeRecipient: Object(i.useCallback)((function(t) {
                e(ts({
                  recipient: t
                }))
              }), [e])
            }
          }(),
          de = ue.onSwitchTokens,
          pe = ue.onCurrencySelection,
          je = ue.onUserInput,
          fe = ue.onChangeRecipient,
          he = !ne,
          me = W === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT,
          ve = Object(i.useCallback)((function(e) {
            je(Xo.INPUT, e)
          }), [je]),
          xe = Object(i.useCallback)((function(e) {
            je(Xo.OUTPUT, e)
          }), [je]),
          Ce = Object(i.useState)({
            showConfirm: !1,
            tradeToConfirm: void 0,
            attemptingTxn: !1,
            swapErrorMessage: void 0,
            txHash: void 0
          }),
          we = Object(h.a)(Ce, 2),
          ke = we[0],
          Te = ke.showConfirm,
          Ie = ke.tradeToConfirm,
          Ee = ke.swapErrorMessage,
          Ne = ke.attemptingTxn,
          Re = ke.txHash,
          Se = we[1],
          Ue = (o = {}, Object(C.a)(o, W, H), Object(C.a)(o, me, oe ? null !== (n = null === (r = le[W]) || void 0 === r ? void 0 : r.toExact()) && void 0 !== n ? n : "" : null !== (a = null === (c = le[me]) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== a ? a : ""), o),
          Ae = null === se || void 0 === se ? void 0 : se.route,
          Pe = Boolean(te[Xo.INPUT] && te[Xo.OUTPUT] && (null === (s = le[W]) || void 0 === s ? void 0 : s.greaterThan(J.e.BigInt(0)))),
          Be = !Ae,
          Le = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return ys(Object(i.useMemo)((function() {
              return e ? fs(e, t)[Xo.INPUT] : void 0
            }), [e, t]), $)
          }(se, q),
          De = Object(h.a)(Le, 2),
          _e = De[0],
          Ye = De[1],
          ze = Object(i.useState)(!1),
          Fe = Object(h.a)(ze, 2),
          qe = Fe[0],
          Ve = Fe[1];
        Object(i.useEffect)((function() {
          _e === ls.PENDING && Ve(!0)
        }), [_e, qe]);
        var We = Ds(Z[Xo.INPUT]),
          He = Boolean(We && (null === (u = le[Xo.INPUT]) || void 0 === u ? void 0 : u.equalTo(We))),
          Qe = td(se, q, z, Q),
          Ke = Qe.callback,
          Ge = Qe.error,
          Xe = js(se).priceImpactWithoutFee,
          Je = Object(i.useCallback)((function() {
            Xe && ! function(e) {
              return e.lessThan(Oe) ? !!e.lessThan(ye) || window.confirm("This swap has a price impact of at least ".concat(ye.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(Oe.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))
            }(Xe) || Ke && (Se((function(e) {
              return Object(X.a)(Object(X.a)({}, e), {}, {
                attemptingTxn: !0,
                swapErrorMessage: void 0,
                txHash: void 0
              })
            })), Ke().then((function(e) {
              Se((function(t) {
                return Object(X.a)(Object(X.a)({}, t), {}, {
                  attemptingTxn: !1,
                  swapErrorMessage: void 0,
                  txHash: e
                })
              }))
            })).catch((function(e) {
              Se((function(t) {
                return Object(X.a)(Object(X.a)({}, t), {}, {
                  attemptingTxn: !1,
                  swapErrorMessage: e.message,
                  txHash: void 0
                })
              }))
            })))
          }), [Xe, Ke, Se]),
          $e = Object(i.useState)(!1),
          Ze = Object(h.a)($e, 2),
          tt = Ze[0],
          rt = Ze[1],
          at = hs(Xe),
          ct = !ne && (_e === ls.NOT_APPROVED || _e === ls.PENDING || qe && _e === ls.APPROVED) && !(at > 3 && !_),
          ot = Object(i.useCallback)((function() {
            Se((function(e) {
              return Object(X.a)(Object(X.a)({}, e), {}, {
                showConfirm: !1
              })
            })), Re && je(Xo.INPUT, "")
          }), [je, Re, Se]),
          st = Object(i.useCallback)((function() {
            Se((function(e) {
              return Object(X.a)(Object(X.a)({}, e), {}, {
                tradeToConfirm: se
              })
            }))
          }), [se]),
          lt = Object(i.useCallback)((function(e, t) {
            "syrup" === e && (E(!0), U(t))
          }), [E, U]),
          ut = Object(i.useCallback)((function(e) {
            Ve(!1), pe(Xo.INPUT, e), "syrup" === e.symbol.toLowerCase() && lt(e.symbol.toLowerCase(), "Selling")
          }), [pe, Ve, lt]),
          dt = Object(i.useCallback)((function() {
            We && je(Xo.INPUT, We.toExact())
          }), [We, je]),
          bt = Object(i.useCallback)((function(e) {
            pe(Xo.OUTPUT, e), "syrup" === e.symbol.toLowerCase() && lt(e.symbol.toLowerCase(), "Buying")
          }), [pe, lt]);
        return Object(it.jsxs)(it.Fragment, {
          children: [Object(it.jsx)(Du, {
            isOpen: A.length > 0 && !g,
            tokens: A,
            onConfirm: P
          }), Object(it.jsx)(Hu, {
            isOpen: I,
            transactionType: S,
            onConfirm: B
          }), Object(it.jsx)(ar, {}), Object(it.jsx)(nl, {
            children: Object(it.jsxs)(Io, {
              id: "swap-page",
              children: [Object(it.jsx)(vu, {
                isOpen: Te,
                trade: se,
                originalTrade: Ie,
                onAcceptChanges: st,
                attemptingTxn: Ne,
                txHash: Re,
                recipient: Q,
                allowedSlippage: q,
                onConfirm: Je,
                swapErrorMessage: Ee,
                onDismiss: ot
              }), Object(it.jsx)(Fl, {
                title: j(8, "Exchange"),
                description: j(1192, "Trade tokens in an instant")
              }), Object(it.jsxs)(l.g, {
                children: [Object(it.jsxs)(Me, {
                  gap: "md",
                  children: [Object(it.jsx)(no, {
                    label: W === Xo.OUTPUT && !oe && se ? j(194, "From (estimated)") : j(76, "From"),
                    value: Ue[Xo.INPUT],
                    showMaxButton: !He,
                    currency: te[Xo.INPUT],
                    onUserInput: ve,
                    onMax: dt,
                    onCurrencySelect: ut,
                    otherCurrency: te[Xo.OUTPUT],
                    id: "swap-currency-input"
                  }), Object(it.jsx)(Me, {
                    justify: "space-between",
                    children: Object(it.jsxs)(nt, {
                      justify: _ ? "space-between" : "center",
                      style: {
                        padding: "0 1rem"
                      },
                      children: [Object(it.jsx)(Eo, {
                        clickable: !0,
                        children: Object(it.jsx)(l.p, {
                          variant: "tertiary",
                          onClick: function() {
                            Ve(!1), de()
                          },
                          style: {
                            borderRadius: "50%"
                          },
                          scale: "sm",
                          children: Object(it.jsx)(l.b, {
                            color: "primary",
                            width: "24px"
                          })
                        })
                      }), null === Q && !oe && _ ? Object(it.jsx)(Et, {
                        id: "add-recipient-button",
                        onClick: function() {
                          return fe("")
                        },
                        children: "+ Add a send (optional)"
                      }) : null]
                    })
                  }), Object(it.jsx)(no, {
                    value: Ue[Xo.OUTPUT],
                    onUserInput: xe,
                    label: W === Xo.INPUT && !oe && se ? j(196, "To (estimated)") : j(80, "To"),
                    showMaxButton: !1,
                    currency: te[Xo.OUTPUT],
                    onCurrencySelect: bt,
                    otherCurrency: te[Xo.INPUT],
                    id: "swap-currency-output"
                  }), null === Q || oe ? null : Object(it.jsxs)(it.Fragment, {
                    children: [Object(it.jsxs)(nt, {
                      justify: "space-between",
                      style: {
                        padding: "0 1rem"
                      },
                      children: [Object(it.jsx)(Eo, {
                        clickable: !1,
                        children: Object(it.jsx)(Gl.a, {
                          size: "16",
                          color: L.colors.textSubtle
                        })
                      }), Object(it.jsx)(Et, {
                        id: "remove-recipient-button",
                        onClick: function() {
                          return fe(null)
                        },
                        children: "- Remove send"
                      })]
                    }), Object(it.jsx)(pu, {
                      id: "recipient",
                      value: Q,
                      onChange: fe
                    })]
                  }), oe ? null : Object(it.jsx)(Cn, {
                    padding: ".25rem .75rem 0 .75rem",
                    borderRadius: "20px",
                    children: Object(it.jsxs)(Me, {
                      gap: "4px",
                      children: [Boolean(se) && Object(it.jsxs)(et, {
                        align: "center",
                        children: [Object(it.jsx)(l.y, {
                          fontSize: "14px",
                          children: j(1182, "Price")
                        }), Object(it.jsx)(Su, {
                          price: null === se || void 0 === se ? void 0 : se.executionPrice,
                          showInverted: tt,
                          setShowInverted: rt
                        })]
                      }), q !== be && Object(it.jsxs)(et, {
                        align: "center",
                        children: [Object(it.jsx)(l.y, {
                          fontSize: "14px",
                          children: j(88, "Slippage Tolerance")
                        }), Object(it.jsxs)(l.y, {
                          fontSize: "14px",
                          children: [q / 100, "%"]
                        })]
                      })]
                    })
                  })]
                }), Object(it.jsxs)(Ro, {
                  children: [M ? oe ? Object(it.jsx)(l.c, {
                    disabled: Boolean(ce),
                    onClick: ie,
                    width: "100%",
                    children: null !== ce && void 0 !== ce ? ce : ae === nd.WRAP ? "Wrap" : ae === nd.UNWRAP ? "Unwrap" : null
                  }) : Be && Pe ? Object(it.jsx)(kn, {
                    style: {
                      textAlign: "center"
                    },
                    children: Object(it.jsx)(l.y, {
                      mb: "4px",
                      children: j(1194, "Insufficient liquidity for this trade.")
                    })
                  }) : ct ? Object(it.jsxs)(et, {
                    children: [Object(it.jsx)(l.c, {
                      onClick: Ye,
                      disabled: _e !== ls.NOT_APPROVED || qe,
                      style: {
                        width: "48%"
                      },
                      variant: _e === ls.APPROVED ? "success" : "primary",
                      children: _e === ls.PENDING ? Object(it.jsxs)(nt, {
                        gap: "6px",
                        justify: "center",
                        children: ["Approving ", Object(it.jsx)(cn, {
                          stroke: "white"
                        })]
                      }) : qe && _e === ls.APPROVED ? "Approved" : "Approve ".concat(null === (b = te[Xo.INPUT]) || void 0 === b ? void 0 : b.symbol)
                    }), Object(it.jsx)(l.c, {
                      onClick: function() {
                        _ ? Je() : Se({
                          tradeToConfirm: se,
                          attemptingTxn: !1,
                          swapErrorMessage: void 0,
                          showConfirm: !0,
                          txHash: void 0
                        })
                      },
                      style: {
                        width: "48%"
                      },
                      id: "swap-button",
                      disabled: !he || _e !== ls.APPROVED || at > 3 && !_,
                      variant: he && at > 2 ? "danger" : "primary",
                      children: at > 3 && !_ ? "Price Impact High" : "Swap".concat(at > 2 ? " Anyway" : "")
                    })]
                  }) : Object(it.jsx)(l.c, {
                    onClick: function() {
                      _ ? Je() : Se({
                        tradeToConfirm: se,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        showConfirm: !0,
                        txHash: void 0
                      })
                    },
                    id: "swap-button",
                    disabled: !he || at > 3 && !_ || !!Ge,
                    variant: he && at > 2 && !Ge ? "danger" : "primary",
                    width: "100%",
                    children: ne || (at > 3 && !_ ? "Price Impact Too High" : "Swap".concat(at > 2 ? " Anyway" : ""))
                  }) : Object(it.jsx)(el, {
                    width: "100%"
                  }), ct && Object(it.jsx)(Zu, {
                    steps: [_e === ls.APPROVED]
                  }), _ && Ee ? Object(it.jsx)(Mo, {
                    error: Ee
                  }) : null]
                })]
              })]
            })
          }), Object(it.jsx)(Ru, {
            trade: se
          })]
        })
      };

      function cd(e) {
        var t = e.location;
        return Object(it.jsx)(y.a, {
          to: Object(X.a)(Object(X.a)({}, t), {}, {
            pathname: "/swap"
          })
        })
      }
      var od, sd, ld, ud = {
          code: "en",
          language: "English"
        },
        dd = [ud, {
          code: "ar",
          language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"
        }, {
          code: "bn",
          language: "\u09ac\u09be\u0982\u09b2\u09be"
        }, {
          code: "zh-CN",
          language: "\u7b80\u4f53\u4e2d\u6587"
        }, {
          code: "zh-TW",
          language: "\u7e41\u9ad4\u4e2d\u6587"
        }, {
          code: "nl",
          language: "Nederlands"
        }, {
          code: "fil",
          language: "Filipino"
        }, {
          code: "fi",
          language: "Suomalainen"
        }, {
          code: "fr",
          language: "Fran\xe7ais"
        }, {
          code: "de",
          language: "Deutsch"
        }, {
          code: "el",
          language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
        }, {
          code: "hi",
          language: "\u0939\u093f\u0902\u0926\u0940"
        }, {
          code: "hu",
          language: "Magyar"
        }, {
          code: "id",
          language: "Bahasa Indonesia"
        }, {
          code: "it",
          language: "Italiano"
        }, {
          code: "ja",
          language: "\u65e5\u672c\u8a9e"
        }, {
          code: "ko",
          language: "\ud55c\uad6d\uc5b4"
        }, {
          code: "pl",
          language: "Polski"
        }, {
          code: "pt-PT",
          language: "Portugu\xeas (Portugal)"
        }, {
          code: "pt-BR",
          language: "Portugu\xeas (Brasil)"
        }, {
          code: "ro",
          language: "Rom\xe2n\u0103"
        }, {
          code: "ru",
          language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
        }, {
          code: "es-ES",
          language: "Espa\xf1ol"
        }, {
          code: "sv-SE",
          language: "Svenska"
        }, {
          code: "ta",
          language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"
        }, {
          code: "tr",
          language: "T\xfcrk\xe7e"
        }, {
          code: "uk",
          language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
        }, {
          code: "vi",
          language: "Ti\u1ebfng Vi\u1ec7t"
        }],
        bd = {
          selectedLanguage: {
            code: "",
            language: ""
          },
          setSelectedLanguage: function() {},
          translatedLanguage: {
            code: "",
            language: ""
          },
          setTranslatedLanguage: function() {}
        },
        pd = Object(i.createContext)(bd),
        jd = "IS_DARK",
        fd = c.a.createContext({
          isDark: !1,
          toggleTheme: function() {
            return null
          }
        }),
        hd = function(e) {
          var t = e.children,
            n = Object(i.useState)((function() {
              var e = localStorage.getItem(jd);
              return !!e && JSON.parse(e)
            })),
            r = Object(h.a)(n, 2),
            a = r[0],
            c = r[1];
          return Object(it.jsx)(fd.Provider, {
            value: {
              isDark: a,
              toggleTheme: function() {
                c((function(e) {
                  return localStorage.setItem(jd, JSON.stringify(!e)), !e
                }))
              }
            },
            children: Object(it.jsx)(d.ThemeProvider, {
              theme: a ? l.B : l.C,
              children: t
            })
          })
        },
        md = function() {
          var e = Object(i.useContext)(fd);
          return {
            isDark: e.isDark,
            toggleTheme: e.toggleTheme,
            theme: Object(i.useContext)(d.ThemeContext)
          }
        },
        yd = function() {
          var e = Object(i.useState)(null),
            t = Object(h.a)(e, 2),
            n = t[0],
            r = t[1];
          return Object(i.useEffect)((function() {
            (function() {
              var e = Object(f.a)(j.a.mark((function e() {
                var t, n;
                return j.a.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.prev = 0, e.next = 3, fetch("https://api.pancakeswap.com/api/v1/price");
                    case 3:
                      return t = e.sent, e.next = 6, t.json();
                    case 6:
                      n = e.sent, r(n), e.next = 13;
                      break;
                    case 10:
                      e.prev = 10, e.t0 = e.catch(0), console.error("Unable to fetch price data:", e.t0);
                    case 13:
                    case "end":
                      return e.stop()
                  }
                }), e, null, [
                  [0, 10]
                ])
              })));
              return function() {
                return e.apply(this, arguments)
              }
            })()()
          }), [r]), n
        },
        Od = n(288),
        vd = n.n(Od),
        xd = {
          profileLink: "https://pancakeswap.finance/profile",
          noProfileLink: "https://pancakeswap.finance/profile"
        },
        gd = function() {
          var e = Object(i.useState)(xd),
            t = Object(h.a)(e, 2),
            n = t[0],
            r = t[1],
            a = ge().account;
          return Object(i.useEffect)((function() {
            if (a) try {
              var e = vd.a.get("profile_".concat(a));
              if (e) {
                var t = JSON.parse(e);
                r((function(e) {
                  return Object(X.a)(Object(X.a)({}, e), {}, {
                    username: t.username,
                    image: t.avatar
                  })
                }))
              }
            } catch (n) {
              r(xd)
            } else r(xd)
          }), [a, r]), n
        },
        Cd = [{
          label: "Pancake BSC Testnet",
          icon: "HomeIcon",
          href: "https://pancake.kiemtienonline360.com"
        }, {
          label: "Trade",
          icon: "TradeIcon",
          initialOpenState: !0,
          items: [{
            label: "Exchange",
            href: "/swap"
          }, {
            label: "Liquidity",
            href: "/pool"
          }]
        }, {
          label: "AMMs on Testnet",
          icon: "InfoIcon",
          href: "https://amm.kiemtienonline360.com"
        }],
        wd = function(e) {
          var t = Object(x.d)().account,
            n = Zs(),
            r = n.login,
            a = n.logout,
            c = Object(i.useContext)(pd),
            o = c.selectedLanguage,
            s = c.setSelectedLanguage,
            u = md(),
            d = u.isDark,
            b = u.toggleTheme,
            p = yd(),
            j = p ? Number(p.prices.Cake) : void 0,
            f = gd();
          return Object(it.jsx)(l.s, Object(X.a)({
            links: Cd,
            account: t,
            login: r,
            logout: a,
            isDark: d,
            toggleTheme: b,
            currentLang: (null === o || void 0 === o ? void 0 : o.code) || "",
            langs: dd,
            setLang: s,
            cakePriceUsd: j,
            profile: f
          }, e))
        },
        kd = d.default.div(od || (od = Object(u.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"]))),
        Td = d.default.div(sd || (sd = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n  justify-content: center;\n  background-image: url('/images/group-pancake.svg');\n  background-repeat: no-repeat;\n  background-position: bottom 24px center;\n  background-size: 90%;\n\n  ", " {\n    background-size: auto;\n  }\n\n  ", " {\n    background-image: url('/images/arch-", ".svg'),\n      url('/images/left-pancake.svg'), url('/images/right-pancake.svg');\n    background-repeat: no-repeat;\n    background-position: center 420px, 10% 230px, 90% 230px;\n    background-size: contain, 266px, 266px;\n    min-height: 90vh;\n  }\n"])), (function(e) {
          return e.theme.mediaQueries.xs
        }), (function(e) {
          return e.theme.mediaQueries.lg
        }), (function(e) {
          return e.theme.isDark ? "dark" : "light"
        })),
        Id = d.default.div(ld || (ld = Object(u.a)(["\n  margin-top: 5rem;\n"])));

      function Ed() {
        var e = Object(i.useState)(void 0),
          t = Object(h.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Object(i.useState)(void 0),
          c = Object(h.a)(a, 2),
          o = c[0],
          s = c[1],
          l = Object(i.useState)([]),
          u = Object(h.a)(l, 2),
          d = u[0],
          b = u[1],
          p = "".concat(Object({
            NODE_ENV: "production",
            PUBLIC_URL: "https://pancake.kiemtienonline360.com",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_CHAIN_ID: "97",
            REACT_APP_GTAG: "GTM-PXLD3XW",
            REACT_APP_NETWORK_URL: "https://data-seed-prebsc-1-s1.binance.org:8545"
          }).REACT_APP_CROWDIN_APIKEY),
          v = parseInt("".concat(Object({
            NODE_ENV: "production",
            PUBLIC_URL: "https://pancake.kiemtienonline360.com",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_CHAIN_ID: "97",
            REACT_APP_GTAG: "GTM-PXLD3XW",
            REACT_APP_NETWORK_URL: "https://data-seed-prebsc-1-s1.binance.org:8545"
          }).REACT_APP_CROWDIN_PROJECTID)),
          x = {
            token: p
          },
          g = new O.StringTranslations(x);
        Object(i.useEffect)((function() {
          var e = localStorage.getItem("pancakeSwapLanguage");
          if (e) {
            var t = function(e) {
              return dd.filter((function(t) {
                return t.code === e
              }))[0]
            }(e);
            r(t)
          } else r(ud)
        }), []);
        var C = function() {
          var e = Object(f.a)(j.a.mark((function e() {
            return j.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  g.listLanguageTranslations(v, n.code, void 0, 6, 200).then((function(e) {
                    e.data.length < 1 ? b(["error"]) : b(e.data)
                  })).then((function() {
                    return s(n)
                  })).catch((function(e) {
                    b(["error"]), console.error(e)
                  }));
                case 1:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function() {
            return e.apply(this, arguments)
          }
        }();
        return Object(i.useEffect)((function() {
          n && C()
        }), [n]), Object(it.jsx)(i.Suspense, {
          fallback: null,
          children: Object(it.jsx)(m.a, {
            children: Object(it.jsx)(kd, {
              children: Object(it.jsx)(pd.Provider, {
                value: {
                  selectedLanguage: n,
                  setSelectedLanguage: r,
                  translatedLanguage: o,
                  setTranslatedLanguage: s
                },
                children: Object(it.jsx)(Jn.Provider, {
                  value: {
                    translations: d,
                    setTranslations: b
                  },
                  children: Object(it.jsx)(wd, {
                    children: Object(it.jsxs)(Td, {
                      children: [Object(it.jsx)(Jt, {}), Object(it.jsx)(bn, {
                        children: Object(it.jsxs)(y.d, {
                          children: [Object(it.jsx)(y.b, {
                            exact: !0,
                            strict: !0,
                            path: "/swap",
                            component: id
                          }), Object(it.jsx)(y.b, {
                            exact: !0,
                            strict: !0,
                            path: "/find",
                            component: Vl
                          }), Object(it.jsx)(y.b, {
                            exact: !0,
                            strict: !0,
                            path: "/pool",
                            component: ql
                          }), Object(it.jsx)(y.b, {
                            exact: !0,
                            path: "/add",
                            component: sl
                          }), Object(it.jsx)(y.b, {
                            exact: !0,
                            strict: !0,
                            path: "/remove/:currencyIdA/:currencyIdB",
                            component: su
                          }), Object(it.jsx)(y.b, {
                            exact: !0,
                            path: "/add/:currencyIdA",
                            component: ul
                          }), Object(it.jsx)(y.b, {
                            exact: !0,
                            path: "/add/:currencyIdA/:currencyIdB",
                            component: dl
                          }), Object(it.jsx)(y.b, {
                            exact: !0,
                            strict: !0,
                            path: "/remove/:tokens",
                            component: pl
                          }), Object(it.jsx)(y.b, {
                            component: cd
                          })]
                        })
                      }), Object(it.jsx)(Id, {})]
                    })
                  })
                })
              })
            })
          })
        })
      }
      var Nd = "visibilityState" in document;

      function Rd() {
        return !Nd || "hidden" !== document.visibilityState
      }

      function Sd() {
        var e = Object(i.useState)(Rd()),
          t = Object(h.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Object(i.useCallback)((function() {
            r(Rd())
          }), [r]);
        return Object(i.useEffect)((function() {
          if (Nd) return document.addEventListener("visibilitychange", a),
            function() {
              document.removeEventListener("visibilitychange", a)
            }
        }), [a]), n
      }

      function Ud() {
        var e = ge(),
          t = e.library,
          n = e.chainId,
          r = Object(v.c)(),
          a = Sd(),
          c = Object(i.useState)({
            chainId: n,
            blockNumber: null
          }),
          o = Object(h.a)(c, 2),
          s = o[0],
          l = o[1],
          u = Object(i.useCallback)((function(e) {
            l((function(t) {
              return n === t.chainId ? "number" !== typeof t.blockNumber ? {
                chainId: n,
                blockNumber: e
              } : {
                chainId: n,
                blockNumber: Math.max(e, t.blockNumber)
              } : t
            }))
          }), [n, l]);
        Object(i.useEffect)((function() {
          if (t && n && a) return l({
              chainId: n,
              blockNumber: null
            }), t.getBlockNumber().then(u).catch((function(e) {
              return console.error("Failed to get block number for chainId: ".concat(n), e)
            })), t.on("block", u),
            function() {
              t.removeListener("block", u)
            }
        }), [r, n, t, u, a]);
        var d = gs(s, 100);
        return Object(i.useEffect)((function() {
          d.chainId && d.blockNumber && a && r(Ie({
            chainId: d.chainId,
            blockNumber: d.blockNumber
          }))
        }), [a, r, d.blockNumber, d.chainId]), null
      }

      function Ad() {
        var e = ge().library,
          t = Object(v.c)(),
          n = Object(v.d)((function(e) {
            return e.lists.byUrl
          })),
          r = Sd(),
          a = pc();
        return $a(Object(i.useCallback)((function() {
          r && Object.keys(n).forEach((function(e) {
            return a(e).catch((function(e) {
              return console.error("interval list fetching error", e)
            }))
          }))
        }), [a, r, n]), e ? 6e5 : null), Object(i.useEffect)((function() {
          Object.keys(n).forEach((function(e) {
            var t = n[e];
            t.current || t.loadingRequestId || t.error || a(e).catch((function(e) {
              return console.error("list added fetching error", e)
            }))
          }))
        }), [t, a, e, n]), Object(i.useEffect)((function() {
          Object.keys(n).forEach((function(e) {
            var r = n[e];
            if (r.current && r.pendingUpdate) {
              var a = Object(Ye.c)(r.current.version, r.pendingUpdate.version);
              switch (a) {
                case Ye.a.NONE:
                  throw new Error("unexpected no version bump");
                case Ye.a.PATCH:
                case Ye.a.MINOR:
                  a >= Object(Ye.d)(r.current.tokens, r.pendingUpdate.tokens) ? (t(Fe(e)), t(Re({
                    key: e,
                    content: {
                      listUpdate: {
                        listUrl: e,
                        oldList: r.current,
                        newList: r.pendingUpdate,
                        auto: !0
                      }
                    }
                  }))) : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
                  break;
                case Ye.a.MAJOR:
                  t(Re({
                    key: e,
                    content: {
                      listUpdate: {
                        listUrl: e,
                        auto: !1,
                        oldList: r.current,
                        newList: r.pendingUpdate
                      }
                    },
                    removeAfterMs: null
                  }))
              }
            }
          }))
        }), [t, n]), null
      }

      function Pd(e, t) {
        return n = e + Math.round(Math.random() * Math.max(0, t - e)), new Promise((function(e) {
          return setTimeout(e, n)
        }));
        var n
      }
      var Bd = function(e) {
          Object(U.a)(n, e);
          var t = Object(A.a)(n);

          function n() {
            return Object(S.a)(this, n), t.call(this, "Cancelled")
          }
          return n
        }(Object(P.a)(Error)),
        Md = function(e) {
          Object(U.a)(n, e);
          var t = Object(A.a)(n);

          function n() {
            return Object(S.a)(this, n), t.apply(this, arguments)
          }
          return n
        }(Object(P.a)(Error));

      function Ld() {
        return (Ld = Object(f.a)(j.a.mark((function e(t, n, r) {
          var a, i, c, o;
          return j.a.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, t.aggregate(n.map((function(e) {
                  return [e.address, e.callData]
                })));
              case 3:
                c = e.sent, o = Object(h.a)(c, 2), a = o[0], i = o[1], e.next = 13;
                break;
              case 9:
                throw e.prev = 9, e.t0 = e.catch(0), console.info("Failed to fetch chunk inside retry", e.t0), e.t0;
              case 13:
                if (!(a.toNumber() < r)) {
                  e.next = 15;
                  break
                }
                throw new Md("Fetched for old block number");
              case 15:
                return e.abrupt("return", {
                  results: i,
                  blockNumber: a.toNumber()
                });
              case 16:
              case "end":
                return e.stop()
            }
          }), e, null, [
            [0, 9]
          ])
        })))).apply(this, arguments)
      }

      function Dd() {
        var e = Object(v.c)(),
          t = Object(v.d)((function(e) {
            return e.multicall
          })),
          n = gs(t.callListeners, 100),
          r = Ue(),
          a = ge().chainId,
          c = ja(),
          o = Object(i.useRef)(),
          s = Object(i.useMemo)((function() {
            return function(e, t) {
              if (!e || !t) return {};
              var n = e[t];
              return n ? Object.keys(n).reduce((function(e, t) {
                var r = n[t];
                return e[t] = Object.keys(r).filter((function(e) {
                  var t = parseInt(e);
                  return !(t <= 0) && r[t] > 0
                })).reduce((function(e, t) {
                  return Math.min(e, parseInt(t))
                }), 1 / 0), e
              }), {}) : {}
            }(n, a)
          }), [n, a]),
          l = Object(i.useMemo)((function() {
            return function(e, t, n, r) {
              return n && r ? e[n] ? Object.keys(t).filter((function(a) {
                var i = t[a],
                  c = e[n][a];
                if (!c) return !0;
                var o = r - (i - 1);
                return !(c.fetchingBlockNumber && c.fetchingBlockNumber >= o) && (!c.blockNumber || c.blockNumber < o)
              })) : Object.keys(t) : []
            }(t.callResults, s, a, r)
          }), [a, t.callResults, s, r]),
          u = Object(i.useMemo)((function() {
            return JSON.stringify(l.sort())
          }), [l]);
        return Object(i.useEffect)((function() {
          var t;
          if (r && a && c) {
            var n = JSON.parse(u);
            if (0 !== n.length) {
              var i, s, l = n.map((function(e) {
                  return Or(e)
                })),
                d = function(e, t) {
                  if (t < 1) throw new Error("maxChunkSize must be gte 1");
                  if (e.length <= t) return [e];
                  var n = Math.ceil(e.length / t),
                    r = Math.ceil(e.length / n);
                  return Object(G.a)(Array(n).keys()).map((function(t) {
                    return e.slice(t * r, t * r + r)
                  }))
                }(l, 500);
              if ((null === (t = o.current) || void 0 === t ? void 0 : t.blockNumber) !== r) null === (i = o.current) || void 0 === i || null === (s = i.cancellations) || void 0 === s || s.forEach((function(e) {
                return e()
              }));
              e(gr({
                calls: l,
                chainId: a,
                fetchingBlockNumber: r
              })), o.current = {
                blockNumber: r,
                cancellations: d.map((function(t, i) {
                  var s = function(e, t) {
                      var n, r = t.n,
                        a = t.minWait,
                        i = t.maxWait,
                        c = !1;
                      return {
                        promise: new Promise(function() {
                          var t = Object(f.a)(j.a.mark((function t(o, s) {
                            var l;
                            return j.a.wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                                case 0:
                                  n = s;
                                case 1:
                                  return l = void 0, t.prev = 3, t.next = 6, e();
                                case 6:
                                  return l = t.sent, c || (o(l), c = !0), t.abrupt("break", 24);
                                case 11:
                                  if (t.prev = 11, t.t0 = t.catch(3), !c) {
                                    t.next = 15;
                                    break
                                  }
                                  return t.abrupt("break", 24);
                                case 15:
                                  if (!(r <= 0) && t.t0 instanceof Md) {
                                    t.next = 19;
                                    break
                                  }
                                  return s(t.t0), c = !0, t.abrupt("break", 24);
                                case 19:
                                  r--;
                                case 20:
                                  return t.next = 22, Pd(a, i);
                                case 22:
                                  t.next = 1;
                                  break;
                                case 24:
                                case "end":
                                  return t.stop()
                              }
                            }), t, null, [
                              [3, 11]
                            ])
                          })));
                          return function(e, n) {
                            return t.apply(this, arguments)
                          }
                        }()),
                        cancel: function() {
                          c || (c = !0, n(new Bd))
                        }
                      }
                    }((function() {
                      return function(e, t, n) {
                        return Ld.apply(this, arguments)
                      }(c, t, r)
                    }), {
                      n: 1 / 0,
                      minWait: 2500,
                      maxWait: 3500
                    }),
                    l = s.cancel;
                  return s.promise.then((function(t) {
                    var c = t.results,
                      s = t.blockNumber;
                    o.current = {
                      cancellations: [],
                      blockNumber: r
                    };
                    var l = d.slice(0, i).reduce((function(e, t) {
                        return e + t.length
                      }), 0),
                      u = l + c.length;
                    e(wr({
                      chainId: a,
                      results: n.slice(l, u).reduce((function(e, t, n) {
                        var r;
                        return e[t] = null !== (r = c[n]) && void 0 !== r ? r : null, e
                      }), {}),
                      blockNumber: s
                    }))
                  })).catch((function(n) {
                    n instanceof Bd ? console.error("Cancelled fetch for blockNumber", r) : (console.error("Failed to fetch multicall chunk", t, a, n), e(Cr({
                      calls: t,
                      chainId: a,
                      fetchingBlockNumber: r
                    })))
                  })), l
                }))
              }
            }
          }
        }), [a, c, e, u, r]), null
      }

      function _d() {
        var e, t = ge(),
          n = t.chainId,
          r = t.library,
          a = Ue(),
          c = Object(v.c)(),
          o = Object(v.d)((function(e) {
            return e.transactions
          })),
          s = n && null !== (e = o[n]) && void 0 !== e ? e : {},
          l = function() {
            var e = Object(v.c)();
            return Object(i.useCallback)((function(t, n) {
              e(Re({
                content: t,
                key: n
              }))
            }), [e])
          }();
        return Object(i.useEffect)((function() {
          n && r && a && Object.keys(s).filter((function(e) {
            return function(e, t) {
              if (t.receipt) return !1;
              if (!t.lastCheckedBlockNumber) return !0;
              var n = e - t.lastCheckedBlockNumber;
              if (n < 1) return !1;
              var r = ((new Date).getTime() - t.addedTime) / 1e3 / 60;
              return r > 60 ? n > 9 : !(r > 5) || n > 2
            }(a, s[e])
          })).forEach((function(e) {
            r.getTransactionReceipt(e).then((function(t) {
              var r;
              t ? (c(as({
                chainId: n,
                hash: e,
                receipt: {
                  blockHash: t.blockHash,
                  blockNumber: t.blockNumber,
                  contractAddress: t.contractAddress,
                  from: t.from,
                  status: t.status,
                  to: t.to,
                  transactionHash: t.transactionHash,
                  transactionIndex: t.transactionIndex
                }
              })), l({
                txn: {
                  hash: e,
                  success: 1 === t.status,
                  summary: null === (r = s[e]) || void 0 === r ? void 0 : r.summary
                }
              }, e)) : c(is({
                chainId: n,
                hash: e,
                blockNumber: a
              }))
            })).catch((function(t) {
              console.error("failed to check transaction hash: ".concat(e), t)
            }))
          }))
        }), [n, r, s, a, c, l]), null
      }
      var Yd = function() {
          var e = Object(v.d)((function(e) {
              return e.toasts.data
            })),
            t = $s().remove;
          return Object(it.jsx)(l.z, {
            toasts: e,
            onRemove: function(e) {
              return t(e)
            }
          })
        },
        zd = n(193),
        Fd = Object(Te.c)({
          blockNumber: {},
          popupList: [],
          walletModalOpen: !1,
          settingsMenuOpen: !1
        }, (function(e) {
          return e.addCase(Ie, (function(e, t) {
            var n = t.payload,
              r = n.chainId,
              a = n.blockNumber;
            "number" !== typeof e.blockNumber[r] ? e.blockNumber[r] = a : e.blockNumber[r] = Math.max(a, e.blockNumber[r])
          })).addCase(Ee, (function(e) {
            e.walletModalOpen = !e.walletModalOpen
          })).addCase(Ne, (function(e) {
            e.settingsMenuOpen = !e.settingsMenuOpen
          })).addCase(Re, (function(e, t) {
            var n = t.payload,
              r = n.content,
              a = n.key,
              i = n.removeAfterMs,
              c = void 0 === i ? 15e3 : i;
            e.popupList = (a ? e.popupList.filter((function(e) {
              return e.key !== a
            })) : e.popupList).concat([{
              key: a || Object(Te.f)(),
              show: !0,
              content: r,
              removeAfterMs: c
            }])
          })).addCase(Se, (function(e, t) {
            var n = t.payload.key;
            e.popupList.forEach((function(e) {
              e.key === n && (e.show = !1)
            }))
          }))
        })),
        qd = Object(Te.b)("global/updateVersion"),
        Vd = (Te.b, function() {
          return (new Date).getTime()
        });

      function Wd(e, t) {
        return "".concat(e, ";").concat(t)
      }
      var Hd, Qd = {
          userDarkMode: null,
          matchesDarkMode: !1,
          userExpertMode: !1,
          userSlippageTolerance: be,
          userDeadline: pe,
          tokens: {},
          pairs: {},
          timestamp: Vd(),
          audioPlay: !0
        },
        Kd = Object(Te.c)(Qd, (function(e) {
          return e.addCase(qd, (function(e) {
            "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = be), "number" !== typeof e.userDeadline && (e.userDeadline = pe), e.lastUpdateVersionTimestamp = Vd()
          })).addCase(Dr, (function(e, t) {
            e.userDarkMode = t.payload.userDarkMode, e.timestamp = Vd()
          })).addCase(Lr, (function(e, t) {
            e.matchesDarkMode = t.payload.matchesDarkMode, e.timestamp = Vd()
          })).addCase(_r, (function(e, t) {
            e.userExpertMode = t.payload.userExpertMode, e.timestamp = Vd()
          })).addCase(Yr, (function(e, t) {
            e.userSlippageTolerance = t.payload.userSlippageTolerance, e.timestamp = Vd()
          })).addCase(zr, (function(e, t) {
            e.userDeadline = t.payload.userDeadline, e.timestamp = Vd()
          })).addCase(Fr, (function(e, t) {
            var n = t.payload.serializedToken;
            e.tokens[n.chainId] = e.tokens[n.chainId] || {}, e.tokens[n.chainId][n.address] = n, e.timestamp = Vd()
          })).addCase(qr, (function(e, t) {
            var n = t.payload,
              r = n.address,
              a = n.chainId;
            e.tokens[a] = e.tokens[a] || {}, delete e.tokens[a][r], e.timestamp = Vd()
          })).addCase(Vr, (function(e, t) {
            var n = t.payload.serializedPair;
            if (n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address) {
              var r = n.token0.chainId;
              e.pairs[r] = e.pairs[r] || {}, e.pairs[r][Wd(n.token0.address, n.token1.address)] = n
            }
            e.timestamp = Vd()
          })).addCase(Wr, (function(e, t) {
            var n = t.payload,
              r = n.chainId,
              a = n.tokenAAddress,
              i = n.tokenBAddress;
            e.pairs[r] && (delete e.pairs[r][Wd(a, i)], delete e.pairs[r][Wd(i, a)]), e.timestamp = Vd()
          })).addCase(Hr, (function(e) {
            e.audioPlay = !1
          })).addCase(Qr, (function(e) {
            e.audioPlay = !0
          }))
        })),
        Gd = function() {
          return (new Date).getTime()
        },
        Xd = Object(Te.c)({}, (function(e) {
          return e.addCase(ns, (function(e, t) {
            var n, r, a = t.payload,
              i = a.chainId,
              c = a.from,
              o = a.hash,
              s = a.approval,
              l = a.summary;
            if (null === (n = e[i]) || void 0 === n ? void 0 : n[o]) throw Error("Attempted to add existing transaction.");
            var u = null !== (r = e[i]) && void 0 !== r ? r : {};
            u[o] = {
              hash: o,
              approval: s,
              summary: l,
              from: c,
              addedTime: Gd()
            }, e[i] = u
          })).addCase(rs, (function(e, t) {
            var n = t.payload.chainId;
            e[n] && (e[n] = {})
          })).addCase(is, (function(e, t) {
            var n, r = t.payload,
              a = r.chainId,
              i = r.hash,
              c = r.blockNumber,
              o = null === (n = e[a]) || void 0 === n ? void 0 : n[i];
            o && (o.lastCheckedBlockNumber ? o.lastCheckedBlockNumber = Math.max(c, o.lastCheckedBlockNumber) : o.lastCheckedBlockNumber = c)
          })).addCase(as, (function(e, t) {
            var n, r = t.payload,
              a = r.hash,
              i = r.chainId,
              c = r.receipt,
              o = null === (n = e[i]) || void 0 === n ? void 0 : n[a];
            o && (o.receipt = c, o.confirmedTime = Gd())
          }))
        })),
        Jd = (Hd = {
          independentField: Xo.INPUT,
          typedValue: ""
        }, Object(C.a)(Hd, Xo.INPUT, {
          currencyId: ""
        }), Object(C.a)(Hd, Xo.OUTPUT, {
          currencyId: ""
        }), Object(C.a)(Hd, "recipient", null), Hd),
        $d = Object(Te.c)(Jd, (function(e) {
          return e.addCase(es, (function(e, t) {
            var n, r = t.payload,
              a = r.typedValue,
              i = r.recipient,
              c = r.field,
              o = r.inputCurrencyId,
              s = r.outputCurrencyId;
            return n = {}, Object(C.a)(n, Xo.INPUT, {
              currencyId: o
            }), Object(C.a)(n, Xo.OUTPUT, {
              currencyId: s
            }), Object(C.a)(n, "independentField", c), Object(C.a)(n, "typedValue", a), Object(C.a)(n, "recipient", i), n
          })).addCase(Jo, (function(e, t) {
            var n, r = t.payload,
              a = r.currencyId,
              i = r.field,
              c = i === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT;
            return a === e[c].currencyId ? Object(X.a)(Object(X.a)({}, e), {}, (n = {
              independentField: e.independentField === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT
            }, Object(C.a)(n, i, {
              currencyId: a
            }), Object(C.a)(n, c, {
              currencyId: e[i].currencyId
            }), n)) : Object(X.a)(Object(X.a)({}, e), {}, Object(C.a)({}, i, {
              currencyId: a
            }))
          })).addCase($o, (function(e) {
            var t;
            return Object(X.a)(Object(X.a)({}, e), {}, (t = {
              independentField: e.independentField === Xo.INPUT ? Xo.OUTPUT : Xo.INPUT
            }, Object(C.a)(t, Xo.INPUT, {
              currencyId: e[Xo.OUTPUT].currencyId
            }), Object(C.a)(t, Xo.OUTPUT, {
              currencyId: e[Xo.INPUT].currencyId
            }), t))
          })).addCase(Zo, (function(e, t) {
            var n = t.payload,
              r = n.field,
              a = n.typedValue;
            return Object(X.a)(Object(X.a)({}, e), {}, {
              independentField: r,
              typedValue: a
            })
          })).addCase(ts, (function(e, t) {
            var n = t.payload.recipient;
            e.recipient = n
          }))
        })),
        Zd = {
          independentField: us.CURRENCY_A,
          typedValue: "",
          otherTypedValue: ""
        },
        eb = Object(Te.c)(Zd, (function(e) {
          return e.addCase(vs, (function() {
            return Zd
          })).addCase(Os, (function(e, t) {
            var n = t.payload,
              r = n.field,
              a = n.typedValue;
            return n.noLiquidity ? r === e.independentField ? Object(X.a)(Object(X.a)({}, e), {}, {
              independentField: r,
              typedValue: a
            }) : Object(X.a)(Object(X.a)({}, e), {}, {
              independentField: r,
              typedValue: a,
              otherTypedValue: e.typedValue
            }) : Object(X.a)(Object(X.a)({}, e), {}, {
              independentField: r,
              typedValue: a,
              otherTypedValue: ""
            })
          }))
        })),
        tb = {
          error: null,
          current: null,
          loadingRequestId: null,
          pendingUpdate: null
        },
        nb = {
          lastInitializedDefaultListOfLists: nc,
          byUrl: Object(X.a)(Object(X.a)({}, nc.reduce((function(e, t) {
            return e[t] = tb, e
          }), {})), {}, Object(C.a)({}, tc, {
            error: null,
            current: rc,
            loadingRequestId: null,
            pendingUpdate: null
          })),
          selectedListUrl: tc
        },
        rb = Object(Te.c)(nb, (function(e) {
          return e.addCase(ze.pending, (function(e, t) {
            var n = t.payload,
              r = n.requestId,
              a = n.url;
            e.byUrl[a] = Object(X.a)(Object(X.a)({
              current: null,
              pendingUpdate: null
            }, e.byUrl[a]), {}, {
              loadingRequestId: r,
              error: null
            })
          })).addCase(ze.fulfilled, (function(e, t) {
            var n, r, a = t.payload,
              i = a.requestId,
              c = a.tokenList,
              o = a.url,
              s = null === (n = e.byUrl[o]) || void 0 === n ? void 0 : n.current,
              l = null === (r = e.byUrl[o]) || void 0 === r ? void 0 : r.loadingRequestId;
            if (s) {
              if (Object(Ye.c)(s.version, c.version) === Ye.a.NONE) return;
              null !== l && l !== i || (e.byUrl[o] = Object(X.a)(Object(X.a)({}, e.byUrl[o]), {}, {
                loadingRequestId: null,
                error: null,
                current: s,
                pendingUpdate: c
              }))
            } else e.byUrl[o] = Object(X.a)(Object(X.a)({}, e.byUrl[o]), {}, {
              loadingRequestId: null,
              error: null,
              current: c,
              pendingUpdate: null
            })
          })).addCase(ze.rejected, (function(e, t) {
            var n, r = t.payload,
              a = r.url,
              i = r.requestId,
              c = r.errorMessage;
            (null === (n = e.byUrl[a]) || void 0 === n ? void 0 : n.loadingRequestId) === i && (e.byUrl[a] = Object(X.a)(Object(X.a)({}, e.byUrl[a]), {}, {
              loadingRequestId: null,
              error: c,
              current: null,
              pendingUpdate: null
            }))
          })).addCase(We, (function(e, t) {
            var n = t.payload;
            e.selectedListUrl = n, e.byUrl[n] || (e.byUrl[n] = tb)
          })).addCase(qe, (function(e, t) {
            var n = t.payload;
            e.byUrl[n] || (e.byUrl[n] = tb)
          })).addCase(Ve, (function(e, t) {
            var n = t.payload;
            e.byUrl[n] && delete e.byUrl[n], e.selectedListUrl === n && (e.selectedListUrl = Object.keys(e.byUrl)[0])
          })).addCase(Fe, (function(e, t) {
            var n, r = t.payload;
            if (!(null === (n = e.byUrl[r]) || void 0 === n ? void 0 : n.pendingUpdate)) throw new Error("accept list update called without pending update");
            e.byUrl[r] = Object(X.a)(Object(X.a)({}, e.byUrl[r]), {}, {
              pendingUpdate: null,
              current: e.byUrl[r].pendingUpdate
            })
          })).addCase(qd, (function(e) {
            if (e.lastInitializedDefaultListOfLists) {
              if (e.lastInitializedDefaultListOfLists) {
                var t = e.lastInitializedDefaultListOfLists.reduce((function(e, t) {
                    return e.add(t)
                  }), new Set),
                  n = nc.reduce((function(e, t) {
                    return e.add(t)
                  }), new Set);
                nc.forEach((function(n) {
                  t.has(n) || (e.byUrl[n] = tb)
                })), e.lastInitializedDefaultListOfLists.forEach((function(t) {
                  n.has(t) || delete e.byUrl[t]
                }))
              }
            } else e.byUrl = nb.byUrl, e.selectedListUrl = void 0;
            e.lastInitializedDefaultListOfLists = nc
          }))
        })),
        ab = {
          independentField: Hl.LIQUIDITY_PERCENT,
          typedValue: "0"
        },
        ib = Object(Te.c)(ab, (function(e) {
          return e.addCase(eu, (function(e, t) {
            var n = t.payload,
              r = n.field,
              a = n.typedValue;
            return Object(X.a)(Object(X.a)({}, e), {}, {
              independentField: r,
              typedValue: a
            })
          }))
        })),
        cb = Object(Te.c)({
          callResults: {}
        }, (function(e) {
          return e.addCase(vr, (function(e, t) {
            var n, r = t.payload,
              a = r.calls,
              i = r.chainId,
              c = r.options,
              o = (c = void 0 === c ? {} : c).blocksPerFetch,
              s = void 0 === o ? 1 : o,
              l = e.callListeners ? e.callListeners : e.callListeners = {};
            l[i] = null !== (n = l[i]) && void 0 !== n ? n : {}, a.forEach((function(e) {
              var t, n, r = yr(e);
              l[i][r] = null !== (t = l[i][r]) && void 0 !== t ? t : {}, l[i][r][s] = (null !== (n = l[i][r][s]) && void 0 !== n ? n : 0) + 1
            }))
          })).addCase(xr, (function(e, t) {
            var n = t.payload,
              r = n.chainId,
              a = n.calls,
              i = n.options,
              c = (i = void 0 === i ? {} : i).blocksPerFetch,
              o = void 0 === c ? 1 : c,
              s = e.callListeners ? e.callListeners : e.callListeners = {};
            s[r] && a.forEach((function(e) {
              var t = yr(e);
              s[r][t] && s[r][t][o] && (1 === s[r][t][o] ? delete s[r][t][o] : s[r][t][o]--)
            }))
          })).addCase(gr, (function(e, t) {
            var n, r = t.payload,
              a = r.chainId,
              i = r.fetchingBlockNumber,
              c = r.calls;
            e.callResults[a] = null !== (n = e.callResults[a]) && void 0 !== n ? n : {}, c.forEach((function(t) {
              var n = yr(t),
                r = e.callResults[a][n];
              if (r) {
                var c;
                if ((null !== (c = r.fetchingBlockNumber) && void 0 !== c ? c : 0) >= i) return;
                e.callResults[a][n].fetchingBlockNumber = i
              } else e.callResults[a][n] = {
                fetchingBlockNumber: i
              }
            }))
          })).addCase(Cr, (function(e, t) {
            var n, r = t.payload,
              a = r.fetchingBlockNumber,
              i = r.chainId,
              c = r.calls;
            e.callResults[i] = null !== (n = e.callResults[i]) && void 0 !== n ? n : {}, c.forEach((function(t) {
              var n = yr(t),
                r = e.callResults[i][n];
              r && r.fetchingBlockNumber === a && (delete r.fetchingBlockNumber, r.data = null, r.blockNumber = a)
            }))
          })).addCase(wr, (function(e, t) {
            var n, r = t.payload,
              a = r.chainId,
              i = r.results,
              c = r.blockNumber;
            e.callResults[a] = null !== (n = e.callResults[a]) && void 0 !== n ? n : {}, Object.keys(i).forEach((function(t) {
              var n, r = e.callResults[a][t];
              (null !== (n = null === r || void 0 === r ? void 0 : r.blockNumber) && void 0 !== n ? n : 0) > c || (e.callResults[a][t] = {
                data: i[t],
                blockNumber: c
              })
            }))
          }))
        })),
        ob = ["user", "transactions"],
        sb = Object(zd.load)({
          states: ob
        });
      sb.user && (sb.user.userDarkMode = function() {
        var e = null;
        try {
          var t = localStorage.getItem(Kr);
          t && (e = JSON.parse(t))
        } catch (n) {
          console.error(n)
        }
        return e
      }());
      var lb = Object(Te.a)({
        reducer: {
          application: Fd,
          user: Kd,
          transactions: Xd,
          swap: $d,
          mint: eb,
          burn: ib,
          multicall: cb,
          lists: rb,
          toasts: Js
        },
        middleware: [].concat(Object(G.a)(Object(Te.e)({
          thunk: !1
        })), [Object(zd.save)({
          states: ob
        })]),
        preloadedState: sb
      });
      lb.dispatch(qd());
      var ub = lb;

      function db(e) {
        var t = new w.a(e);
        return t.pollingInterval = 15e3, t
      }
      var bb = Object(x.c)(de),
        pb = function(e) {
          var t = e.children;
          return Object(it.jsx)(x.b, {
            getLibrary: db,
            children: Object(it.jsx)(bb, {
              getLibrary: db,
              children: Object(it.jsx)(v.a, {
                store: ub,
                children: Object(it.jsx)(hd, {
                  children: Object(it.jsx)(l.u, {
                    children: t
                  })
                })
              })
            })
          })
        },
        jb = (n(495), n(195)),
        fb = n(290),
        hb = n.n(fb),
        mb = n(291),
        yb = n.n(mb);
      jb.a.use(hb.a).use(yb.a).use(nn.a).init({
        backend: {
          loadPath: "./locales/{{lng}}.json"
        },
        react: {
          useSuspense: !0
        },
        fallbackLng: "en",
        preload: ["en"],
        keySeparator: !1,
        interpolation: {
          escapeValue: !1
        }
      });
      jb.a;
      "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1), window.addEventListener("error", (function() {
        var e;
        null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists")
      })), s.a.render(Object(it.jsx)(i.StrictMode, {
        children: Object(it.jsxs)(pb, {
          children: [Object(it.jsxs)(it.Fragment, {
            children: [Object(it.jsx)(Ad, {}), Object(it.jsx)(Ud, {}), Object(it.jsx)(_d, {}), Object(it.jsx)(Dd, {}), Object(it.jsx)(Yd, {})]
          }), Object(it.jsx)(l.v, {}), Object(it.jsx)(b, {}), Object(it.jsx)(Ed, {})]
        })
      }), document.getElementById("root"))
    }
  },
  [
    [512, 2, 3]
  ]
]);
//# sourceMappingURL=main.262e911e.chunk.js.map
