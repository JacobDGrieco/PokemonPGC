// Game
const game = "shiningpearl";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const contests = game + "-contests";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const stickers = game + "-stickers";
const fashion = game + "-fashion";
const statues = game + "-statues";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01", catching + "-1-02", catching + "-1-03"],
				],
				[statues]: [
					[statues + "-1"],
					[statues + "-1-001", statues + "-1-002", statues + "-1-003", statues + "-1-004", statues + "-1-005", statues + "-1-006"],
					[statues + "-1-007", statues + "-1-008", statues + "-1-009", statues + "-1-010", statues + "-1-011", statues + "-1-012"],
					[statues + "-1-013", statues + "-1-014", statues + "-1-015", statues + "-1-016", statues + "-1-017", statues + "-1-018"],
					[statues + "-1-019", statues + "-1-020", statues + "-1-021", statues + "-1-022", statues + "-1-023", statues + "-1-024"],
					[statues + "-1-025", statues + "-1-026", statues + "-1-027", statues + "-1-028", statues + "-1-029", statues + "-1-030"],
					[statues + "-1-031", statues + "-1-032", statues + "-1-033", statues + "-1-034", statues + "-1-035", statues + "-1-036"],
					[statues + "-1-037", statues + "-1-038", statues + "-1-039", statues + "-1-040", statues + "-1-041", statues + "-1-042"],
					[statues + "-1-043", statues + "-1-044", statues + "-1-045", statues + "-1-046", statues + "-1-047", statues + "-1-048"],
					[statues + "-1-049", statues + "-1-050", statues + "-1-051", statues + "-1-052", statues + "-1-053", statues + "-1-054"],
					[statues + "-1-055", statues + "-1-056", statues + "-1-057", statues + "-1-058", statues + "-1-059", statues + "-1-060"],
					[statues + "-1-061", statues + "-1-062", statues + "-1-063", statues + "-1-064", statues + "-1-065", statues + "-1-066"],
					[statues + "-1-067", statues + "-1-068", statues + "-1-069", statues + "-1-070", statues + "-1-071", statues + "-1-072"],
					[statues + "-1-073", statues + "-1-074", statues + "-1-075", statues + "-1-076", statues + "-1-077", statues + "-1-078"],
					[statues + "-1-079", statues + "-1-080", statues + "-1-081", statues + "-1-082", statues + "-1-083", statues + "-1-084"],
					[statues + "-1-085", statues + "-1-086", statues + "-1-087", statues + "-1-088", statues + "-1-089", statues + "-1-090"],
					[statues + "-1-091", statues + "-1-092", statues + "-1-093", statues + "-1-094", statues + "-1-095", statues + "-1-096"],
					[statues + "-1-097", statues + "-1-098", statues + "-1-099", statues + "-1-100", statues + "-1-101", statues + "-1-102"],
					[statues + "-1-103", statues + "-1-104", statues + "-1-105", statues + "-1-106", statues + "-1-107", statues + "-1-108"],
					[statues + "-1-109", statues + "-1-110", statues + "-1-111", statues + "-1-112", statues + "-1-113", statues + "-1-114"],
					[statues + "-1-115", statues + "-1-116", statues + "-1-117", statues + "-1-118", statues + "-1-119", statues + "-1-120"],
					[statues + "-1-121", statues + "-1-122", statues + "-1-123", statues + "-1-124", statues + "-1-125", statues + "-1-126"],
					[statues + "-1-127", statues + "-1-128", statues + "-1-129", statues + "-1-130", statues + "-1-131", statues + "-1-132"],
					[statues + "-1-133", statues + "-1-134", statues + "-1-135", statues + "-1-136", statues + "-1-137", statues + "-1-138"],
					[statues + "-1-139", statues + "-1-140", statues + "-1-141", statues + "-1-142", statues + "-1-143", statues + "-1-144"],
					[statues + "-1-145", statues + "-1-146", statues + "-1-147", statues + "-1-148", statues + "-1-149", statues + "-1-150"],
					[statues + "-1-151", statues + "-1-152", statues + "-1-153", statues + "-1-154", statues + "-1-155", statues + "-1-156"],
					[statues + "-1-157", statues + "-1-158", statues + "-1-159", statues + "-1-160", statues + "-1-161", statues + "-1-162"],
					[statues + "-1-163", statues + "-1-164", statues + "-1-165", statues + "-1-166", statues + "-1-167", statues + "-1-168"],
					[statues + "-1-169", statues + "-1-170", statues + "-1-171", statues + "-1-172", statues + "-1-173", statues + "-1-174"],
					[statues + "-1-175", statues + "-1-176", statues + "-1-177", statues + "-1-178", statues + "-1-179", statues + "-1-180"],
					[statues + "-1-181", statues + "-1-182", statues + "-1-183", statues + "-1-184", statues + "-1-185", statues + "-1-186"],
					[statues + "-1-187", statues + "-1-188", statues + "-1-189", statues + "-1-190", statues + "-1-191", statues + "-1-192"],
					[statues + "-1-193", statues + "-1-194", statues + "-1-195", statues + "-1-196", statues + "-1-197", statues + "-1-198"],
					[statues + "-1-199", statues + "-1-200", statues + "-1-201", statues + "-1-202", statues + "-1-203", statues + "-1-204"],
					[statues + "-1-205", statues + "-1-206", statues + "-1-207", statues + "-1-208", statues + "-1-209", statues + "-1-210"],
					[statues + "-1-211", statues + "-1-212", statues + "-1-213", statues + "-1-214", statues + "-1-215", statues + "-1-216"],
					[statues + "-1-217", statues + "-1-218", statues + "-1-219", statues + "-1-220", statues + "-1-221", statues + "-1-222"],
					[statues + "-1-223"],
					["spacer"],
					["spacer"],
					[statues + "-2"],
					[statues + "-2-001", statues + "-2-002", statues + "-2-003", statues + "-2-004", statues + "-2-005", statues + "-2-006"],
					[statues + "-2-007", statues + "-2-008", statues + "-2-009", statues + "-2-010", statues + "-2-011", statues + "-2-012"],
					[statues + "-2-013", statues + "-2-014", statues + "-2-015", statues + "-2-016", statues + "-2-017", statues + "-2-018"],
					[statues + "-2-019", statues + "-2-020", statues + "-2-021", statues + "-2-022", statues + "-2-023", statues + "-2-024"],
					[statues + "-2-025", statues + "-2-026", statues + "-2-027", statues + "-2-028", statues + "-2-029", statues + "-2-030"],
					[statues + "-2-031", statues + "-2-032", statues + "-2-033", statues + "-2-034", statues + "-2-035", statues + "-2-036"],
					[statues + "-2-037", statues + "-2-038", statues + "-2-039", statues + "-2-040", statues + "-2-041", statues + "-2-042"],
					[statues + "-2-043", statues + "-2-044", statues + "-2-045", statues + "-2-046", statues + "-2-047", statues + "-2-048"],
					[statues + "-2-049", statues + "-2-050", statues + "-2-051", statues + "-2-052", statues + "-2-053", statues + "-2-054"],
					[statues + "-2-055", statues + "-2-056", statues + "-2-057", statues + "-2-058", statues + "-2-059", statues + "-2-060"],
					[statues + "-2-061", statues + "-2-062", statues + "-2-063", statues + "-2-064", statues + "-2-065", statues + "-2-066"],
					[statues + "-2-067", statues + "-2-068", statues + "-2-069", statues + "-2-070", statues + "-2-071", statues + "-2-072"],
					[statues + "-2-073", statues + "-2-074", statues + "-2-075", statues + "-2-076", statues + "-2-077", statues + "-2-078"],
					[statues + "-2-079", statues + "-2-080", statues + "-2-081", statues + "-2-082", statues + "-2-083", statues + "-2-084"],
					[statues + "-2-085", statues + "-2-086", statues + "-2-087", statues + "-2-088", statues + "-2-089", statues + "-2-090"],
					[statues + "-2-091", statues + "-2-092", statues + "-2-093", statues + "-2-094", statues + "-2-095", statues + "-2-096"],
					[statues + "-2-097", statues + "-2-098", statues + "-2-099", statues + "-2-100", statues + "-2-101", statues + "-2-102"],
					[statues + "-2-103", statues + "-2-104", statues + "-2-105", statues + "-2-106", statues + "-2-107", statues + "-2-108"],
					[statues + "-2-109", statues + "-2-110", statues + "-2-111", statues + "-2-112", statues + "-2-113", statues + "-2-114"],
					[statues + "-2-115", statues + "-2-116", statues + "-2-117", statues + "-2-118", statues + "-2-119", statues + "-2-120"],
					[statues + "-2-121", statues + "-2-122", statues + "-2-123", statues + "-2-124", statues + "-2-125", statues + "-2-126"],
					[statues + "-2-127", statues + "-2-128", statues + "-2-129", statues + "-2-130", statues + "-2-131", statues + "-2-132"],
					[statues + "-2-133", statues + "-2-134", statues + "-2-135", statues + "-2-136", statues + "-2-137", statues + "-2-138"],
					[statues + "-2-139", statues + "-2-140", statues + "-2-141", statues + "-2-142", statues + "-2-143", statues + "-2-144"],
					[statues + "-2-145", statues + "-2-146", statues + "-2-147", statues + "-2-148", statues + "-2-149", statues + "-2-150"],
					[statues + "-2-151", statues + "-2-152", statues + "-2-153", statues + "-2-154", statues + "-2-155", statues + "-2-156"],
					[statues + "-2-157", statues + "-2-158", statues + "-2-159", statues + "-2-160", statues + "-2-161", statues + "-2-162"],
					[statues + "-2-163", statues + "-2-164", statues + "-2-165", statues + "-2-166", statues + "-2-167", statues + "-2-168"],
					[statues + "-2-169", statues + "-2-170", statues + "-2-171", statues + "-2-172", statues + "-2-173", statues + "-2-174"],
					[statues + "-2-175", statues + "-2-176", statues + "-2-177", statues + "-2-178", statues + "-2-179", statues + "-2-180"],
					[statues + "-2-181", statues + "-2-182", statues + "-2-183", statues + "-2-184", statues + "-2-185", statues + "-2-186"],
					[statues + "-2-187", statues + "-2-188", statues + "-2-189", statues + "-2-190", statues + "-2-191", statues + "-2-192"],
					[statues + "-2-193", statues + "-2-194", statues + "-2-195", statues + "-2-196", statues + "-2-197", statues + "-2-198"],
					[statues + "-2-199", statues + "-2-200", statues + "-2-201", statues + "-2-202", statues + "-2-203", statues + "-2-204"],
					[statues + "-2-205", statues + "-2-206"],
				],
				[thms]: [
					[thms + "-1"],
					[thms + "-1-01", thms + "-1-02", thms + "-1-03", thms + "-1-04"],
					[thms + "-1-05", thms + "-1-06", thms + "-1-07", thms + "-1-08"],
					[thms + "-2"],
					[thms + "-2-01", thms + "-2-02", thms + "-2-03", thms + "-2-04", thms + "-2-05"],
					[thms + "-2-06", thms + "-2-07", thms + "-2-08", thms + "-2-09", thms + "-2-10"],
					[thms + "-2-11", thms + "-2-12", thms + "-2-13", thms + "-2-14", thms + "-2-15"],
					[thms + "-2-16", thms + "-2-17", thms + "-2-18", thms + "-2-19", thms + "-2-20"],
					[thms + "-2-21", thms + "-2-22", thms + "-2-23", thms + "-2-24", thms + "-2-25"],
					[thms + "-2-26", thms + "-2-27", thms + "-2-28", thms + "-2-29", thms + "-2-30"],
					[thms + "-2-31", thms + "-2-32", thms + "-2-33", thms + "-2-34", thms + "-2-35"],
					[thms + "-2-36", thms + "-2-37", thms + "-2-38", thms + "-2-39", thms + "-2-40"],
					[thms + "-2-41", thms + "-2-42", thms + "-2-43", thms + "-2-44", thms + "-2-45"],
					[thms + "-2-46", thms + "-2-47", thms + "-2-48", thms + "-2-49", thms + "-2-50"],
					[thms + "-2-51", thms + "-2-52", thms + "-2-53", thms + "-2-54", thms + "-2-55"],
					[thms + "-2-56", thms + "-2-57", thms + "-2-58", thms + "-2-59", thms + "-2-60"],
					[thms + "-2-61", thms + "-2-62", thms + "-2-63", thms + "-2-64", thms + "-2-65"],
					[thms + "-2-66", thms + "-2-67", thms + "-2-68", thms + "-2-69", thms + "-2-70"],
					[thms + "-2-71", thms + "-2-72", thms + "-2-73", thms + "-2-74", thms + "-2-75"],
					[thms + "-2-76", thms + "-2-77", thms + "-2-78", thms + "-2-79", thms + "-2-80"],
					[thms + "-2-81", thms + "-2-82", thms + "-2-83", thms + "-2-84", thms + "-2-85"],
					[thms + "-2-86", thms + "-2-87", thms + "-2-88", thms + "-2-89", thms + "-2-90"],
					[thms + "-2-91", thms + "-2-92", thms + "-2-93", thms + "-2-94", thms + "-2-95"],
					[thms + "-2-96", thms + "-2-97", thms + "-2-98", thms + "-2-99", thms + "-2-100"],
				],
			},
		},
		compact: {

		}
	},
});
