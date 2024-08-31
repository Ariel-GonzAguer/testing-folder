import React from "react";

export default function ErrorMessage({ message = "Error" }) {
  return <div data-testid='message-container'>{message}</div>;
}
