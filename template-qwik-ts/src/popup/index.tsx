import { component$, useStore } from '@builder.io/qwik';

import './index.css';

/**
 * Overall application component.
 *
 * This component is static (meaning it will never change). Because of this
 * Qwik knows that it should never need to be rerendered, and its code will never
 * download to the client.
 */
export const Main = component$(() => {
  const todos = useStore({
    filter: 'all',
    items: [
      { completed: false, title: 'Read Qwik dhocs' },
      { completed: false, title: 'Build HelloWorld' },
      { completed: false, title: 'Profit' },
    ],
  });
  return (
    <section class="todoapp">
      <Header todos={todos} />
    </section>
  );
});
