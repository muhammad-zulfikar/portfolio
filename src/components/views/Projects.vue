<template>
  <div>
    <div v-if="!hideHeader" class="header">
      <img class="header-img" :src="getImageSrc('projects.png', true)" alt="Projects Image">
      <h3 class="header-title">{{ headerTitle }}</h3>
      <h4 class="header-subtitle" v-html="headerSubtitle"></h4>
    </div>
    <hr>

    <div class="tabs">
      <div class="tab" :class="{ 'active-tab first': activeTab === 'data-analysis' }" @click="setActiveTab('data-analysis')">
        Data Analysis
      </div>
      <div class="tab" :class="{ 'active-tab': activeTab === 'web-dev' }" @click="setActiveTab('web-dev')">
        Web Development
      </div>
      <div class="tab" :class="{ 'active-tab': activeTab === 'others' }" @click="setActiveTab('others')">
        Others
      </div>
    </div>

    <div v-if="activeTab === 'data-analysis'" class="content">
      <div v-for="(data, index) in datas" :key="index">
        <a class="title" @click="openWindow(data.windowId)">
          {{ data.title }}
        </a>
        <iframe :src="data.iframeSrc"></iframe>
        <div class="tags">
          <button v-for="(tags, tagIndex) in data.tags" :key="tagIndex">
            <label>{{ tags }}</label>
          </button>
        </div>
        <p class="desc">{{ data.desc }}</p>
        <div class="link">
          <button @click="openWindow(data.windowId)">
            <img src='@/assets/icons/win95/directory.png'>
            <label>Documentation</label>
          </button>
          <button @click="redirectToGitHub(data.githubLink)">
            <img src='@/assets/icons/social/github.png'>
            <label>GitHub</label>
          </button>
        </div>
        <hr>
      </div>
    </div>

    <div v-if="activeTab === 'web-dev'" class="content" >
      <div v-for="(webdev, index) in webdevs" :key="index">
        <a class="title" @click="openWindow(webdev.windowId)">
          {{ webdev.title }}
        </a>
        <img :src="webdev.iframeSrc" class="img"></img>
        <div class="tags">
          <button v-for="(tags, tagIndex) in webdev.tags" :key="tagIndex">
            <label>{{ tags }}</label>
          </button>
        </div>
        <p class="desc">{{ webdev.desc }}</p>
        <div class="link">
          <button @click="openWindow(webdev.windowId)">
            <img src='@/assets/icons/win95/search.png'>
            <label>Demo</label>
          </button>
          <button @click="redirectToGitHub(webdev.githubLink)">
            <img src='@/assets/icons/social/github.png'>
            <label>GitHub</label>
          </button>
        </div>
        <hr>
      </div>
    </div>

    <div v-if="activeTab === 'others'" class="content">
      <div v-for="(other, index) in others" :key="index">
        <a class="title" @click="redirectToGitHub(other.githubLink)">
          {{ other.title }}
        </a>
        <img :src="other.iframeSrc" class="img"></img>
        <div class="tags">
          <button v-for="(tags, tagIndex) in other.tags" :key="tagIndex">
            <label>{{ tags }}</label>
          </button>
        </div>
        <p class="desc">{{ other.desc }}</p>
        <div class="link">
          <button @click="redirectToGitHub(other.githubLink)">
            <img src='@/assets/icons/social/github.png'>
            <label>GitHub</label>
          </button>
        </div>
        <hr>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    hideHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      headerTitle: 'Projects',
      headerSubtitle: 'A complete lists of my projects. You can also see it in <a href="https://github.com/muhammad-zulfikar">GitHub</a>',
      activeTab: 'data-analysis',
      datas: [
        {
          title: "Retail Analytics - Data Analysis at Quantium",
          windowId: "quantiumWindow",
          iframeSrc:
            "https://drive.google.com/file/d/1JaaSKAHkucj1SOx4q9HzT562fE0sHLJv/preview",
          tags: [
            "Data Analysis",
            "Python",
            "Power BI",
            "PowerPoint",
          ],
          desc:
            "I recently participated in Quantium's virtual internship. I worked on a project to conduct analyses on a client's transaction dataset and identify customer purchasing behaviours to generate insights and provide commercial recommendations. I used Python and built my Data Visualisation in PowerBI.",
          githubLink: "https://github.com/muhammad-zulfikar/quantium",
        },
        {
          title: "Credit Risk Predictive Model - Data Scientist at ID/X Partners",
          windowId: "idxWindow",
          iframeSrc: "https://muhammad-zulfikar.github.io/files/documents/projects/idx_partners/choropleth.html",
          tags: ["Data Analysis", "Python", "Data Visualization"],
          desc:
            "During my internship at ID/X Partners, I had the chance to work on an exciting final project. I was given datasets of approved and rejected loan applications. My goal was to create a model that could predict if a loan application would be approved or rejected. I used my skills in Python to build this predictive model.",
          githubLink:
            "https://github.com/muhammad-zulfikar/idxpartners_finalproject",
        },
        // Add more projects here
      ],
      webdevs: [
        {
          title: "Windows 95 Portfolio (This Website)",
          windowId: "win95portfolioWindow",
          iframeSrc:"/files/projects/webdev/win95portfolio.png",
          tags: ["Vue", "Firebase"],
          desc:
            "A Windows 95 themed personal portfolio website. My current portfolio website",
          githubLink: "https://github.com/muhammad-zulfikar/portfolio",
        },
        {
          title: "muhammad-zulfikar.github.io",
          windowId: "zulfikarfileserverWindow",
          iframeSrc:"/files/projects/webdev/zulfikarfileserver.png",
          tags: ["Javascript"],
          desc:
            "zulfikar's personal desktop, now in windows 98",
          githubLink: "https://github.com/muhammad-zulfikar/muhammad-zulfikar.github.io",
        },
        {
          title: "VS Code Portfolio",
          windowId: "vscodeportfolioWindow",
          iframeSrc:"/files/projects/webdev/vscodeportfolio.png",
          tags: ["React", "Typescript", "GitHub Pages"],
          desc:
            "A VS Code themed personal portfolio website. My old portfolio website",
          githubLink: "https://github.com/muhammad-zulfikar/vscode_portfolio",
        },
        {
          title: "Landing Page",
          windowId: "landingpageWindow",
          iframeSrc: "/files/projects/webdev/landingpage.gif",
          tags: ["HTML", "CSS", "Javascript"],
          desc:
            "A simple landing page with search and sign up/sign in button form",
          githubLink:
            "https://github.com/muhammad-zulfikar/landing_page",
        },
        // Add more projects here
      ],
      others: [
        {
          title: "Charging Control Magisk Module",
          windowId: "",
          iframeSrc:"/files/projects/other/charge_control.gif",
          tags: ["Charge" ,"Shell", "Android", "Terminal"],
          desc:
            "Effective approach to customize and manage the charging current settings for magisk-rooted Android devices.",
          githubLink: "https://github.com/muhammad-zulfikar/charge_control_magisk",
        },
        {
          title: "Adblock Magisk Module",
          windowId: "",
          iframeSrc:"/files/projects/other/adblock.gif",
          tags: ["Adblock", "Shell", "Android", "Terminal"],
          desc:
            "Simple and effective adblock module written in Shell for Magisk that blocks ads system-wide on magisk-rooted Android devices.",
          githubLink: "https://github.com/muhammad-zulfikar/adblock_magisk_module",
        },
        // Add more projects here
      ],
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getImageSrc(imageName, isHeaderImage = false) {
      let imagePath;
      if (isHeaderImage) {
        imagePath = require("@/assets/icons/win95/" + imageName);
      } else {
        imagePath = require("@/assets/images/projects/" + imageName);
      }
      return imagePath;
    },
    openWindow(windowId) {
      const payload = {
        windowState: "open",
        windowID: windowId,
      };
      this.$store.commit("setWindowState", payload);
    },
    redirectToGitHub(githubLink) {
      window.open(githubLink, "_blank");
    },
  }
};
</script>

