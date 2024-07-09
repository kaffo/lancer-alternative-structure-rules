const structTableTitles = [
    "Crushing Hit",
    "Direct Hit",
    "System Trauma",
    "System Trauma",
    "System Trauma",
    "Glancing Blow",
    "Glancing Blow",
  ];

function structTableDescriptions(roll: number, remStruct: number): string {
    switch (roll) {
      // Used for multiple ones
      case 0:
        return "Your mech is damaged beyond repair – it is destroyed. You may still exit it as normal.";
      case 1:
        switch (remStruct) {
          case 2:
            return "Roll a HULL check. On a success, your mech is @Compendium[world.status-items.Stunned] until the end of your next turn. On a failure, your mech is destroyed.";
          case 1:
            return "Your mech is destroyed.";
          default:
            return "Your mech is @Compendium[world.status-items.Stunned] until the end of your next turn.";
        }
      case 2:
      case 3:
      case 4:
        return "Parts of your mech are torn off by the damage. Roll 1d6. On a 1–3, all weapons on one mount of your choice are destroyed; on a 4–6, a system of your choice is destroyed. LIMITED systems and weapons that are out of charges are not valid choices. If there are no valid choices remaining, it becomes the other result. If there are no valid systems or weapons remaining, this result becomes a DIRECT HIT instead.";
      case 5:
      case 6:
        return "Emergency systems kick in and stabilize your mech, but it’s @Compendium[world.status-items.Impaired] until the end of your next turn.";
    }
    return "";
  }

export async function altRollStructure(state: FlowState<LancerFlowState.PrimaryStructureRollData>): Promise<boolean> {
    if (!state.data) throw new TypeError(`Structure roll flow data missing!`);
    ui.notifications!.warn("This is Alternative Structure.");
  }

Hooks.once('ready', async function() {
    libWrapper.register("lancer-alt-structure", "game.lancer.flows.structure.rollStructureTable", altRollStructure, "OVERRIDE");
});
