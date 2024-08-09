import { App } from 'vue'
import registerPropertirs from './register-properties'

export function globalRegitser(app: App) {
    app.use(registerPropertirs)
}