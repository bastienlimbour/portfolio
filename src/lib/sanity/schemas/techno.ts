import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'techno',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom de la techno',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie de la techno',
      type: 'reference',
      to: [{ type: 'skill' }],
      validation: (rule) => rule.required().error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'iconName',
      title: `Nom de l'icône Iconify`,
      description: `Exemples : devicon:react, devicon:typescript, logos:nextjs-icon`,
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .regex(/^[a-z0-9-]+:[a-z0-9-]+$/)
          .error('Format attendu : collection:nom'),
    }),
    // defineField({
    //   name: 'priority',
    //   title: `Priorité d'affichage`,
    //   type: 'number',
    //   validation: (rule) => rule.required().min(1).error('Doit être suppérieur à 1'),
    // }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
