const ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/joeljih/joeljih.github.io', // Update to point to your repository  
        user: {
            name: 'Joel', // update to use your name
            email: 'joel.jih@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)