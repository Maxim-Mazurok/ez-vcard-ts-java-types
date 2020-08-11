# Generate Ezvcard type definitions for node-java with TypeScript

### Instructions for Windows 10:

1. Install [JDK 14](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)
1. Install [Python 2](https://www.python.org/downloads/windows/)
1. Use `node` `v6.17.1` (`ts-java` won't build on later versions)
1. Add this to `package.json`:

   ```json
   {
     "scripts": {
       "preinstall": "npm run npm-force-resolutions",
       "npm-force-resolutions": "npm-force-resolutions"
     },
     "resolutions": {
       "java": "github:joeferner/node-java#master",
       "find-java-home": "1.1.0"
     }
   }
   ```

1. Remove `node_modules` and `package-lock.json` (just in case)
1. Run `npm i npm --save` to upgrade to `npm` which understands `package-lock.json`
1. Run `npm i --ignore-scripts` to generate `package-lock.json`
1. Remove `node_modules/java` and `node_modules/ts-java` (to force reinstallation and re-running of build scripts)
1. Run `npm i --python=C:\Python27\python.exe`
1. In `node_modules\ts-java\lib\ts-java-main.js` remove `classpath.push(rtJarPath);` line. Instead, we'll download and add it to `package.json`. Make sure that it's a full and not stripped down version, use archive manager to look inside of jar, there should be a lot of folders. Or, grad one from this repo.

   ```json
   {
     "ts-java": {
       "classpath": "rt.jar"
     }
   }
   ```

1. Run `node node_modules\ts-java\bin\ts-java.js` and don't wait, go to the next step
1. Don't wait for `ts-java.js` to finish, it will never finish for some reason. Instead, look for `tsJavaModule.ts` file to be created or updated. Once it's there - terminate script.
1. ???
1. Profit!

### Usage with node-java instructions:

1. See [`usage`](./usage/) folder
1. Make sure to replace

   ```js
   var fullJarPath: string = path.join(__dirname, "", jarPath);
   _java.classpath.push(fullJarPath);
   ```

   with

   ```js
   _java.classpath.push(jarPath);
   ```

   in case if you're using absolute paths to your `jar`s.

1. Don't forget to switch back to the latest NodeJS version (tested on `v14.7.0`) since we don't have to deal with outdated `ts-java` sources anymore
1. Install deps from [`package.json`](./usage/package.json)
1. Run `npx ts-node .\index.ts`
