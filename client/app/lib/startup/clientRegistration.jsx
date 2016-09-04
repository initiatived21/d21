import ReactOnRails from 'react-on-rails'
import ElementList from '../../ElementList/components/ElementList'
import NewPledge from '../../NewPledge/components/NewPledge'
import PledgeView from '../../PledgeView/components/PledgeView'
import ProfileView from '../../ProfileView/components/ProfileView'
import Search from '../../Search/components/Search'
import Flash from '../../Flash/components/Flash'
import PageHeader from '../../PageHeader/components/PageHeader'
import OffCanvasMenu from '../../OffCanvasMenu/components/OffCanvasMenu'

// Lets Webpack generate the main css file that gets picked up by Sprockets
require('../../assets/stylesheets/main.scss')

// Dummy images
require.context('../../assets/images', false, /\./)

ReactOnRails.register({
  ElementList,
  NewPledge,
  PledgeView,
  ProfileView,
  Search,
  Flash,
  PageHeader,
  OffCanvasMenu
})
