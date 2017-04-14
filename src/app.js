import Koa from 'koa'
import helmet from 'koa-helmet'

const app = new Koa()

app.use(helmet())

app.use(ctx => {
    ctx.body = 'ForwardProblems'
})

app.listen(3000)

export default app;