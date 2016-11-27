import React from 'react';
import search from 'lib/search';
import Settings from './Settings';

// Settings plugin name
const NAME = 'Cerebro Settings';

// Settings plugins in the end of list
const order = 9;

// Phrases that used to find settings plugins
const KEYWORDS = [
  NAME,
  'Cerebro Preferences'
];

/**
 * Plugin to show app settings in results list
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const settingsPlugin = ({term, display}) => {
  const found = search(KEYWORDS, term).length > 0;
  if (found) {
    const results = [{
      order,
      icon: '/Applications/Cerebro.app',
      title: NAME,
      term: NAME,
      id: 'settings',
      getPreview: () => <Settings />
    }];
    display(results);
  }
}

export default {
  name: NAME,
  fn: settingsPlugin
};
