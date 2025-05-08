/* Run from player.style directory 'node scripts/build-all-themes.js' */
import { exec } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const themesDir = './themes';

const themes = await readdir(themesDir, { withFileTypes: true });

for (const dirent of themes) {
  if (dirent.isDirectory()) {
    const themePath = join(themesDir, dirent.name);
    try {
      console.log(`🔨 Building theme: ${dirent.name}`);
      await new Promise((resolve, reject) => {
        exec(`node ../../scripts/build-theme/build.js`, { cwd: themePath }, (err, stdout, stderr) => {
          if (err) return reject(err);
          console.log(stdout || stderr);
          resolve();
        });
      });
    } catch (err) {
      console.error(`❌ Failed to build ${dirent.name}:`, err.message);
    }
  }
}
