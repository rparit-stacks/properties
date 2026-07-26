export interface Property {
  id: number;
  name: string;
  location: string;
  projectedReturns: string;
  minInvestment: string;
  type: "residential" | "commercial";
  image: string;
  overallProjectCost: string;
  totalToken: string;
  status?: "Launched" | "Upcoming";
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Solar Power Project",
    location: "",
    projectedReturns: "12–21.8%",
    minInvestment: "₹2,50,000",
    type: "residential",
    image: "/properties/1.png",
    overallProjectCost: "₹5,00,000",
    totalToken: "200",
    status: "Launched",
  },
  {
    id: 2,
    name: "Australian Teakwood Land",
    location: "Marwahi (GPM)",
    projectedReturns: "26.7% p.a.",
    minInvestment: "₹7,500",
    type: "residential",
    image: "/properties/2.png",
    overallProjectCost: "₹3,00,00,000",
    totalToken: "4,000",
    status: "Launched",
  },
  {
    id: 3,
    name: "Apollo Premier",
    location: "Indore",
    projectedReturns: "20% p.a.",
    minInvestment: "₹4,00,000",
    type: "commercial",
    image: "/properties/3.png",
    overallProjectCost: "₹8,00,00,000",
    totalToken: "200",
    status: "Launched",
  },
  {
    id: 4,
    name: "Apollo High Street",
    location: "Indore",
    projectedReturns: "20% p.a.",
    minInvestment: "₹15,00,000",
    type: "commercial",
    image: "/properties/4.png",
    overallProjectCost: "₹30,00,00,000",
    totalToken: "200",
    status: "Launched",
  },
];

export function getPropertyById(id: number): Property | undefined {
  return properties.find((property) => property.id === id);
}


