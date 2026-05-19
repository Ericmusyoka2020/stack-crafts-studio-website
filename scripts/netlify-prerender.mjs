import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const clientDir = join(root, 'dist', 'client');
const serverEntry = join(root, 'dist', 'server', 'index.js');
const outputHtml = join(clientDir, 'index.html');

const { default: handler } = await import(serverEntry);
const response = await handler.fetch(new Request('https://stackcraftsstudio.netlify.app/'), {}, {});

if (!response.ok) {
  throw new Error(`Unable to prerender homepage: ${response.status} ${response.statusText}`);
}

const html = await response.text();
if (!html.includes('Stack Crafts Studio')) {
  throw new Error('Prerendered homepage does not contain expected site content.');
}

await writeFile(outputHtml, html);
await writeFile(join(clientDir, '_redirects'), '/* /index.html 200\n');

try {
  await copyFile(join(root, 'dist', 'server', 'assets', '_tanstack-start-manifest_v-CC8p1Y0s.js'), join(clientDir, '_tanstack-start-manifest_v.js'));
} catch {}

console.log(`Netlify homepage created at ${outputHtml}`);
