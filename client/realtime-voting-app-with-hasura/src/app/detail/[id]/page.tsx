"use client";

import { useMutation, useSubscription } from "@apollo/client";
import { useState } from "react";
import { NEW_VOTE_MUTATION, QUESTION_DETAIL_SUBSCRIPTION } from "./queries";

export default function Page({ params }: Readonly<{ params: { id: string } }>) {
  const [isVoted, setIsVoted] = useState(false);
  const [effect, setEffect] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState("");
  const { data, loading, error } = useSubscription(QUESTION_DETAIL_SUBSCRIPTION, {
    variables: {
      id: Number(params.id),
    },
  });
  const [newVote, { loading: loadingVote }] = useMutation(NEW_VOTE_MUTATION, {
    onCompleted() {
      setIsVoted(true);
    },
  });

  const handleClickVote = () => {
    setEffect(true);
    newVote({
      variables: {
        input: {
          option_id: Number(selectedOptionId),
        },
      },
    });
  };

  const totalVote = data?.questions_by_pk?.options.reduce(
    (t, value) => t + (value.votes_aggregate.aggregate?.count ?? 0),
    0
  ) as number;

  console.log(totalVote);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-1/3">
          <h1 className="font-bold">{data?.questions_by_pk?.title}</h1>
          <ul>
            {data?.questions_by_pk?.options.map((option, index) => (
              <li className="my-2" key={index}>
                <label htmlFor={String(index)}>
                  <input
                    className="mx-2"
                    type="radio"
                    value={option.id}
                    name="selected"
                    id={`${index}`}
                    onChange={(e) => setSelectedOptionId(e.target.value)}
                  />
                  <span>{option.title}</span>
                  {isVoted && (
                    <span className="mx-2">
                      (%
                      {(
                        ((option.votes_aggregate.aggregate?.count ?? 0) * 100) /
                        (totalVote === 0 ? 1 : totalVote)
                      ).toFixed(2)}
                      )
                    </span>
                  )}
                </label>

                {isVoted && (
                  <div className="w-full border border-gray-200 bg-gray-200 rounded-full h-2.5 dark:bg-gray-100">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all "
                      style={{
                        width: `${
                          ((option.votes_aggregate.aggregate?.count ?? 0) / totalVote) * 100
                        }%`,
                      }}></div>
                  </div>
                )}
              </li>
            ))}
            {!isVoted && (
              <button
                type="button"
                className={`${
                  effect && "animate-wiggle"
                } bg-blue-500 p-2 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
                disabled={loadingVote}
                onAnimationEnd={() => setEffect(false)}
                onClick={handleClickVote}>
                Vote
              </button>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
