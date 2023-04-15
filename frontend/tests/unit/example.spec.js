import { shallowMount } from '@vue/test-utils'
import listPokemnn from '../../src/components/pokemon/pokemonList.vue'

describe('HelloWorld.vue', () => {
  it('Testing component PokemonList render div', async () => {
    const wrapper = shallowMount(PokemonList);
    await wrapper.vm.listData();
    const listItems = wrapper.findAll('div');
    expect(listItems).toHaveLength(1);
  });
})
