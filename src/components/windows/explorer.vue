<template>
    <div style="height: 100%;">
        <!-- Menu Bar -->
        <div class="menu-bar__container">
            <!-- Menu Bar Items -->
            <!-- Replace these with your actual menu items as needed -->
            <div class="menu-bar__menu">
                <div class="menu-bar__handle"></div>
                <span class="menu-bar__item">File</span>
                <span class="menu-bar__item">Edit</span>
                <span class="menu-bar__item">View</span>
                <span class="menu-bar__item">Go</span>
                <span class="menu-bar__item">Favorites</span>
                <span class="menu-bar__item">Help</span>
            </div>

            <!-- Horizontal Line -->
            <div class="menu-bar__hr"></div>

            <!-- Navigation Controls -->
            <div class="menu-bar__menu">
                <div class="menu-bar__handle"></div>
                <div class="menu-bar__btn" @click="goBack">
                    <img src="./img/explorer/Back.png" />
                    <span>Back</span>
                </div>
                <div class="menu-bar__btn" @click="goForward">
                    <img src="./img/explorer/Forward.png" />
                    <span>Forward</span>
                </div>
                <div class="menu-bar__btn" @click="goUp" :class="{ 'menu-bar__btn--disabled': !canGoUp }">
                    <img src="./img/explorer/Up.png" />
                    <span>Up</span>
                </div>
                <div class="menu-bar__divider"></div>
                <div class="menu-bar__btn">
                    <img src="./img/explorer/Cut.png" />
                    <span>Cut</span>
                </div>
                <div class="menu-bar__btn">
                    <img src="./img/explorer/Copy.png" />
                    <span>Copy</span>
                </div>
                <div class="menu-bar__btn">
                    <img src="./img/explorer/Paste.png" />
                    <span>Paste</span>
                </div>
                <div class="menu-bar__divider"></div>
            </div>

            <!-- Horizontal Line -->
            <div class="menu-bar__hr"></div>

            <!-- Address Bar -->
            <div class="menu-bar__menu">
                <div class="menu-bar__handle"></div>
                <span class="menu-bar__label">Address</span>
                <select class="menu-bar__dropdown" v-model="currentPath" @change="changePath">
                    <option v-for="folder in folders" :key="folder.id" :value="folder.path">{{ folder.name }}</option>
                </select>
            </div>
        </div>

        <!-- Explorer Body -->
        <div class="explorer__body">
            <!-- Sidebar (optional) -->
            <div class="explorer__bodysidebar">
                <!-- Sidebar content here -->
            </div>

            <!-- Main Explorer Area -->
            <div class="explorer__desktop">
                <div class="icon" v-for="item in currentFolder.content" :key="item.id" @click="handleItemClick(item)">
                    <img :src="require(`@/assets/img/desktop/${item.icon}.png`)" />
                    <label>{{ item.name }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPath: '/',
            folders: [
                { name: 'Documents', path: '/documents', icon: 'Favorites' },
                { name: 'Music', path: '/music', icon: 'Favorites' }
            ],
            folderStructure: {
                '/': {
                    content: [
                        { name: 'Documents', path: '/documents', icon: 'Favorites', type: 'folder' },
                        { name: 'Music', path: '/music', icon: 'Favorites', type: 'folder' }
                    ]
                },
                '/documents': {
                    content: [
                        { name: 'Projects', path: '/documents/projects', icon: 'Favorites', type: 'folder' },
                        { name: 'Publications', path: '/documents/publications', icon: 'Favorites', type: 'folder' }
                    ]
                },
                '/documents/projects': {
                    content: [
                        { name: 'quantium', path: '/documents/projects/quantium', icon: 'Favorites', type: 'folder' },
                        { name: 'ID/X Partners', path: '/documents/projects/IDX Partners', icon: 'Favorites', type: 'folder' }
                    ]
                },
                '/documents/projects/quantium': {
                    content: [
                        { name: 'README.md', path: '/documents/quantium', icon: 'Favorites', type: 'file' },
                        { name: 'ID/X Partners', path: '/documents/IDX Partners', icon: 'Favorites', type: 'folder' }
                    ]
                },
                '/music': {
                    content: [
                        { name: 'My Chemical Romance', path: '/music/my chemical romance', icon: 'Favorites', type: 'folder' },
                    ]
                },
                '/music/my chemical romance': {
                    content: [
                        { name: 'The Black Parade', path: '/music/the black parade', icon: 'Favorites', type: 'folder' },
                        { name: 'Three Cheers for Sweet Revenge', path: '/music/three cheers for sweet revenge', icon: 'Favorites', type: 'folder' },
                    ]
                },
            },
            history: [],
            future: []
        };
    },
    computed: {
        currentFolder() {
            return this.folderStructure[this.currentPath] || { content: [] };
        },
        canGoUp() {
            return this.currentPath !== '/';
        }
    },
    methods: {
        changePath(event) {
            this.currentPath = event.target.value;
            this.history.push(this.currentPath);
            this.future = [];
        },
        goBack() {
            if (this.history.length > 1) {
                const current = this.history.pop();
                this.future.push(current);
                this.currentPath = this.history[this.history.length - 1];
            }
        },
        goForward() {
            if (this.future.length > 0) {
                const next = this.future.pop();
                this.history.push(next);
                this.currentPath = next;
            }
        },
        goUp() {
            if (this.canGoUp) {
                const parts = this.currentPath.split('/');
                parts.pop();
                const parentPath = parts.join('/') || '/'; // Ensure at least '/' as the parent path
                this.currentPath = parentPath;
                this.history.push(this.currentPath);
                this.future = [];
            }
        },
        handleItemClick(item) {
            if (item.type === 'file') {
                // Handle file open action
                console.log('Opening file:', item.name);
            } else if (item.type === 'folder') {
                this.currentPath = item.path;
                this.history.push(this.currentPath);
                this.future = [];
            }
        }
    }
};
</script>




