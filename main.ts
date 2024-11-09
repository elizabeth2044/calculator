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

async function fetchData(urls: string[]) {
  const promiseOfOsitos = fetch("https://www.google.com/search?q=ositos"); // busqueda de ositos
  const promiseOfPerritos = fetch("https://www.google.com/search?q=perritos"); // busqueda de perritos
  const promiseOfLoritos = fetch("https://www.google.com/search?q=loritos"); // busqueda de loritos

  const allResponses = await Promise.all([
    promiseOfOsitos,
    promiseOfPerritos,
    promiseOfLoritos,
  ]);

  const ositos = allResponses[0];
  const perritos = allResponses[1];
  const loritos = allResponses[2];
}

const currentUser = async () => {
  return "123";
};

const fetchBills = async () => {
  const userId = await currentUser();
  const bills = await fetch(`https://myapi.com/bills/${userId}`);
  return bills;
};
