import nodePath from 'path';
import fs from 'fs';
import klaw from 'klaw';
import yaml from 'js-yaml';
import frontmatter from 'front-matter';
import { convertMarkdownToHTML } from './markdown';

function slugify(title) {
  return title
    .toLowerCase()
    .trim() // Remove spaces
    .replace(/ /g, '-') // Connect words
    .replace(/(\/\/)+/g, '/') // Remove double slash
    .replace(/^\//, '') // Remove starting slash
    .replace(/\/$/, ''); // Remove trailing slash
}

const dataLoaders = {
  '.md': (file, options) => {
    const { attributes, body } = frontmatter(file);

    return {
      ...attributes,
      body, // We will resolve this markdown on the client
    };
  },
  '.yaml': yaml.safeLoad,
};

export function getFile(srcPath, extension = '.yaml', options) {
  let data;

  try {
    data = dataLoaders[extension](fs.readFileSync(srcPath, 'utf8'), options) || {};
  } catch (e) {
    data = {};
    console.error('Error getFile:', srcPath, e);
  }

  const path = slugify(data.path || data.title || nodePath.basename(srcPath, 'yaml'));

  data = convertMarkdownToHTML(data);

  return {
    ...data,
    path: path ? `/${path}` : undefined,
  };
}

export async function getFiles(srcPath, extensions = ['.md', '.yaml'], options) {
  const files = [];

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(srcPath)) {
      resolve(files);
      return;
    }

    klaw(srcPath)
      .on('data', item => {
        const extension = nodePath.extname(item.path);

        if (!extensions.includes(extension)) {
          return;
        }

        files.push(getFile(item.path, extension, options));
      })
      .on('error', e => {
        console.error('Error getFiles:', srcPath, e);
        reject(e);
      })
      .on('end', () => {
        resolve(files);
      });
  });
}
