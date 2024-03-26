<template>
    <div>
        <div class="menu-bar__container">
            <div class="menu-bar__menu">
                <div class="menu-bar__handle"></div>
                <span class="menu-bar__item">File</span>
                <span class="menu-bar__item">Edit</span>
                <span class="menu-bar__item">Search</span>
                <span class="menu-bar__item">Help</span>
            </div>
        </div>
        <textarea class="notepad__textarea">{{ documentContent }}</textarea>
    </div>
</template>

<script>
export default {
    data() {
        return {
            documentContent: ''
        };
    }
}
</script>

<style scoped>
/* --- FILE MENU BARS --- */

.menu-bar__container {
    box-shadow: inset 1px 0px #fff, inset 0px 1px #fff, inset 0 -1px gray, inset -1px 0px grey, -1px 0px gray, 0 -1px gray, 1px 0px #fff, 0px 1px #fff;
}

.menu-bar__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    -webkit-user-select: none;
    user-select: none;
}

.menu-bar__item {
    margin: 0 2px;
    padding: 5px 2px 0 2px;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    font-weight: normal;
}

.menu-bar__item:hover {
    box-shadow: -1px -1px #dfdfdf, 1px 1px gray;
    ;
}

.menu-bar__divider {
    border-left: 1px solid gray;
    border-right: 1px solid white;
    align-self: stretch;
    margin: 0px 1px;
}

.menu-bar__handle {
    align-self: stretch;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    width: 2px;
    min-height: 22px;
    margin: 2px;
}

.menu-bar__spacer {
    flex-grow: 1;
}

textarea {
    width: 100%;
    height: 70vh;
    cursor: text !important;
}
</style>