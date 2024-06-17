<template>
  <div>
    <div v-if="!hideHeader" class="header">
      <img
        class="header-img"
        :src="getImageSrc('experiences.png', true)"
        alt="Experiences Image"
      />
      <h3 class="header-title">{{ headingTitle }}</h3>
      <h4 class="header-subtitle">{{ headingSubtitle }}</h4>
    </div>
    <hr />

    <div class="tabs">
      <div
        class="tab"
        :class="{ 'active-tab first': activeTab === 'professional' }"
        @click="setActiveTab('professional')"
      >
        Professional
      </div>
      <div
        class="tab"
        :class="{ 'active-tab': activeTab === 'organizational' }"
        @click="setActiveTab('organizational')"
      >
        Organizational
      </div>
      <div
        class="tab"
        :class="{ 'active-tab': activeTab === 'volunteer' }"
        @click="setActiveTab('volunteer')"
      >
        Volunteer
      </div>
    </div>

    <div v-if="activeTab === 'professional'" class="content">
      <div v-for="(professional, index) in professionals" :key="index">
        <div class="container">
          <div class="title">
            <img class="img" :src="getImageSrc(professional.image)" />
            <p class="name">{{ professional.company }}</p>
          </div>
        </div>
        <div class="desc">
          <p class="role">
            {{ professional.position }}
            <span class="year">{{ professional.duration }}</span>
          </p>
          <!-- <p class="paragraph">{{ professional.description }}</p> -->
          <ul>
            <li
              v-for="(responsibility, index) in professional.responsibilities"
              :key="index"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>

    <div v-if="activeTab === 'organizational'" class="content">
      <div v-for="(organizational, index) in organizationals" :key="index">
        <div class="container">
          <div class="title">
            <img class="img" :src="getImageSrc(organizational.image)" />
            <p class="name">{{ organizational.company }}</p>
          </div>
        </div>
        <div class="desc">
          <p class="role">
            {{ organizational.position }}
            <span class="year">{{ organizational.duration }}</span>
          </p>
          <!-- <p class="paragraph">{{ organizational.description }}</p> -->
          <ul>
            <li
              v-for="(responsibility, index) in organizational.responsibilities"
              :key="index"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>

    <div v-if="activeTab === 'volunteer'" class="content">
      <div v-for="(volunteer, index) in volunteers" :key="index">
        <!-- <div class="container">
          <div class="title">
            <img class="img" :src="getImageSrc(volunteer.image)">
            <p class="name">{{ volunteer.company }}</p>
          </div>
        </div> -->
        <div class="desc">
          <p class="event">{{ volunteer.event }}</p>
          <p class="role">
            {{ volunteer.position }}
            <span class="year">{{ volunteer.duration }}</span>
          </p>
          <!-- <p class="paragraph">{{ volunteer.description }}</p> -->
          <ul>
            <li
              v-for="(responsibility, index) in volunteer.responsibilities"
              :key="index"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
        <hr />
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
      headingTitle: "Experiences",
      headingSubtitle: "My Professional/Organizational Experiences",
      activeTab: "professional",
      professionals: [
        {
          image: "quantium.png",
          company: "Quantium | Data Science & AI",
          position: "Data Analyst",
          duration: "Jan - Feb 2024",
          description:
            "I recently participated in Quantium's Virtual Internship, and it was incredibly useful to understand what it might be like to participate on a data analyst team at Quantium. I worked on a tasks to conduct analyses on a client's transaction dataset and identify customer purchasing behaviours to generate insights and provide commercial recommendations. I used Python and built my Data Visualisation in PowerBI.",
          responsibilities: [
            "Conducted in-depth analysis of a dataset comprising over 400,000 rows across 300 stores, uncovering key purchasing behaviors and customer segments.",
            "Implemented experimentation and uplift testing methodologies, defining relevant metrics and assessing sales impact using analytics tools such as Python and PowerBI.",
            "Generated comprehensive client reports synthesizing data visualizations, actionable insights, and recommendations to drive informed business decisions.",
          ],
        },
        // {
        //   image: "idx.png",
        //   company: "IDX Partners x Rakamin Academy",
        //   position: "Data Scientist",
        //   duration: "Dec 2023",
        //   description: "I participated in the IDX Partners x Rakamin Academy Virtual Internship as a Data Scientist for one month. During that time, I learned data science methodology and was challenged to master and implement various skills and tools commonly used at IDX Partners, such as Big Data Fundamentals, Statistics & Data Analytics, SQL Querying, R Programming, Python Programming, Machine Learning, and others. As the final task of my internship as a Data Scientist at IDX Partners, I was involved in a project with a lending company. My assignment was to build a model capable of predicting credit risk using a dataset provided by the company, consisting of both accepted and rejected loan data. Additionally, I needed to prepare visual media to present the solution to the client. I ensured that the visual media I created was clear, easily readable, and communicative. The end-to-end solution development was done in python programming language.",
        //   responsibilities: [
        //     "Applying data science methodology to analyze transaction and customer data, identifying trends and inconsistencies.",
        //     "Mastering and implementing various skills and tools, such as Big Data Fundamentals, Statistics & Data Analytics, SQL Querying, R Programming, Python Programming, Machine Learning, and more.",
        //     "Collaborating with different departments in a lending company project to provide technological solutions.",
        //     "Building a predictive credit risk model using a dataset containing both accepted and rejected loan data.",
        //     "Preparing visual media to effectively present the developed solution to the client.",
        //     "Ensuring clarity, readability, and communicativeness in the visual media created.",
        //     "Developing the end-to-end solution using my programming language of choice within the Data Science framework/methodology."
        //   ]
        // },
        {
          image: "smrc.png",
          company: "SMRC (Saiful Mujani Research and Consulting)",
          position: "Surveyor / Data Collector",
          duration: "Dec 2023 - Jan 2024",
          description:
            "Working as a data collector at SMRC, the national political survey organization, provided me with valuable insights into the field research process. Part of my responsibilities included obtaining the necessary permits from local authorities at various administrative levels, such as subdistrict, urban village, Hamlet, and Neighborhood, to ensure smooth survey operations in designated areas. Additionally, I conducted face-to-face interviews with ten individuals every week to gather their perspectives on their political subjectivity. After collecting this information, I carefully converted it into digital data, ensuring accuracy and ease of analysis. Through this experience, I developed my communication skills while gaining firsthand knowledge of the crucial role data collection plays in informing political research and decision-making processes.",
          responsibilities: [
            "Conducted field research and data collection activities, securing permits from 13 local authorities in Sukatani, Depok.",
            "Engaged with over 10 citizens through detailed interviews, each involving more than 50 questions, with the aim of promoting awareness of democratic principles.",
            "Organized and digitized 1000+ interview records, facilitating subsequent analysis and reporting process.",
          ],
        },
        {
          image: "upnvj.png",
          company:
            "Department of International Relations, Universitas Pembangunan Nasional Veteran Jakarta",
          position:
            "Teaching Assistant (for Indonesian Language program, under the supervision of Dr. Nini Ibrahim)",
          duration: "Aug 2021 - Jan 2022",
          description:
            "Working as a data collector at SMRC, the national political survey organization, provided me with valuable insights into the field research process. Part of my responsibilities included obtaining the necessary permits from local authorities at various administrative levels, such as subdistrict, urban village, Hamlet, and Neighborhood, to ensure smooth survey operations in designated areas. Additionally, I conducted face-to-face interviews with ten individuals every week to gather their perspectives on their political subjectivity. After collecting this information, I carefully converted it into digital data, ensuring accuracy and ease of analysis. Through this experience, I developed my communication skills while gaining firsthand knowledge of the crucial role data collection plays in informing political research and decision-making processes.",
          responsibilities: [
            "Prepared technical classroom materials and tracked attendance for 40+ students.",
            "Facilitated communication between students and the lecturer, actively addressing concerns and providing academic guidance to enhance learning outcomes.",
            "Managed group assignments, organized submissions, and streamlined the grading process to maintain academic efficiency.",
          ],
        },
      ],
      organizationals: [
        {
          image: "himahi.png",
          company: "Himpunan Mahasiswa Hubungan Internasional UPNVJ",
          position: "Youth Development Staff",
          duration: "Jan 2022 - Jan 2023",
          description:
            "I was part of the Youth Development Department in the Student Association of International Relations at UPNVJ. My role involved helping organize and plan regular tutoring sessions covering academic and non-academic subjects. The goal was to support fellow International Relations students in enhancing their skills and knowledge. Additionally, I contributed to creating a dynamic content plan for social media, highlighting impressive academic projects and creative talents within our faculty.",
          responsibilities: [
            "Successfully executed over 10 workshops, competitions, and seminars, directly impacting the academic and personal growth of 50+ students within the major.",
            "Took initiative in identifying, recruiting, and coordinating the involvement of 10+ experienced student mentors across various areas such as Model United Nations (MUN), academic writing, and debate programs, enhancing the learning experience and skill development opportunities for peers.",
            "Strategized and implemented a social media content roadmap, promoting collaboration and knowledge-sharing, thus contributing to the overall engagement and visibility of the organization.",
            "Acknowledged with the prestigious 'Best Division Award' in recognition of exceptional performance and significant contributions to the organization.",
          ],
        },
      ],
      volunteers: [
        {
          image: "himahi.png",
          company: "Himpunan Mahasiswa Hubungan Internasional UPNVJ",
          event: "IR Exhibition: Paper, Essay, and Debate Competition",
          position: "Public Relation",
          duration: "Oct 2022",
          description:
            "I formed important partnerships with media outlets and student groups, securing sponsorships and organizing extensive event promotion through digital marketing. I put together a speaker series on academic writing and research, inviting 5 accomplished professionals in academia to lead seminars and workshops for more than 200 undergraduate students from various universities. My role included managing communication between participants, sponsors, speakers, and the media to ensure smooth visibility and information flow.",
          responsibilities: [
            "Secured partnerships with 5+ media outlets and student organizations for event sponsorship and promotion.",
            "Organized a speaker series featuring 5 professionals, attracting an audience of over 100 participants.",
          ],
        },
        {
          image: "himahi.png",
          company: "Himpunan Mahasiswa Hubungan Internasional UPNVJ",
          event: "VETAMUN (Veteran Jakarta Model United Nations)",
          position: "Technical Affairs",
          duration: "Sep 2022",
          description:
            "I kept four digital platforms, like live streaming and video conferencing, running smoothly all the time. These platforms were used at the same time by participants to recreate the setting of United Nations council chambers. I fixed technical problems and gave technical advice to the organizing committee and speakers. I helped them prepare digitized background guides, multimedia aids, and presentations so they could host, moderate, and represent countries effectively.",
          responsibilities: [
            "Ensured seamless technical operations by overseeing the setup, maintenance, and troubleshooting of audiovisual equipment and support systems during a Model United Nations event with over 100 participants.",
            "Diagnosed and resolved technical issues, provided comprehensive guidance to participants, and managed multimedia aids.",
          ],
        },
        {
          image: "himahi.png",
          company: "Himpunan Mahasiswa Hubungan Internasional UPNVJ",
          event: "IRONMAN 4.0 (Student Orientation Program)",
          position: "Logistics",
          duration: "Aug 2022",
          description:
            "I made sure everything ran smoothly for the HI UPNVJ new student introduction event. This included setting up equipment, distributing materials, and preparing the venue. I helped participants by providing logistical support, answering questions, addressing concerns, and making sure their onboarding experience during the event was seamless.",
          responsibilities: [
            "Planned and executed logistics for a student orientation event with 300+ attendees, managing equipment setup, material distribution, and venue preparation. ",
            "Served as a frontline resource, providing prompt logistical support, addressing inquiries, and proactively resolving issues.",
          ],
        },
        {
          image: "himahi.png",
          company: "Himpunan Mahasiswa Hubungan Internasional UPNVJ",
          event: "HI VISIT (Study Comparative Program)",
          position: "Event Organizer",
          duration: "Jun - Jul 2022",
          description:
            "I arranged and carried out three virtual meetups with international relations organizations from different campuses. I handled the logistics and made sure there were interactive activities. I worked with teams from different areas to create interesting online programs, discussion topics, and opportunities for digital networking. Each meetup had more than 50 virtual attendees. I also helped with effective online communication and outreach strategies, connecting with international relations organizations from various campuses to encourage collaboration and sharing of knowledge among members.",
          responsibilities: [
            "Organized and led 3 virtual meetups with International Relations organizations from another campuses.",
            "Developed engaging online programs and facilitated networking for 50+ attendees per meetup, promoting cross-institutional collaboration.",
          ],
        },
      ],
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getImageSrc(imageName, isHeaderImage = false) {
      if (!imageName) {
        return null;
      }
      let imagePath;
      try {
        if (isHeaderImage) {
          imagePath = require("@/assets/icons/win95/" + imageName);
        } else {
          imagePath = require("@/assets/images/experiences/professional/" +
            imageName);
        }
      } catch (error) {
        imagePath = require("@/assets/images/experiences/organizational/" +
          imageName);
      }
      return imagePath;
    },
  },
};
</script>

<style scoped>
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

.container {
  display: flex;
  justify-content: center;
}

.title {
  display: inline-block;
  text-align: center;
  padding: 20px 0 5px 0;
}

.img {
  width: 130px;
}

.name {
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
}

.event {
  text-align: center;
  font-weight: bold;
}

.desc {
  padding: 0 30px 0 30px;
  font-size: 15px;
}

.role {
  font-style: italic;
}

.year {
  float: right;
  font-size: 14px;
  font-style: normal;
}

.paragraph {
  text-align: justify;
  line-height: 1.3;
}

.desc li {
  list-style: square;
  margin-bottom: 5px;
}

@media screen and (max-width: 1024px) {
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

  .container {
    margin-bottom: 0;
  }

  .desc {
    margin-top: 0;
  }

  .role {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    line-height: 1.3;
    padding: 0 0 15px 0;
    margin-top: 0;
  }

  .name {
    margin-top: 15px;
  }

  .desc {
    padding: 10px;
  }
}
</style>
