import ReactOnRails from 'react-on-rails';
import ElementList from '../../ElementList/components/ElementList';
import NewPledge from '../../NewPledge/components/NewPledge';
import PledgeView from '../../PledgeView/components/PledgeView';

// Lets Webpack generate the main css file that gets picked up by Sprockets
require('file?name=[name].css!extract!css!sass!../../stylesheets/main.scss');

ReactOnRails.register({
  ElementList,
  NewPledge,
  PledgeView
});
