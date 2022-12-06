import { Header } from "./Header";

export const Splash = ({ setInitialLoad }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setInitialLoad(false);
  };
  return (
    <section className="Splash">
      <header>
        <Header />
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Login as existing user</h2>
          <label>
            Login
            <input type="text" />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Create User</h2>
          <label>
            Full name:
            <input type="text" />
          </label>
          <label htmlFor="">
            Username:
            <input type="text" />
          </label>
          <label>
            Create password:
            <input type="password" />
          </label>
          <button> Create and login</button>
        </form>
      </section>
    </section>
  );
};
