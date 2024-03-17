<template>
  <div>
    <div v-if="!hideHeader" class="header">
      <img class="header-img" :src="getImageSrc('educations.png', true)" alt="Educations Image">
      <h3 class="header-title">{{ headingTitle }}</h3>
      <h4 class="header-subtitle">{{ headingSubtitle }}</h4>
    </div>
    <hr>

    <div class="content" v-for="(education, index) in educations" :key="index">
      <div class="title-container">
        <div class="title">
          <img class="img" :src="getImageSrc(education.image)">
          <p class="name">{{ education.name }}</p>
        </div>
      </div>
      <div class="desc">
        <p class="major">{{ education.major }} <span class="year">{{ education.year }}</span></p>
        <p class="gpa">GPA: {{ education.gpa }}</p>
        <p class="paragraph">{{ education.description }}</p>
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
      headingTitle: 'Educations',
      headingSubtitle: 'My Academic Backgrounds',
      educations: [
        {
          image: "upnvj.png",
          name: "Universitas Pembangunan Nasional Veteran Jakarta",
          major: "International Relations",
          year: "2021 - Present",
          gpa: "3.71 / 4.00",
          description: "My studies at International Relations UPNVJ were both challenging and rewarding. I learned a lot about world issues, how to think critically, and how to analyze information. This prepared me well for a future career in international relations. Being part of 'Himpunan Mahasiswa Hubungan Internasional UPNVJ' was also a great experience. I made friends, learned leadership and organizations skills, and participated in activities that helped me understand International Relations even better."
        },
        {
          image: "man2jkt.png",
          name: "Madrasah Aliyah Negeri 2 Jakarta",
          major: "Languages and Communication",
          year: "2018 - 2021",
          gpa: "88.4 / 100",
          description: "My high school experience at MAN 2 Jakarta was focused on foreign languages and communications. This program helped me develop strong skills in both areas, which have been valuable in my life. Being a part of MPK (Majelis Perwakilan Kelas) not only provided me with leadership experience and teamwork skills but also helped me understand the diverse perspectives of my classmates. I consistently performed well academically, even ranking at the top of my class. While excelling in language and communication, my favorite and the one subject where I achieved my highest score was math, which highlight my diverse academic interests."
        }
      ]
    };
  },
  methods: {
    getImageSrc(imageName, isHeaderImage = false) {
      let imagePath;
      if (isHeaderImage) {
        imagePath = require("@/assets/icons/win95/" + imageName);
      } else {
        imagePath = require("@/assets/images/educations/" + imageName);
      }
      return imagePath;
    }
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

/* Content */
.title-container {
  display: flex;
  justify-content: center;
}

.title {
  display: inline-block;
  text-align: center;
  padding: 20px;
}

.img {
  width: 100px;
}

.name {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.desc {
  padding: 0 30px 0 30px;
}

.major {
  font-weight: bold;
  font-size: 14px;
}

.year {
  float: right;
  font-size: 14px;
  font-weight: normal;
}

.gpa {
  text-align: center;
  padding-bottom: 10px;
  font-size: 14px;
}

.paragraph {
  text-align: justify;
  font-size: 15px;
  line-height: 1.3;
}

/* Normalize */
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 1024px) {
  .major {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    line-height: 1.3;
    padding: 15px 0;
  }

  .name {
    margin-top: 10px;
  }

  .desc {
    padding: 0;
  }
}
</style>