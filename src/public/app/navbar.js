
let navlinks = $('.navbar .active')

navlinks.click((ev) => {

  let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
  $('#content').load(componentUrl)

})