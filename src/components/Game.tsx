import { useState, useEffect } from "react";

// Tipagem para os cartões
interface Card {
  id: string;
  icon: string;
  flipped: boolean;
}

const FRONT = "card_front";
const BACK = "card_back";
const ICON = "icon";

// Função principal do componente
const Game = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [secondCard, setSecondCard] = useState<Card | null>(null);
  const [lockMode, setLockMode] = useState(false);

  // Tecnologias para os cartões
  const techs = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
  ];

  // Função para criar os cartões a partir das tecnologias
  const createCardsFromTechs = () => {
    const generatedCards = techs.flatMap((tech) => createPairFromTech(tech));
    shuffleCards(generatedCards);
    return generatedCards;
  };

  // Função para criar o par de cartões com base em uma tecnologia
  const createPairFromTech = (tech: string) => [
    { id: `${tech}${Math.random()}`, icon: tech, flipped: false },
    { id: `${tech}${Math.random()}`, icon: tech, flipped: false },
  ];

  // Função para embaralhar os cartões
  const shuffleCards = (cards: Card[]) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  // Função para lidar com o clique nos cartões
  const handleCardClick = (cardId: string) => {
    if (lockMode) return;
    const clickedCard = cards.find((card) => card.id === cardId);
    if (!clickedCard || clickedCard.flipped) return;

    clickedCard.flipped = true;
    if (!firstCard) {
      setFirstCard(clickedCard);
    } else {
      setSecondCard(clickedCard);
      setLockMode(true);
    }
  };

  // Verificar se os dois cartões são uma correspondência
  const checkMatch = () => {
    if (firstCard && secondCard) {
      return firstCard.icon === secondCard.icon;
    }
    return false;
  };

  // Limpar o estado dos cartões
  const clearCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockMode(false);
  };

  // Virar os cartões de volta
  const unflipCards = () => {
    if (firstCard) firstCard.flipped = false;
    if (secondCard) secondCard.flipped = false;
    clearCards();
  };

  // Verificar se o jogo acabou
  const checkGameOver = () => cards.every((card) => card.flipped);

  useEffect(() => {
    const newCards = createCardsFromTechs();
    setCards(newCards);
  }, []);

  useEffect(() => {
    if (secondCard) {
      if (checkMatch()) {
        clearCards();
      } else {
        setTimeout(unflipCards, 1000);
      }
    }
  }, [secondCard]);

  return (
    <div className="Game">
      <div id="gameBoard" className="game-board">
        {cards.map((card) => (
          <div
            key={card.id}
            id={card.id}
            className={`card ${card.flipped ? "flip" : ""}`}
            onClick={() => handleCardClick(card.id)}
            data-icon={card.icon}
          >
            <div className={FRONT}>
              <img
                className={ICON}
                src={`./assets/${card.icon}.png`}
                alt={card.icon}
              />
            </div>
            <div className={BACK}>&lt;/&gt;</div>
          </div>
        ))}
      </div>
      {checkGameOver() && (
        <div id="gameOver">
          <div>Game Over</div>
          <button id="restart" onClick={() => setCards(createCardsFromTechs())}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
