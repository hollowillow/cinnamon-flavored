// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
        console.log('Hello! The recipe event has fired!')
        event.shaped(
                Item.of('minecraft:saddle', 1), // arg 1: output
                [
                        'AAA',
                        'B B', // arg 2: the shape (array of strings)
                        'C C'
                ],
                {
                        A: 'minecraft:leather',
                        B: 'minecraft:string',  //arg 3: the mapping object
                        C: 'minecraft:iron_ingot'
                }
        )
        event.replaceInput( // copper powered rails
                { output: 'minecraft:powered_rail' },        // Arg 1: the filter
                'minecraft:gold_ingot',            // Arg 2: the item to replace
                'minecraft:copper_ingot'         // Arg 3: the item to replace it with
        )
        // change armor recipes to use create sheets
        event.replaceInput(
                { output: '#c:armors' },        // Arg 1: the filter
                'minecraft:iron_ingot',            // Arg 2: the item to replace
                'create:iron_sheet'         // Arg 3: the item to replace it with
        )
        event.replaceInput(
                { output: '#c:armors' },        // Arg 1: the filter
                'minecraft:iron_ingot',            // Arg 2: the item to replace
                'create:iron_sheet'         // Arg 3: the item to replace it with
        )
        event.replaceInput(
                { output: '#c:armors' },        // Arg 1: the filter
                'minecraft:copper_ingot',            // Arg 2: the item to replace
                'create:copper_sheet'         // Arg 3: the item to replace it with
        )
        event.replaceInput(
                { output: '#c:armors' },        // Arg 1: the filter
                'minecraft:gold_ingot',            // Arg 2: the item to replace
                'create:golden_sheet'         // Arg 3: the item to replace it with
        )
        // craftable currency
        event.recipes.create.pressing('numismatics:spur', 'create:copper_nugget')
        event.recipes.create.pressing('numismatics:bevel', 'create:zinc_nugget')
        event.recipes.create.pressing('numismatics:cog', 'create:brass_nugget')
})

