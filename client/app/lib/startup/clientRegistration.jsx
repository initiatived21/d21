import ReactOnRails from 'react-on-rails';
import ElementList from '../../ElementList/components/ElementList';
import NewPledge from '../../NewPledge/components/NewPledge';
import PledgeView from '../../PledgeView/components/PledgeView';
import Search from '../../Search/components/Search';

// Lets Webpack generate the main css file that gets picked up by Sprockets
require('../../stylesheets/main.scss');

ReactOnRails.register({
  ElementList,
  NewPledge,
  PledgeView,
  Search,
});
