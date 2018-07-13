import { BigNumber } from 'bignumber.js';
// import { NasTool } from '@/api';
// import heroProfile from '@/config/cards.json';// '@/heroProfile.json';
// import heroStatus from '../../static/herostatu.json';
import Contract from './contract';
import abi from './abi/CryptoHeroCard.json';
// import Promise from 'bluebird';

import { network } from './config';

// function getCardInfoByHeroId(id, tkId, prices, claim) {
//   const basic = heroProfile[id];
//   const status = heroStatus[id];
//   if (!basic) {
//     console.error(`error detected id is ${id}`);
//   }
//   const cardImage = {
//     code: id,
//     front: `http://test.cdn.hackx.org/heros_new/${id}.jpeg`,
//     back: `http://test.cdn.hackx.org/backs_new/${id}.jpeg`,
//   };

//   const res = Object.assign(basic, cardImage, status, prices);
//   const result = Object.assign({ tokenId: tkId, claimed: claim }, res);
//   return result;
// }

export default class CryptoHero extends Contract {
  async initialize() {
    // const contractName = 'CryptoGirl';
    const contractAddress = network[3].CryptoHeroCard;
    this.contractAddress = contractAddress;
    await super.initialize({
      abi,
      contractAddress,
    });
    // return this;
  }

  async draw({ value, from = this.account }) {
    console.info(`Value is ${value.toString(10)}`);
    const msg = { value, from };
    this.contract.methods.drawToken().send(msg);
  }

  async getBalance() {
    const anotheraddr = await this.contract.methods
      .DappTokenContractAddr()
      .call();
    console.log(anotheraddr);
    // var balance = await web3.eth.getBalance(anotheraddr);
    const balance = 10000;
    // const balance = await web3.eth.getBalance(anotheraddr);
    const balanceeth = balance / 1000000000000000000;
    return balanceeth;
  }

  async getDrawCardsLeft() {
    // this.contract.methods.drawToken().call(); // no fns for get that
    return '1919810';
  }
  async getDrawPrice() {
    return new BigNumber(1);
  }
}

// No longer use Axios
// export const getPackTx = async (from) => {
//   const api = network.getPackTxApi;
//   const params = Object.assign({}, network.apiParams, network.params);

//   let extraParams = {};
//   if (from) {
//     const full64From = from.replace(/^0x/i, `0x${'0'.repeat(66 - from.length)}`);
//     extraParams = Object.assign({ topic2: full64From, topic0_2_opr: 'and' }, extraParams);
//   }
//   const response = await request.get(api).query(params).query(extraParams);
//   const result = response.body.result;
//   if (!Array.isArray(result)) {
//     return [];
//   }
//   return result.map(({ transactionHash, data, timeStamp, topics }) => {
//     const prizeId = parseInt(data, 16);
//     const item = config.items[prizeId] || {};
//     return {
//       txHash: transactionHash,
//       from: topics[2].replace(/0x0+/i, '0x'),
//       date: new Date(parseInt(timeStamp, 16) * 1000),
//       prize: {
//         id: prizeId,
//         title: item.姓名
//       }
//     };
//   });
// };
