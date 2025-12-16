export function detectModelPipeline(glbUrl) {
	const u = String(glbUrl || "").toLowerCase();

	const isSwSh = u.includes("/gen8/") && u.includes("/sword-shield/");
	if (isSwSh) return "swsh";

	const isGen9 = u.includes("/gen9/");
	const isSV =
		u.includes("scarlet") ||
		u.includes("violet") ||
		u.includes("scarlet-violet");

	if (isGen9 && isSV) return "sv";

	return null;
}

export function resolveVariantModelUrl(glbUrl, variant) {
	// variant: "base" | "shiny"
	// swap /base-model/ <-> /shiny-model/ only when needed
	if (variant === "shiny") {
		return glbUrl.replace("/base-model/", "/shiny-model/");
	}
	return glbUrl.replace("/shiny-model/", "/base-model/");
}