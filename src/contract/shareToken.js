import Contract from './contract';
import abi from './abi/ShareToken.json';

export default class ShareToken extends Contract {
  constructor() {
    super({ abi });
  }
}
