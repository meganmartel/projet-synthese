import { createRouter, createWebHistory } from 'vue-router'
import Identification from '../views/Identification.vue'
import Layout from '../components/layout.vue'
import TableauDeBord from '../views/TableauDeBord.vue'
import DemandesDeStages from '../views/DemandesDeStages.vue'
import OffresDeStages from '../views/OffresDeStages.vue'
import Candidats from '../views/Candidats.vue'
import Entreprises from '../views/Entreprises.vue'
import formulaireCandidat from '../views/formulaireCandidat.vue'
import FormulaireDO from '../views/FormulaireDO.vue'
import Erreur from '../views/Erreur.vue'
import FicheDetailCandidatEntreprise from '@/views/FicheDetailCandidatEntreprise.vue'
import PageDetailDemandeEtOffre from '@/views/PageDetailDemandeEtOffre.vue'
import FormulaireEntreprise from '@/views/formulaireEntreprise.vue'
import FormulaireCE from '@/views/formulaireCE.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Identification
    },
    {
      path: '/app',
      component: Layout,
      children: [
        {
          path: 'tableaudebord',
          name: 'tableaudebord',
          component: TableauDeBord
        },
        {
          path: 'demandesdestages',
          name: 'demandesdestages',
          component: DemandesDeStages
        },
        {
          path: 'offresdestages',
          name: 'offresdestages',
          component: OffresDeStages
        },
        {
          path: 'candidats',
          name: 'candidats',
          component: Candidats,
        },
        {
          path: 'entreprises',
          name: 'entreprises',
          component: Entreprises,          
        },
        {
          path: 'formulaireCandidat/:id?',
          name: 'formulaireCandidat',
          component: formulaireCandidat,
          props: true
        },
        {
          path: 'formulaireEntreprise',
          name: 'formulaireEntreprise',
          component: FormulaireEntreprise
        },
        {
          path: 'formulaireCE/:type/:id?',
          name: 'formulaireCE',
          component: FormulaireCE,
          props: true
        },
        {
          path: 'formulairedo/:type/:id?',
          name: 'formulairedo',
          component: FormulaireDO,
          props: route => ({ isRequest: route.params.type === 'request' })
        },
        {
          path: 'pagedetaildemandedestage/:id',
          name: 'pagedetaildemandedestage',
          component: PageDetailDemandeEtOffre
        },
        {
          path: 'pagedetailoffredestage/:id',
          name: 'pagedetailoffredestage',
          component: PageDetailDemandeEtOffre
        },
        {
          path: 'fichedetailcandidat/:id',
          name: 'fichedetailcandidat',
          component: FicheDetailCandidatEntreprise
        },
        {
          path: 'fichedetailentreprise/:id',
          name: 'fichedetailentreprise',
          component: FicheDetailCandidatEntreprise
        }

      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: Erreur
    }
  ]
})

export default router