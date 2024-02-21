"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = () => {
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    status: 0,
    progress: "not started",
    category: "Hardware Problem",
  };

  const [ticketData, setTicketData] = useState(startingTicketData);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
      });
      const data = await response.json();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <form>
        <h3>Create your ticket</h3>
        <label>Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required={true}
          value={ticketData.title}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TicketForm;
