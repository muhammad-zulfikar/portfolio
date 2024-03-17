<template>
  <div>
    <div v-if="!hideHeader" class="header">
      <img class="header-img" :src="getImageSrc('skills.png', true)" alt="Skills Image">
      <h3 class="header-title">{{ headerTitle }}</h3>
      <h4 class="header-subtitle">{{ headerSubtitle }}</h4>
    </div>
    <hr>

    <div class="tabs">
      <div class="tab" :class="{ 'active-tab first': activeTab === 'technical' }" @click="setActiveTab('technical')">Technical Skills</div>
      <div class="tab" :class="{ 'active-tab': activeTab === 'soft' }" @click="setActiveTab('soft')">Soft Skills</div>
    </div>

    <div v-if="activeTab === 'technical'" class="content">
      <div class="grid-container">
        <div v-for="(skillCategory, index) in technicalSkills" :key="index">
          <p class="grid-item">{{ skillCategory.title }}</p>
          <div class="button-container">
            <button v-for="(skill, index) in skillCategory.skills" :key="index">
              <img :src="getIcon(skill.icon)">
              <label>{{ skill.name }}</label>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'soft'" class="content">
        <div class="button-container">
          <button v-for="(skill, index) in softSkills" :key="index">
            <label>{{ skill }}</label>
          </button>
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
      headerTitle: 'Skills',
      headerSubtitle: 'My Skills and Proficiency',
      activeTab: 'technical',
      technicalSkills: [
      {
          title: "Data Analysis",
          skills: [
            { name: "Python", icon: "python.png" },
            { name: "Excel", icon: "excel.png" },
            { name: "R", icon: "r.svg" },
            { name: "Jupyter", icon: "jupyter.png" },
            { name: "SQL Server", icon: "mssqlserver.png" },
            { name: "BigQuery", icon: "bigquery.png" }
          ]
        },
        {
          title: "Data Visualization",
          skills: [
            { name: "PoweBI", icon: "powerbi.png" },
            { name: "Tableau", icon: "tableau.png" },
            { name: "Looker Studio", icon: "lookerstudio.png" },
            { name: "Excel", icon: "excel.png" },
            { name: "PowerPoint", icon: "powerpoint.png" }
          ]
        },
        {
          title: "Web Development",
          skills: [
            { name: "HTML", icon: "html.png" },
            { name: "CSS", icon: "css.png" },
            { name: "JavaScript", icon: "javascript.png" },
            { name: "React", icon: "react.png" },
            { name: "Vue", icon: "vue.png" },
            { name: "Firebase", icon: "firebase.png" }
          ]
        },
        {
          title: "Office",
          skills: [
            { name: "Office 365", icon: "office365.png" },
            { name: "Google Workspace", icon: "workspace.png" },
            { name: "Notion", icon: "notion.png" },
            { name: "Canva", icon: "canva.png" }
          ]
        }
      ],
      softSkills: [
        "Analytical Thinking",
        "Critical Thinking",
        "Problem Solving",
        "Troubleshooting",
        "Communication",
        "Collaboration",
        "Creativity",
        "Time Management"
      ]
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getIcon(iconName) {
      return require(`@/assets/icons/software/${iconName}`);
    },
    getImageSrc(imageName, isHeaderImage = false) {
      let imagePath;
      if (isHeaderImage) {
        imagePath = require("@/assets/icons/win95/" + imageName);
      } else {
        imagePath = require("@/assets/images/skills/" + imageName);
      }
      return imagePath;
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

.header-title{
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
  text-align: center;
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: auto;
  margin: 0 auto;
}

.grid-item {
  padding: 8px;
  margin: auto;
  width: 75%;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
}

.button-container button {
  display: flex;
  align-items: center;
  padding: 5px;
  padding-bottom: 2.5px;
  height: 30px;
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

.button-container button img {
  height: 22px;
  align-items: center;
  padding-bottom: 2px;
}

.button-container button label {
  padding-top: 2px;
  font-size: 13px;
  padding-left: 5px;
}

/* Normalize */
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

/* Media query */
@media (max-width: 1024px) {
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
  
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
