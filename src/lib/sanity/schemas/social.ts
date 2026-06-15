import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  title: 'Réseaux sociaux',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du réseau social',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'iconName',
      title: `Nom de l'icône Iconify`,
      description: `Exemples : simple-icons:github, simple-icons:linkedin, simple-icons:x`,
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .regex(/^[a-z0-9-]+:[a-z0-9-]+$/)
          .error('Format attendu : collection:nom'),
    }),
    defineField({
      name: 'url',
      title: 'Url du réseau social',
      type: 'url',
      validation: (rule) => rule.required().error('Doit être une URL'),
    }),
    defineField({
      name: 'priority',
      title: `Priorité d'affichage`,
      type: 'number',
      validation: (rule) => rule.required().min(1).error('Doit être suppérieur à 1'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
})
