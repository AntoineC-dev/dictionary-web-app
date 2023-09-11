import styles from './FontSelectMenu.module.css';

import * as React from 'react';
import * as select from '@zag-js/select';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import arrowDown from '/images/icon-arrow-down.svg';

const selectData = [
  { label: 'Sans Serif', value: 'ff-sans' },
  { label: 'Serif', value: 'ff-serif' },
  { label: 'Mono', value: 'ff-mono' },
];

function FontSelectMenu() {
  const [state, send] = useMachine(
    select.machine({
      id: React.useId(),
      selectedOption: selectData[0],
      onChange: (option) => {
        console.log(option?.value);
        // Update app font-family
      },
    })
  );

  const api = select.connect(state, send, normalizeProps);

  return (
    <>
      <div>
        <label {...api.labelProps} className="sr-only">
          Select a font family
        </label>
        <button {...api.triggerProps} className={styles.trigger}>
          <span className={styles.placeholder} style={{ fontFamily: `var(--${api.selectedOption?.value})` }}>
            {api.selectedOption?.label ?? 'Select option'}
          </span>
          <img className={styles.arrow} src={arrowDown} alt="" aria-hidden="true" />
        </button>
      </div>

      <Portal>
        <div {...api.positionerProps} className={styles.popup}>
          <ul {...api.contentProps} className={styles.options}>
            {selectData.map(({ label, value }) => (
              <li key={value} {...api.getOptionProps({ label, value })} className={styles.item}>
                <span style={{ fontFamily: `var(--${value})` }}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Portal>
    </>
  );
}

export default FontSelectMenu;
