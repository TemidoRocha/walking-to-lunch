import { shallowMount } from '@vue/test-utils';
import leafletMap from '@/components/leafletMap/leafletMap.vue';

describe('leafletMap.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(leafletMap, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
