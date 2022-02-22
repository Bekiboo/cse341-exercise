exports.getProfessional = (req, res, next) => {
  res.status(200).json({
        professionalName: 'Julien Connault',
        base64Image: 'iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAAC/VBMVEUAAAD////////////////////////////////////////////////////////////////////////////7+/v///////////////////////////////////////////////////////////////////////////////////////////////////////8AAAD////uZkP7xqWjm4tOZ5hpXGR/ZFmPQkBssfKVcnEDAgIODAsJCAcTEBAHBAMXExIEBAVyWk4QBgUvLSwaGRl6YFIpOFIyJiIaCwjYXT5XRDtNPDXquJtoUkffXz9bRz9IODIuFA8iDgwMBQRSQDhDHBMnEg68lH1hTELJVjkzMTE7Lig2KiUQFyEUCAfMoYcsQFzmYkFBP0BFNS8+MSskIyMpIBwkHBlUJBcdFhPispRKYpKRkZFnZ2dUTE8eHRwhGRYFCAzxvZ81SmsjMUcfKz/QWTwTHChZKScuJB8zGBarq6uclIWKg3YyQ2NgVFxZUFZNTU1KREeIPjzr6+tdmNHQ0NBCV4GTi4B6enqDe3FtbW17dGpaWlpsVUk/PDvCUjY3NDOzTDIWIC6iRS11MiAiIB9mKxwMEhrw8PDb29vKysqXl5dHXouPh3uuiXKffWjrZEKGOSVIIB9AHRxNIBUJDBM6GRDl5eXh4eHbrJHSpYzEmYOuhn61jnZpY1lPSkOoSkAaJTW6TzOrSTAqJyhRJSM5Ghn19fXV1dWxsbH5w6P3waGcnJw7YIQ5THF/YWCKbFpeWVA9OTmcQittLh9dJxpkot/e3t7FxcVKeqempqY8UHZ3a21sYGWSc19vVVS9UkFHQTtpMS6XQCqOPCd+NSM1Fg6goKCIiIiAgICognRxNjJYi8KIaGdzbWN5XFt2NjXAwMC5ublTfrKhe3c0VXV0dHRlTUxfSEifR0CYRECBOzl+OThlLi1pre3Y2Ni9vb1Ebpg/aI7xdVKzT0G3t7dQbaDumnl7ODX0j23RZknQtKT4sI7gZkbu+xzcAAAAL3RSTlMAx4yRTohcZ1fWz1QFpd20C+S9Uf1hRToWqpgb6690MRGbopVtLJ4iH6B+Ju+cJJloX+gAABj+SURBVHja7Ng9a1NRGAfwc/N+m2qrNTSmQ9JA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',
        nameLink: {
          firstName: 'Julien',
          url: 'https://web.facebook.com/julien.connault/',
        },
        primaryDescription: 'Handsome guy',
        workDescription1:
          'Non-Profits Program Manager in Madagascar since 2016',
        workDescription2:
          'Part-Time Web Developer with an emphasis on Frontend and UX/UI Design',
        linkTitleText: 'Social Networks',
        linkedInLink: {
          text: 'Dolor autem hic laboriosam ullam incidunt aliquam est perspiciatis officia nostrum quia.',
          link: 'https://www.linkedin.com/in/julien-connault/',
        },
        githubLink: {
          text: 'Dolor autem hic laboriosam ullam incidunt aliquam est perspiciatis officia nostrum quia.',
          link: 'https://github.com/Bekiboo',
        },
      },
    
  )
}

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post' }],
  })
}