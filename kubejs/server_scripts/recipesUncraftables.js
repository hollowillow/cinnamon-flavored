ServerEvents.recipes(event => {
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
        event.shaped(
                Item.of('minecraft:iron_horse_armor', 1), // arg 1: output
                [
                        'A A',
                        'AAA', // arg 2: the shape (array of strings)
                        'A A'
                ],
                { A: 'minecraft:iron_ingot', } //arg 3: the mapping object
        )
        event.shaped(
                Item.of('minecraft:golden_horse_armor', 1), // arg 1: output
                [
                        'A A',
                        'AAA', // arg 2: the shape (array of strings)
                        'A A'
                ],
                { A: 'minecraft:gold_ingot', } //arg 3: the mapping object
        )
        event.shaped(
                Item.of('minecraft:diamond_horse_armor', 1), // arg 1: output
                [
                        'A A',
                        'AAA', // arg 2: the shape (array of strings)
                        'A A'
                ],
                { A: 'minecraft:diamond', } //arg 3: the mapping object
        )
})
