import { BigNumber } from 'bignumber.js';
// import { NasTool } from '@/api';
// import heroProfile from '@/config/cards.json';// '@/heroProfile.json';
// import heroStatus from '../../static/herostatu.json';
import Contract from './contract';
import abi from './abi/CryptoHeroCard.json';
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
  constructor() {
    const contractAddress = network[3].CryptoHeroCard;
    super({
      abi, contractAddress,
    });
  }

  async draw() {
    this.contract.methods.drawToken().send();
  }

  async getDrawCardsLeft() {
    // this.contract.methods.drawToken().call(); // no fns for get that
    return '1919810';
  }
  async getDrawPrice() {
    return new BigNumber(1);
  }
}

