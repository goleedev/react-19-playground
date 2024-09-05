import { useFormState } from 'react-dom';

interface FormMessage {
  success: boolean;
  text: string;
}

const submitForm = (
  prevState: FormMessage | null,
  formData: FormData
): FormMessage => {
  const name = formData.get('username') as string;
  console.log(prevState); // previous form state

  if (name.toLowerCase() === 'john') {
    return {
      success: true,
      text: 'Welcome',
    };
  } else {
    return {
      success: false,
      text: 'Error',
    };
  }
};

export default function FormState() {
  const [message, formAction] = useFormState(submitForm, null);

  return (
    <div>
      <h3>useFormState() Example</h3>
      <form action={formAction}>
        <div>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" name="username" required />
        </div>
        <button type="submit">Submit</button>
        {message && (
          <h4 style={{ color: message.success ? 'green' : 'red' }}>
            {message.text}
          </h4>
        )}
      </form>
    </div>
  );
}
