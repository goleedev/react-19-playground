interface UserData {
  username: string;
  email: string;
}

const submitData = async (formData: FormData): Promise<void> => {
  const userData: UserData = {
    username: formData.get('username') as string,
    email: formData.get('email') as string,
  };
  console.log(userData);
  // Here you would typically send the data to a server
};

export default function Action() {
  return (
    <div>
      <h3>Action Example</h3>
      <form action={submitData}>
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
