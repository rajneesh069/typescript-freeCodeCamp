### This readme contains all the instructions regarding setting up TS for a real world project.

1. To initialize Typescript and tsconfig.json for the project, run the following command :

```bash
tsc --init
```

2. Then run the following command to intialize npm and get the package.json file:

```bash
npm init -y
```

3. Set `outDir` to `dist`, in the tsconfig.json file, after making an HTML file, a `dist` folder and `src` folder(you can make them ot not, its okay, `dist` folder is necessary). As this folder will be the folder that will contain all the transpiled JS files.

4. Make `index.ts` in `src` folder.

5. Write some code in the `index.ts` file and run tsc.

6. You'll observe that `index.js` file has been created(after traspilation) inside the ``dist`` folder.

7. To use the watch mode so that you can observe changes, run the following command :

```bash
tsc -w
```

8. 