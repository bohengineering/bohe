import { createSignal } from "solid-js";

export default function Home() {
  // Counter state (disabled)
  // const [count, setCount] = createSignal(0);

  return (
    <section
      class="bg-white text-black p-8 rounded-md"
      style={{ "font-family": "Georgia, 'Times New Roman', serif" }}
    >
      <h2 class="text-2xl font-normal">
        Coming soon
      </h2>

      <p class="mt-4"></p>

      <div class="flex items-center space-x-2 mt-4">
        {/* Counter UI disabled */}
        {/*
        <button
          type="button"
          class="border rounded-lg px-2 border-black"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output class="p-10px">Count: {count()}</output>

        <button
          type="button"
          class="border rounded-lg px-2 border-black"
          onClick={() => setCount(count() + 1)}
        >
          +
        </button>
        */}
      </div>
    </section>
  );
}
