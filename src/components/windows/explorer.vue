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
                    <img src="@/assets/icons/img/explorer/Back.png" />
                    <span>Back</span>
                </div>
                <div class="menu-bar__btn" @click="goForward">
                    <img src="@/assets/icons/img/explorer/Forward.png" />
                    <span>Forward</span>
                </div>
                <div class="menu-bar__btn" @click="goUp" :class="{ 'menu-bar__btn--disabled': !canGoUp }">
                    <img src="@/assets/icons/img/explorer/Up.png" />
                    <span>Up</span>
                </div>
                <div class="menu-bar__divider"></div>
                <div class="menu-bar__btn">
                    <img src="@/assets/icons/img/explorer/Cut.png" />
                    <span>Cut</span>
                </div>
                <div class="menu-bar__btn">
                    <img src="@/assets/icons/img/explorer/Copy.png" />
                    <span>Copy</span>
                </div>
                <div class="menu-bar__btn">
                    <img src="@/assets/icons/img/explorer/Paste.png" />
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
                <div class="icon" tabindex="0" v-for="item in currentFolder.content" :key="item.id"
                    @dblclick="handleItemClick(item)">
                    <img :src="require(`@/assets/icons/img/desktop/${item.icon}.png`)" />
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
                { name: 'Projects', path: '/projects', icon: 'Favorites' },
                { name: 'Certifications', path: '/certifications', icon: 'Favorites' },
                { name: 'Publications', path: '/publications', icon: 'Favorites' }
            ],
            folderStructure: {
                '/': {
                    content: [
                        {
                            name: 'Projects',
                            path: '/projects',
                            icon: 'Favorites',
                            type: 'folder'
                        },
                        {
                            name: 'Certifications',
                            path: '/certifications',
                            icon: 'Favorites',
                            type: 'folder'
                        },
                        {
                            name: 'Publications',
                            path: '/publications',
                            icon: 'Favorites',
                            type: 'folder'
                        }
                    ]
                },
                '/projects': {
                    content: [
                        {
                            name: 'Data Analysis',
                            path: '/projects/dataAnalysis',
                            icon: 'Folder',
                            type: 'folder'
                        },
                        {
                            name: 'Web Development',
                            path: '/projects/webDevelopment',
                            icon: 'Folder',
                            type: 'folder'
                        },
                        {
                            name: 'Other',
                            path: '/projects/other',
                            icon: 'Folder',
                            type: 'folder'
                        }
                    ]
                },
                '/projects/dataAnalysis': {
                    content: [
                        {
                            name: 'Quantium',
                            path: '/projects/dataAnalysis/quantium',
                            icon: 'Folder',
                            type: 'folder'
                        },
                        {
                            name: 'ID/X Partners',
                            path: '/projects/dataAnalysis/idxPartners',
                            icon: 'Folder',
                            type: 'folder'
                        }
                    ]
                },
                '/projects/dataAnalysis/quantium': {
                    content: [
                        {
                            name: 'README.md',
                            icon: 'TextFile',
                            type: 'file',
                            link: 'https://github.com/muhammad-zulfikar/quantium/blob/main/README.md'
                        },
                        {
                            name: 'Customer Analysis.ipynb',
                            icon: 'Script',
                            type: 'file',
                            link: 'https://nbviewer.org/github/muhammad-zulfikar/quantium/blob/main/Task%201%20-%20Data%20Preparation%20and%20Customer%20Analysis.ipynb'
                        },
                        {
                            name: 'Uplift Testing.ipynb',
                            icon: 'Script',
                            type: 'file',
                            link: 'https://nbviewer.org/github/muhammad-zulfikar/quantium/blob/main/Task%202%20-%20Experimentation%20and%20Uplift%20Testing.ipynb'
                        },
                        {
                            name: 'Commercial Application.pdf',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/projects/quantium/quantium_task3.pdf'
                        },
                    ]
                },
                '/projects/dataAnalysis/idxPartners': {
                    content: [
                        { 
                            name: 'README.md', 
                            icon: 'TextFile', 
                            type: 'file',
                            link: 'https://github.com/muhammad-zulfikar/idxpartners_finalproject/blob/main/README.md'
                        },
                        { 
                            name: 'Final Project.ipynb', 
                            icon: 'Script', 
                            type: 'file',
                            link: 'https://nbviewer.org/github/muhammad-zulfikar/idxpartners_finalproject/blob/main/idx-finalproject.ipynb'
                        },
                        { 
                            name: 'Choropleth.html', 
                            icon: 'InternetExplorer', 
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/projects/idx_partners/choropleth.html'
                        }
                    ]
                },
                '/projects/webDevelopment': {
                    content: [
                        {
                            name: 'Windows 95 Portfolio',
                            path: '/projects/webDevelopment/windows95Portfolio',
                            icon: 'Folder',
                            type: 'folder'
                        },
                        {
                            name: 'muhammad-zulfikar.github.io',
                            path: '/projects/webDevelopment/muhammad-zulfikar.github.io',
                            icon: 'Folder',
                            type: 'folder'
                        },
                        {
                            name: 'VS Code Portfolio',
                            path: '/projects/webDevelopment/vsCodePortfolio',
                            icon: 'Folder',
                            type: 'folder'
                        },
                        {
                            name: 'Landing Page',
                            path: '/projects/webDevelopment/landingPage',
                            icon: 'Folder',
                            type: 'folder'
                        },
                    ]
                },
                '/projects/webDevelopment/windows95Portfolio': {
                    content: [
                        {
                            name: 'Github',
                            icon: 'github',
                            type: 'file',
                            link: 'https://github.com/muhammad-zulfikar/portfolio'
                        },
                        {
                            name: 'Demo',
                            icon: 'InternetExplorer',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.web.app'
                        },
                    ]
                },
                '/projects/webDevelopment/muhammad-zulfikar.github.io': {
                    content: [
                        {
                            name: 'Github',
                            icon: 'github',
                            type: 'file',
                            link: 'https://github.com/muhammad-zulfikar/muhammad-zulfikar.github.io'
                        },
                        {
                            name: 'Demo',
                            icon: 'InternetExplorer',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io'
                        },
                    ]
                },
                '/projects/webDevelopment/vsCodePortfolio': {
                    content: [
                        {
                            name: 'Github',
                            icon: 'github',
                            type: 'file',
                            link: 'https://github.com/muhammad-zulfikar/vscode_portfolio'
                        },
                        {
                            name: 'Demo',
                            icon: 'InternetExplorer',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/vscode_portfolio'
                        },
                    ]
                },
                '/projects/webDevelopment/landingPage': {
                    content: [
                        {
                            name: 'Github',
                            icon: 'github',
                            type: 'file',
                            link: ''
                        },
                        {
                            name: 'Demo',
                            icon: 'InternetExplorer',
                            type: 'file',
                            link: ''
                        },
                    ]
                },
                '/certifications': {
                    content: [
                        {
                            name: 'Google Data Analytics',
                            path: '/certifications/googleDataAnalytics',
                            icon: 'Folder',
                            type: 'folder',
                        },
                        {
                            name: 'Alibaba Cloud Certified Developer',
                            path: '/certifications',
                            icon: 'Certificate',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/certifications/Alibaba%20Cloud%20Certified%20Developer.pdf',
                        },
                        {
                            name: 'Microsoft Azure Data Fundamentals',
                            path: '/certifications',
                            icon: 'Certificate',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/certifications/Microsoft%20Azure%20Data%20Fundamentals.pdf',
                        },
                        {
                            name: 'IBM Data Analysis with Python',
                            path: '/certifications',
                            icon: 'Certificate',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/certifications/IBM_Data%20Analysis%20with%20Python.pdf',
                        },
                        {
                            name: 'Dicoding Data Visualization',
                            path: '/certifications',
                            icon: 'Certificate',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/certifications/Dicoding_Dasar%20Visualisasi%20Data.pdf',
                        },
                        {
                            name: 'RevoU Data Analytics',
                            path: '/certifications',
                            icon: 'Certificate',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/certifications/Introduction%20to%20Data%20Analytics.pdf',
                        }
                    ]
                },
                '/certifications/googleDataAnalytics': {
                    content: [
                        {
                            name: 'Data Everywhere',
                            path: '/certifications',
                            icon: 'Certificate',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/certifications/Google%20Data%20Analytics%201.pdf',
                        },
                        {
                            name: 'Ask Questions',
                            path: '/certifications',
                            icon: 'Certificate',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/certifications/Google%20Data%20Analytics%202.pdf',
                        }
                    ]
                },
                '/publications': {
                    content: [
                        {
                            name: 'Invasi Rusia ke Ukraina 2022...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Invasi%20Rusia%20ke%20Ukraina%202022%20dalam%20Perspektif%20Hukum%20Internasional.pdf'
                        },
                        {
                            name: 'Kebangkitan dan Revolusi Militer China...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Revolution%20in%20Military%20Affairs%20-%20Kebangkitan%20dan%20Revolusi%20China%20dalam%20Militer%20dan%20Ekonomi%20yang%20mengancam%20Amerika%20Serikat.pdf'
                        },
                        {
                            name: 'Digitalisasi sebagai Pendorong...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Digitalisasi%20sebagai%20Pendorong%20Utama%20Soft%20Power%20Negara%20di%20Era%20Globalisasi.pdf'
                        },
                        {
                            name: 'Sistem Nilai Tukar Mengambang...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Sistem%20Nilai%20Tukar%20Mengambang%20(Studi%20Kasus%20Krisis%20Finansial%20Asia).pdf'
                        },
                        {
                            name: 'Upaya Indonesia dalam...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Upaya%20Indonesia%20dalam%20Meningkatkan%20Strategi%20Keamanan%20Siber%20melalui%20Kerjasama%20Indonesia-Inggris.pdf'
                        },
                        {
                            name: 'Diplomasi Lingkungan Indonesia di...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Diplomasi%20Lingkungan%20Indonesia%20di%20Era%20Kepemimpinan%20Susilo%20Bambang%20Yudhoyono.%20Studi%20Kasus%20Kabut%20Asap%20Lintas%20Batas%20di%20Asia%20Tenggara.pdf'
                        },
                        {
                            name: 'Peran ASEAN dalam Mengatasi...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Peran%20ASEAN%20dalam%20Mengatasi%20Masalah%20Human%20Security%20Terorisme%20(Studi%20Kasus%20Bom%20Bali).pdf'
                        },
                        {
                            name: 'Komunikasi Kepemimpinan',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/Komunikasi%20Kepemimpinan.pdf'
                        },
                        {
                            name: 'Pengaruh Penggunaan Sosial Media...',
                            path: '/publications',
                            icon: 'WordPad',
                            type: 'file',
                            link: 'https://muhammad-zulfikar.github.io/files/documents/publications/PENGARUH%20PENGGUNAAN%20SOSIAL%20MEDIA%20INSTAGRAM%20TERHADAP%20PERILAKU%20REMAJA.pdf'
                        },
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
                const parentPath = parts.join('/') || '/';
                this.currentPath = parentPath;
                this.history.push(this.currentPath);
                this.future = [];
            }
        },
        handleItemClick(item) {
            if (item.type === 'file') {
                window.open(item.link, '_blank');
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

.menu-bar__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 12.5px;
    -webkit-user-select: none;
    user-select: none;
    padding-right: 10px;
}

.menu-bar__item {
    margin: 0 2px;
    padding: 3px 4px 0 4px;
    position: relative;
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.menu-bar__item:hover {
    box-shadow: -1px -1px #dfdfdf, 1px 1px gray;
}

.menu-bar__item:active,
.menu-bar__item--active {
    box-shadow: 1px 1px #dfdfdf, -1px -1px gray;
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
    margin: 4px 4px 0 4px;
}

.menu-bar__dropdown {
    flex-grow: 1;
    font-size: 12px;
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
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.menu-bar__btn:hover {
    box-shadow: -1px -1px #dfdfdf, 1px 1px gray;
}

.menu-bar__btn:active,
.menu-bar__item--active {
    box-shadow: 1px 1px #dfdfdf, -1px -1px gray;
}

.menu-bar__btn span {
    padding-top: 4px;
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.menu-bar__btn:not(.menu-bar__btn--disabled):active>* {
    transform: translate(1px, 1px);
}

.menu-bar__btn>img {
    height: 20px;
    width: 20px;
    margin: 2px;
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
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
    box-shadow: inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff;
    background-color: #C0C0C0;
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
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
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
    height: calc(100% - 17vh);
    box-shadow: inset -1px -1px #fff,inset 1px 1px #0a0a0a,inset -2px -2px #dfdfdf,inset 2px 2px grey;
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
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    color: black;
    user-select: none;
    -webkit-user-select: none;
    flex-grow: 1;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
}

option {
    border-radius: none;
}

.icon {
    padding-top: 10px;
    margin-bottom: 20px;
    width: 75px;
    height: 65px;
}

.icon img {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.icon:focus img {
    filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(400%) contrast(0.9);
}

.icon label {
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.icon:focus label {
    background: rgb(0, 0, 118);
    border: rgb(94, 94, 94) dotted 1px;
    color: white;
}

label,
option {
    font-size: 12px;
    border-radius: none;
}

select {
    font-size: 12px;
}

@media screen and (max-width: 768px) {
    .explorer__body {
        height: calc(100% - 12vh);
    }
}
</style>