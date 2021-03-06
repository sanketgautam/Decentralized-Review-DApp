import React from 'react'
import { getWeb3, getAccounts, getContractInstance } from '../../services/web3'

export class Web3 extends React.Component {
  state = { web3: null, accounts: null, contract: null }

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      const accounts = await getAccounts(web3)
      const contract = await getContractInstance(web3)
      this.setState({ web3, accounts, contract })
    } catch (error) {
        // console.log(window.web3.currentProvider)
        // console.log(window.web3.version.getNetwork(function(err,res){console.log(res)}))
      alert(`Failed to load web3, accounts, and contract. Check console for details.`)
      console.log(error)
    }
  }

  render () {
    return this.props.render(this.state)
  }
}
