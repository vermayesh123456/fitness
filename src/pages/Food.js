import React from 'react';
const foodsData = [
    {
        id: 1,
        name: 'Salmon',
        image: 'https://www.onceuponachef.com/images/2018/02/pan-seared-salmon-.jpg',
        calories: 206,
        carbs: 0,
        fats: 13,
        proteins: 22,
        sugar: 0,
      },
      {
        id: 2,
        name: 'Quinoa',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/quinoa.jpg',
        calories: 222,
        carbs: 39,
        fats: 4,
        proteins: 8,
        sugar: 1,
      },
      {
        id: 3,
        name: 'Broccoli',
        image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1155&h=1528',
        calories: 55,
        carbs: 11,
        fats: 1,
        proteins: 3,
        sugar: 2,
      },
      {
        id: 4,
        name: 'Sweet Potato',
        image: 'https://hips.hearstapps.com/hmg-prod/images/microwave-sweet-potato-horizontal-1533853300.jpg?crop=1xw:0.8435812837432514xh;center,top',
        calories: 112,
        carbs: 26,
        fats: 0.2,
        proteins: 2,
        sugar: 5,
      },
      {
        id: 5,
        name: 'Chicken Breast',
        image: 'https://organicallyaddison.com/wp-content/uploads/2022/11/2022-11-04_21-25-09_440-2022-11-05T20_26_31.813.jpeg',
        calories: 165,
        carbs: 0,
        fats: 3.6,
        proteins: 31,
        sugar: 0,
      },
      {
        id: 6,
        name: 'Spinach',
        image: 'https://www.wellplated.com/wp-content/uploads/2023/01/Seasoned-Sauteed-Spinach.jpg',
        calories: 23,
        carbs: 3.6,
        fats: 0.4,
        proteins: 2.9,
        sugar: 0.4,
      },
      {
        id: 7,
        name: 'Almonds',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/UD/AS/DR/31056044/natural-almonds.jpg',
        calories: 7,
        carbs: 2.6,
        fats: 0.6,
        proteins: 0.3,
        sugar: 0.1,
      },
      {
        id: 8,
        name: 'Avocado',
        image: 'https://cdn.jwplayer.com/v2/media/1Ucetkau/thumbnails/oONPJVtd.jpg',
        calories: 160,
        carbs: 8.5,
        fats: 14.7,
        proteins: 2,
        sugar: 0.2,
      },
      {
        id: 9,
        name: 'Oatmeal',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/oatmeal.jpg',
        calories: 68,
        carbs: 12,
        fats: 1.4,
        proteins: 2.4,
        sugar: 0,
      },
      {
        id: 10,
        name: 'Greek Yogurt',
        image: 'https://www.healthbenefitstimes.com/9/gallery/greek-yogurt/Greek-yogurt-4.jpg',
        calories: 59,
        carbs: 3.6,
        fats: 4,
        proteins: 10,
        sugar: 3.6,
      },
      {
        id: 11,
        name: 'Brown Rice',
        image: 'https://m.media-amazon.com/images/I/61eSSpEkpML._AC_UF1000,1000_QL80_.jpg',
        calories: 215,
        carbs: 45,
        fats: 1.6,
        proteins: 5,
        sugar: 0,
      },
      {
        id: 12,
        name: 'Cottage Cheese',
        image: 'https://www.greendna.in/cdn/shop/products/cotc_600x.jpg?v=1594119725',
        calories: 206,
        carbs: 6.1,
        fats: 10.5,
        proteins: 23.5,
        sugar: 6.1,
      },
      {
        id: 13,
        name: 'Eggs',
        image: 'https://i.cdn.newsbytesapp.com/images/l50820230704170857.jpeg',
        calories: 68,
        carbs: 0.6,
        fats: 4.8,
        proteins: 5.5,
        sugar: 0.6,
      },
      {
        id: 14,
        name: 'Kale',
        image: 'https://www.jgbcfarms.com/img/leafy-vegetables/KaledesktopexcellentsnapKale_ficha-original3_800x.jpg',
        calories: 33,
        carbs: 6,
        fats: 0.6,
        proteins: 2.9,
        sugar: 1.3,
      },
      {
        id: 15,
        name: 'Tuna',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_RXVknziLTWg3YHPuJiwNEqZNGCP2TyMOw&usqp=CAU',
        calories: 179,
        carbs: 0,
        fats: 0.6,
        proteins: 40,
        sugar: 0,
      },
      {
        id: 16,
        name: 'Oranges',
        image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/RI/WF/GL/106270270/orange.jpg',
        calories: 43,
        carbs: 8.3,
        fats: 0.2,
        proteins: 1,
        sugar: 8.2,
      },
      {
        id: 17,
        name: 'Bell Peppers',
        image: 'https://www.chilipeppermadness.com/wp-content/uploads/2019/08/Bell-Peppers.jpg',
        calories: 31,
        carbs: 6,
        fats: 0.3,
        proteins: 1.3,
        sugar: 3.9,
      },
      {
        id: 18,
        name: 'Turkey Breast',
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2012/11/Turkey-Breast-Recipe-1-1200.jpg',
        calories: 135,
        carbs: 0,
        fats: 1,
        proteins: 30,
        sugar: 0,
      },
      {
        id: 19,
        name: 'Asparagus',
        image: 'https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-2023-08-24t175327.758.jpg',
        calories: 20,
        carbs: 3.7,
        fats: 0.2,
        proteins: 2.2,
        sugar: 1.8,
      },
      {
        id: 20,
        name: 'Black Beans',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/02/black-beans.jpg',
        calories: 114,
        carbs: 20.4,
        fats: 0.5,
        proteins: 7.6,
        sugar: 0,
      },
      {
        id: 21,
        name: 'Cauliflower',
        image: 'https://img.taste.com.au/DBCUD8iO/taste/2007/05/cauliflower-181864-2.jpg',
        calories: 25,
        carbs: 5,
        fats: 0.3,
        proteins: 2,
        sugar: 2,
      },
      {
        id: 22,
        name: 'Chia Seeds',
        image: 'https://m.media-amazon.com/images/I/51Z9BNZOgNL._AC_UF1000,1000_QL80_.jpg',
        calories: 138,
        carbs: 12,
        fats: 9,
        proteins: 4,
        sugar: 0,
      },
      {
        id: 23,
        name: 'Lentils',
        image: 'https://countrylifefoods.com/cdn/shop/articles/6_types_of_lentils_1200x1200.png?v=1686570454',
        calories: 230,
        carbs: 40.8,
        fats: 0.4,
        proteins: 17.9,
        sugar: 1.8,
      },
      {
        id: 24,
        name: 'Mango',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2c6dqAPPzfRZy9LSGw7mcpzEDt6YlRywsyg&usqp=CAU',
        calories: 60,
        carbs: 15,
        fats: 0.4,
        proteins: 0.8,
        sugar: 14,
      },
      {
        id: 25,
        name: 'Peanut Butter',
        image: 'https://sampoornaahara.com/cdn/shop/products/organic-slow-roasted-peanut-butter-creamy-300g-120318.jpg?v=1621341325',
        calories: 94,
        carbs: 3.1,
        fats: 8.1,
        proteins: 4,
        sugar: 1.7,
      },
      {
        id: 26,
        name: 'Raspberries',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GVMbKF-l2QQR9ijqV8NRd80P0avrBWQIDA&usqp=CAU',
        calories: 52,
        carbs: 11,
        fats: 0.7,
        proteins: 1.2,
        sugar: 4.4,
      },
      {
        id: 27,
        name: 'Tomatoes',
        image: 'https://veggies.my/cdn/shop/products/Tomatoes.png?v=1653972536',
        calories: 18,
        carbs: 3.9,
        fats: 0.2,
        proteins: 0.9,
        sugar: 2.6,
      },
      {
        id: 28,
        name: 'Walnuts',
        image: 'https://5.imimg.com/data5/BA/BD/MY-26976435/chile-walnuts.jpg',
        calories: 654,
        carbs: 13.7,
        fats: 65,
        proteins: 15,
        sugar: 2.6,
      },
      {
        id: 29,
        name: 'Brussels Sprouts',
        image: 'https://www.thespruceeats.com/thmb/dBnqsyqj3sUy8NwKshh6miMMf4g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/brussel_sprouts-172323340-58f3d8da3df78cd3fc213c63.jpg',
        calories: 38,
        carbs: 8,
        fats: 0.3,
        proteins: 3,
        sugar: 2,
      },
      {
        id: 30,
        name: 'Cantaloupe',
        image: 'https://extension.usu.edu/nutrition/images/Cantalope-head.png',
        calories: 34,
        carbs: 8.2,
        fats: 0.2,
        proteins: 0.9,
        sugar: 8.2,
      },
      {
        id: 31,
        name: 'Carrots',
        image: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20180929_BLP506.jpg',
        calories: 41,
        carbs: 10,
        fats: 0.2,
        proteins: 1,
        sugar: 4.7,
      },
      {
        id: 32,
        name: 'Celery',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kks8ZgLno5Gq1n_47lFsi3MbBipg7rjGQJylvA3wNaIC348bXLU72Iq2jc9CNW7ZtmM&usqp=CAU',
        calories: 6,
        carbs: 1.2,
        fats: 0.1,
        proteins: 0.3,
        sugar: 0.6,
      },
      {
        id: 33,
        name: 'Cherries',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm_gRPIcG31Ba6aFgrZfb1xh9gAdLMyj7yQ&usqp=CAU',
        calories: 50,
        carbs: 12,
        fats: 0.3,
        proteins: 1,
        sugar: 8,
      },
      {
        id: 34,
        name: 'Eggplant',
        image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/279/279359/two-eggplants-on-a-wooden-table.jpg',
        calories: 20,
        carbs: 5,
        fats: 0.2,
        proteins: 0.8,
        sugar: 3.5,
      },
      {
        id: 35,
        name: 'Garlic',
        image: 'https://m.economictimes.com/thumb/msid-95197805,width-1200,height-900,resizemode-4,imgsize-88136/garlic-canva-health-benefits.jpg',
        calories: 4,
        carbs: 1,
        fats: 0,
        proteins: 0.2,
        sugar: 0.1,
      },
      {
        id: 36,
        name: 'Ginger',
        image: 'https://freshron.com/wp-content/uploads/2019/11/108637_ginger_shutterstock_291717662.jpg',
        calories: 80,
        carbs: 18,
        fats: 0.8,
        proteins: 2,
        sugar: 1.7,
      },
      {
        id: 37,
        name: 'Green Beans',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2014/11/green-beans-3.jpg',
        calories: 31,
        carbs: 7,
        fats: 0.4,
        proteins: 1.8,
        sugar: 3.6,
      },
      {
        id: 38,
        name: 'Lemon',
        image: 'https://freshgreenmart.in/wp-content/uploads/2022/03/lemon.jpg',
        calories: 17,
        carbs: 5,
        fats: 0.2,
        proteins: 0.6,
        sugar: 1.5,
      },
      {
        id: 39,
        name: 'Papaya',
        image: 'https://www.foodrepublic.com/img/gallery/how-to-eat-papaya-for-the-uninitiated/l-intro-1684865402.jpg',
        calories: 43,
        carbs: 11,
        fats: 0.3,
        proteins: 0.5,
        sugar: 8.3,
      },
      {
        id: 40,
        name: 'Pumpkin Seeds',
        image: 'https://betterme.world/articles/wp-content/uploads/2021/07/shutterstock_757140604.jpg',
        calories: 151,
        carbs: 15,
        fats: 7,
        proteins: 7,
        sugar: 1,
      },
      {
        id: 41,
        name: 'Soy Milk',
        image: 'https://woonheng.com/wp-content/uploads/2021/07/Homemade-Soymilk-5693-3-e1627507383825.jpg',
        calories: 33,
        carbs: 1.7,
        fats: 2.3,
        proteins: 3.3,
        sugar: 1,
      },
      {
        id: 42,
        name: 'Strawberries',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYiPgMp0HRTg_RP1X_zCPmuy2sHsbL_9SpDw&usqp=CAU',
        calories: 32,
        carbs: 7.7,
        fats: 0.3,
        proteins: 0.7,
        sugar: 4.9,
      },
      {
        id: 43,
        name: 'Tofu',
        image: 'https://www.wandercooks.com/wp-content/uploads/2021/11/agedashi-tofu-3.jpg',
        calories: 144,
        carbs: 3.9,
        fats: 8,
        proteins: 16,
        sugar: 1,
      },
      {
        id: 44,
        name: 'Watermelon',
        image: 'https://images.seattletimes.com/wp-content/uploads/2017/07/7b4c85c2-6687-11e7-8665-356bf84600f6.jpg?d=2040x1360',
        calories: 30,
        carbs: 8,
        fats: 0.2,
        proteins: 0.6,
        sugar: 6,
      },
      {
        id: 45,
        name: 'Zucchini',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbgzIdDGr4XbV1c2X8agWBdhdNhNxnBehuw&usqp=CAU',
        calories: 20,
        carbs: 4.6,
        fats: 0.3,
        proteins: 1.2,
        sugar: 1.5,
      },
  
];

const Food = () => {
    return (
      <div className="container mt-5">
        <div className="row">
          {foodsData.map(food => (
            <div className="col-md-4 mb-4" key={food.id}>
              <div className="card">
                <img
                  src={food.image}
                  className="card-img-top"
                  alt={food.name}
                  style={{ height: '350px', objectFit: 'cover' }}
                />
                <div className="card-body" style={{ height: '200px' }}>
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">
                    <strong>Calories:</strong> {food.calories} kcal<br />
                    <strong>Carbs:</strong> {food.carbs} g<br />
                    <strong>Fats:</strong> {food.fats} g<br />
                    <strong>Proteins:</strong> {food.proteins} g<br />
                    <strong>Sugar:</strong> {food.sugar} g<br />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Food;
  