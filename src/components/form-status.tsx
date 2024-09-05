import { useFormStatus } from 'react-dom';

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

const formAction = async (): Promise<void> => {
  // Simulate a delay of 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // Here is where to typically process the form data
};

export default function FormStatus() {
  return (
    <div>
      <h3>useFormStatus() Example</h3>
      <form action={formAction}>
        <Submit />
      </form>
    </div>
  );
}
