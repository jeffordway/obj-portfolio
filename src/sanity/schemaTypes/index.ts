import { type SchemaTypeDefinition } from 'sanity'

import category from './category'
import skill from './skill'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, skill, project],
}
