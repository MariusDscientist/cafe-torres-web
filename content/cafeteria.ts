export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  category: "bebidas-calientes" | "bebidas-frias" | "reposteria";
}

export const CAFETERIA = {
  title: "Menú de Cafetería",
  subtitle: "Nuestra selección diaria en Pereira",
  items: [
    {
      name: "Espresso Doble",
      desc: "Extracción balanceada con notas frutales y dulzor medio.",
      price: "$5.500 COP",
      category: "bebidas-calientes"
    },
    {
      name: "Cappuccino VIP",
      desc: "Espresso con leche cremada fina y un toque de cacao espolvoreado.",
      price: "$7.500 COP",
      category: "bebidas-calientes"
    },
    {
      name: "Cold Brew Tonic",
      desc: "Café extraído en frío por 18 horas mezclado con tónica premium y limón.",
      price: "$9.000 COP",
      category: "bebidas-frias"
    },
    {
      name: "Affogato de Origen",
      desc: "Bola de helado de vainilla ahogada en un shot caliente de espresso de especialidad.",
      price: "$10.500 COP",
      category: "bebidas-frias"
    },
    {
      name: "Tarta de Café y Chocolate",
      desc: "Base crujiente con mousse de cacao al 70% infusionada con nuestro café de origen.",
      price: "$8.500 COP",
      category: "reposteria"
    }
  ] as MenuItem[]
};
