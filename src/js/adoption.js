import contract from 'truffle-contract'
import AdoptionContract from '@contracts/Adoption.json'

const Adoption = {

  contract: null,

  instance: null,

  init: function () {
    let self = this
    return new Promise((resolve, reject) => {
      self.contract = contract(AdoptionContract)
      self.contract.setProvider(window.web3.currentProvider)

      self.contract.deployed().then((instance) => {
        self.instance = instance
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },

  getAdopters: function () {
    return this.instance.getAdopters.call()
  },

  adopt: function (petId) {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase((error, account) => {
        if (error) {
          reject(error)
          return
        }
        this.instance.adopt(petId, {from: account}).then((result) => {
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    })
  }
}

export default Adoption
