import Route from '@ioc:Adonis/Core/Route'


Route.get('/login', async ({ view }) => {
    return view.render('login')
   
  })