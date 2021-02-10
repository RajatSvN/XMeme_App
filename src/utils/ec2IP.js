const ec2 = require('ec2-publicip')
let ec2PublicIP = ''

ec2.getPublicIP(function (err, ip) {

    if(err){
        console.log(err)
        return
    }

    ec2PublicIP = ip

})

module.exports = {
    ec2PublicIP
}