import React from "react";

const commerces = [
  {
    name: "Padaria Sol Nascente",
    category: "Alimentação",
    description: "Pães fresquinhos, bolos e cafés especiais.",
    contact: "(27) 99999-1234",
    location: "Rua Maranhão, Praia da Costa",
  },
  {
    name: "Salão Estilo & Beleza",
    category: "Beleza",
    description: "Cortes, escovas, manicure e maquiagem.",
    contact: "(27) 98888-4567",
    location: "Av. Hugo Musso, Praia da Costa",
  },
  {
    name: "Oficina Costa Auto",
    category: "Serviços Automotivos",
    description: "Revisão, troca de óleo e mecânica geral.",
    contact: "(27) 97777-7890",
    location: "Rua Bahia, Praia da Costa",
  },
  {
    name: "Dona Rosa Doces Caseiros",
    category: "Alimentação",
    description: "Bolos no pote, brigadeiros e sobremesas sob encomenda.",
    contact: "(27) 99555-3210",
    location: "Rua Resplendor, Praia da Costa",
  },
  {
    name: "Studio Personal Fit",
    category: "Serviços de Saúde e Bem-estar",
    description: "Aulas personalizadas de treino funcional e musculação.",
    contact: "(27) 99666-7894",
    location: "Rua Ceará, Praia da Costa",
  },
  {
    name: "Marcia Costuras Rápidas",
    category: "Consertos e Costura",
    description: "Ajustes de roupas, zíperes e pequenos consertos.",
    contact: "(27) 99444-6655",
    location: "Rua São Paulo, Praia da Costa",
  },
];

export default function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center", color: "#1e3a8a" }}>
        Localizando
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2rem", color: "#4b5563" }}>
        O que você precisa, perto de você. Encontre comércios e serviços na Praia da Costa.
      </p>
      <input
        type="text"
        placeholder="O que você procura? (ex: padaria, salão, costureira...)"
        style={{
          padding: "0.5rem",
          width: "100%",
          marginBottom: "1.5rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <div style={{ display: "grid", gap: "1rem" }}>
        {commerces.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem" }}>
            <h2 style={{ fontSize: "1.25rem", color: "#111827" }}>{item.name}</h2>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{item.category}</p>
            <p style={{ marginBottom: "0.5rem", color: "#374151" }}>{item.description}</p>
            <p><strong>Contato:</strong> {item.contact}</p>
            <p><strong>Endereço:</strong> {item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}