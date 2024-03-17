<template>
  <div>
    <div v-if="!hideHeader" class="header">
      <img class="header-img" :src="getImageSrc('certifications.png', true)" alt="Certifications Image">
      <h3 class="header-title">{{ headerTitle }}</h3>
      <h4 class="header-subtitle">{{ headerSubtitle }}</h4>
    </div>
    <hr>

    <div class="content" v-for="(certification, index) in certifications" :key="index">
      <a class="title" :href="certification.link" target="_blank">
        {{ certification.title }}
      </a>
      <a :href="certification.link" target="_blank">
        <img class="img" :src="getImageSrc(certification.image)">
      </a>
      <div class="tags">
          <button v-for="(tags, tagIndex) in certification.tags" :key="tagIndex">
            <label>{{ tags }}</label>
          </button>
      </div>

      <ul class="desc">
        <li>Issued on: {{ certification.issuedOn }}</li>
        <li>Provided by: {{ certification.provider }}</li>
      </ul>
      <hr>
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
      headerTitle: 'Certifications',
      headerSubtitle: 'A complete lists of my certifications and achievements',
      certifications: [
        {
          title: "Google Data Analytics Professional Certificate: Foundations: Data, Data, Everywhere",          
          link: "https://www.coursera.org/account/accomplishments/certificate/ZD6SV8G3NYAZ",
          image: "google_data_analytics_1.jpg",
          tags: ["Data Analysis", "Spreadsheets", "SQL", "Data Visualization", "Data Cleansing"],
          issuedOn: "22 February 2024",
          provider: "Google via Coursera",
        },
        {
          title: "Microsoft Azure Data Fundamentals",          
          link: "https://drive.google.com/file/d/1HXMmTrM1kXqXYI9NAx0GpFKbk16oIJLD/view?usp=drive_link",
          image: "microsoft_azure_data_fundamentals.jpg",
          tags: ["Microsoft Azure", "Data"],
          issuedOn: "9 February 2024",
          provider: "Microsoft, Kartu Prakerja, Mereka, Talenta AI",
        },
        {
          title: "Data Analysis with Python",          
          link: "https://courses.cognitiveclass.ai/certificates/d152e0cd3be24491a07eda6a40031639",
          image: "ibm_data_analysis_with_python.jpg",
          tags: ["Data Analysis", "Python", "Jupyter Notebook"],
          issuedOn: "27 January 2024",
          provider: "IBM via cognitiveclass.ai",
        },
        {
          title: "Alibaba Cloud Certified Developer",          
          link: "https://drive.google.com/file/d/1JL1Q7AFkEzySvXr33g_Bc_CCF70a2xNf/view?usp=drive_link",
          image: "alibaba_certified_developer.jpg",
          tags: ["Cloud Console", "Virtual Machine", "Elastic Compute Service", "Database"],
          issuedOn: "11 January 2024",
          provider: "Alibaba Cloud",
        },        
        {
          title: "Introduction to Data Analytics",          
          link: "https://certificates.revou.co/muhammad-zulfikar-certificate-completion-damc22.pdf",
          image: "revou_intro_data_analytics.jpg",
          tags: ["Data Analytics", "BigQuery", "Tableau", "Python", "Looker Studio"],
          issuedOn: "22 July 2022",
          provider: "RevoU",
        },
        // Add more certifications here
      ],
    };
  },
  methods: {
  getImageSrc(imageName, isHeaderImage = false) {
    let imagePath;
    if (isHeaderImage) {
      imagePath = require("@/assets/icons/win95/" + imageName);
    } else {
      imagePath = require("@/assets/images/certifications/" + imageName);
    }
    return imagePath;
    }
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

/* Content */
.title {
  text-align: center;
  font-weight: bold;
}

.img {
  width: 80%;
  height: 80%;
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-top: 20px;
  padding: 5px 5px;
  border: 4px solid white;
  background: rgb(189, 190, 189);
  border-top: solid rgb(250, 250, 250) 4px;
  border-left: solid rgb(250, 250, 250) 4px;
  border-bottom: solid rgb(90, 90, 90) 4px;
  border-right: solid rgb(90, 90, 90) 4px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
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

.content a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 16px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.desc {
  font-size: 15px;
  line-height: 1.3;
  padding: 10px 0 20px 0;
  text-align: center;
}

.desc li {
  text-align: center;
  padding: 2px;
}

/* Normalize */
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

</style>
