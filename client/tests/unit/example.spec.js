import { localVue, i18n } from '../../TestUtils';
import { mount } from '@vue/test-utils';
import creditCardBox from '../../../../src/components/controls/creditCardBox/creditCardBox.vue';
import Vuetify from 'vuetify';
import {
  wsPostCredCardValidTrue,
  wsPostCredCardValidFalse,
} from '../../__MOCKS__/financial/wsCreditCardValidMock';

describe('<creditCardBox />', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    jest.restoreAllMocks();
  });

  it('snapshot control - show all', async () => {
    const wrapper = mount(creditCardBox, {
      localVue,
      i18n,
      vuetify,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('snapshot control - show creditCard with ExpDate', async () => {
    const wrapper = mount(creditCardBox, {
      localVue,
      i18n,
      vuetify,
      propsData: {
        hideExpDate: false,
        hideCCType: true,
        hideSecurityCode: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('snapshot control - show creditCard with CCType', async () => {
    const wrapper = mount(creditCardBox, {
      localVue,
      i18n,
      vuetify,
      propsData: {
        hideExpDate: true,
        hideCCType: false,
        hideSecurityCode: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('snapshot control - show creditCard with SecurityCode', async () => {
    const wrapper = mount(creditCardBox, {
      localVue,
      i18n,
      vuetify,
      propsData: {
        hideExpDate: true,
        hideCCType: true,
        hideSecurityCode: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('verify validateCcCard is triggered and updates fields as per valid card', async () => {
    creditCardBox.methods.wsPostCredCardValid = jest
      .fn(() => wsPostCredCardValidTrue)
      .mockName('mockSearchWsPostCredCardValid');
    const spyValidateCcCard = jest.spyOn(creditCardBox.methods, 'validateCcCard');
    const spyResetCreditCardDataObject = jest.spyOn(
      creditCardBox.methods,
      'resetCreditCardDataObject'
    );
    const wrapper = mount(creditCardBox, {
      localVue,
      i18n,
      vuetify,
    });
    const ccNumber = wrapper.findComponent({ ref: 'ccNumber' }).find('input');
    const ccType = wrapper.findComponent({ ref: 'ccType' }).find('input');
    await ccNumber.setValue('4564456445644564');
    await wrapper.vm.$nextTick();
    expect(ccNumber.element.value).toBe('4564456445644564');
    await ccNumber.trigger('blur');
    await wrapper.vm.$nextTick();
    expect(ccType.element.value).toBe('Visa');
    expect(spyValidateCcCard).toHaveBeenCalled();
    expect(spyResetCreditCardDataObject).toHaveBeenCalledTimes(1);
  });

  it('verify validateCcCard is triggered and updates fields as per invalid card', async () => {
    creditCardBox.methods.wsPostCredCardValid = jest
      .fn(() => wsPostCredCardValidFalse)
      .mockName('mockSearchWsPostCredCardValid');
    const spyValidateCcCard = jest.spyOn(creditCardBox.methods, 'validateCcCard');
    const spyResetCreditCardDataObject = jest.spyOn(
      creditCardBox.methods,
      'resetCreditCardDataObject'
    );
    const wrapper = mount(creditCardBox, {
      localVue,
      i18n,
      vuetify,
    });
    const ccNumber = wrapper.findComponent({ ref: 'ccNumber' }).find('input');
    const ccType = wrapper.findComponent({ ref: 'ccType' }).find('input');
    await ccNumber.setValue('4564456445644564');
    await wrapper.vm.$nextTick();
    expect(ccNumber.element.value).toBe('4564456445644564');
    await ccNumber.trigger('blur');
    await wrapper.vm.$nextTick();
    expect(ccNumber.element.value).toBe('');
    expect(ccType.element.value).toBe('');
    expect(spyValidateCcCard).toHaveBeenCalled();
    expect(spyResetCreditCardDataObject).toHaveBeenCalledTimes(2);
  });
});

// Installation: (https://www.youtube.com/watch?v=IZpTGkfxkfY)
// npm i --save-dev @testing-library/vue jest (https://vue-test-utils.vuejs.org/)
// npm i --save-dev babel-core@bridge vue-jest
// npm i --save-dev sinon (https://sinonjs.org/releases/v9.2.4/spies/)
// npm i --save-dev jest-serializer-vue (https://www.npmjs.com/package/jest-serializer-vue)

// jest.config.js was created with:
// created with: ./node_modules/.bin/jest -init