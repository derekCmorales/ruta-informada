// Worker de Cloudflare delante de los archivos estáticos de dist/.
// 1. Manda todo a HTTPS y al dominio principal (evita contenido duplicado en *.workers.dev).
// 2. Agrega charset=utf-8 al Content-Type de las páginas y textos.
const HOST = "rutainformada.larasolutions.dev";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (!local && (url.protocol === "http:" || url.hostname.endsWith(".workers.dev"))) {
      url.protocol = "https:";
      if (url.hostname.endsWith(".workers.dev")) url.hostname = HOST;
      return Response.redirect(url.toString(), 301);
    }

    const res = await env.ASSETS.fetch(request);
    const type = res.headers.get("content-type") || "";
    const textual = /^(text\/|application\/(javascript|json|manifest\+json|xml))/.test(type);
    if (!textual || /charset=/i.test(type)) return res;

    const out = new Response(res.body, res);
    out.headers.set("content-type", `${type}; charset=utf-8`);
    return out;
  },
};
