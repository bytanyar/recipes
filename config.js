const data = require('static/gitInfo.txt')
fetch(data).then(result => {
    return result.text()
})