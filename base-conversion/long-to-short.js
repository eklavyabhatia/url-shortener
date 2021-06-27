let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function idToShortCode(n) {
    let code = ''

    // use do while code for n=0 case

    while (n > 0) {
        let rem = n % 62
        if (rem == 0) {
            code = '9' + code
            n = parseInt(n / 62) - 1
        } else {

            code = str.charAt(rem - 1) + code
            n = parseInt(n / 62)
        }
    }

    return code
}

module.exports = {
    idToShortCode
}