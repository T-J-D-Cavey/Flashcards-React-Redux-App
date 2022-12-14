import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {cardsSelector} from './cardsSlice';

export default function Card({ id }) {
  const cards = useSelector(cardsSelector);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button id='card-button' className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
