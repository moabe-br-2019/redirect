import { createRequestHandler } from "@vercel/node";
const requestHandler = createRequestHandler({
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://orcamento-riocordas.bubbleapps.io/:path*",
        permanent: true,
      },
    ];
  },
});
export default requestHandler;
