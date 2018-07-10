<template lang="pug">
  .containera
    #login(v-if="!me")
      h1.display_mobile| {{$t('Content1')}} （<a href="https://github.com/ChengOrangeJu/WebExtensionWallet" style="" target="_blank">{{$t('Content2')}}</a>，<a href="https://nano.nebulas.io/index_cn.html" style="" target="_blank">Nas nano</a>）
      h3.display_mobile| {{$t('Content3')}}
    #draw()
            section.hero.head
              .hero-body
                  .container
                      h1.title| {{$t('H1Title1')}}
                      h2.subtitle| {{$t('H2Title1')}} {{getCardsLeft}} {{$t('H2Title2')}}
                      h2.subtitle| {{$t('H2Title3')}}
                      h1.title| {{ getPrice }} ETH / {{$t('CardUnit')}}
            .container
                .buttons(style="width: 18rem")
                  a.button.is-primary(@click="setQty(1)")|{{$t('Draw')}} 1 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(3)")|{{$t('Draw')}} 3 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(6)")|{{$t('Draw')}} 6 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(9)")|{{$t('Draw')}} 9 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(12)")|{{$t('Draw')}} 12 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(16)")|{{$t('Draw')}} 16 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(32)")|{{$t('Draw')}} 32 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(64)")|{{$t('Draw')}} 64 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(128)")|{{$t('Draw')}} 128 {{$t('CardUnit')}}
                  a.button.is-primary(@click="setQty(1024)")|{{$t('Draw')}} 1024 {{$t('CardUnit')}}
                  <br>
                  //  a.button.is-primary(@click="airdrop")|{{$t('赠送')}}

            //- .container
              .columns
                .column
                  section.hero
                    .hero-body
                        .containers
                            h2.subtitle| {{$t('H2Content1')}}
                            h1.title| {{getDisplayTotal}} NAS
                            h2.subtitle| {{$t('H2Content2')}}
                .column
                      button.button.is-primary.is-large(@click="draw")| {{$t('Fight')}}


</template>

<script>
import Cookie from 'js-cookie';
import Contract from '@/contract/cryptohero';
import { BigNumber } from 'bignumber.js';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      count: 0,
    };
  },
  asyncComputed: {
    async getCardsLeft() {
      const contract = new Contract();
      console.log(contract);
      const result = await contract.getDrawCardsLeft();
      return result;
    },
    async getPrice() {
      const contract = new Contract();
      const result = await contract.getDrawPrice();
      return new BigNumber(result);
    },
  },
  computed: {
    ...mapState(['me']),
    displayCount() {
      return `${this.count} 张`;
    },
    getDisplayTotal() {
      // // return new BigNumber(this.getPrice).times(this.count).toNumber();
      // const d = new BigNumber(0.00001); // for mainnet
      // //       const d = new BigNumber(0.0000000000000000000000000000000000000001); // for testnet
      // const a0 = new BigNumber(this.getPrice);
      // const n = new BigNumber(this.count);
      // return a0.times(n).plus((n.minus(1)).times(n).times(d).div(2));
      // no dynamic price for now
      return new BigNumber(this.getPrice).times(this.count);
    },
  },
  methods: {
    setQty(qty) {
      this.count = qty;
      this.draw();
    },
    add(time = 1) {
      this.count += time;
    },
    minus(time = 1) {
      if (this.count > 0) {
        this.count -= time;
      }
    },
    async draw() {
      const contract = new Contract();
      await contract.initialize();
      const referrer = Cookie.get('referrer') || '';

      // console.log("crytpresp:"+referrer);
      const result = await contract.draw({ value: this.getDisplayTotal });
      return result;
    },
  },
};
</script>

<style scoped>
#draw {
  background: #ecdaa8;
  border-radius: 8px;
}
.buttons {
  margin: 1rem;
}

#login {
  width: 100%;
  height: 93px;
  padding: 22px;
  background-color: #ecdaa8;
  font-size: 20px;
  margin-bottom: 27px;
  border-radius: 8px;
}
#login a {
  color: brown;
}
</style>
