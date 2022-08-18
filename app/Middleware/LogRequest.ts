import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogRequest {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    console.log("hi from log requester for testing!!")
    await next()
  }
}
