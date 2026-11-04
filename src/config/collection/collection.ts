// What Diorteda stocks. The six categories come from the shop's Instagram highlights
// (Wall Clocks, Scented candle, Console mirrors, Center Rugs, Flowers) and its "premium interior decor accessories".
// PLACEHOLDER: the styles listed under each category are typical of the range and must be checked against real stock.
// No prices are shown, because they change with stock and with retail or wholesale quantities.

export type Category = {
  id: string;
  title: string;
  short: string;
  note: string;
  image: string;
  imageAlt: string;
  styles: { name: string; detail: string }[];
};

export const collection: Category[] = [
  {
    id: "wall-clocks",
    title: "Wall clocks",
    short: "Big statement clocks for the wall above the sofa.",
    note: "Most people underestimate the size. Measure the wall, then go a size up.",
    image: "/images/clock-brass.jpg",
    imageAlt: "An open-frame brass wall clock with Roman numerals",
    styles: [
      { name: "Oversized open-frame clocks", detail: "Metal skeleton frames in gold, black or silver, for a large empty wall." },
      { name: "Mirror-finish clocks", detail: "Mirrored faces and frames that catch the light in a sitting room." },
      { name: "Wood and minimal clocks", detail: "Quiet faces for bedrooms, offices and kitchens." },
      { name: "Silent sweep clocks", detail: "No ticking, so they suit bedrooms and quiet rooms." },
    ],
  },
  {
    id: "console-mirrors",
    title: "Console mirrors",
    short: "A console and mirror to make an entrance.",
    note: "Sold as a set or apart. Tell us the width of the wall and we'll suggest a pairing.",
    image: "/images/mirror-round.jpg",
    imageAlt: "A large round mirror on the wall of an entrance hall",
    styles: [
      { name: "Console and mirror sets", detail: "A matching table and mirror for an entrance or a dining wall." },
      { name: "Round and arched mirrors", detail: "Gold, black and wood frames in several sizes." },
      { name: "Full-length mirrors", detail: "Floor-standing or wall-hung, for bedrooms and dressing areas." },
      { name: "Decorative mirror groups", detail: "Small mirrors hung together as one feature." },
    ],
  },
  {
    id: "centre-rugs",
    title: "Centre rugs",
    short: "Rugs that pull a sitting room together.",
    note: "A centre rug should reach under the front legs of every seat. Send us the room size and we'll help.",
    image: "/images/rug-pattern.jpg",
    imageAlt: "A dark rug with a dense floral pattern, seen close up",
    styles: [
      { name: "Patterned centre rugs", detail: "Traditional and floral designs in deep reds, blues and golds." },
      { name: "Plain and shaggy rugs", detail: "Soft single colours for a calmer room." },
      { name: "Modern abstract rugs", detail: "Bold shapes and colour blocks for a modern sitting room." },
      { name: "Runners", detail: "Long, narrow rugs for corridors and beside beds." },
    ],
  },
  {
    id: "scented-candles",
    title: "Scented candles",
    short: "Candles and holders for the room and the table.",
    note: "Good as gifts, and popular for events and hotel rooms in bulk.",
    image: "/images/candles-table.jpg",
    imageAlt: "Pillar candles beside a sprig of red berries and a small oil lamp",
    styles: [
      { name: "Scented jar candles", detail: "Glass and ceramic jars in fresh, floral and warm scents." },
      { name: "Pillar candles", detail: "Unscented and scented pillars for trays and centrepieces." },
      { name: "Candle holders", detail: "Gold, glass and metal holders, from single to sets of three." },
      { name: "Gift sets", detail: "Boxed candles for birthdays, weddings and corporate gifts." },
    ],
  },
  {
    id: "flowers",
    title: "Flowers and vases",
    short: "Artificial flowers that stay fresh, in vases to match.",
    note: "Artificial stems never need water, so they're ideal for offices, hotels and halls.",
    image: "/images/flower-red.jpg",
    imageAlt: "Deep red flowers in a vase",
    styles: [
      { name: "Artificial flower stems", detail: "Roses, orchids, hydrangeas and greenery, sold by the stem or bunch." },
      { name: "Ready arrangements", detail: "Flowers already set in a vase, ready to place." },
      { name: "Floor and table vases", detail: "Ceramic, glass and metal, from small to tall." },
      { name: "Plants and greenery", detail: "Artificial plants and trees for corners and entrances." },
    ],
  },
  {
    id: "accents",
    title: "Decor accents",
    short: "The small pieces that finish a shelf or a table.",
    note: "Mixing a few accents on a tray or shelf looks more finished than one on its own.",
    image: "/images/gold-vase.jpg",
    imageAlt: "A gold vase lit among darker vases",
    styles: [
      { name: "Gold and metal ornaments", detail: "Sculptures, bowls and figurines for consoles and shelves." },
      { name: "Wall art and wall decor", detail: "Metal wall pieces, frames and art for large walls." },
      { name: "Trays and table pieces", detail: "Centre-table trays, bowls and books for styling." },
      { name: "Cushions and throws", detail: "Soft furnishings to tie a room's colours together." },
    ],
  },
];

// For the "Where's it going?" picker on the home page. Each room suggests three categories.
export type Room = {
  id: string;
  label: string;
  advice: string;
  image: string;
  imageAlt: string;
  picks: string[];
};

export const rooms: Room[] = [
  {
    id: "sitting-room",
    label: "Sitting room",
    advice: "Start with the rug, because everything else sits on it. Then one large clock or mirror for the main wall.",
    image: "/images/living-room.jpg",
    imageAlt: "A bright sitting room with a grey sofa, framed prints and plants",
    picks: ["centre-rugs", "wall-clocks", "accents"],
  },
  {
    id: "entrance",
    label: "Entrance",
    advice: "A console and mirror make a narrow entrance feel twice as wide. Add flowers so it's the first thing people notice.",
    image: "/images/mirror-round.jpg",
    imageAlt: "A round mirror in a bright entrance hall",
    picks: ["console-mirrors", "flowers", "scented-candles"],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    advice: "Keep it soft. A runner by the bed, a quiet clock that doesn't tick, and one candle you actually like the smell of.",
    image: "/images/candle-vase.jpg",
    imageAlt: "A lit candle beside a metal vase of greenery",
    picks: ["scented-candles", "wall-clocks", "centre-rugs"],
  },
  {
    id: "dining",
    label: "Dining",
    advice: "A centrepiece is the whole job. Flowers in a low vase so people can see each other, with candles either side.",
    image: "/images/candles-table.jpg",
    imageAlt: "Pillar candles and berries on a table",
    picks: ["flowers", "scented-candles", "console-mirrors"],
  },
];

export function categoryById(id: string) {
  return collection.find((category) => category.id === id);
}
