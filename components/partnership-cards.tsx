import React from "react"

interface PartnershipCardProps {
  title: string
  description: string
  link: string
}

export function PartnershipCards() {
  const cards: PartnershipCardProps[] = [
    { title: "Partner A", description: "Description of Partner A", link: "#" },
    { title: "Partner B", description: "Description of Partner B", link: "#" },
    { title: "Partner C", description: "Description of Partner C", link: "#" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {cards.map((card, index) => (
        <a key={index} href={card.link} className="bg-gray-50 rounded shadow hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg mb-2">{card.title}</h3>
          <p className="text-gray-700">{card.description}</p>
        </a>
      ))}
    </div>
  )
}