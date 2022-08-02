import { commands } from "./commands/commands.js";

const handleCommand = (command) => {
  let comandAndAttributes = command.toLowerCase().trim().split(" ");

  const foundCommand = commands.find(
    (el) => el.name.toLowerCase() === comandAndAttributes[0].toLowerCase()
  );

  if (foundCommand) {
    return foundCommand.execute(comandAndAttributes[1]);
  }

  return `'${command}' isn't valid command.`;
};

export { handleCommand };
