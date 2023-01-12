import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const handleInput = (e) => {
    if (e.key === "Enter") {
      const input = e.target.value;
      const task = {
        taskTitle: input,
      };
      const serverResponse = {
        countLog: count,
      };
      console.log("event is clicked", task);

      fetch(`http://localhost:5000/addtask`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            console.log("task added successfully");

            fetch(`http://localhost:5000/add-respons-count`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(serverResponse),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                  console.log("count added successfully");
                  setCount(count + 1);
                }
              });
          }
        });
    }
  };

  return (
    <div>
      <h2>Server Call Count: {count}</h2>
      <input
        onKeyDown={handleInput}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-success w-full max-w-xs"
      />
    </div>
  );
};

export default Home;