<style scoped>
/* Global */
.header,
.content {
  padding: 20px 0;
}

/* Header */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;
  padding-bottom: 20px;
}

.header-title {
  text-align: center;
  font-weight: bold;
}

.header-subtitle {
  font-size: 13px;
  color: gray;
  text-align: center;
  padding-top: 10px;
}

/* Tabs */
.tabs {
  display: flex;
  font-size: 13px;
  justify-content: left;
  padding-top: 20px;
}

.tab {
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
  padding: 7px 5px 5px 5px;
  margin-right: .3px;
  border-top: solid rgb(250, 250, 250) 3px;
  border-left: solid rgba(250, 250, 250) 3px;
  border-right: solid rgb(90, 90, 90) 3px;
  border-bottom: solid rgb(250, 250, 250) 1px;
}

.active-tab {
  font-weight: bold;
  border-bottom: 5px solid rgb(195, 195, 195);
  position: relative;
  z-index: 9999;
}

.active-tab.first::before {
  content: "";
  position: absolute;
  left: -2px;
  width: 2px;
  height: calc(100% + 5px);
  background-color: rgba(250, 250, 250);
  z-index: 9998;
}

/* Content */
.content {
  border-top: solid rgb(250, 250, 250) 3px;
  border-left: solid rgb(250, 250, 250) 3px;
  border-bottom: solid rgb(90, 90, 90) 3px;
  border-right: solid rgb(90, 90, 90) 3px;
  padding: 10px;
  margin-top: -3px;
  position: relative;
  z-index: 1;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 16px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
  margin-top: 20px;
}

