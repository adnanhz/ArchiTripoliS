import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Timeline from '../views/Timeline.vue'
import Sites from '../views/Sites.vue'
import SitesVideos from '../views/sites/Videos.vue'
import SitesVideosYoutube from '../views/sites/VideosYoutube.vue'
import SitesVideosEdpuzzle from '../views/sites/VideosEdpuzzle.vue'
import SitesEbooks from '../views/sites/Ebooks.vue'
import Chronology from '../views/Chronology.vue'
import Games from '../views/Games.vue'
import Evaluation from '../views/Evaluation.vue'
import Project from '../views/Project.vue'
import Crosswords from '../views/games/Crosswords.vue'
import Puzzles from '../views/games/Puzzles.vue'
import Memory from '../views/games/Memory.vue'
import Hangman from '../views/games/Hangman.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/temps',
    component: Timeline
  },
  {
    path: '/sites-historiques',
    component: Sites
  },
  {
    path: '/sites-historiques/videos',
    component: SitesVideos
  },
  {
    path: '/sites-historiques/videos/youtube',
    component: SitesVideosYoutube
  },
  {
    path: '/sites-historiques/videos/edpuzzle',
    component: SitesVideosEdpuzzle
  },    
  {
    path: '/sites-historiques/ebooks',
    component: SitesEbooks
  },
  {
    path: '/frise-chronologique',
    component: Chronology
  },
  {
    path: '/jeux',
    component: Games
  },
  {
    path: '/evaluation',
    component: Evaluation
  },
  {
    path: '/projet',
    component: Project
  },
  {
    path: '/jeux/mots-croises',
    component: Crosswords
  },
  {
    path: '/jeux/puzzles',
    component: Puzzles
  },
  {
    path: '/jeux/memoires',
    component: Memory
  },
  {
    path: '/jeux/pendu',
    component: Hangman

  }
]


const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
