<script setup lang="ts">
import { ref } from 'vue';
import DxMenu from 'devextreme-vue/menu';
import { DxItem } from 'devextreme-vue/menu';
import DxCheckBox from 'devextreme-vue/check-box';
import notify from 'devextreme/ui/notify';
import type { DxMenuTypes } from 'devextreme-vue/menu';
import type { DxCheckBoxTypes } from 'devextreme-vue/check-box';

const toggle = ref<boolean>(false);

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function onItemClick(e: DxMenuTypes.ItemClickEvent): void {
  if (e.itemData?.text) {
    notify(`${e.itemData.text} has been clicked!`, 'info', 2000);
  } else if (e.itemData?.icon) {
    notify(
      `${capitalize(e.itemData.icon)} has been clicked!`,
      'info',
      2000,
    );
  }
}

function onValueChanged(e: DxCheckBoxTypes.ValueChangedEvent): void {
  toggle.value = e.value;
}
</script>

<template>
  <div>
    <div id="container">
      <DxMenu
        :adaptivity-enabled="toggle"
        @item-click="onItemClick"
      >
        <DxItem icon="home"/>
        <DxItem text="About"/>
        <DxItem text="Products">
          <DxItem text="Product 1"/>
          <DxItem text="Category">
            <DxItem text="Product 2"/>
            <DxItem
              :begin-group="true"
              text="Product 3"
            />
            <DxItem text="Product 4"/>
          </DxItem>
          <DxItem
            :disabled="true"
            text="Product 5"
          />
        </DxItem>
        <DxItem icon="cart"/>
      </DxMenu>
    </div>
    <DxCheckBox
      text="Enable adaptivity"
      @value-changed="onValueChanged"
    />
  </div>
</template>

<style scoped>
#container {
  width: 200px;
  height: 140px;
}
</style>