.img {
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

iframe {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 300px;
  margin-top: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.tags button {
  display: flex;
  align-items: center;
  padding: 5px;
  padding-bottom: 2.5px;
  height: 25px;
  margin: 10px 5px 2px 5px;
  width: auto;
  border: 2px solid white;
  background: rgb(189, 190, 189);
  box-shadow: 1.5px 1.5px black;
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
}

.tags label {
  padding-top: 2px;
  font-size: 12px;
  padding-left: 3px;
}

.desc {
  font-size: 15px;
  line-height: 1.3;
  text-align: center;
  padding: 30px;
}

.link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.link button {
  display: flex;
  align-items: center;
  padding: 5px;
  padding-bottom: 2.5px;
  height: 30px;
  margin: 10px 5px 30px 5px;
  width: auto;
  border: 2px solid white;
  background: rgb(189, 190, 189);
  box-shadow: 1.5px 1.5px black;
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.link img {
  height: 22px;
  padding-bottom: 2px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.link label {
  padding-top: 2px;
  padding-left: 5px;
  font-size: 13px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.link button:hover {
  background-color: darkgray;
}

/* Normalize */
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

/* Media query */
@media screen and (max-width: 1024px) {

  /* Tabs */
  .tabs {
    display: flex;
    font-size: 13px;
    justify-content: left;
    padding-top: 20px;
  }

  .tab {
    cursor: url('@/assets/cursor/pointer.cur'), auto !important;
    padding: 7px 5px 5px 5px;
    margin-right: .3px;
    border-top: solid rgb(250, 250, 250) 2px;
    border-left: solid rgba(250, 250, 250) 2px;
    border-right: solid rgb(90, 90, 90) 2px;
    border-bottom: solid rgb(250, 250, 250) 1px;
  }

  .active-tab {
    font-weight: bold;
    border-bottom: 2px solid rgb(195, 195, 195);
    position: relative;
    z-index: 9999;
  }

  /* Content */
  .content {
    border-top: solid rgb(250, 250, 250) 2px;
    border-left: solid rgb(250, 250, 250) 2px;
    border-bottom: solid rgb(90, 90, 90) 2px;
    border-right: solid rgb(90, 90, 90) 2px;
    padding: 10px;
    margin-top: -2px;
    position: relative;
    z-index: 1;
  }
  
  .desc {
    margin-top: 20px;
    padding: 5px;
  }

  iframe {
    height: 200px;
  }
}
</style>
