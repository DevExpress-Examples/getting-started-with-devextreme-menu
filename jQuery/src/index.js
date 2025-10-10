$(() => {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const menu = $('#menu')
    .dxMenu({
      items: [
        {
          icon: 'home',
        },
        {
          text: 'About',
        },
        {
          text: 'Products',
          items: [
            {
              text: 'Product 1',
            },
            {
              text: 'Category',
              items: [
                {
                  text: 'Product 2',
                },
                {
                  beginGroup: true,
                  text: 'Product 3',
                },
                {
                  text: 'Product 4',
                },
              ],
            },
            {
              disabled: true,
              text: 'Product 5',
            },
          ],
        },
        {
          icon: 'cart',
        },
      ],
      onItemClick(e) {
        if (e.itemData.text) {
          DevExpress.ui.notify(
            `${e.itemData.text} has been clicked!`,
            'info',
            2000,
          );
        } else if (e.itemData.icon) {
          DevExpress.ui.notify(
            `${capitalize(e.itemData.icon)} has been clicked!`,
            'info',
            2000,
          );
        }
      },
    })
    .dxMenu('instance');

  $('#check-box').dxCheckBox({
    text: 'Enable adaptivity',
    onValueChanged(e) {
      menu.option('adaptivityEnabled', e.value);
    },
  });
});
