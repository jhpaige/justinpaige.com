import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const { render } = await import('./dist/server/entry-server.js');

const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');
const appHtml = render('/');
const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

writeFileSync(resolve(__dirname, 'dist/index.html'), html);
console.log('prerender: dist/index.html updated');
