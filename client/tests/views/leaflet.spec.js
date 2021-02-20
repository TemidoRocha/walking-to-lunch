import { render } from '@testing-library/vue';

import leaflet from '../../src/views/leaflet.vue';

describe('leaflet.vue', () => {
  test('fail', () => {
    const { debug } = render(leaflet);
    debug();
    expect(true).toEqual(false);
  });
});
