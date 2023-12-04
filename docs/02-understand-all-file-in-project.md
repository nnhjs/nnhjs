1. `node_modules` folder
The folder stores all code of all dependencies in project.
2. `public` folder
The folder includes all files that usually doesn't change in all time of website because the files will be cached by cdn. The files have pros and cos.
Pros: Increase time loading
Cos: Cannot update if time-cached is not expired.
3. `src` folder
The folder includes all main codes of website. The codes have written by developer that participate directly with website.
4. `.eslintrc.cjs` file
The file defines all rule of eslint in project.
5. `.gitignore` file
The file defines all ignored file when developer commit with git.
6. `index.html` file
The entry point in vite. Vite will resolve module graph base on index.html (root file). Default root directory is this folder.
7. `package.json` file
The file defines all general information and config information of project. Example: "type", "script", "dependencies", "devDependencies",...
8. `pnpm-lock.yaml` file
Lock file of pnpm package manager. This is a feature of package manager, it keeps all information of dependencies in project.
9. `README.md` file
The file includes introduction of project.
10. `tsconfig.json`
The file defines config of typescript for build project to run in browser environment. 
11. `tsconfig.node.json`
The file defines config of typescript for vite run in node environment.
12. `vite.config.ts`
The file defines all config of vite project.