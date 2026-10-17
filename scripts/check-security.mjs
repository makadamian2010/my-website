import fs from 'node:fs';
import crypto from 'node:crypto';
const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const policy = config.headers[0].headers.find(header => header.key === 'Content-Security-Policy').value;
for (const file of ['index.html', 'dist/index.html']) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    const hash = 'sha256-' + crypto.createHash('sha256').update(match[1]).digest('base64');
    if (!policy.includes(hash)) throw new Error(file + ': CSP hash is stale; update vercel.json before deploying.');
  }
}
console.log('Source and production inline scripts match CSP hashes.');
