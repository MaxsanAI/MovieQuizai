/// <reference path="../.astro/types.d.ts" />

interface CloudflareEnv {
  AI: Ai;
  DB: D1Database;
  IMAGES: R2Bucket;
  SITE_URL: string;
}

interface AppLocals {
  cf: CloudflareEnv;
}

declare namespace App {
  interface Locals {
    cf?: CloudflareEnv;
  }
}
