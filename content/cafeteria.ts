export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  category: "el-finquerito" | "la-chapolera" | "el-arriero" | "fondita-vip" | "bitutte" | "postres" | "cosechas";
  featured?: boolean;
  link?: string;
}

export const CAFETERIA = {
  title: "Menú de Cafetería",
  subtitle: "Nuestra selección diaria en Pereira",
  categories: [
    { key: "el-finquerito", name: "El Finquerito", desc: "Bebidas calientes a base de café negro y preparaciones tradicionales." },
    { key: "la-chapolera", name: "La Chapolera", desc: "Bebidas calientes preparadas con leche cremosa y texturizada." },
    { key: "el-arriero", name: "El Arriero", desc: "Aromáticas, infusiones saludables y de la huerta." },
    { key: "fondita-vip", name: "Fondita VIP", desc: "Bebidas frías, refrescantes, frappés, cold brews y helados." },
    { key: "bitutte", name: "Bitutte", desc: "Desayunos típicos, almuerzo gourmet y platos para compartir." },
    { key: "postres", name: "Postres y Antojos", desc: "Repostería artesanal y horneados para acompañar tu taza." },
    { key: "cosechas", name: "Cosechas de la Finca", desc: "Granos de origen seleccionados para preparar en casa." }
  ] as const,
  items: [
    // El Finquerito
    {
      name: "Ristretto",
      desc: "8 gramos de café de especialidad extraídos en 30 segundos para máxima concentración.",
      price: "$5.000 COP",
      category: "el-finquerito"
    },
    {
      name: "Americano",
      desc: "Shot de espresso doble balanceado con 100 ml de agua purificada caliente.",
      price: "$4.900 COP",
      category: "el-finquerito"
    },
    {
      name: "Finquerito",
      desc: "Nuestra infusión tradicional de agua de panela con canela, maracuyá, hierbabuena y un toque de brandy.",
      price: "$12.000 COP",
      category: "el-finquerito",
      featured: true
    },
    {
      name: "Montañero",
      desc: "Preparación típica con clavos de olor, agua de panela, canela, limón y 10 gramos de café de origen.",
      price: "$4.900 COP",
      category: "el-finquerito"
    },
    {
      name: "Carajillo",
      desc: "Combinación tradicional de un shot de espresso caliente con Brandy premium.",
      price: "$11.000 COP",
      category: "el-finquerito"
    },
    {
      name: "Canelazo Michelado",
      desc: "Bebida caliente de panela, canela y aguardiente, servida en vaso michelado.",
      price: "$11.000 COP",
      category: "el-finquerito"
    },
    {
      name: "Métodos Artesanales de Café",
      desc: "Extracciones limpias preparadas en mesa: Sifón Japonés, Chemex, V60 o Dripper, Fretta, AeroPress, Clever, Moka Italiana, Melitta o Cafetera Vietnamita.",
      price: "$8.000 COP",
      category: "el-finquerito",
      featured: true
    },
    {
      name: "Experiencias Sensoriales Cafeteras",
      desc: "Inmersión guiada de la semilla a la taza: incluye tostión, catación y barismo en barra exclusiva.",
      price: "Bajo reserva",
      category: "el-finquerito",
      link: "/experiencias"
    },
    {
      name: "Estaciones de Café Empresariales",
      desc: "Barras móviles de especialidad con baristas profesionales, equipos e insumos para tus eventos corporativos.",
      price: "Cotizar servicio",
      category: "el-finquerito",
      link: "/estaciones"
    },

    // La Chapolera
    {
      name: "La Chapolera",
      desc: "8 gramos de café de origen de la casa coronados con una capa fina de leche espumada.",
      price: "$6.500 COP",
      category: "la-chapolera"
    },
    {
      name: "Latte",
      desc: "10 gramos de café de especialidad finamente molido con leche cremada y texturizada.",
      price: "$8.500 COP",
      category: "la-chapolera"
    },
    {
      name: "Cappuccino",
      desc: "Extracción clásica de espresso balanceado con leche sedosa y perfectamente cremada.",
      price: "$9.500 COP",
      category: "la-chapolera"
    },
    {
      name: "Cappuccino Chai",
      desc: "Extracción doble de café de origen con leche texturizada y una mezcla aromática de té chai.",
      price: "$11.000 COP",
      category: "la-chapolera",
      featured: true
    },
    {
      name: "Mocaccino",
      desc: "Espresso de la casa combinado con chocolate amargo, leche texturizada y decorado con salsa de chocolate.",
      price: "$9.500 COP",
      category: "la-chapolera"
    },
    {
      name: "Té Chai Caliente",
      desc: "180 ml de leche cremada infusionada con 30 gramos de té chai artesanal de la casa.",
      price: "$10.000 COP",
      category: "la-chapolera"
    },
    {
      name: "Milo Caliente",
      desc: "Leche entera perfectamente cremada con una generosa porción de Milo.",
      price: "$9.000 COP",
      category: "la-chapolera"
    },
    {
      name: "Chocolate Montañero",
      desc: "Chocolate artesanal preparado con leche, clavos de olor, canela, panela y un toque de nuez moscada.",
      price: "$8.000 COP",
      category: "la-chapolera"
    },
    {
      name: "Chocomasmelo",
      desc: "Chocolate caliente en leche con clavos, canela y panela, decorado con masmelos fundidos y salsa de chocolate.",
      price: "$9.500 COP",
      category: "la-chapolera"
    },
    {
      name: "Chocolate en Agua",
      desc: "Chocolate tradicional preparado con canela, panela y agua purificada filtrada.",
      price: "$4.900 COP",
      category: "la-chapolera"
    },
    {
      name: "Maicenita de la Abuela",
      desc: "Bebida reconfortante de maicena natural cocida con azúcar, leche y astillas de canela.",
      price: "$8.000 COP",
      category: "la-chapolera"
    },
    {
      name: "Maicenita de Café",
      desc: "Nuestra maicena especial saborizada con espresso de especialidad. (También disponible en sabor milo, vainilla, chocolate o maracuyá).",
      price: "$9.000 COP",
      category: "la-chapolera"
    },
    {
      name: "Café Bombón",
      desc: "Deliciosa combinación visual y sensorial de leche condensada premium y un shot de espresso.",
      price: "$5.500 COP",
      category: "la-chapolera"
    },

    // El Arriero
    {
      name: "Aromática de Frutas Naturales",
      desc: "Deliciosa infusión caliente elaborada con trozos de frutas frescas. Elige entre Frutos Rojos o Frutos Amarillos.",
      price: "$7.500 COP",
      category: "el-arriero"
    },
    {
      name: "Aromática con Hierbas de la Huerta",
      desc: "Infusión reconfortante de hierbabuena fresca, jengibre, limón y miel de abejas pura.",
      price: "$4.500 COP",
      category: "el-arriero"
    },
    {
      name: "Aromática de Frutos Deshidratados",
      desc: "Mezcla dulce y aromática de coco deshidratado, arándanos, banano, piña y mango.",
      price: "$8.500 COP",
      category: "el-arriero",
      featured: true
    },
    {
      name: "Aromática de Panelita",
      desc: "Bebida caliente a base de agua de panela con infusión de limón, maracuyá, frutos rojos o durazno.",
      price: "$4.500 COP",
      category: "el-arriero"
    },

    // Fondita VIP
    {
      name: "Frappé de Frutas",
      desc: "Bebida helada de fruta natural de temporada (Mango, Fresa, Guanábana, Lulo, Maracuyá o Mora). Puedes combinar dos sabores.",
      price: "$11.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Latte Frío",
      desc: "Leche fría emulsionada servida sobre hielo con nuestro cold brew honey.",
      price: "$11.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Latte Chai Frío",
      desc: "Mezcla refrescante de hielo, leche fría, cold brew honey y especias de té chai.",
      price: "$13.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Café Torres (Especialidad Fría)",
      desc: "Nuestra bebida firma helada: Cold brew de la casa infusionado con zumo de naranja natural recién exprimido y hielo.",
      price: "$11.000 COP",
      category: "fondita-vip",
      featured: true
    },
    {
      name: "Frappuccino",
      desc: "Espresso licuado con hielo y leche, decorado con salsa de chocolate, leche condensada, crema chantilly, galleta Oreo triturada y caramelo.",
      price: "$11.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Limonadas de Autor",
      desc: "Limonadas refrescantes en diversos sabores a elegir: Coco piña, Hierbabuena, Cherry, Mango biche o Mora.",
      price: "$11.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Jugos Naturales",
      desc: "Elaborados con fruta fresca en agua (Mango, fresa, guanábana, lulo, maracuyá o mora). En leche por $1.500 adicionales.",
      price: "$10.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Malteadas Tradicionales",
      desc: "Crema helada batida disponible en sabores: Vainilla, Arequipe, Chocolate, Café de origen o Fresa.",
      price: "$12.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Soda Michelada",
      desc: "Soda refrescante servida con hielo y limón de Pajarito (Taití) en copa michelada.",
      price: "$7.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Soda Italiana",
      desc: "Bebida carbonatada saborizada con almíbar de frutas. Sabores: Frutos Amarillos o Frutos Rojos.",
      price: "$13.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Tamarindo Michelado",
      desc: "Soda de tamarindo refrescante con limón Taití, hielo y copa michelada con sal.",
      price: "$8.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Cold Brew Honey Red",
      desc: "Café de especialidad extraído por goteo lento en frío durante 48 horas, servido con hielo.",
      price: "$9.000 COP",
      category: "fondita-vip"
    },
    {
      name: "Affogato de la Casa",
      desc: "Shot de espresso caliente vertido sobre helado artesanal de vainilla y arequipe, decorado con salsa de chocolate.",
      price: "$9.500 COP",
      category: "fondita-vip",
      featured: true
    },
    {
      name: "Copa de Helado VIP",
      desc: "Porciones de helado acompañadas de crema chantilly, galletas crujientes, chips de colores, salsa de chocolate y caramelo.",
      price: "$11.000 COP",
      category: "fondita-vip"
    },

    // Bitutte
    {
      name: "Omelet Relleno",
      desc: "Omelet clásico o relleno al gusto, acompañado de chocolate caliente en agua.",
      price: "$11.000 COP",
      category: "bitutte"
    },
    {
      name: "Huevos con Jamón",
      desc: "Huevos preparados con jamón, arepa con queso derretido y chocolate caliente en agua.",
      price: "$11.000 COP",
      category: "bitutte"
    },
    {
      name: "Huevos en Cacerola",
      desc: "Huevos al gusto preparados en cacerola caliente con pan tajado tostado y chocolate en agua.",
      price: "$11.000 COP",
      category: "bitutte"
    },
    {
      name: "Sándwich de Jamón y Queso",
      desc: "Sándwich clásico de jamón y doble queso derretido en pan artesanal.",
      price: "$10.500 COP",
      category: "bitutte"
    },
    {
      name: "Sándwich de Ropa Vieja",
      desc: "Carne o pollo desmechado sazonado, servido en pan artesanal de la casa con salsa especial de la barra.",
      price: "$12.000 COP",
      category: "bitutte",
      featured: true
    },
    {
      name: "Montaditos de Arepa y Patacón",
      desc: "Tres arepitas y tres patacones crujientes cubiertos con carne desmechada sazonada y hogao criollo.",
      price: "$15.000 COP",
      category: "bitutte"
    },
    {
      name: "Canasticas Montañeras",
      desc: "Cinco canastas crujientes de plátano verde rellenas con pollo desmechado, carne, chicharrón, plátano maduro y salsa de la casa.",
      price: "$17.000 COP",
      category: "bitutte",
      featured: true
    },
    {
      name: "Arepa al Carbón",
      desc: "Arepa tradicional asada al carbón, rellena con carne o pollo y gratinada con abundante queso.",
      price: "$11.000 COP",
      category: "bitutte"
    },
    {
      name: "Almuerzo Ejecutivo Gourmet",
      desc: "Disponible de lunes a sábado: crema o sopa del día, arroz, ensalada fresca, principio, proteína a elegir y bebida del día.",
      price: "Desde $18.000 COP",
      category: "bitutte"
    },

    // Postres y Antojos
    {
      name: "Almojábana Tradicional",
      desc: "Horneada diariamente, servida caliente con su textura suave y esponjosa de queso.",
      price: "$4.000 COP",
      category: "postres"
    },
    {
      name: "Croissant de Queso",
      desc: "Croissant de hojaldre horneado relleno de queso derretido de la región.",
      price: "$4.900 COP",
      category: "postres"
    },
    {
      name: "Mini Brownie Caliente",
      desc: "Pequeño brownie de chocolate melcochudo servido caliente, perfecto para acompañar un espresso.",
      price: "$3.500 COP",
      category: "postres"
    },
    {
      name: "Tortas Artesanales",
      desc: "Porción de torta a elección: Amapola, Zanahoria o Chocolate con Maracuyá.",
      price: "$13.000 COP",
      category: "postres",
      featured: true
    },
    {
      name: "Tortas Adicionales",
      desc: "Porción de tortas premium: María Luisa, Torta de Almojábana o Torta Genovesa. Pregunta por promociones diarias.",
      price: "Consultar valor",
      category: "postres"
    },

    // Cosechas de la Finca
    {
      name: "Café en Grano o Molido (250g/500g)",
      desc: "Café de origen de especialidad de múltiples regiones de Risaralda y productores locales. Resalta sabores y aromas únicos del microclima y altura.",
      price: "Desde $23.000 COP",
      category: "cosechas",
      featured: true
    }
  ] as MenuItem[]
};
