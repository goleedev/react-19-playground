import { useOptimistic, useState } from 'react';

interface Message {
  text: string;
  sending?: boolean;
  key?: number;
}

export default function Optimistic() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hey, I am initial message!', sending: false, key: 1 },
  ]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: string): Message[] => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  const fakeDelayAction = async (message: string): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return message;
  };

  const sendFormData = async (formData: FormData): Promise<void> => {
    const sentMessage = await fakeDelayAction(
      formData.get('username') as string
    );
    setMessages((prevMessages) => [...prevMessages, { text: sentMessage }]);
  };

  const submitData = async (formData: FormData): Promise<void> => {
    const username = formData.get('username') as string;
    addOptimisticMessage(username);
    await sendFormData(formData);
  };

  return (
    <div>
      <h3>useOptimistic() Example</h3>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={submitData}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
