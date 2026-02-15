export const products = [
  { id: "pull-cord-switch", name: "Pull Cord Switch", category: "Safety Switches" },
  { id: "dual-pull-cord-switch", name: "Dual Pull Cord Switch", category: "Safety Switches" },
  { id: "zero-speed-switch", name: "Zero Speed Switch", category: "Speed Monitoring" },
  { id: "electronic-zero-speed-switch", name: "Electronic Zero Speed Switch", category: "Speed Monitoring" },
  { id: "belt-sway-switch", name: "Belt Sway Switch", category: "Belt Protection" },
  { id: "heavy-duty-belt-sway-switch", name: "Heavy Duty Belt Sway Switch", category: "Belt Protection" },
  { id: "conveyor-safety-switch", name: "Conveyor Safety Switch", category: "Safety Switches" },
  { id: "speed-monitoring-switch", name: "Speed Monitoring Switch", category: "Speed Monitoring" },
  { id: "chute-level-switch", name: "Chute Level Switch", category: "Level Monitoring" },
  { id: "conveyor-belt-misalignment-switch", name: "Conveyor Belt Misalignment Switch", category: "Belt Protection" },
  { id: "industrial-drum-heater", name: "Industrial Drum Heater", category: "Heating Systems" },
  { id: "barrel-heating-jacket", name: "Barrel Heating Jacket", category: "Heating Systems" },
  { id: "oil-drum-heater", name: "Oil Drum Heater", category: "Heating Systems" },
  { id: "thermostat-controlled-heater", name: "Thermostat Controlled Heater", category: "Heating Systems" },
  { id: "material-flow-switch", name: "Material Flow Switch", category: "Level Monitoring" },
  { id: "rotary-paddle-level-switch", name: "Rotary Paddle Level Switch", category: "Level Monitoring" },
  { id: "proximity-sensor", name: "Proximity Sensor", category: "Sensors" },
  { id: "limit-switch", name: "Limit Switch", category: "Safety Switches" },
  { id: "emergency-stop-switch", name: "Emergency Stop Switch", category: "Safety Switches" },
  { id: "belt-protection-switch", name: "Belt Protection Switch", category: "Belt Protection" },
  { id: "tilt-switch", name: "Tilt Switch", category: "Sensors" },
  { id: "motion-sensor-switch", name: "Motion Sensor Switch", category: "Sensors" },
  { id: "conveyor-control-panel", name: "Conveyor Control Panel", category: "Control Systems" },
  { id: "industrial-safety-alarm", name: "Industrial Safety Alarm", category: "Safety Switches" },
  { id: "speed-sensor", name: "Speed Sensor", category: "Sensors" },
  { id: "conveyor-monitoring-system", name: "Conveyor Monitoring System", category: "Control Systems" },
  { id: "industrial-temperature-controller", name: "Industrial Temperature Controller", category: "Heating Systems" },
  { id: "bulk-material-level-indicator", name: "Bulk Material Level Indicator", category: "Level Monitoring" },
  { id: "conveyor-interlock-system", name: "Conveyor Interlock System", category: "Control Systems" },
  { id: "industrial-safety-control-box", name: "Industrial Safety Control Box", category: "Control Systems" },
];

export const productDetails: Record<string, {
  description: string;
  features: string[];
  specs: { parameter: string; specification: string }[];
  applications: string[];
}> = {
  "pull-cord-switch": {
    description: "Industrial emergency stop device installed along conveyor belts to immediately halt operations during emergencies. Ensures worker safety and prevents equipment damage. The Pull Cord Switch is designed for rugged industrial environments and provides reliable emergency stopping functionality.",
    features: [
      "Rugged die-cast aluminum enclosure",
      "IP65 weatherproof rating",
      "Dual contact configuration",
      "Manual reset mechanism",
      "Long service life",
      "Easy installation",
      "Suitable for mining & heavy industries",
    ],
    specs: [
      { parameter: "Body Material", specification: "Die-cast Aluminum" },
      { parameter: "IP Rating", specification: "IP65" },
      { parameter: "Contact Type", specification: "2NO + 2NC" },
      { parameter: "Voltage Rating", specification: "440V AC" },
      { parameter: "Current Rating", specification: "10A" },
      { parameter: "Operating Temperature", specification: "-20°C to +70°C" },
      { parameter: "Cable Entry", specification: "M20 x 1.5" },
      { parameter: "Reset Type", specification: "Manual" },
    ],
    applications: ["Mining Industry", "Cement Plants", "Steel Plants", "Power Plants", "Bulk Material Handling", "Chemical Industries"],
  },
};

// Generate default details for products without specific details
export function getProductDetails(id: string) {
  if (productDetails[id]) return productDetails[id];
  const product = products.find(p => p.id === id);
  const name = product?.name || "Product";
  return {
    description: `High-quality ${name} designed for industrial applications. Manufactured to strict quality standards with ISO 9001:2015 certification. Built for reliability, durability, and long service life in demanding industrial environments.`,
    features: [
      "Heavy-duty industrial construction",
      "IP65 weatherproof rating",
      "High reliability design",
      "Easy installation and maintenance",
      "Long operational life",
      "Suitable for harsh environments",
      "ISO 9001:2015 certified manufacturing",
    ],
    specs: [
      { parameter: "Body Material", specification: "Die-cast Aluminum / Steel" },
      { parameter: "IP Rating", specification: "IP65" },
      { parameter: "Contact Type", specification: "NO/NC" },
      { parameter: "Voltage Rating", specification: "440V AC" },
      { parameter: "Operating Temperature", specification: "-20°C to +70°C" },
      { parameter: "Certification", specification: "ISO 9001:2015" },
    ],
    applications: ["Mining Industry", "Cement Plants", "Steel Plants", "Power Plants", "Bulk Material Handling", "Chemical Industries"],
  };
}

export const clients = [
  "Tata Steel", "JSW Steel", "Ultratech Cement", "ACC Cement",
  "NTPC", "Adani Power", "Larsen & Toubro", "SAIL", "Vedanta Limited",
];
