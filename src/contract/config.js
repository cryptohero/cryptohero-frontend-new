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
    CryptoHeroCard: '0x7Ab695C39f58346A32aEBA7BF39505676469840c',
    Shareable: '0x14497e59F6911471EA49Cac92BE7c6d633Cd1975',
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

