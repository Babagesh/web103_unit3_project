import dotenv from 'dotenv'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const filename = fileURLToPath(import.meta.url)
const dir = dirname(filename)

dotenv.config({
    path:join(dir, '../.env')
})