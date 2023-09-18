import styles from './FontSelectMenu.module.css';
import useStore, { Fonts } from '../../stores/store';

import * as Ariakit from '@ariakit/react';

interface SelectData {
  label: string;
  value: Fonts;
}
const selectData: SelectData[] = [
  { label: 'Sans Serif', value: '--ff-sans' },
  { label: 'Serif', value: '--ff-serif' },
  { label: 'Mono', value: '--ff-mono' },
];

function renderSelectLabel(val: Fonts) {
  for (let i = 0; i < selectData.length; i++) {
    const data = selectData[i];
    if (data.value === val) {
      return data.label;
    }
  }
}

function FontSelectMenu() {
  const globalFont = useStore((state) => state.globalFont);
  const setGlobalFont = useStore((state) => state.setGlobalFont);

  const select = Ariakit.useSelectStore({
    defaultValue: globalFont,
    animated: true,
    placement: 'bottom-end',
    setValue: (value) => setGlobalFont(value as Fonts),
  });
  const value = select.useState('value') as Fonts;
  const mounted = select.useState('mounted');

  return (
    <>
      <Ariakit.SelectLabel store={select} className="sr-only">
        Choose a font-family
      </Ariakit.SelectLabel>
      <Ariakit.Select store={select} className={styles.btn} style={{ fontFamily: `var(${value})` }}>
        {renderSelectLabel(value)}
        <Ariakit.SelectArrow />
      </Ariakit.Select>

      {mounted && (
        <Ariakit.SelectPopover store={select} portal gutter={4} className={styles.popover}>
          {selectData.map((item, i) => (
            <Ariakit.SelectItem
              key={i}
              className={styles.item}
              value={item.value}
              style={{ fontFamily: `var(${item.value})` }}>
              {item.label}
            </Ariakit.SelectItem>
          ))}
        </Ariakit.SelectPopover>
      )}
    </>
  );
}

export default FontSelectMenu;
