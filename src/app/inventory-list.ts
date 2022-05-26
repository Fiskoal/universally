import { Item } from './models/item.model';

export const INVENTORY: Item[] = [
  {
    id: 1,
    name: "The Sun",
    type: "Star",
    image: "https://solarsystem.nasa.gov/internal_resources/5513/",
    description: "...is a deadly laser",
    price: 150000000,
    priceString: "$150,000,000"
  },
  {
    id: 2,
    name: "Mercury",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg",
    description: "The Sun's right-hand man",
    price: 500000,
    priceString: "$500,000"
  },
  {
    id: 3,
    name: "Venus",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png",
    description: "I've heard girls go here",
    price: 600000,
    priceString: "$600,000"
  },
  {
    id: 4,
    name: "Earth",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg",
    description: "It's getting hot in here",
    price: 10000000,
    priceString: "$10,000,000"
  },
  {
    id: 5,
    name: "The Moon",
    type: "Moon",
    image: "https://solarsystem.nasa.gov/system/basic_html_elements/11490_emoon_480x360_moonsbydest.jpg",
    description: "In the resplendent words of James May, \"Cheese\"",
    price: 6000000,
    priceString: "$6,000,000"
  },
  {
    id: 6,
    name: "Mars",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg",
    description: "This should peak your Curiosity!",
    price: 750000,
    priceString: "$750,000"
  },
  {
    id: 7,
    name: "Jupiter",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg",
    description: "The other planets just call him Andre",
    price: 1500000,
    priceString: "$1,500,000"
  },
  {
    id: 8,
    name: "Saturn",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/38_saturn_480x320.jpg",
    description: "Beyoncé liked this one",
    price: 2000000,
    priceString: "$2,000,000"
  },
  {
    id: 9,
    name: "Uranus",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg",
    description: "Guys stop making fun of me",
    price: 69000000,
    priceString: "$69,000,000"
  },
  {
    id: 10,
    name: "Neptune",
    type: "Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg",
    description: "Trident not included",
    price: 7000000,
    priceString: "$7,000,000"
  },
  {
    id: 11,
    name: "Pluto",
    type: "Dwarf Planet",
    image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/99_pluto_480x320.jpg",
    description: "2006 was a rough year",
    price: 39,
    priceString: "$39.99"
  }
]
