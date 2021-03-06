const BaseBis = require('./base.bis')
const jwt = require('jsonwebtoken')
const rndToken = require('rand-token')

class AuthBis extends  BaseBis {
  constructor(mongoose) {
    super()
  }

  async authUser(userInfo) {
    let username = userInfo.Username
    let ClientID = userInfo.ID_TaiKhoan

    const token = jwt.sign({username, atoken: true}, 'SANG_TOKEN', {
      expiresIn: 60*5  // 1 mins
    })

    const rfToken = jwt.sign({username, rtoken: true}, 'SANG_TOKEN', {
      expiresIn: 30 * 86400 * 12 // 2 tháng
    })

    return {
      accessToken: token,
      refreshToken: rfToken,
      authenticated: true
    }
  }

}

module.exports = AuthBis