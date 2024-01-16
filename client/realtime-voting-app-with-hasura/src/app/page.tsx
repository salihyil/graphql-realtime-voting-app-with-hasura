"use client";

import { QUESTIONS_SUBSCRIPTION } from "@/app/queries";
import { useSubscription } from "@apollo/client";
import Link from "next/link";

export default function Home() {
  const { data, loading } = useSubscription(QUESTIONS_SUBSCRIPTION);
  console.log(data);

  return (
    <div>
      <h1>Questions</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data?.questions.map((question) => (
            <div key={question.id}>
              <Link href={`/detail/${question.id}`}>{question.title}</Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
