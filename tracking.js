var interactions = new Interactor({
  interactions: true,
  interactionElement: "interaction",
  interactionEvents: ["mousedown", "mouseup", "touchstart", "touchend"],
  conversions: true,
  conversionElement: "conversion",
  conversionEvents: ["mouseup", "touchend"],
  endpoint: "/usage/interactions",
  async: true,
  debug: true,
});
