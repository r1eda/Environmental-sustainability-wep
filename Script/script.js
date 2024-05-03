function navigateTo(route) {
    // Redirect to the specified route
    window.open(route, '_self');
}

//SustainableGoalsPage
document.addEventListener("DOMContentLoaded", function () {
    // Goals data
    const goals = [
        {'title': 'No Poverty', 'image': '../../images/no_poverty.jpg'},
        {'title': 'Zero Hunger', 'image': '../../images/zero_hunger.jpg'},
        {'title': 'Good Health and Well-being', 'image': '../../images/good_health.jpg'},
        {'title': 'Quality Education', 'image': '../../images/quality_education.jpg'},
        {'title': 'Gender Equality', 'image': '../../images/gender_equality.jpg'},
        {'title': 'Clean Water and Sanitation', 'image': '../../images/clean_water.jpg'},
        {
          'title': 'Affordable and Clean Energy',
          'image': '../../images/clean_energy.jpg'
        },
        {
          'title': 'Decent Work and Economic Growth',
          'image': '../../images/economic_growth.jpg'
        },
        {
          'title': 'Industry, Innovation, and Infrastructure',
          'image': '../../images/infrastructure.jpg'
        },
        {'title': 'Reduced Inequality', 'image': '../../images/reduced_inequality.jpg'},
        {
          'title': 'Sustainable Cities and Communities',
          'image': '../../images/sustainable_cities.jpg'
        },
        {
          'title': 'Responsible Consumption and Production',
          'image': '../../images/responsible_consumption.jpg'
        },
        {'title': 'Climate Action', 'image': '../../images/climate_action.jpg'},
        {'title': 'Life Below Water', 'image': '../../images/life_below_water.jpg'},
        {'title': 'Life on Land', 'image': '../../images/life_on_land.jpg'},
        {
          'title': 'Peace, Justice, and Strong Institutions',
          'image': '../../images/peace_justice.jpg'
        },
        {'title': 'Partnerships for the Goals', 'image': '../../images/partnerships.jpg'},
    ];

    // Populate goals grid
    const goalsGrid = document.getElementById('goals-grid');
    goals.forEach(goal => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = goal.image;
        img.alt = goal.title;

        const text = document.createElement('div');
        text.classList.add('card-text');
        text.textContent = goal.title;

        card.appendChild(img);
        card.appendChild(text);
        goalsGrid.appendChild(card);
    });
});
//SustainableGoalsPage