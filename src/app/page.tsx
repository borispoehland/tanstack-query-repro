"use client";

import React from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

function TodoList({ query }: { query: UseQueryResult<number> }) {
  const data = React.use(query.promise);

  return <div>{data}</div>;
}

export default function Page() {
  const query = useQuery({ queryKey: ["todos"], queryFn: () => 100 });

  return (
    <>
      <h1>Todos</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <TodoList query={query} />
      </React.Suspense>
    </>
  );
}
