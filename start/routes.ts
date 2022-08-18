/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import { Request } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'


import './login/logins'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
 
})

Route.get('/test', async (ctx) => {
  return ctx.view.render("TestingForLearning")
})

Route.get('/ctx', async (ctx) => {
  ctx.response.json("testing json")
})

Route.on('/yasha').redirectToPath("https://www.trin.net/home/default.aspx")

Route.get('/productId/:id', async ({ params }) => {
  return `This is your Id ${params.id}`
})


Route.get('/reg/:re', async (ctx) => {
  return  ctx.response.json(`This is your Id ${ctx.params.re}`)
}).where("re", /^[a-z0-9]+(?:-[a-z0-9]+)*$/gm)

Route.get('/match/:ma', async (ctx) => {
  return  ctx.response.json(`This is your Id ${ctx.params.ma}`)
}).where("ma", Route.matchers.number())

Route.get('/cast/:ca', async (ctx) => {
  return  ctx.response.json(`This is your Id ${ctx.params.ca}`)
}).where("ca", {
  match : /^[0-9]+$/,
  cast: (ca) => Number(ca)
})


Route.post('/p', async () => {
  const postsUrl = Route.makeUrl('posts.show', { id: 3});

  return postsUrl
})



Route.group(()=>{
  Route.get('/', async() => 'list of postes').as('index')
  Route.post('/:id', async({ params }) => `list of params are ${params.id}`).as('show')
  Route.delete('/', async() => 'list of postes').as('destroy')
  Route.put('/', async() => 'list of postes').as('update')

}).prefix('/posts').as('posts')


Route.get('/ipaddress', async ({ request, response }) => {
   
   //console.log(request.hostname())
   const yourIp = request.ip()
   response.send({ dudeitstyourip : `your Ip is : ${yourIp}` }, true)
})


Route.get('/test-signature', async () => {
  return "this is valid"
}).mustBeSigned()