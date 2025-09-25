const fs = require('fs');
const Handlebars = require('handlebars');
const moment = require('moment');

function render(resume) {
    const css = fs.readFileSync(__dirname + '/style.css', 'utf-8');
    const template = fs.readFileSync(__dirname + '/resume.hbs', 'utf-8');

    // Register Handlebars helpers
    Handlebars.registerHelper('formatDate', function(date) {
        return date ? moment(date).format('MMM YYYY') : 'Present';
    });

    Handlebars.registerHelper('timeago', function(startDate, endDate) {
        if (!startDate) return '';
        const start = moment(startDate);
        const end = endDate ? moment(endDate) : moment();
        const duration = moment.duration(end.diff(start));

        const years = Math.floor(duration.asYears());
        const months = Math.floor(duration.asMonths() % 12);

        if (years > 0 && months > 0) {
            return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
        } else if (years > 0) {
            return `${years} yr${years > 1 ? 's' : ''}`;
        } else if (months > 0) {
            return `${months} mo${months > 1 ? 's' : ''}`;
        } else {
            return 'Less than 1 month';
        }
    });

    Handlebars.registerHelper('toLowerCase', function(str) {
        return str ? str.toLowerCase() : '';
    });

    Handlebars.registerHelper('eq', function(a, b) {
        return a === b;
    });

    Handlebars.registerHelper('getIconClass', function(network) {
        const iconMap = {
            'github': 'fab fa-github',
            'linkedin': 'fab fa-linkedin',
            'twitter': 'fab fa-twitter',
            'instagram': 'fab fa-instagram',
            'facebook': 'fab fa-facebook',
            'youtube': 'fab fa-youtube',
            'website': 'fas fa-globe',
            'email': 'fas fa-envelope',
            'phone': 'fas fa-phone',
            'dockerhub': 'fab fa-docker',
            'stackoverflow': 'fab fa-stack-overflow'
        };

        const networkLower = network ? network.toLowerCase() : '';
        return iconMap[networkLower] || 'fas fa-link';
    });

    // Process resume data
    if (resume.work) {
        resume.work.forEach(work => {
            work.formattedStartDate = work.startDate ? moment(work.startDate).format('MMM YYYY') : '';
            work.formattedEndDate = work.endDate ? moment(work.endDate).format('MMM YYYY') : 'Present';
            work.duration = work.startDate ?
                (work.endDate ?
                    moment.duration(moment(work.endDate).diff(moment(work.startDate))).humanize() :
                    moment.duration(moment().diff(moment(work.startDate))).humanize()
                ) : '';
        });
    }

    if (resume.education) {
        resume.education.forEach(edu => {
            edu.formattedStartDate = edu.startDate ? moment(edu.startDate).format('MMM YYYY') : '';
            edu.formattedEndDate = edu.endDate ? moment(edu.endDate).format('MMM YYYY') : 'Present';
        });
    }

    // Sort skills by level (Advanced -> Intermediate -> Beginner)
    if (resume.skills) {
        const levelOrder = { 'Master': 1, 'Advanced': 2, 'Intermediate': 3, 'Beginner': 4 };
        resume.skills.sort((a, b) => {
            const levelA = levelOrder[a.level] || 5;
            const levelB = levelOrder[b.level] || 5;
            return levelA - levelB;
        });
    }

    return Handlebars.compile(template)({
        css: css,
        resume: resume
    });
}

module.exports = {
    render: render
};
