<template>
    <div id="container">
        <dxMenu
            :adaptivity-enabled="toggle"
            @item-click="onItemClick"
        >
            <dxItem 
                icon="home"
            >
            </dxItem>
            <dxItem 
                text="About" 
            >
            </dxItem>
            <dxItem 
                text="Products"
            >
                <dxItem 
                    text="Product 1" 
                >
                </dxItem>
                <dxItem 
                    text="Category" 
                >
                    <dxItem 
                        text="Product 2" 
                    >
                    </dxItem>
                    <dxItem 
                        :begin-group="true"
                        text="Product 3" 
                    >
                    </dxItem>
                    <dxItem 
                        text="Product 3" 
                    >
                    </dxItem>
                </dxItem>
                <dxItem 
                    :disabled="true"
                    text="Product 5" 
                >
                </dxItem>
            </dxItem>
            <dxItem
                icon="cart"
            >
            </dxItem>
        </dxMenu>
    </div>
    <dxCheckBox
        text="Enable adaptivity"
        @value-changed="onValueChanged"
    >
    </dxCheckBox>
</template>

<script>
    import DxMenu, { DxItem } from 'devextreme-vue/menu';
    import DxCheckBox from 'devextreme-vue/check-box';

    export default {
        components: {
            DxMenu,
            DxItem,
            DxCheckBox
        },
        data() {
            return {
                toggle: false
            };
        },
        methods: {    
            onItemClick(e) {
                if (e.itemData.text) {
                    console.log(e.itemData.text + ' has been clicked!');
                }
                else if (e.itemData.icon) {
                    console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
                }
            },
            onValueChanged(e) {
                this.toggle = e.value;
            }
        }
    }
</script>

<style>
    #container {
        width: 200px;
        height: 140px;
    }
</style>