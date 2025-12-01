ServerEvents.recipes(event => {
        console.log('Rune recipes changed.')
        event.remove({ output: '#runes:runes' })
        event.smithing(
                'runes:arcane_stone',   // arg 1: output
                'jewelry:tanzanite',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )
        event.smithing(
                'runes:arcane_stone',   // arg 1: output
                'runes:arcane_stone',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )

        event.smithing(
                'runes:fire_stone',   // arg 1: output
                'jewelry:ruby',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )
        event.smithing(
                'runes:fire_stone',   // arg 1: output
                'runes:fire_stone',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )

        event.smithing(
                'runes:healing_stone',   // arg 1: output
                'jewelry:jade',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )
        event.smithing(
                'runes:healing_stone',   // arg 1: output
                'runes:healing_stone',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )

        event.smithing(
                'runes:lightning_stone',   // arg 1: output
                'jewelry:citrine',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )
        event.smithing(
                'runes:lightning_stone',   // arg 1: output
                'runes:lightning_stone',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )

        event.smithing(
                'runes:soul_stone',   // arg 1: output
                'jewelry:sapphire',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )
        event.smithing(
                'runes:soul_stone',   // arg 1: output
                'runes:soul_stone',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )

        event.smithing(
                'runes:frost_stone',   // arg 1: output
                'jewelry:topaz',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )
        event.smithing(
                'runes:frost_stone',   // arg 1: output
                'runes:frost_stone',     // arg 2: the smithing template
                '#c:stones',    // arg 3: the item to be upgraded
                'create:experience_nugget'     // arg 4: the upgrade item
        )
})
