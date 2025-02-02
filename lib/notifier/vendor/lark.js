const { doPost } = require('../util')

async function sendLark({ title = '', content = '', webhook }) {
  const data = {
    mtz: {
      title,
      content
    }
  }

  return doPost(webhook, data, 'json')
    .then((res) => ({ success: true, msg: '飞书推送成功' }))
    .catch((e) => ({ success: false, msg: `飞书推送失败: ${e}` }))
}

module.exports = sendLark
