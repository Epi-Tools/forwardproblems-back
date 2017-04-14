import Koa from 'koa'

const app = new Koa()

app.use(ctx => {
    ctx.body = 'ForwardProblems'
})

app.listen(3000)

export default app;