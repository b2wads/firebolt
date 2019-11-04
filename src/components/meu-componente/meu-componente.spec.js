
import { shallow } from 'enzyme'
import MeuComponente from './meu-componente-component';

/** @test {MeuComponente} */
describe('MeuComponente component', () => {
/** @test {MeuComponente#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <MeuComponente />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
