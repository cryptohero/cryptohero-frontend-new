export const network = {
  1: {
    default: false, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    rpc: 'https://mainnet.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  2: {
    name: 'Morden Test Network',
    contract: '',
  },
  3: {
    default: true, // It will be used when no metaMask
    name: 'Ropsten Test Network',
    CryptoHeroCard: '0x5e8f584c74790966a0eb75d687093a2d639f85e0',
    Shareable: '0xb659914473283649a991d741719df658ce6b9895',
    rpc: 'https://ropsten.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  4: {
    name: 'Rinkeby Test Network',
    contract: '',
    rpc: 'https://rinkeby.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  42: {
    name: 'Kovan Test Network',
    contract: '0x23f9d870fbee3161443d9898d0c494ce0416b886',
    rpc: 'https://kovan.infura.io/lTETGFVyQX99UKQ98BN4',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

