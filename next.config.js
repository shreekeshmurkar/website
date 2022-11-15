const withMDX = require('@next/mdx')();
const Mode = require('frontmatter-markdown-loader/mode');

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    webpack(configuration) {
        configuration.module.rules.push({
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: {
                mode: [Mode.REACT],
            },
        });

        return configuration;
    }
});