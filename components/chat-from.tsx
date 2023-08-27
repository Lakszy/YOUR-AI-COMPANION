import React, { ChangeEvent, FormEvent } from "react";
import { ChatRequestOptions } from "ai";
import { Button } from "./ui/button"; // Make sure the correct path is used
import { SendHorizontalIcon } from "lucide-react"; // Correct the typo in icon name
import { Input } from "./ui/input"; // Import the Input component if it's used

interface ChatFormProps {
  input: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
  isLoading: boolean;
}

export const ChatForm = ({
  input,
  handleInputChange,
  onSubmit,
  isLoading,
}: ChatFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="border-t border-primary/10 py-4 flex items-center gap-x-2"
    >
      <Input
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        placeholder="Type a Message"
        className="rounded-lg bg-primary/10"
      />
      <Button disabled={isLoading} variant="ghost">
        <SendHorizontalIcon className="h-6 w-6" />
      </Button>
    </form>
  );
};
