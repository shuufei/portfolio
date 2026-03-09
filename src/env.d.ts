/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

interface Env {
  portfolio_db: D1Database;
  BUCKET: R2Bucket;
}

declare namespace App {
  interface Locals extends Runtime {}
}
