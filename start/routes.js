'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('summary')
Route.on('/status').render('status')
Route.on('/priority').render('priority')
Route.on('/type').render('type')
Route.on('/group').render('group')
Route.on('/firstresponse').render('firstresponse')
Route.on('/agent').render('agent')
