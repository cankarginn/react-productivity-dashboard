import {
  RefreshCw,
} from "lucide-react";

import "./QuoteCard.css";

function QuoteCard() {
  return (
    <section className="quote-card">
      <div className="quote-content">
        <p className="quote-text">
          Discipline is the bridge
          <br />
          between goals and
          <br />
          accomplishment.
        </p>

        <p className="quote-author">
          — Jim Rohn
        </p>

        <button className="new-quote">
          New Quote
          <RefreshCw size={12} />
        </button>
      </div>

      <div className="quote-mountains">
        <div className="mountain mountain-back"></div>
        <div className="mountain mountain-middle"></div>
        <div className="mountain mountain-front"></div>
      </div>
    </section>
  );
}

export default QuoteCard;