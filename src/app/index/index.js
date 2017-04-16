/**
 * Created by carlen on 4/16/17.
 */
const ModelCategories = require('../../services/categories/categories')

const get = async ctx => ctx.render('index', { categories: await ModelCategories.get() })

module.exports = { get }