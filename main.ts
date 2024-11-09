import * as math from "./functions/math.ts";

async function main() {
  let command = "";

  while (command !== "exit") {
    command = await read(command);
  }
}

// ejecutar función con nombre + ()
main();

async function read(command: string) {
  const buf = new Uint8Array(100);
  await Deno.stdin.read(buf);
  command = new TextDecoder().decode(buf);
  command = command.split("\n")[0].trim();
  return command;
}
