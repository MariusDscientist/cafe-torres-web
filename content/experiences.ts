export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  price: string;
  image: string;
  duration: string;
  capacity: string;
  audience: string;
  features: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "el-camino-del-arriero",
    title: "El Camino del Arriero",
    subtitle: "De la semilla a la taza",
    desc: "Ideal para turistas, familias y personas que desean conectar con el trasfondo cultural y artesanal del café de especialidad.",
    price: "$85.000 COP",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800",
    duration: "75-90 minutos",
    capacity: "2 a 8 personas",
    audience: "Turistas, familias y entusiastas",
    features: [
      "Vestuario Histórico Regional (Poncho, carriel, sombrero y sesión de fotos)",
      "Laboratorio interactivo del grano en sus 3 etapas (Cereza, pergamino, almendra)",
      "Espectáculo en vivo de Micro-Tostión en barra (Presenciar el primer crack)",
      "Laboratorio sensorial de aromas a ciegas con frascos interactivos",
      "Taller de Filtrados Premium guiado por barista"
    ]
  },
  {
    id: "el-legado-del-hacendado",
    title: "El Legado del Hacendado",
    subtitle: "Alta cultura cafetera premium",
    desc: "Diseñado para amantes del café exigentes, parejas que buscan una cita memorable y eventos de fidelización corporativa de alto perfil.",
    price: "$145.000 COP",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    duration: "105-120 minutos",
    capacity: "2 a 6 personas",
    audience: "Amantes del café, parejas y eventos corporativos",
    features: [
      "Catación Técnica Profesional (Protocolo formal con cuchareo técnico)",
      "Laboratorio de Diseño de Blends (Pesar y combinar orígenes frutales y achocolatados)",
      "El Torneo del Hacendado (Catación a ciegas y votación democrática)",
      "Ritual de Maridaje de Autor (Copa de filtrado maridada con torta artesanal gourmet)",
      "El Souvenir Supremo: Bolsa de 250g de tu blend de autor con fórmula única registrada de por vida"
    ]
  }
];

export const COMPARISON_TABLE = {
  headers: ["Componente Incluido", "El Camino del Arriero", "El Legado del Hacendado"],
  rows: [
    { name: "Vestuario Histórico Regional", arriero: "Incluido", hacendado: "No incluido" },
    { name: "Módulo Educativo del Grano", arriero: "Incluido", hacendado: "Incluido" },
    { name: "Micro-Taller de Tostión en Barra", arriero: "Incluido", hacendado: "Incluido" },
    { name: "Evaluación Sensorial del Café", arriero: "Mini cata en filtrado", hacendado: "Avanzado (Catación formal)" },
    { name: "Juegos y Retos Sensoriales", arriero: "Lab de aromas a ciegas", hacendado: "Lab de aromas a ciegas + Torneo de Blends" },
    { name: "Servicio de Alimentos (Maridaje)", arriero: "Café en vertido", hacendado: "Café + Torta Gourmet" },
    { name: "Bolsa Personalizada de Café", arriero: "No incluido", hacendado: "250g con tu blend personalizado" },
    { name: "Registro de Fórmulas", arriero: "No incluido", hacendado: "Receta registrada de por vida para reordenar" },
  ]
};
