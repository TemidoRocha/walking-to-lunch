import { shallowMount } from '@vue/test-utils';
import leaflet from '@/views/leaflet.vue';

describe('leaflet.vue', () => {
  test('fail', () => {
    const { debug } = render(leaflet);
    debug();
    expect(true).toEqual(false);
  });
  it('renders leaflet when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

// import taxNrBox from '../../../../src/components/controls/taxNrBox/taxNrBox.vue';
// import { mount } from '@vue/test-utils';
// import { localVue, i18n } from '../../TestUtils';

// describe('<taxNrBox />', () => {
//   it('Date format is rendered correct by language', async () => {
//     const wrapper = mount(taxNrBox, {
//       propsData: {
//         taxNrReadOnly: false,
//         taxNrObject: {
//           taxNr: '',
//           taxNrLabel: 'tax nr.',
//           currencyLabel: 'currency',
//           taxNrClass: '',
//           isoCountryID: null,
//         },
//       },
//       localVue,
//       i18n,
//     });

//     // Assert the rendered text of the component
//     expect(wrapper.text()).toContain('Tax nr.');
//   });
// });
