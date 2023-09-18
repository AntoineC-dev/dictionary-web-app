import * as React from 'react';
import * as Ariakit from '@ariakit/react';

import styles from './FontSelectMenu.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

type Fonts = 'sans' | 'serif' | 'mono';

interface SelectData {
  label: string;
  value: Fonts;
}

const selectData: SelectData[] = [
  { label: 'Sans Serif', value: 'sans' },
  { label: 'Serif', value: 'serif' },
  { label: 'Mono', value: 'mono' },
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
  const [font, setFont] = useLocalStorage<Fonts>('font', 'sans');

  const select = Ariakit.useSelectStore({
    defaultValue: font,
    animated: true,
    placement: 'bottom-end',
    setValue: (value) => setFont(value as Fonts),
  });

  const mounted = select.useState('mounted');

  React.useEffect(() => {
    document.documentElement.setAttribute('font-family', font);
  }, [font]);

  return (
    <>
      <Ariakit.SelectLabel store={select} className="sr-only">
        Choose a font-family
      </Ariakit.SelectLabel>
      <Ariakit.Select store={select} className={styles.btn}>
        {renderSelectLabel(font)}
        <Ariakit.SelectArrow />
      </Ariakit.Select>

      {mounted && (
        <Ariakit.SelectPopover store={select} portal gutter={4} className={styles.popover}>
          {selectData.map((item, i) => (
            <Ariakit.SelectItem
              key={i}
              className={styles.item}
              value={item.value}
              style={{ fontFamily: `var(--ff-${item.value})` }}>
              {item.label}
            </Ariakit.SelectItem>
          ))}
        </Ariakit.SelectPopover>
      )}
    </>
  );
}

export default FontSelectMenu;
