import { component$, useStore, Host, useRef, useEffect$ } from '@builder.io/qwik';
import './Popup.css'

/**
 * Individual items of the component.
 *
 * It only rerenders if the user infarcts with it or if the item itself changes.
 */
export interface Props {
}


export const Popup = component$(
  (props: Props) => {
    const state = useStore({ editing: false });
    const editInput = useRef<HTMLInputElement>();

    useEffect$((obs) => {
      const { current } = obs(editInput);
      if (current) {
        current.focus();
        current.selectionStart = current.selectionEnd = current.value.length;
      }
    });

    return (
      <main>
      <h3>Popup Page!</h3>

      <h6>v 0.0.0</h6>

      <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
        Power by {crx}
      </a>
    </main>
    );
  },
  {
    tagName: 'li',
  }
);

export default Popup