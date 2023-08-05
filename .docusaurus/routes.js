import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fpga_mafia_doc/blog',
    component: ComponentCreator('/fpga_mafia_doc/blog', 'c12'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/archive',
    component: ComponentCreator('/fpga_mafia_doc/blog/archive', '438'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/first-blog-post',
    component: ComponentCreator('/fpga_mafia_doc/blog/first-blog-post', 'dce'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/long-blog-post',
    component: ComponentCreator('/fpga_mafia_doc/blog/long-blog-post', '499'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/mdx-blog-post',
    component: ComponentCreator('/fpga_mafia_doc/blog/mdx-blog-post', 'f3d'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/tags',
    component: ComponentCreator('/fpga_mafia_doc/blog/tags', '6f7'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/tags/docusaurus',
    component: ComponentCreator('/fpga_mafia_doc/blog/tags/docusaurus', '9d1'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/tags/facebook',
    component: ComponentCreator('/fpga_mafia_doc/blog/tags/facebook', '0a0'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/tags/hello',
    component: ComponentCreator('/fpga_mafia_doc/blog/tags/hello', 'd76'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/tags/hola',
    component: ComponentCreator('/fpga_mafia_doc/blog/tags/hola', '665'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/blog/welcome',
    component: ComponentCreator('/fpga_mafia_doc/blog/welcome', 'cc6'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/markdown-page',
    component: ComponentCreator('/fpga_mafia_doc/markdown-page', '377'),
    exact: true
  },
  {
    path: '/fpga_mafia_doc/docs',
    component: ComponentCreator('/fpga_mafia_doc/docs', '418'),
    routes: [
      {
        path: '/fpga_mafia_doc/docs/cache/ABD_notes',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/ABD_notes', '44c'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/Appendix',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/Appendix', '754'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/Assumption_Assertions',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/Assumption_Assertions', '59e'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/cache_intro',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/cache_intro', '2f0'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/cache_overview',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/cache_overview', 'bd7'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/High_level_block_description',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/High_level_block_description', 'afd'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/High_level_Transaction_Flows',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/High_level_Transaction_Flows', 'cdc'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/Merge_Buffer_Behavior',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/Merge_Buffer_Behavior', 'cbe'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/cache/Verification',
        component: ComponentCreator('/fpga_mafia_doc/docs/cache/Verification', '1ff'),
        exact: true,
        sidebar: "Cache"
      },
      {
        path: '/fpga_mafia_doc/docs/intro',
        component: ComponentCreator('/fpga_mafia_doc/docs/intro', '887'),
        exact: true,
        sidebar: "Hello"
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-basics/congratulations', 'c24'),
        exact: true
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-basics/create-a-blog-post', '9b9'),
        exact: true
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-basics/create-a-document', '767'),
        exact: true
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-basics/create-a-page', 'a89'),
        exact: true
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-basics/deploy-your-site', '215'),
        exact: true
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-basics/markdown-features', '6bd'),
        exact: true
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-extras/manage-docs-versions', '4f0'),
        exact: true
      },
      {
        path: '/fpga_mafia_doc/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/fpga_mafia_doc/docs/tutorial-extras/translate-your-site', '757'),
        exact: true
      }
    ]
  },
  {
    path: '/fpga_mafia_doc/',
    component: ComponentCreator('/fpga_mafia_doc/', '301'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
