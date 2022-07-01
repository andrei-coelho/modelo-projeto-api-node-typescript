import express, { Express } from 'express';
import Config from './config';
import routing from './routes/routes'

const config = Config.instance().json()
const app:Express = express()
routing(app)

app.listen(config.port, () => {
  console.log(`App ativo de test na porta ${config.port}`)
})
