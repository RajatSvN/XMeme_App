const ec2 = require('ec2-publicip')
let ec2PublicIP = ''
ec2.getPublicIP((error, ip) => {

    if(error){
        console.log(error)
        return
    }

    ec2PublicIP = ip
    console.log('public ip:'+ ip)

})

module.exports = {
    ec2PublicIP
}