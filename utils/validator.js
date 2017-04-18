/**
 * Created by carlen on 4/17/17.
 */
const jsonType = { type: 'json' }
const continueOnError = true

const isNormalInteger = str => /^\+?(0|[1-9]\d*)$/.test(str)

const isInt = nb => new Promise((s, f) => {
    if (isNormalInteger(nb)) s(+nb)
    else f()
})

const validateJson = hanlder => ({ validate: jsonType, continueOnError, body: hanlder })

const ValidMsg = () => ({  })

module.exports = { isInt, ValidMsg, validateJson }