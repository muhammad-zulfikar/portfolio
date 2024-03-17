<template>
  <div>
    <div class="header">
      <img class="header-img" :src="getImageSrc('idx.png', false)" alt="IDX/Partners Image">
      <!-- <h3 class="header-title">{{ headingTitle }}</h3> -->
      <h4 class="header-subtitle">{{ headingSubtitle }}</h4>

      <div class="badge">
        <button><label>Machine Learning</label></button>
        <button><label>Big Data</label></button>
        <button><label>Statistics and Data Analytics</label></button>
        <button><label>Data Warehouse</label></button>
        <button><label>Programming Language Scripting</label></button>
      </div>
    </div>

    <hr>

    <div class="tabs">
      <div class="tab" :class="{ 'active-tab first': activeTab === 'task1' }" @click="setActiveTab('task1')">
        Task 1
      </div>
      <div class="tab" :class="{ 'active-tab': activeTab === 'task2' }" @click="setActiveTab('task2')">
        Task 2
      </div>
      <div class="tab" :class="{ 'active-tab': activeTab === 'task3' }" @click="setActiveTab('task3')">
        Task 3
      </div>
    </div>

    <div v-if="activeTab === 'task1'">
      <div class="subtabs">
        <div v-for="(subtab, index) in task1s" :key="index" class="subtab" :class="{ 'active-subtab': activeSubTab === subtab.id }" @click="setActiveSubTab(subtab.id)">
          {{ subtab.title }}
        </div>
      </div>

      <div class="content">
        <div v-for="(task, index) in task1s" :key="index">
          <div v-if="activeSubTab === task.id" class="title">
            <p class="name">{{ task.title }}</p>
            <p class="desc">{{ task.desc }}</p>
            <ul>
              <li v-for="(responsibility, index) in task.responsibilities" :key="index">
                {{ responsibility }}
              </li>
            </ul>
          </div>
          <div v-if="activeSubTab === task.id" class="iframe">
            <iframe :src="task.iframeSource"></iframe>
          </div>
        </div>
      </div>
    </div>


    <div v-if="activeTab === 'task2'">
      <div class="subtabs">
        <div v-for="(subtab, index) in task2s" :key="index" class="subtab" :class="{ 'active-subtab': activeSubTab === subtab.id }" @click="setActiveSubTab(subtab.id)">
          {{ subtab.title }}
        </div>
      </div>

      <div class="content">
        <div v-for="(task, index) in task2s" :key="index">
          <div v-if="activeSubTab === task.id" class="title">
            <p class="name">{{ task.title }}</p>
            <p class="desc">{{ task.desc }}</p>
            <ul>
              <li v-for="(responsibility, index) in task.responsibilities" :key="index">
                {{ responsibility }}
              </li>
            </ul>
          </div>
          <div v-if="activeSubTab === task.id" class="iframe">
            <iframe :src="task.iframeSource"></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headingSubtitle: 'Data Solution & Education',
      activeTab: 'task1',
      activeSubTab: 'task1-subtab1',
      task1s: [
      {
          id: 'task1-subtab1',
          title: 'Overview',
          desc: 'The goal is to gain insights into the factors influencing loan performance, visualize trends over time, and make informed suggestions for optimizing business strategies.',
          responsibilities: [
            'Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.',
            'Deriving additional features such as pack size and brand name from the data.',
            'Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.'
          ],
          iframeSource: 'https://muhammad-zulfikar.github.io/documents/projects/idx%20partners/files/finalproject.html'
        },
        {
          id: 'task1-subtab2',
          title: 'Data Preparation',
          desc: 'The goal is to gain insights into the factors influencing loan performance, visualize trends over time, and make informed suggestions for optimizing business strategies.',
          responsibilities: [
            'Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.',
            'Deriving additional features such as pack size and brand name from the data.',
            'Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.'
          ],
          iframeSource: '/files/projects/idx/idx_task1.html'
        },
        {
          id: 'task1-subtab3',
          title: 'Initial Data Finding',
          desc: 'The goal is to gain insights into the factors influencing loan performance, visualize trends over time, and make informed suggestions for optimizing business strategies.',
          responsibilities: [
            'Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.',
            'Deriving additional features such as pack size and brand name from the data.',
            'Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.'
          ],
          iframeSource: '/files/projects/idx/idx_task1.html'
        },
        {
          id: 'task1-subtab4',
          title: 'Feature Engineering',
          desc: 'The goal is to gain insights into the factors influencing loan performance, visualize trends over time, and make informed suggestions for optimizing business strategies.',
          responsibilities: [
            'Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.',
            'Deriving additional features such as pack size and brand name from the data.',
            'Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.'
          ],
          iframeSource: '/files/projects/idx/idx_task1.html'
        },
        {
          id: 'task1-subtab5',
          title: 'Visualizations',
          desc: 'The goal is to gain insights into the factors influencing loan performance, visualize trends over time, and make informed suggestions for optimizing business strategies.',
          responsibilities: [
            'Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.',
            'Deriving additional features such as pack size and brand name from the data.',
            'Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.'
          ],
          iframeSource: '/files/projects/idx/idx_task1.html'
        },
        {
          id: 'task1-subtab6',
          title: 'Recommendation',
          desc: null,
          responsibilities: [
            'Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.',
            'Deriving additional features such as pack size and brand name from the data.',
            'Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.'
          ],
          iframeSource: '/files/projects/idx/idx_task1.html'
        },
        // Add more task1 subtabs as needed
      ],
      task2s: [
        {
          id: 'task2-subtab1',
          title: 'Data Preparation',
          desc: 'The goal is to gain insights into the factors influencing loan performance, visualize trends over time, and make informed suggestions for optimizing business strategies.',
          responsibilities: [
            'Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.',
            'Deriving additional features such as pack size and brand name from the data.',
            'Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.'
          ],
          iframeSource: '/files/projects/idx/idx_task1.html'
        },
        // Add more task2 subtabs as needed
      ],
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;

      // Set the active subtab to the first subtab of the selected main tab
      if (tab === 'task1') {
        this.setActiveSubTab(this.task1s[0].id);
      } else if (tab === 'task2') {
        this.setActiveSubTab(this.task2s[0].id);
      }
      // Add more conditions for additional main tabs as needed
    },
    setActiveSubTab(subtab) {
      this.activeSubTab = subtab;
    },
    getImageSrc(imageName, isHeaderImage = false) {
      let imagePath;
      if (isHeaderImage) {
        imagePath = require("@/assets/icons/win95/" + imageName);
      } else {
        imagePath = require("@/assets/images/experiences/professional/" + imageName);
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

.header-title {
  text-align: center;
  font-weight: bold;
}

.header-subtitle {
  font-size: 13px;
  color: gray;
  text-align: center;
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
  margin: 10px 5px 2px 5px;
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
  font-size: 11px;
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

.subtabs {
  display: flex;
  font-size: 13px;
  justify-content: left;
}

.subtab {
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
  padding: 5px;
  border-top: solid rgb(250, 250, 250) 3px;
  border-left: solid rgba(250, 250, 250) 3px;
  border-right: solid rgb(90, 90, 90) 3px;
}

.active-subtab {
  font-weight: bold;
  border-bottom: 5px solid rgb(195, 195, 195);
  position: relative;
  z-index: 2;
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
}

.name {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}

.desc {
  padding: 0 30px 0 30px;
  font-size: 15px;
  text-align: justify;
}

li {
  list-style: square;
  margin-bottom: 5px;
  text-align: justify;
  font-size: 15px;
}

iframe {
  width: 100%;
  height: 350px;
}

/* Normalize */
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .role {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    line-height: 1.3;
    padding: 15px 0;
  }

  .name {
    margin-top: 15px;
  }

  .desc {
    padding: 0;
  }

  .desc li {
    display: none;
  }

  .tabs,
  .subtabs {
    flex-wrap: wrap;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .tab,
  .subtab {
    flex: 0 0 auto;
    white-space: nowrap;
  }

  .tabs.bottom,
  .subtabs.bottom {
    flex-direction: column;
    margin-top: 10px;
  }

  .tabs.bottom .tab,
  .subtabs.bottom .subtab {
    margin: 5px 0;
  }
}
</style>