<template>
  <div>
    <div class="header">
      <img class="header-img" :src="getImageSrc('bio.png', true)" alt="Biography Image">
      <h2 class="header-title">{{ headerTitle }}</h2>
      <h4 class="header-subtitle">{{ headerSubtitle }}</h4>
      <h4 class="subheader">{{ subheader }}</h4>

      <div class="badge">
        <button><label>SQL</label></button>
        <button><label>Spreadsheets</label></button>
        <button><label>Statistics</label></button>
        <button><label>Data Visualization</label></button>
        <button><label>Database Management</label></button>
        <button><label>Machine Learning</label></button>
        <button><label>Web Development</label></button>
      </div>
    </div>
    <hr>

    <div class="button" id="buttonSection">
      <button @click="selectContent('about')" :class="{ active: selectedButton === 'about' }">
        <img src='@/assets/icons/win95/bio.png'>
        <label>About</label>
      </button>
      <button @click="selectContent('projects')" :class="{ active: selectedButton === 'projects' }"
        id="projectsSection">
        <img src='@/assets/icons/win95/projects.png'>
        <label>Projects</label>
      </button>
      <button @click="selectContent('skills')" :class="{ active: selectedButton === 'skills' }" id="skillsSection">
        <img src='@/assets/icons/win95/skills.png'>
        <label>Skills</label>
      </button>
      <button @click="selectContent('experiences')" :class="{ active: selectedButton === 'experiences' }"
        id="experiencesSection">
        <img src='@/assets/icons/win95/experiences.png'>
        <label>Experiences</label>
      </button>
      <button @click="selectContent('educations')" :class="{ active: selectedButton === 'educations' }"
        id="educationsSection">
        <img src='@/assets/icons/win95/educations.png'>
        <label>Educations</label>
      </button>
      <button @click="selectContent('certifications')" :class="{ active: selectedButton === 'certifications' }"
        id="certificationsSection">
        <img src='@/assets/icons/win95/certifications.png'>
        <label>Certifications</label>
      </button>
      <button @click="selectContent('publications')" :class="{ active: selectedButton === 'publications' }"
        id="publicationsSection">
        <img src='@/assets/icons/win95/resume.png'>
        <label>Publications</label>
      </button>
      <button @click="openWindow('resumeWindow')">
        <img src='@/assets/icons/win95/text.png'>
        <label>Resume</label>
      </button>
      <button @click="selectContent('mail')" :class="{ active: selectedButton === 'mail' }" id="mailSection">
        <img src='@/assets/icons/win95/mail.png'>
        <label>Mail</label>
      </button>
      <button @click="redirectToGitHub">
        <img src='@/assets/icons/social/github.png'>
        <label>GitHub</label>
      </button>
    </div>

    <div class="content" id="aboutSection" v-if="selectedContent === 'about'">
      <hr>
      <p class="desc">
        Hello there! I'm Zulfikar from Jakarta, a 20-year-old student with a passion
        for both Data Analytics and International Relations. Currently, I'm in my 4th semester
        at Universitas Pembangunan Nasional Veteran Jakarta.
      </p>
      <p class="desc">
        Outside of my classes, I like to focus on practical ways to improve what I'm learning.
        I believe there's more to learning than just textbooks. I particularly enjoy working on
        Data Analysis and WebDev projects. My objective is to integrate data analytics methodologies with the
        field of international relations to analyze how countries interact politically, economically,
        and diplomatically, that can provide evidence-based insights to help make better decisions in global affairs.
      </p>
    </div>

    <div class="content" v-else-if="selectedContent === 'projects'">
      <Projects :hideHeader="true"></Projects>
    </div>

    <div class="content" v-else-if="selectedContent === 'skills'">
      <Skills :hideHeader="true"></Skills>
    </div>

    <div class="content" v-else-if="selectedContent === 'experiences'">
      <Experiences :hideHeader="true"></Experiences>
    </div>

    <div class="content" v-else-if="selectedContent === 'educations'">
      <Educations :hideHeader="true"></Educations>
    </div>

    <div class="content" v-else-if="selectedContent === 'certifications'">
      <Certifications :hideHeader="true"></Certifications>
    </div>

    <div class="content" v-else-if="selectedContent === 'publications'">
      <Publications :hideHeader="true"></Publications>
    </div>

    <div class="content" v-else-if="selectedContent === 'mail'">
      <Mail></Mail>
    </div>

  </div>
</template>

<script>
import Certifications from './Certifications.vue';
import Educations from './Educations.vue';
import Experiences from './Experiences.vue';
import Projects from './Projects.vue';
import Skills from './Skills.vue';
import Publications from './Publications.vue';
import Resume from './Resume.vue';
import Mail from './Mail.vue'

export default {
  components: {
    Certifications,
    Educations,
    Experiences,
    Projects,
    Skills,
    Publications,
    Resume,
    Mail,
    // Add other components as needed
  },
  data() {
    return {
      headerTitle: 'Muhammad Zulfikar',
      headerSubtitle: 'Data Analyst | International Relations',
      subheader: 'Jakarta, Indonesia',
      selectedContent: 'about',
      selectedButton: 'about',
    };
  },
  methods: {
    openWindow(windowId) {
      const payload = {
        windowState: "open",
        windowID: windowId,
      };
      this.$store.commit("setWindowState", payload);
    },
    getImageSrc(imageName, isHeaderImage = false) {
      let imagePath;
      if (isHeaderImage) {
        imagePath = require("@/assets/icons/win95/" + imageName);
      } else {
        imagePath = require("@/assets/images/" + imageName);
      }
      return imagePath;
    },
    redirectToGitHub() {
      window.open("https://github.com/muhammad-zulfikar", "_blank");
    },
    selectContent(content) {
      this.selectedContent = content;
      this.selectedButton = content;

      if (window.innerWidth > 768) {
        const element = document.getElementById('aboutSection');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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

.header-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.header-subtitle,
.subheader {
  font-size: 13px;
  color: gray;
  text-align: center;
  padding: 5px;
}

.header-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;
  padding-bottom: 20px;
}

.badge {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
}

.badge button {
  display: flex;
  align-items: center;
  margin: 5px 5px 5px 5px;
  padding: 5px;
  padding-bottom: 2.5px;
  background: rgb(189, 190, 189);
  box-shadow: 1px 1.5px black;
  border-top: solid rgb(250, 250, 250) 1px;
  border-left: solid rgb(250, 250, 250) 1px;
  border-bottom: solid rgb(90, 90, 90) 1px;
  border-right: solid rgb(90, 90, 90) 1px;
}

.badge label {
  font-size: 11.5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Content */
.title {
  text-align: center;
  margin-bottom: 10px;
}

.desc {
  padding: 10px 20px 0 20px;
  text-align: justify;
  font-size: 15px;
  line-height: 1.3;
}

.button {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}

.button button {
  display: flex;
  align-items: center;
  margin: 5px 5px;
  padding: 5px;
  border: 2px solid white;
  background: rgb(189, 190, 189);
  box-shadow: 1.5px 1.5px black;
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.button button img {
  height: 22px;
  padding-bottom: 2px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.button label {
  padding-top: 2px;
  padding-left: 5px;
  font-size: 13px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.button button:hover {
  background-color: darkgray;
}

.button button.active {
  background-color: darkgray;
}

/* Normalize */
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

/* Media Query */
@media (max-width: 600px) {
  .button {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 20px;
  }

  .button button,
  .badge button {
    margin: 2px 2px;
  }
}
</style>