<style scoped>
/* --- FILE MENU BARS --- */

.menu-bar__container {
    box-shadow: var(--control-shadow);
}

.menu-bar__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 12.5px;
    -webkit-user-select: none;
    user-select: none;
}

.menu-bar__item {
    margin: 0 2px;
    padding: 3px 2px 0 2px;
    cursor: pointer;
    position: relative;
}

.menu-bar__item:hover {
    box-shadow: var(--icon-shadow);
}

.menu-bar__item:active,
.menu-bar__item--active {
    box-shadow: var(--icon-shadow__active);
}

.menu-bar__hr {
    border-top: 1px solid gray;
    border-bottom: 1px solid white;
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

.menu-bar__label {
    margin: 2px 4px;
}

.menu-bar__dropdown {
    flex-grow: 1;
    margin: 2px 4px;
    font-size: 14px;
}

.menu-bar__btn--disabled {
    color: gray;
    text-shadow: 1px 1px white;
}

.menu-bar__btn {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4px 2px;
    padding: 0px 4px;
    min-width: 36px;
    cursor: pointer;
}

.menu-bar__btn span {
    padding-top: 4px;
}

.menu-bar__btn:not(.menu-bar__btn--disabled):hover {
    box-shadow: var(--icon-shadow);
}

.menu-bar__btn:not(.menu-bar__btn--disabled):active {
    box-shadow: var(--icon-shadow__active);
}

.menu-bar__btn:not(.menu-bar__btn--disabled):active>* {
    transform: translate(1px, 1px);
}

.menu-bar__btn>img {
    height: 20px;
    width: 20px;
    margin: 2px;
}

.menu-bar__input {
    flex-grow: 1;
}

.menu-bar__submenu.menu-bar__submenu--active {
    opacity: 1;
    pointer-events: initial;
}

.menu-bar__submenu {
    cursor: initial;

    padding: 2px 1px;
    margin: 0;
    list-style: none;

    z-index: 2011;

    position: absolute;
    top: 1rem;
    left: 0px;

    box-shadow: var(--inset);
    background-color: var(--gray);
    min-width: 100px;

    opacity: 0;
    pointer-events: none;
}

.menu-bar__item--active {
    pointer-events: none;
}

.menu-bar__subitem {
    padding: 1px 2px;
    margin: 0 2px;
    cursor: pointer;
}

.menu-bar__subitem:hover {
    background-color: navy;
    color: white;
}

.menu-bar__subitem--disabled {
    cursor: initial;
    pointer-events: none;
    color: gray;
    text-shadow: 1px 1px white;
}

.menu-bar__submenu-bg {
    position: fixed;
    z-index: 2010;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;

    pointer-events: none;
    opacity: 0;
}

.menu-bar__submenu-bg--active {
    pointer-events: initial;
    opacity: 1;
}

.explorer__body {
    background-color: white;
    height: calc(100% - 12vh);
    box-shadow: var(--inset__inverse);
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}

.explorer__desktop {
    display: grid;
    grid-template-rows: repeat(auto-fill, 78px);
    grid-template-columns: repeat(auto-fill, 64px);
    grid-column-gap: 15px;
    grid-row-gap: 10px;
    color: black;
    user-select: none;
    -webkit-user-select: none;
    flex-grow: 1;
    margin-top: 5px;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
}

.icon {
    margin-left: 25px
}

label,
option {
    font-size: 14px;
    margin-top: 5px;
}

option {
    border-radius: none;
}
</style>