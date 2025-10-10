import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Menu, { Item } from 'devextreme-react/menu';
import CheckBox from 'devextreme-react/check-box';
import notify from 'devextreme/ui/notify';
import type { MenuTypes } from 'devextreme-react/menu';
import type { CheckBoxTypes } from 'devextreme-react/check-box';

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function App(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false);

  const onItemClick = useCallback((e: MenuTypes.ItemClickEvent) => {
    if (e.itemData?.text) {
      notify(`${e.itemData.text} has been clicked!`, 'info', 2000);
    } else if (e.itemData?.icon) {
      notify(
        `${capitalize(e.itemData.icon)} has been clicked!`,
        'info',
        2000,
      );
    }
  }, []);

  const onValueChanged = useCallback((e: CheckBoxTypes.ValueChangedEvent) => {
    setToggle(e.value ?? false);
  }, []);

  return (
    <div>
      <div id="container">
        <Menu adaptivityEnabled={toggle} onItemClick={onItemClick}>
          <Item icon="home"></Item>
          <Item text="About"></Item>
          <Item text="Products">
            <Item text="Product 1"></Item>
            <Item text="Category">
              <Item text="Product 2"></Item>
              <Item beginGroup={true} text="Product 3"></Item>
              <Item text="Product 4"></Item>
            </Item>
            <Item disabled={true} text="Product 5"></Item>
          </Item>
          <Item icon="cart"></Item>
        </Menu>
      </div>
      <CheckBox text="Enable adaptivity" onValueChanged={onValueChanged} />
    </div>
  );
}

export default App;
