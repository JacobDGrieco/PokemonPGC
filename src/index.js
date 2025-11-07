// 1) Make sure DATA/PPGC exist before anything renders
import "./registry.js";

// 2) If you have data files that call PPGC.register(...), import them here
import "../data/data.js";
// Generation 1
import "../data/gen1/red.js";
import "../data/gen1/blue.js";
import "../data/gen1/yellow.js";
// Generation 2
import "../data/gen2/gold.js";
import "../data/gen2/silver.js";
import "../data/gen2/crystal.js";
// Generation 3
import "../data/gen3/ruby.js";
// import "../data/gen3/sapphire.js";
// import "../data/gen3/emerald.js";
// import "../data/gen3/firered.js";
// import "../data/gen3/leafgreen.js";
// Generation 4
// import "../data/gen4/diamond.js";
// import "../data/gen4/pearl.js";
// import "../data/gen4/platinum.js";
// import "../data/gen4/heartgold.js";
// import "../data/gen4/soulsilver.js";
// Generation 5
// import "../data/gen5/black.js";
// import "../data/gen5/white.js";
// import "../data/gen5/black-2.js";
// import "../data/gen5/white-2.js";
// Generation 6
// import "../data/gen6/x.js";
// import "../data/gen6/y.js";
// import "../data/gen6/omegaruby.js";
// import "../data/gen6/alphasapphire.js";
// Generation 7
// import "../data/gen7/sun.js";
// import "../data/gen7/moon.js";
// import "../data/gen7/ultrasun.js";
// import "../data/gen7/ultramoon.js";
// Generation 7 - Part 2
// import "../data/gen7_2/letsgopikachu.js";
// import "../data/gen7_2/letsgoeevee.js";
// Generation 8
// import "../data/gen8/sword.js";
// import "../data/gen8/swordioa.js";
// import "../data/gen8/swordct.js";
// import "../data/gen8/shield.js";
// import "../data/gen8/shieldioa.js";
// import "../data/gen8/shieldct.js";
// Generation 8 - Part 2
// import "../data/gen8/brilliantdiamond.js";
// import "../data/gen8/shiningpearl.js";
// import "../data/gen8/legendsarceus.js";
// Generation 9
// import "../data/gen9/scarlet.js";
// import "../data/gen9/scarlettm.js";
// import "../data/gen9/scarlet-id.js";
// import "../data/gen9/violet.js";
// import "../data/gen9/violettm.js";
// import "../data/gen9/violetid.js";
// Generation 10
import "../data/gen10/legendsza.js";
// import "../data/gen10/legendszamd.js";

// 3) Import UI and store
import { store } from "./store.js";
import { elements, wireGlobalNav } from "./ui/dom.js";
import { renderSidebar } from "./ui/sidebar.js";
import { renderCrumbs } from "./ui/crumbs.js";
import { renderContent } from "./ui/content.js";

// 4) Initial render
function renderAll() {
  renderSidebar(store, elements, renderAll);
  renderCrumbs(store, elements);
  renderContent(store, elements);
}

wireGlobalNav(store, elements, renderAll);
renderAll();

// optional: quick access in console
window.PPGC = window.PPGC || {};
window.PPGC.renderAll = renderAll;
