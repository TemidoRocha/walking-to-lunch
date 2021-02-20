import { render } from '@testing-library/vue';

import App from '../src/App.vue';

describe('<App />', () => {
  test('fail', () => {
    const { debug } = render(App);
    debug();
    expect(true).toEqual(false);
  });
});
