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
// import "../data/gen6/omega-ruby.js";
// import "../data/gen6/alpha-sapphire.js";
// Generation 7
// import "../data/gen7/sun.js";
// import "../data/gen7/moon.js";
// import "../data/gen7/ultra-sun.js";
// import "../data/gen7/ultra-moon.js";
// Generation 7 - Part 2
// import "../data/gen7_2/lets-go-pikachu.js";
// import "../data/gen7_2/lets-go-eevee.js";
// Generation 8
// import "../data/gen8/sword.js";
// import "../data/gen8/sword-ioa.js";
// import "../data/gen8/sword-ct.js";
// import "../data/gen8/shield.js";
// import "../data/gen8/shield-ioa.js";
// import "../data/gen8/shield-ct.js";
// Generation 8 - Part 2
// import "../data/gen8/brilliant-diamond.js";
// import "../data/gen8/shining-pearl.js";
// import "../data/gen8/legends-arceus.js";
// Generation 9
// import "../data/gen9/scarlet.js";
// import "../data/gen9/scarlet-tm.js";
// import "../data/gen9/scarlet-id.js";
// import "../data/gen9/violet.js";
// import "../data/gen9/violet-tm.js";
// import "../data/gen9/violet-id.js";
// Generation 10
// import "../data/gen10/legends-za.js";
// import "../data/gen10/legends-za-md.js";

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
