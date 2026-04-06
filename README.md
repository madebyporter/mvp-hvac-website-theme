# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── ContactDrawer.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run deploy`          | Deploy the Worker with Wrangler                    |

## Cloudflare D1: sync prod ↔ local

Production D1 is bound via `database_id` in `wrangler.jsonc`. Local dev uses Wrangler’s embedded SQLite (no separate local database in the dashboard).

Authenticate once:

```sh
npx wrangler login
```

SQL snapshots are written under `.d1-sync/` (gitignored; may contain sensitive data).

| Goal | Step 1 | Step 2 |
|------|--------|--------|
| **Production → local** (schema + data) | `npm run d1:pull:export` | `npm run d1:pull:apply` |
| **Production → local** (data only) | `npm run d1:pull:export-data` | `npm run d1:pull:apply-data` |
| **Local → production** (schema + data) | `npm run d1:push:export` | `npm run d1:push:apply` |
| **Local → production** (data only) | `npm run d1:push:export-data` | `npm run d1:push:apply-data` |

**Notes**

- Applying a **full** export (`prod.sql` / `local.sql`) on a database that already has the same tables can fail on duplicate `CREATE TABLE` statements. If local schema should match migrations, run `npx wrangler d1 migrations apply hvac-mvp-db --local`, then use the **`*:export-data`** / **`*:apply-data`** scripts to move rows only.
- Running **`*:apply`** against **remote** executes whatever is in the SQL file. Review `.d1-sync/*.sql` before pushing to production; treat full dumps as potentially destructive.
- **EmDash + D1 export:** Upstream Miniflare refuses dumps that include **FTS5 virtual tables**. This repo patches `miniflare` so exports **skip virtual tables** (FTS is rebuilt on the target from `ec_*` via triggers). The patch also skips **`_emdash_*`**, **`options`**, and **`users`** (duplicate keys / emails on an initialized remote). Exports **sort tables** so **`taxonomies` → `revisions` → `media` → `ec_*` → `content_taxonomies`**, matching EmDash foreign keys (default export order had `content_taxonomies` / `ec_*` before their parents, which can trigger **`FOREIGN KEY constraint failed`** on remote). A normal **local → production** push is **content**—not CMS schema, site options, or logins. Create prod-only accounts in EmDash admin. If apply still fails, inspect `.d1-sync/local-data.sql` for orphan references. Ensure **migrations are applied on remote** before syncing content. Re-run `npm install` after upgrading `miniflare`/`wrangler` (or refresh the patch if paths change).

## Cloudflare R2: sync with S3-compatible tools

Wrangler can put/get single objects (`--local` / `--remote`); for folder-level sync, use the **S3 API** URL from the dashboard: R2 → your bucket → **S3 API**.

Create an R2 API token with read/write access to the bucket (e.g. `hvac-mvp-media` as in `wrangler.jsonc`), then configure AWS CLI (example profile name `r2`):

```sh
aws configure set aws_access_key_id '<R2_ACCESS_KEY_ID>' --profile r2
aws configure set aws_secret_access_key '<R2_SECRET_ACCESS_KEY>' --profile r2
```

Download production objects to a local folder:

```sh
aws s3 sync "s3://hvac-mvp-media/" ./r2-local-mirror/ \
  --endpoint-url "https://<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com" \
  --profile r2
```

Upload a local folder to production:

```sh
aws s3 sync ./r2-local-mirror/ "s3://hvac-mvp-media/" \
  --endpoint-url "https://<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com" \
  --profile r2
```

Replace `<YOUR_ACCOUNT_ID>` with the subdomain from your R2 S3 API endpoint. Do not commit API keys or token secrets.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
