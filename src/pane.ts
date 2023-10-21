import { Pane } from 'tweakpane'

const pane = new Pane()

export const params = {
  speed: .5,
};

pane.addBinding(params, 'speed', {
  min: 0,
  max: 1,
});