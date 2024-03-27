import Vue from 'vue';
import Router from 'vue-router';

// Windows
import Bio from "../src/components/views/Bio";
import Resume from "../src/components/views/Resume";
import Projects from "../src/components/views/Projects";
import Publications from "../src/components/views/Publications";
import Certifications from "../src/components/views/Certifications";
import Educations from "../src/components/views/Educations";
import Experiences from "../src/components/views/Experiences";
import Skills from "../src/components/views/Skills";
import Mail from "../src/components/views/Mail";

// Projects
import CS50X from "../src/components/windows/projects/cs50x/cs50x";
import IDX from "../src/components/windows/projects/data_analysis/idx";
import Quantium from "../src/components/windows/projects/data_analysis/quantium";
import Win95Portfolio from "../src/components/windows/projects/webdev/win95portfolio";
import ZulfikarFileServer from "../src/components/windows/projects/webdev/zulfikarfileserver";
import VSCodePortfolio from "../src/components/windows/projects/webdev/vscodeportfolio";
import LandingPage from "../src/components/windows/projects/webdev/landingpage";

Vue.use(Router);

const routes = [
  // Views
  { path: '/biography', component: Bio },
  { path: '/resume', component: Resume },
  { path: '/projects', component: Projects },
  { path: '/publications', component: Publications },
  { path: '/certifications', component: Certifications },
  { path: '/educations', component: Educations },
  { path: '/experiences', component: Experiences },
  { path: '/skills', component: Skills },
  { path: '/mail', component: Mail },
  // Projects
  { path: '/cs50x', component: CS50X },
  { path: '/idx', component: IDX },
  { path: '/quantium', component: Quantium },
  { path: '/win95portfolio', component: Win95Portfolio },
  { path: '/zulfikarfileserver', component: ZulfikarFileServer },
  { path: '/vscodeportfolio', component: VSCodePortfolio },
  { path: '/landingpage', component: LandingPage },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;