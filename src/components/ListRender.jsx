import { useState } from "react";

{/* Renderização de listas */}

import React from 'react'

const ListRender = () => {
  const [List] = useState(['Abraao', 'Marceia', 'Solange'])

  return (
    <div>
      <ul>
        {List.map((item) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender