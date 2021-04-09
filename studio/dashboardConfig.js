export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6070387080b81b22638fb6ad',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t1mmdvta',
                  apiId: '61d2d919-f434-4503-88d7-040d55d46d92'
                },
                {
                  buildHookId: '60703870044634208ad5b85c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2vu4kbpn',
                  apiId: '1540a67e-91a9-41ef-822f-c88b85faefc0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MohamadAlghish93/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2vu4kbpn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
