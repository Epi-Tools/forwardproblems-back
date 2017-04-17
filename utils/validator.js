/**
 * Created by carlen on 4/17/17.
 */

const isNormalInteger = str => /^\+?(0|[1-9]\d*)$/.test(str)

const isInt = nb => new Promise((s, f) => {
    if (isNormalInteger(nb)) s(+nb)
    else f()
})

module.exports = { isInt }