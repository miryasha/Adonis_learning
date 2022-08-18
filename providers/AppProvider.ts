import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  // we need to add routes inside our boot
  public async boot () {
    // IoC container is ready
    const Route = this.app.container.use('Adonis/Core/Route');

     //when we added this we need to tell our tsc
     // more on this ==>    https://www.youtube.com/watch?v=_R6BXY6BI_s&list=PL9dIWiKCV573fa_ohMcJJbow7y--zAxd1&index=11
    Route.Route.macro('mustBeSigned', function () {
      this.middleware(async (ctx, next) => {
        if (!ctx.request.hasValidSignature()) {
          ctx.response.badRequest('Invalid signature')
          return
        }

        await next()
      })

      return this
    })
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
