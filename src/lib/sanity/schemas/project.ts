import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projets',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du projet',
      type: 'string',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      validation: (rule) => rule.required().error(`Champ requis au format "slug-url"`),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'technos',
      title: 'Technos utilisées',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'techno' } })],
      validation: (rule) => rule.required().error('Champ requis'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) =>
        rule.required().min(1).max(90).error('Min 1 charactères, Max 90 charactères'),
    }),
    defineField({
      name: 'projectType',
      title: 'Type de projet',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de création du site',
      type: 'date',
      validation: (rule) =>
        rule.required().max(new Date().toJSON()).error(`Doit être avant à la date d'aujourd'hui`),
    }),
    defineField({
      name: 'githubLink',
      title: 'Lien github',
      type: 'url',
      validation: (rule) => rule.error('Doit être une URL'),
    }),
    defineField({
      name: 'websiteLink',
      title: 'Lien du site',
      type: 'url',
      validation: (rule) => rule.error('Doit être une URL'),
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
      subtitle: 'description',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const { subtitle } = selection
    //   return { ...selection, subtitle: author && `by ${author}` }
    // },
  },
})
