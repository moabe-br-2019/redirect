addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  const { pathname } = new URL(request.url)
  // Redireciona todas as solicitações para https://www.dominio-de-destino.com.br
  return Response.redirect(`https://orcamento-riocordas.bubbleapps.io${pathname}`, 301)
}
