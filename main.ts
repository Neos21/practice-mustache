import { renderFile } from 'https://deno.land/x/mustache_ts@v0.4.1.1/mustache.ts';

const view = {
  title: 'Practice Mustache',
  calc: () => 1 + 2
};

const output = await renderFile('./template.mustache', view);

const textEncoder = new TextEncoder();
const data = textEncoder.encode(output);
await Deno.writeFile('./index.html', data);
