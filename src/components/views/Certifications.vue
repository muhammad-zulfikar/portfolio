<template>
  <div>
    <div v-if="!hideHeader" class="header">
      <img
        class="header-img"
        :src="getImageSrc('certifications.png', true)"
        alt="Certifications Image"
      />
      <h3 class="header-title">{{ headerTitle }}</h3>
      <h4 class="header-subtitle">{{ headerSubtitle }}</h4>
    </div>
    <hr />

    <div class="content-grid">
      <div
        class="content"
        v-for="(certification, index) in certifications"
        :key="index"
      >
        <!-- <a class="title" :href="certification.link" target="_blank">
          {{ certification.title }}
        </a> -->
        <a :href="certification.link" target="_blank">
          <img class="img" :src="getImageSrc(certification.image)" />
        </a>
        <div class="tags">
          <!-- <button v-for="(tags, tagIndex) in certification.tags" :key="tagIndex">
            <label>{{ tags }}</label>
          </button> -->
        </div>
        <!-- <ul class="desc">
          <li>Issued on: {{ certification.issuedOn }}</li>
          <li>Provided by: {{ certification.provider }}</li>
        </ul> -->
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
      headerTitle: "Certifications",
      headerSubtitle: "A complete lists of my certifications and achievements",
      certifications: [
        {
          title: "Harvard CS50's Introduction to Computer Science",
          link: "https://certificates.cs50.io/c6025ee5-091e-417d-9c8b-990fda2cf013.pdf?size=A4",
          image: "CS50x.png",
          tags: ["Computer Science", "Python", "SQL", "Web Development"],
          issuedOn: "23 May 2024",
          provider: "Harvard University",
        },
        {
          title:
            "ASEAN Data Science Explorers - SAP Analytics Cloud and SAP Build Apps",
          link: "https://drive.google.com/drive/u/1/folders/1_TCR0rEdvz8IMF-_N2GOIGstJTjI5iQb",
          image: "asean_dsi_sap.jpg",
          tags: ["SAP Analytics Cloud", "SAP Build Apps", "Data Science"],
          issuedOn: "28 April 2024",
          provider: "ASEAN Foundation with Dampak Sosial Indonesia",
        },
        {
          title: "Dicoding Machine Learning",
          link: "https://www.dicoding.com/certificates/4EXGQKRMDZRL",
          image: "dicoding_machine_learning.jpg",
          tags: ["Machine Learning", "Python"],
          issuedOn: "23 May 2024",
          provider: "Dicoding",
        },
        {
          title: "United Nations Sustainable Development Cooperation Framework",
          link: "https://elounge.unssc.org/pluginfile.php/1/tool_certificate/issues/1712421531/5492837497MZ.pdf",
          image: "unssc_unsdg.jpg",
          tags: ["SDGs"],
          issuedOn: "6 April 2024",
          provider: "United Nations System Staff College",
        },
        {
          title:
            "Google Data Analytics Professional Certificate: Ask Questions to Make Data-Driven Decisions",
          link: "https://www.coursera.org/account/accomplishments/certificate/6S3KNB846ZVD",
          image: "google_data_analytics_2.jpg",
          tags: [
            "Decision-Making",
            "Spreadsheet",
            "Data Analysis",
            "Problem Solving",
            "Questioning",
          ],
          issuedOn: "27 March 2024",
          provider: "Google via Coursera",
        },
        {
          title:
            "Google Data Analytics Professional Certificate: Foundations: Data, Data, Everywhere",
          link: "https://www.coursera.org/account/accomplishments/certificate/ZD6SV8G3NYAZ",
          image: "google_data_analytics_1.jpg",
          tags: [
            "Data Analysis",
            "Spreadsheets",
            "SQL",
            "Data Visualization",
            "Data Cleansing",
          ],
          issuedOn: "22 February 2024",
          provider: "Google via Coursera",
        },
        {
          title: "Quantium Data Analytics",
          link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Quantium/NkaC7knWtjSbi6aYv_Quantium_sM6Z5cnDfc8rFEisk_1707704930422_completion_certificate.pdf",
          image: "quantium_data_analytics.jpg",
          tags: ["Data Analysis", "Statistics", "Python", "PowerBI"],
          issuedOn: "12 February 2024",
          provider: "Quantium via Forage",
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
          tags: [
            "Cloud Console",
            "Virtual Machine",
            "Elastic Compute Service",
            "Database",
          ],
          issuedOn: "11 January 2024",
          provider: "Alibaba Cloud",
        },
        {
          title: "Introduction to Data Analytics",
          link: "https://certificates.revou.co/muhammad-zulfikar-certificate-completion-damc22.pdf",
          image: "revou_intro_data_analytics.jpg",
          tags: [
            "Data Analytics",
            "BigQuery",
            "Tableau",
            "Python",
            "Looker Studio",
          ],
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
    },
  },
};
</script>

<style scoped>
/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-inline: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Content */
.title {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

.img {
  width: 300px;
  height: 150px;
  max-width: 200px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5px;
  border: 4px solid white;
  background: rgb(189, 190, 189);
  border-top: solid rgb(250, 250, 250) 4px;
  border-left: solid rgb(250, 250, 250) 4px;
  border-bottom: solid rgb(90, 90, 90) 4px;
  border-right: solid rgb(90, 90, 90) 4px;
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
}

.tags button {
  display: flex;
  align-items: center;
  padding: 5px;
  padding-bottom: 2.5px;
  height: 25px;
  margin: 5px;
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
  padding: 10px 0 20px 0;
}

.desc li {
  text-align: center;
  padding: 2px;
}
</style>
