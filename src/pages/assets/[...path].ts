export const prerender = false;

export async function GET({ params, locals }: { params: { path: string }; locals: App.Locals }) {
  const path = params.path;
  if (!path || path.includes('..') || path.startsWith('/')) {
    return new Response('Bad request', { status: 400 });
  }

  const object = await locals.runtime.env.BUCKET.get(path);
  if (!object) return new Response('Not found', { status: 404 });

  return new Response(object.body, {
    headers: {
      'Content-Type': object.httpMetadata?.contentType ?? 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
