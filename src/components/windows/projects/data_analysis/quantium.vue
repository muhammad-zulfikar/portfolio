<template>
  <div>
    <div class="header">
      <img
        class="header-img"
        :src="getImageSrc('quantium.png', false)"
        alt="Quantium Image"
      />
      <!-- <h3 class="header-title">{{ headingTitle }}</h3> -->
      <h4 class="header-subtitle">{{ headingSubtitle }}</h4>

      <div class="badge">
        <button><label>Data Analysis</label></button>
        <button><label>Data Validation</label></button>
        <button><label>Data Wrangling</label></button>
        <button><label>Programming</label></button>
        <button><label>Statistical Testing</label></button>
        <button><label>Commercial Thinking</label></button>
      </div>
    </div>

    <hr />

    <div class="tabs">
      <div
        class="tab"
        :class="{ 'active-tab first': activeTab === 'overview' }"
        @click="setActiveTab('overview')"
      >
        Project Overview
      </div>
      <div
        class="tab"
        :class="{ 'active-tab': activeTab === 'task1' }"
        @click="setActiveTab('task1')"
      >
        Task 1
      </div>
      <div
        class="tab"
        :class="{ 'active-tab': activeTab === 'task2' }"
        @click="setActiveTab('task2')"
      >
        Task 2
      </div>
      <div
        class="tab"
        :class="{ 'active-tab': activeTab === 'task3' }"
        @click="setActiveTab('task3')"
      >
        Task 3
      </div>
    </div>

    <div v-if="activeTab === 'overview'" class="content">
      <div v-for="(overview, index) in overviews" :key="index">
        <div class="title">
          <p class="name">{{ overview.title }}</p>
          <p class="desc">{{ overview.desc }}</p>
          <ul>
            <li
              v-for="(responsibility, index) in overview.responsibilities"
              :key="index"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <div class="iframe">
          <iframe :src="overview.iframeSource"></iframe>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'task1'" class="content">
      <div v-for="(task1, index) in task1s" :key="index">
        <div class="title">
          <p class="name">{{ task1.title }}</p>
          <p class="desc">{{ task1.desc }}</p>
          <ul>
            <li
              v-for="(responsibility, index) in task1.responsibilities"
              :key="index"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <div class="iframe">
          <iframe :src="task1.iframeSource"></iframe>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'task2'" class="content">
      <div v-for="(task2, index) in task2s" :key="index">
        <div class="title">
          <p class="name">{{ task2.title }}</p>
          <p class="desc">{{ task2.desc }}</p>
          <ul>
            <li
              v-for="(responsibility, index) in task2.responsibilities"
              :key="index"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <div class="iframe">
          <iframe :src="task2.iframeSource"></iframe>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'task3'" class="content">
      <div v-for="(task3, index) in task3s" :key="index">
        <div class="title">
          <p class="name">{{ task3.title }}</p>
          <p class="desc">{{ task3.desc }}</p>
          <ul>
            <li
              v-for="(responsibility, index) in task3.responsibilities"
              :key="index"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <div class="iframe">
          <iframe
            :src="task3.iframeSource"
            frameborder="0"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headingTitle: "Quantium",
      headingSubtitle: "Data Science & Artificial Intelligence",
      activeTab: "overview",
      overviews: [
        {
          title: "Retail Analytics Project",
          desc: "In my recent project with Quantium Data Analytics in March 2024, I focused on extracting meaningful insights from transaction datasets to provide valuable commercial recommendations. I specialized in data preparation and customer analytics, using Python for analysis. Part of the project involved finding the best-performing stores to test new layouts, helping make better decisions. I expanded my ability to analyze data to create detailed reports for the Category Manager, which guided important business decisions and improved how we use data for business. I also used my expertise to create clear and impactful charts and graphs in PowerBI, making it easier for everyone to grasp the results.",
          responsibilities: [],
          iframeSource:
            "https://app.powerbi.com/view?r=eyJrIjoiNzE1Y2JiOWEtZmIzZi00MTdmLWI0ZDYtOWY3YmMzMGJkNjBiIiwidCI6Ijc2YjJlMWEwLTc4NmQtNGRmMy1iZThlLTM4MTE3N2M3YjBkNiIsImMiOjZ9",
        },
      ],
      task1s: [
        {
          title: "Data Preparation and Customer Analysis",
          desc: "The goal of this task is to analyze purchasing trends and behaviors to support a strategic recommendation for an upcoming category review. The client is interested in customer segments and their chip purchasing behavior",
          responsibilities: [
            "Performing high-level data checks such as creating and interpreting summaries of the data, finding and removing outliers, and checking and correcting data formats.",
            "Deriving additional features such as pack size and brand name from the data.",
            "Defining metrics of interest to draw insights on who spends on chips and what drives spends for each customer segment.",
          ],
          iframeSource:
            "https://muhammad-zulfikar.github.io/files/documents/projects/quantium/quantium_task1.html",
        },
      ],
      task2s: [
        {
          title: "Experimentation and Uplift Testing",
          desc: "This task involves evaluating the performance of a store trial performed in stores 77, 86, and 88.",
          responsibilities: [
            "Considering the monthly sales experience of each store, broken down by total sales revenue, total number of customers, and average number of transactions per customer.",
            "Creating a measure to compare different control stores to each of the trial stores.",
            "Comparing each trial and control pair during the trial period to test if total sales are significantly different in the trial period and if so, check if the driver of change is more purchasing customers or more purchases per customers etc.",
          ],
          iframeSource:
            "https://muhammad-zulfikar.github.io/files/documents/projects/quantium/quantium_task2.html",
        },
      ],
      task3s: [
        {
          title: "Analytics and Commercial Application",
          desc: 'The goal is to provide actionable insights and recommendations crucial for developing the strategic plan for the next six months. To achieve this, I followed the "Pyramid Principles" framework for report structure to ensure that everything make sense. I use graphs to support key insights and taglines to highlight important findings.',
          responsibilities: "",
          iframeSource:
            "https://muhammad-zulfikar.github.io/files/documents/projects/quantium/Task%203%20-%20Analytics%20and%20Commercial%20Application%20(2).pdf",
        },
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
        imagePath = require("@/assets/images/experiences/professional/" +
          imageName);
      }
      return imagePath;
    },
  },
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
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
  padding: 7px 5px 5px 5px;
  margin-right: 0.3px;
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

@media screen and (max-width: 1024px) {
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
}
</style>
