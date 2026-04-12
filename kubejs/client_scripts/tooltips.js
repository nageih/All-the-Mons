// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium
    allthemods.add('allthemodium:teleport_pad',[
        Text.translatable('tooltip.kubejs.teleport_pad.desc1'),
        Text.translatable('tooltip.kubejs.teleport_pad.desc2'),
        Text.translatable('tooltip.kubejs.teleport_pad.overworld'),
        Text.translatable('tooltip.kubejs.teleport_pad.nether'),
        Text.translatable('tooltip.kubejs.teleport_pad.end')
    ])

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.translatable('tooltip.kubejs.allthemodium_ore.mine_level'),
        Text.translatable('tooltip.kubejs.allthemodium_ore.deep_dark'),
        Text.translatable('tooltip.kubejs.allthemodium_ore.mining_dim')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.translatable('tooltip.kubejs.vibranium_ore.mine_level'),
        Text.translatable('tooltip.kubejs.vibranium_ore.nether'),
        Text.translatable('tooltip.kubejs.vibranium_ore.other')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.translatable('tooltip.kubejs.unobtainium_ore.mine_level'),
        Text.translatable('tooltip.kubejs.unobtainium_ore.end')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate',[
        Text.translatable('tooltip.kubejs.silent_plate.desc')
    ])
    allthemods.add('kubejs:silent_vibranium_plate',[
        Text.translatable('tooltip.kubejs.silent_plate.desc')
    ])
    allthemods.add('kubejs:silent_unobtainium_plate',[
        Text.translatable('tooltip.kubejs.silent_plate.desc')
    ])

    allthemods.add('allthemodium:allthemodium_ingot', [
        Text.translatable('tooltip.kubejs.allthemodium.ingot.wrong_item'),
        Text.translatable('tooltip.kubejs.allthemodium.ingot.hint', 'Silent Allthemodium Plate')
    ])
    allthemods.add('allthemodium:vibranium_ingot', [
        Text.translatable('tooltip.kubejs.allthemodium.ingot.wrong_item'),
        Text.translatable('tooltip.kubejs.allthemodium.ingot.hint', 'Silent Vibranium Plate')
    ])
    allthemods.add('allthemodium:unobtainium_ingot', [
        Text.translatable('tooltip.kubejs.allthemodium.ingot.wrong_item'),
        Text.translatable('tooltip.kubejs.allthemodium.ingot.hint', 'Silent Unobtainium Plate')
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template', [
        Text.translatable('tooltip.kubejs.allthemodium.template.ancient_city')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template', [
        Text.translatable('tooltip.kubejs.allthemodium.template.bastion')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template', [
        Text.translatable('tooltip.kubejs.allthemodium.template.other')
    ])

    //Forbidden Arcanus
    allthemods.add('forbidden_arcanus:hephaestus_forge_tier_1', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.hephaestus_forge.how_to'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.hephaestus_forge.gilded_darkstone_smithing'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.hephaestus_forge.polished_darkstone'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.hephaestus_forge.gilded_darkstone'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.hephaestus_forge.arcane_darkstone'),
        Text.of("§0███§7███§0███"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§7████§6█§7████"),
        Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
        Text.of("§7████§6█§7████"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0███§7███§0███")

    ])
    allthemods.add('forbidden_arcanus:clibano_core', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.clibano_core.how_to'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.hephaestus_forge.polished_darkstone'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.clibano_core.darkstone_bricks'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.clibano_core.core'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.clibano_core.direction'),
        Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
        Text.of("§7███§0█§7█§0█§7█§0█§7███"),
        Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█"),
    ])
    allthemods.add('forbidden_arcanus:growing_edelwood', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.growing_edelwood.trader'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.growing_edelwood.soul'),
    ])
    allthemods.add('forbidden_arcanus:magnetized_darkstone_pedestal', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.magnetized_darkstone_pedestal.how_to'),
    ])
    allthemods.add('forbidden_arcanus:soul', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.soul.extractor'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.soul.world'),
    ])
    allthemods.add('forbidden_arcanus:enchanted_soul', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.enchanted_soul.how_to')
    ])
    allthemods.add('forbidden_arcanus:corrupt_soul', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.corrupt_soul.how_to')
    ])
    allthemods.add('forbidden_arcanus:blood_test_tube', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.blood_test_tube.how_to')
    ])
    allthemods.add('forbidden_arcanus:xpetrified_orb', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.xpetrified_orb.black_hole'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.xpetrified_orb.black_hole_how_to'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.xpetrified_orb.xp')
    ])
    allthemods.add('forbidden_arcanus:dragon_scale', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.dragon_scale.drop')
    ])
    allthemods.add('forbidden_arcanus:stella_arcanum', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.stella_arcanum.spawn'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.stella_arcanum.explode')
    ])
    allthemods.add(/forbidden_arcanus:runic_[sd]/, [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.runic.spawn'),
    ])
    allthemods.add(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore'], [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.arcane_crystal.spawn'),
        Text.translatable('tooltip.kubejs.forbidden_arcanus.arcane_crystal.y')
    ])
    allthemods.add('forbidden_arcanus:artisan_relic', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.artisan_relic.find'),
    ])
    allthemods.add('forbidden_arcanus:crescent_moon', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.crescent_moon.unobtainable'),
    ])
    allthemods.add('forbidden_arcanus:crimson_stone', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.crimson_stone.find'),
    ])
    allthemods.add('forbidden_arcanus:soul_crimson_stone', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.soul_crimson_stone.turn'),
    ])
    allthemods.add('forbidden_arcanus:elementarium', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.elementarium.find'),
    ])
    allthemods.add('forbidden_arcanus:divine_pact', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.divine_pact.find'),
    ])
    allthemods.add('forbidden_arcanus:maledictus_pact', [
        Text.translatable('tooltip.kubejs.forbidden_arcanus.maledictus_pact.find'),
    ])

    //Mystical Agriculture
    allthemods.add(/mysticalagriculture:.*watering_can/, [
        Text.translatable('tooltip.kubejs.mysticalagriculture.watering_can.disabled'),
        Text.translatable('tooltip.kubejs.mysticalagriculture.watering_can.disabled_info')
    ])

    //Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.translatable('tooltip.kubejs.easy_villagers.trader.info')
    ])

    //Eternal Starlight
    allthemods.add('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]', [
        Text.translatable('tooltip.kubejs.eternal_starlight.loot_bag.lunar')
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
