import { createRequestHandler } from "@vercel/node";
const requestHandler = createRequestHandler({
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.dominio-de-destino.com.br/:path*",
        permanent: true,
      },
    ];
  },
});
export default requestHandler;
