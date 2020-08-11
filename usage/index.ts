import { Java } from "./tsJavaModule";

Java.ensureJvm().then((): void => {
  const VCardVersion = Java.importClass("VCardVersion");
  console.log(VCardVersion.V2_1.toString());
});
