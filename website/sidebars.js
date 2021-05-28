/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Tutoial',
      collapsed: false,
      items: [
        'tuto/intro',
        {
          type: 'category',
          label: 'tutorial basics',
          items: [
            'tuto/tutorial-basics/create-a-blog-post',
            'tuto/tutorial-basics/create-a-document'],
        },
      ]

    },
  ],
  reference: [
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/intro',
        {
          type: 'category',
          label: 'Jmeter Reference',
          items: [
            'reference/jmeter/jmeter-component'
            ],
        },
      ]

    },
  ],
};
