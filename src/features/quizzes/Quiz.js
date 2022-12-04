import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import {quizzesSelector} from './quizzesSlice';

export default function Topic() {
  const quizzes = useSelector(quizzesSelector);
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card className='card-button' key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
