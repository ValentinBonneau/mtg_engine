import { select } from '@inquirer/prompts';

enum Command {
    NEW
}

const command = await select({
    message: 'what do yo want to do ?',
    choices:[
        {
            name: "new",
            value: Command.NEW,
            description: "Create new mtg simulation"
        }
    ]
})

switch (command) {
    case Command.NEW:
        break;
    default:
        console.log('Feature not implemented yet, come back later')
}