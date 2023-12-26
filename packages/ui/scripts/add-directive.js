const fs = require('node:fs/promises');
const path = require('node:path');

async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
}

async function addDirectivesToChunkFiles(distPath = '../src/components', prefix = '.tsx') {
  try {
    const files = await getAllFiles(distPath);

    for (const file of files) {
      if (file.endsWith(prefix) && !file.startsWith('index.')) {
        const filePath = file;

        // eslint-disable-next-line no-await-in-loop -- We need to wait for each file to be read
        const data = await fs.readFile(filePath, 'utf8');
        if (data.includes('use client')) continue;

        const updatedContent = `'use client';\n${data}`;

        // eslint-disable-next-line no-await-in-loop -- We need to wait for each file to be written
        await fs.writeFile(filePath, updatedContent, 'utf8');

        // eslint-disable-next-line no-console -- We need to log the result
        console.log(`Directive has been added to ${file}`);
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console -- We need to log the error
    console.error('Error:', err);
  }
}

addDirectivesToChunkFiles('../src/components', '.tsx');
addDirectivesToChunkFiles('../src/hooks', '.ts');
