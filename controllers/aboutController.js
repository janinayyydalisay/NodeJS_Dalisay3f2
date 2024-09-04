exports.getAbout = (req, res) => {
    res.render('about', { title: 'About Us' });
};

//Para sa akin ito na yung http method na ginamitan dahil sa GET the other http kasi parang pang Crud na
//So Basically ang ginamit natin dito ay yung Get HTTp Method lang
//PUT,POST,PRE or other HTTP Methods ay di ko na ginamit
//For me in the instructions , Di naman sinabi na different HTTP Methods ang kaylangan gamitin.