'use strict'

class ReportingController {
  summary({
    request,
    response,
    view
  }) {
    return view.render('summary')
  }

  status({
    request,
    response,
    view
  }) {
    return view.render('status')
  }

  priority({
    request,
    response,
    view
  }) {
    return view.render('priority')
  }

  type({
    request,
    response,
    view
  }) {
    return view.render('type')
  }

  group({
    request,
    response,
    view
  }) {
    return view.render('group')
  }

  firstresponse({
    request,
    response,
    view
  }) {
    return view.render('firstresponse')
  }

  agent({
    request,
    response,
    view
  }) {
    return view.render('agent')
  }
}

module.exports = ReportingController
