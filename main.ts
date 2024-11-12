import * as math from "./functions/math.ts";

async function main() {
  console.log("Bienvenido a la calculadora pendejo 🤡");
  let command = "";

  while (command !== "exit") {
    console.log("Que operacion quieres hacer?");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicacion");
    console.log("4. Division");
    console.log("5. Reiniciar");
    command = await readCommandLine();
    await handleCommand(command);
  }
}

// ejecutar función con nombre + ()
main();

async function readCommandLine() {
  const buf = new Uint8Array(100);
  await Deno.stdin.read(buf);
  let command = new TextDecoder().decode(buf);
  command = command.split("\n")[0].trim();
  return command;
}

async function handleCommand(command: string) {
  command = command.toLowerCase();
  if (command === "1" || command === "suma") {
    console.log("dame el primer número");
    const num1AsString = await readCommandLine();
    console.log("dame el segundo número");
    const num2AsString = await readCommandLine();
    const num1 = Number(num1AsString);
    const num2 = Number(num2AsString);
    console.log(`El resultado es ${math.add(num1, num2)}`);
  }
  if (command === "2" || command === "resta") {
    console.log("dame el primer número");
    const num1AsString = await readCommandLine();
    console.log("dame el segundo número");
    const num2AsString = await readCommandLine();
    const num1 = Number(num1AsString);
    const num2 = Number(num2AsString);
    console.log(`El resultado es ${math.substract(num1, num2)}`);
  }
}
