import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    // Handle static assets
    return await getAssetFromKV(event, {
      // Add support for SPA routing
      mapRequestToAsset: req => {
        const parsedUrl = new URL(req.url)

        // Handle root path
        if (parsedUrl.pathname === '/') {
          return new Request(`${parsedUrl.origin}/index.html`, req)
        }

        // Handle specific routes that should return HTML files
        if (parsedUrl.pathname === '/rf4all') {
          return new Request(`${parsedUrl.origin}/rf4all.html`, req)
        }

        // Check if the path has a file extension
        const hasExtension = /\.[a-zA-Z0-9]+$/.test(parsedUrl.pathname)

        // If no extension and not a known route, try to serve as HTML
        if (!hasExtension) {
          return new Request(`${parsedUrl.origin}${parsedUrl.pathname}.html`, req)
        }

        // Return the original request for files with extensions
        return req
      }
    })
  } catch (e) {
    // If asset not found, serve 404.html
    try {
      return await getAssetFromKV(event, {
        mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req)
      })
    } catch (e404) {
      return new Response('404 Not Found', { status: 404 })
    }
  }
}
