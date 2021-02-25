import { addParameters } from '@storybook/vue3'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addParameters({
  options: {
    
  },
  backgrounds: {
    default: 'dark',
    grid: {
    }
  }
})