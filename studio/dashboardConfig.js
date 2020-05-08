export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb5680165fde31901243bbb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7xf2kze8',
                  apiId: 'b75b5149-8713-4197-9217-342c3dfbae40'
                },
                {
                  buildHookId: '5eb568023eca3b4143dd328e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3qb7ktwt',
                  apiId: '2c2bf097-ffd4-4637-a075-e75993cee689'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexandrubeu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3qb7ktwt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
