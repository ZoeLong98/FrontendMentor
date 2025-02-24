export default function EmailInput() {
  return (
    <section className="flex flex-col gap-1">
      <label htmlFor="email">
        <h5>Emali Address</h5>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-full"
        placeholder="email@example.com"
      />
    </section>
  );
}
