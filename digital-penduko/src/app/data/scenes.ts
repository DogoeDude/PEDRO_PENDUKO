import { Scene } from "../components/types/game";

export const scenes: Record<string, Scene> = {
  intro: {
    title: "The Fractured Veil",
    description:
      "Centuries ago, Pedro Penduko sealed the magical and technological realms apart to protect humanity. Now, as strange events unfold in Cagayan de Oro, you—his modern descendant—are thrust into a chaotic collision of realms.",
    background: "/scenes/mystical-forest.jpg",
    choices: [
      {
        text: "Begin your journey",
        nextScene: "divisoria",
      },
      {
        text: "Learn about your powers",
        nextScene: "tutorial",
      },
    ],
  },
  divisoria: {
    title: "Divisoria (The Nexus)",
    description:
      "The night market of Divisoria pulses with an otherworldly energy. Beneath the golden boy statue, street vendors' LED lights flicker with arcane electricity, and the air shimmers with technomagical distortions.",
    background: "/scenes/divisoria-night.jpg",
    choices: [
      {
        text: "Explore Night Cafe",
        nextScene: "night_cafe",
      },
      {
        text: "Investigate the disturbance",
        nextScene: "engkanto_encounter",
      },
    ],
  },
  gaston_park: {
    title: "Gaston Park (Lake of Infinity)",
    description:
      "The historic Gaston Park has transformed into an infinite, glowing lake where time distorts unpredictably. The Cathedral's bells toll at impossible intervals as reality warps around St. Augustine Cathedral.",
    background: "/scenes/gaston-lake.jpg",
    choices: [
      {
        text: "Help the park visitors",
        nextScene: "temporal_crisis",
      },
      {
        text: "Search for Temporal Crystals",
        nextScene: "crystal_hunt",
      },
    ],
  },
  malasag: {
    title: "Malasag (Volcano of Wrath)",
    description:
      "The Malasag Eco-Tourism Village has become a smoldering wasteland. The ancient forge of Pugon ng Lakas emerges from the hillside, where the Higaonon artifacts pulse with molten energy.",
    background: "/scenes/malasag-forge.jpg",
    choices: [
      {
        text: "Enter the forge",
        nextScene: "tikbalang_forge",
      },
      {
        text: "Help the tribal artisans",
        nextScene: "blacksmith_quest",
      },
    ],
  },
  macahambus: {
    title: "Macahambus Cave (Dead Lands)",
    description:
      "The historic Macahambus Cave has become a gateway to the Dead Lands. The cave's military history echoes through spectral soldiers, while corrupted spirits roam its depths.",
    background: "/scenes/macahambus-cave.jpg",
    choices: [
      {
        text: "Enter the cave system",
        nextScene: "silungan_village",
      },
      {
        text: "Track the Tiyanak General",
        nextScene: "tiyanak_hunt",
      },
    ],
  },
  vicente_roa: {
    title: "Vicente de Lara Park (Prison of Shadows)",
    description:
      "The park near City Hall has become a realm where light and shadow wage endless war. The last beacon of light, emanating from the city hall clock tower, stands defiant against the encroaching darkness.",
    background: "/scenes/vicente-park.jpg",
    choices: [
      {
        text: "Approach City Hall",
        nextScene: "light_sanctuary",
      },
      {
        text: "Investigate the shadows",
        nextScene: "shadow_investigation",
      },
    ],
  },
  convergence: {
    title: "The Sixth Dimension",
    description:
      "The dimensions collapse into a kaleidoscopic battlefield. Before you stands Dilim, a corrupted reflection of Pedro Penduko himself, wielding the combined powers of all fractured realms.",
    background: "/scenes/convergence.jpg",
    choices: [
      {
        text: "Confront Dilim",
        nextScene: "amphitheater_battle",
      },
      {
        text: "Attempt to understand the corruption",
        nextScene: "corruption_insight",
      },
    ],
  },
  amphitheater_battle: {
    title: "Legacy of the Digital Penduko",
    description:
      "Reality fractures around you at the Amphitheater in Vicente de Lara Park as Dilim unleashes the full might of the corrupted realms. Your dimensional sigil pulses with untapped power, offering three paths forward.",
    background: "/scenes/amphitheater-battle.jpg",
    choices: [
      {
        text: "Merge the realms",
        nextScene: "cdo_merge_ending",
      },
      {
        text: "Restore the barriers",
        nextScene: "separation_ending",
      },
      {
        text: "Sacrifice yourself",
        nextScene: "sacrifice_ending",
      },
    ],
  },
  bayan_ng_diwata: {
    title: "Gardens of Pueblo (City of Fairies)",
    description:
      "You awaken in the mystical Gardens of Pueblo, where the towering trees of the golf course crackle with arcane electricity, and the ponds shimmer with neon light. This isn't just a park—it's the heart of a decaying technomagical grid.",
    background: "/scenes/pueblo-garden.jpg",
    choices: [
      {
        text: "Explore the gardens",
        nextScene: "pueblo_village",
      },
      {
        text: "Investigate the energy disturbance",
        nextScene: "engkanto_encounter",
      },
    ],
  },
  lawa_ng_walang_hanggan: {
    title: "Mapawa Nature Park (Lake of Infinity)",
    description:
      "You emerge at Mapawa's mystical falls, where time distorts unpredictably. The waters flow in impossible patterns, and hikers exist in flickers, appearing for moments before fading.",
    background: "/scenes/mapawa-falls.jpg",
    choices: [
      {
        text: "Help the trapped hikers",
        nextScene: "temporal_crisis",
      },
      {
        text: "Search for Temporal Crystals",
        nextScene: "crystal_hunt",
      },
    ],
  },
  bulkan_ng_galit: {
    title: "Malasag Hills (Forge of Wrath)",
    description:
      "The Malasag Eco-Tourism Village has transformed into a smoldering wasteland. Ancient Higaonon forges emerge from the hillside, where tribal artifacts pulse with molten energy.",
    background: "/scenes/malasag-forge.jpg",
    choices: [
      {
        text: "Enter the ancient forge",
        nextScene: "higaonon_forge",
      },
      {
        text: "Help the tribal elders",
        nextScene: "elder_quest",
      },
    ],
  },
  luntian_village: {
    title: "The Village of Luntiang Kanlungan",
    description:
      "The village buzzes with an otherworldly energy. Diwatas with bioluminescent wings float gracefully between towering trees. Their worried expressions tell of troubled times as the village's technomagical grid flickers ominously.",
    background: "/scenes/luntian-village.jpg",
    choices: [
      {
        text: "Help repair the energy grid",
        nextScene: "grid_repair",
      },
      {
        text: "Seek out the village elder",
        nextScene: "elder_council",
      },
    ],
  },
  elder_council: {
    title: "Council of the Elders",
    description:
      "The village elder, a Diwata with crystalline wings that pulse with ancient power, reveals the source of their troubles: the Engkanto Twins have become corrupted, their once-harmonious powers now threatening to tear the dimension apart.",
    background: "/scenes/elder-council.jpg",
    choices: [
      {
        text: "Offer to confront the twins",
        nextScene: "engkanto_encounter",
      },
      {
        text: "Search for the Circuit Crystals first",
        nextScene: "crystal_quest",
      },
    ],
  },
  crystal_quest: {
    title: "The Gardens of Mapawa",
    description:
      "Deep within Mapawa Nature Park lie hidden caves where mystical crystals grow. But the trails are treacherous - time flows differently in each area, and temporal anomalies roam the wilderness.",
    background: "/scenes/mapawa-caves.jpg",
    choices: [
      {
        text: "Navigate carefully through the trails",
        nextScene: "mapawa_exploration",
      },
      {
        text: "Use the Pueblo Token for protection",
        nextScene: "protected_path",
        requirement: {
          item: "Pueblo Token",
        },
      },
    ],
  },
  engkanto_encounter: {
    title: "The Engkanto Twins",
    description:
      "The twins materialize before you - one radiating blinding light, the other wreathed in shifting shadows. Their combined power creates a dazzling display of chaos as they demand you prove your worth.",
    background: "/scenes/engkanto-twins.jpg",
    choices: [
      {
        text: "Accept their logic challenge",
        nextScene: "light_puzzle",
      },
      {
        text: "Challenge them to combat",
        nextScene: "twin_battle",
      },
    ],
  },
  light_puzzle: {
    title: "The Pattern of Light",
    description:
      "The twins create intricate patterns of light and shadow. Each sequence holds the key to harmonizing their powers. But as you work, you notice fractures spreading through reality itself.",
    background: "/scenes/light-patterns.jpg",
    choices: [
      {
        text: "Complete the final pattern",
        nextScene: "puzzle_victory",
      },
      {
        text: "Attempt to seal the fractures",
        nextScene: "fracture_crisis",
      },
    ],
  },
  twin_battle: {
    title: "Battle of Light and Shadow",
    description:
      "The twins unleash their full power. Light and shadow clash in a spectacular display as they summon storms and create mirror images of themselves. The very fabric of the dimension strains under their power.",
    background: "/scenes/twin-battle.jpg",
    choices: [
      {
        text: "Focus on defeating the Light Twin",
        nextScene: "light_twin_defeat",
      },
      {
        text: "Target the Shadow Twin",
        nextScene: "shadow_twin_defeat",
      },
      {
        text: "Try to separate their powers",
        nextScene: "twin_separation",
      },
    ],
  },
  puzzle_victory: {
    title: "The Truth Revealed",
    description:
      "As the final pattern locks into place, the twins' power stabilizes. They reveal a disturbing truth: the second dimension, Lawa ng Walang Hanggan, is bleeding chaos into their realm. The time distortions are growing stronger.",
    background: "/scenes/truth-revealed.jpg",
    choices: [
      {
        text: "Journey to the Lake of Infinity",
        nextScene: "lawa_ng_walang_hanggan",
      },
      {
        text: "Stay to help fortify the realm",
        nextScene: "realm_fortification",
      },
    ],
  },
  twin_separation: {
    title: "Powers Divided",
    description:
      "You successfully separate the twins' powers, but the effort creates new fractures in reality. The dimension stabilizes, but at a cost - the path to the Lake of Infinity has been torn wide open.",
    background: "/scenes/power-separation.jpg",
    choices: [
      {
        text: "Enter the rift to the Lake",
        nextScene: "lawa_ng_walang_hanggan",
      },
      {
        text: "Attempt to seal the rift",
        nextScene: "rift_sealing",
      },
    ],
  },
  temporal_crisis: {
    title: "Time-Lost Village",
    description:
      "The villagers of Baybay ng Tala phase in and out of existence, their forms flickering like damaged holograms. Some are aging rapidly, while others are frozen in time. The Guardian's corruption of the lake is spreading.",
    background: "/scenes/temporal-village.jpg",
    choices: [
      {
        text: "Help stabilize the villagers",
        nextScene: "time_stabilization",
      },
      {
        text: "Track the Guardian's location",
        nextScene: "guardian_hunt",
      },
    ],
  },
  time_stabilization: {
    title: "Temporal Anchors",
    description:
      "Ancient temporal anchors dot the village, their power nearly depleted. These devices once kept the flow of time stable, but now they flicker weakly, threatening to fail completely.",
    background: "/scenes/temporal-anchors.jpg",
    choices: [
      {
        text: "Attempt to recharge the anchors",
        nextScene: "anchor_puzzle",
      },
      {
        text: "Search for replacement crystals",
        nextScene: "crystal_hunt",
      },
    ],
  },
  crystal_hunt: {
    title: "The Crystal Caverns",
    description:
      "Deep beneath the infinite lake lie caves where time crystals grow. But the caverns are treacherous - time flows differently in each chamber, and temporal anomalies roam the depths.",
    background: "/scenes/crystal-caverns.jpg",
    choices: [
      {
        text: "Navigate carefully through the caves",
        nextScene: "cavern_exploration",
      },
      {
        text: "Use the Diwata's Token for protection",
        nextScene: "protected_harvest",
        requirement: {
          item: "Diwata's Token",
        },
      },
    ],
  },
  guardian_hunt: {
    title: "The Abyssal Edge",
    description:
      "At the lake's deepest point, where reality itself begins to warp, you find signs of the Guardian's presence. Temporal storms rage across the surface, and ghostly images of past and future events flash through the air.",
    background: "/scenes/abyssal-edge.jpg",
    choices: [
      {
        text: "Confront the Guardian",
        nextScene: "guardian_battle",
      },
      {
        text: "Study the temporal patterns",
        nextScene: "time_study",
      },
    ],
  },
  guardian_battle: {
    title: "Battle at the Cathedral",
    description:
      "The Guardian manifests at St. Augustine Cathedral, its form shifting between past and future versions of itself. Time fragments scatter around the plaza as it prepares to attack.",
    background: "/scenes/cathedral-battle.jpg",
    choices: [
      {
        text: "Engage in temporal combat",
        nextScene: "time_combat",
      },
      {
        text: "Try to reason with the Guardian",
        nextScene: "guardian_negotiation",
      },
    ],
  },
  time_combat: {
    title: "Temporal Warfare",
    description:
      "The Guardian splits into multiple temporal versions, each attacking from a different point in time. The lake itself begins to fracture as past, present, and future collide.",
    background: "/scenes/time-combat.jpg",
    choices: [
      {
        text: "Focus attacks on the present Guardian",
        nextScene: "present_focus",
      },
      {
        text: "Coordinate attacks across timelines",
        nextScene: "timeline_coordination",
      },
    ],
  },
  present_focus: {
    title: "Present Guardian",
    description:
      "You concentrate your attacks on the Guardian's present form, but its past and future versions continue to assault you from different temporal angles.",
    background: "/scenes/present-guardian.jpg",
    choices: [
      {
        text: "Use the Infinity Stopwatch",
        nextScene: "time_freeze",
        requirement: {
          item: "Infinity Stopwatch",
        },
      },
      {
        text: "Continue the assault",
        nextScene: "guardian_defeat",
      },
    ],
  },
  timeline_coordination: {
    title: "Temporal Strategy",
    description:
      "You attempt to predict the Guardian's movements across time, coordinating your attacks to strike all versions simultaneously. The lake's surface ripples with temporal energy.",
    background: "/scenes/timeline-battle.jpg",
    choices: [
      {
        text: "Execute the synchronized attack",
        nextScene: "synchronized_victory",
      },
      {
        text: "Retreat and regroup",
        nextScene: "tactical_retreat",
      },
    ],
  },
  guardian_negotiation: {
    title: "The Guardian's Truth",
    description:
      "The Guardian reveals that it's trying to prevent a greater catastrophe - the complete collapse of all temporal boundaries. Its actions, though destructive, are meant to stabilize the timeline.",
    background: "/scenes/guardian-revelation.jpg",
    choices: [
      {
        text: "Offer to help find another way",
        nextScene: "temporal_alliance",
      },
      {
        text: "Reject its explanation",
        nextScene: "guardian_battle_final",
      },
    ],
  },
  temporal_alliance: {
    title: "Alliance of Time",
    description:
      "Working with the Guardian, you discover a way to stabilize the temporal flows without sacrificing the village. But this solution requires a piece of your own timeline as an anchor.",
    background: "/scenes/temporal-alliance.jpg",
    choices: [
      {
        text: "Sacrifice a portion of your past",
        nextScene: "past_sacrifice",
      },
      {
        text: "Search for an alternative anchor",
        nextScene: "anchor_search",
      },
    ],
  },
  synchronized_victory: {
    title: "Convergence Point",
    description:
      "Your coordinated attack succeeds, forcing all versions of the Guardian to converge into a single point in time. As it falls, it warns of the greater danger in the Bulkan ng Galit.",
    background: "/scenes/guardian-defeat.jpg",
    choices: [
      {
        text: "Journey to the Volcano",
        nextScene: "bulkan_ng_galit",
      },
      {
        text: "Secure the Lake's power",
        nextScene: "lake_stabilization",
      },
    ],
  },
  tikbalang_forge: {
    title: "The Infernal Foundry",
    description:
      "Inside Pugon ng Lakas, enslaved blacksmiths work tirelessly under the watchful eye of the Molten Tikbalang. The fiery centaur-beast's chains glow with magma, and its very presence makes the air shimmer with heat.",
    background: "/scenes/tikbalang-lair.jpg",
    choices: [
      {
        text: "Confront the Tikbalang",
        nextScene: "tikbalang_battle",
      },
      {
        text: "Search for cooling devices",
        nextScene: "forge_cooling",
      },
    ],
  },
  blacksmith_quest: {
    title: "The Enslaved Smiths",
    description:
      "The blacksmiths reveal the location of ancient cooling devices that could weaken the Tikbalang's power. But reaching them requires navigating through treacherous lava mazes.",
    background: "/scenes/lava-maze.jpg",
    choices: [
      {
        text: "Brave the lava maze",
        nextScene: "lava_maze",
      },
      {
        text: "Use the Volcano Core",
        nextScene: "protected_path",
        requirement: {
          item: "Volcano Core",
        },
      },
    ],
  },
  tikbalang_battle: {
    title: "Forge Tyrant",
    description:
      "The Molten Tikbalang towers before you, its hooves striking sparks from the forge floor. Magma chains whirl through the air as the volcano rumbles ominously.",
    background: "/scenes/tikbalang-battle.jpg",
    choices: [
      {
        text: "Engage in direct combat",
        nextScene: "volcanic_showdown",
      },
      {
        text: "Use the cooling devices",
        nextScene: "tactical_victory",
      },
    ],
  },
  patay_na_lupa: {
    title: "The Dead Lands",
    description:
      "The Dead Lands stretch before you, a desolate expanse where corrupted spirits roam freely. In the distance, the shadowy outline of Silungan ng Kaluluwa stands as the last bastion of hope.",
    background: "/scenes/dead-lands.jpg",
    choices: [
      {
        text: "Head to the village",
        nextScene: "silungan_village",
      },
      {
        text: "Track the Tiyanak General",
        nextScene: "tiyanak_hunt",
      },
    ],
  },
  silungan_village: {
    title: "Macahambus Depths",
    description:
      "Deep within Macahambus Cave, you find remnants of the American-era fortifications transformed into a sanctuary. Spectral soldiers from different time periods stand guard against the encroaching darkness.",
    background: "/scenes/macahambus-depths.jpg",
    choices: [
      {
        text: "Speak with the spectral guards",
        nextScene: "spectral_dialogue",
      },
      {
        text: "Explore the fortifications",
        nextScene: "fort_exploration",
      },
    ],
  },
  tiyanak_battle: {
    title: "Herald of Despair",
    description:
      "The Tiyanak General's laughter echoes through the fog as it commands its spectral army. Its small, childlike form belies the terrifying power it wields over the corrupted souls.",
    background: "/scenes/tiyanak-general.jpg",
    choices: [
      {
        text: "Use the Shadow Cloak",
        nextScene: "stealth_approach",
        requirement: {
          item: "Shadow Cloak",
        },
      },
      {
        text: "Face the army head-on",
        nextScene: "spectral_battle",
      },
    ],
  },
  bilangguan_ng_anino: {
    title: "Prison of Shadows",
    description:
      "A realm where light and shadow wage endless war. The last beacon of light, Liwayway ng Liwanag, stands defiant against the encroaching darkness. The twin rulers, Liwanag and Dilim, continue their destructive conflict.",
    background: "/scenes/shadow-prison.jpg",
    choices: [
      {
        text: "Enter Liwayway ng Liwanag",
        nextScene: "light_sanctuary",
      },
      {
        text: "Investigate the shadows",
        nextScene: "shadow_investigation",
      },
    ],
  },
  light_sanctuary: {
    title: "Xavier University Archives",
    description:
      "The university's library has become a sanctuary of light-based technologies, with students and faculty desperately fighting against the shadow creatures. Ancient knowledge and modern science blend in their defense.",
    background: "/scenes/xavier-library.jpg",
    choices: [
      {
        text: "Support the researchers",
        nextScene: "research_alliance",
      },
      {
        text: "Seek balance in the archives",
        nextScene: "knowledge_path",
      },
    ],
  },
  final_confrontation: {
    title: "Battle at City Hall",
    description:
      "At the heart of Vicente de Lara Park, before the historic City Hall, the forces of light and shadow clash in their final battle. The city's fate hangs in the balance as reality begins to tear apart.",
    background: "/scenes/city-hall-battle.jpg",
    choices: [
      {
        text: "Unite the city's powers",
        nextScene: "power_unity",
      },
      {
        text: "Make your final choice",
        nextScene: "final_choice",
      },
    ],
  },
  final_convergence: {
    title: "The Final Convergence",
    description:
      "All dimensional barriers collapse at the Amphitheater of Vicente de Lara Park. The city's landmarks - Divisoria, Gaston Park, the Cathedral, and Malasag - all reflect in a fractured sky as reality itself begins to unravel.",
    background: "/scenes/cdo-convergence.jpg",
    choices: [
      {
        text: "Face Dilim",
        nextScene: "final_confrontation",
      },
      {
        text: "Attempt to stabilize the dimensions",
        nextScene: "dimension_stabilization",
      },
    ],
  },
  cdo_merge_ending: {
    title: "City of New Dawn",
    description:
      "As the realms merge, Cagayan de Oro transforms into a harmonious blend of technology and magic. Divisoria's night market now floats in the air, while Gaston Park's infinite lake provides clean energy to the entire city.",
    background: "/scenes/transformed-cdo.jpg",
    choices: [
      {
        text: "Begin your watch over the city",
        nextScene: "game_complete",
      },
    ],
  },
  liwayway_ng_liwanag: {
    title: "Xavier University (Beacon of Light)",
    description:
      "The university grounds have become a bastion of knowledge and power. The Main Building's clock tower radiates light against the encroaching shadows, while students and faculty wield both science and sorcery.",
    background: "/scenes/xavier-tower.jpg",
    choices: [
      {
        text: "Enter the library archives",
        nextScene: "knowledge_sanctuary",
      },
      {
        text: "Climb the clock tower",
        nextScene: "tower_ascent",
      },
    ],
  },
};
