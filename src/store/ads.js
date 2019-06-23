export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am discr',
        promo: false,
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am discr',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am discr',
        promo: true,
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '1235'
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd({commit}, payload) {
      payload.id = Math.random().toString();

      commit('createAd', payload)
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
