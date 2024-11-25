import 'dotenv/config.js';
import "../../config/dataBase.js"
import City from "../City.js"

const cities = [
    {
        name: "Paris",
        photo: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474240-Left-Bank-Paris.jpg",
        country: "France",
        continent: "Europe",
        population: 2140526,
        description: "Known as the City of Light, Paris is famous for its iconic Eiffel Tower, world-class cuisine, and charming streets.",
        currency: {
            code: "EUR",
            symbol: "€"
        },
        languages: "French",
        timeZone: "UTC+1",
        weather: {
            climate: "Oceanic",
            averageTemperature: 12,
            bestTimeToVisit: "April to October"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 78,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 150,
            averageMealPrice: 30,
            transportationPrice: 10
        },
        isCapital: true
    },
    {
        name: "New York City",
        photo: "https://www.travel-guide.es/media/new-york.jpeg",
        country: "United States",
        continent: "North America",
        population: 8336817,
        description: "The Big Apple is known for its towering skyscrapers, diverse culture, and bustling streets.",
        currency: {
            code: "USD",
            symbol: "$"
        },
        languages: "English",
        timeZone: "UTC-5",
        weather: {
            climate: "Humid subtropical",
            averageTemperature: 13,
            bestTimeToVisit: "April to June or September to November"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 70,
            travelAdvisory: "Exercise increased caution"
        },
        costs: {
            averageHotelPrice: 200,
            averageMealPrice: 25,
            transportationPrice: 15
        },
        isCapital: false
    },
    {
        name: "Tokyo",
        photo: "https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg",
        country: "Japan",
        continent: "Asia",
        population: 13929286,
        description: "The bustling capital of Japan, Tokyo is a blend of ultramodern skyscrapers and traditional temples.",
        currency: {
            code: "JPY",
            symbol: "¥"
        },
        languages: "Japanese",
        timeZone: "UTC+9",
        weather: {
            climate: "Humid subtropical",
            averageTemperature: 16,
            bestTimeToVisit: "March to May or September to November"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 80,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 120,
            averageMealPrice: 20,
            transportationPrice: 10
        },
        isCapital: true
    },
    {
        name: "Sydney",
        photo: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
        country: "Australia",
        continent: "Australia",
        population: 5312163,
        description: "Famous for the Sydney Opera House and stunning beaches, Sydney is Australia's most iconic city.",
        currency: {
            code: "AUD",
            symbol: "A$"
        },
        languages: "English",
        timeZone: "UTC+10",
        weather: {
            climate: "Humid subtropical",
            averageTemperature: 18,
            bestTimeToVisit: "September to November or March to May"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 85,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 180,
            averageMealPrice: 35,
            transportationPrice: 12
        },
        isCapital: false
    },
    {
        name: "Cairo",
        photo: "https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg",
        country: "Egypt",
        continent: "Africa",
        population: 21420000,
        description: "The largest city in Africa, Cairo is home to the Great Pyramids and a rich cultural history.",
        currency: {
            code: "EGP",
            symbol: "£"
        },
        languages: "Arabic",
        timeZone: "UTC+2",
        weather: {
            climate: "Desert",
            averageTemperature: 22,
            bestTimeToVisit: "October to April"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 60,
            travelAdvisory: "Exercise increased caution"
        },
        costs: {
            averageHotelPrice: 80,
            averageMealPrice: 10,
            transportationPrice: 5
        },
        isCapital: true
    },
    {
        name: "Buenos Aires",
        photo: "https://vamospanish.com/wp-content/uploads/live-in-buenos-aires-1024x574.jpg",
        country: "Argentina",
        continent: "South America",
        population: 2890151,
        description: "The vibrant capital of Argentina, known for tango, football, and European-style architecture.",
        currency: {
            code: "ARS",
            symbol: "$"
        },
        languages: "Spanish",
        timeZone: "UTC-3",
        weather: {
            climate: "Humid subtropical",
            averageTemperature: 17,
            bestTimeToVisit: "September to November or March to May"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 65,
            travelAdvisory: "Exercise increased caution"
        },
        costs: {
            averageHotelPrice: 70,
            averageMealPrice: 15,
            transportationPrice: 4
        },
        isCapital: true
    },
    {
        name: "London",
        photo: "https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg",
        country: "United Kingdom",
        continent: "Europe",
        population: 8982000,
        description: "The capital city of the United Kingdom, known for its history, landmarks, and diverse culture.",
        currency: {
            code: "GBP",
            symbol: "£"
        },
        languages: "English",
        timeZone: "UTC+0",
        weather: {
            climate: "Oceanic",
            averageTemperature: 11,
            bestTimeToVisit: "March to June or September to November"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 80,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 180,
            averageMealPrice: 35,
            transportationPrice: 15
        },
        isCapital: true
    },
    {
        name: "Moscow",
        photo: "https://salviatravelsindia.com/wp-content/uploads/2020/09/moscow-Saint-Basil-Cathedral2jpg.jpg",
        country: "Russia",
        continent: "Europe",
        population: 12615279,
        description: "The capital of Russia, known for its iconic Red Square and stunning architecture.",
        currency: {
            code: "RUB",
            symbol: "₽"
        },
        languages: "Russian",
        timeZone: "UTC+3",
        weather: {
            climate: "Continental",
            averageTemperature: 5,
            bestTimeToVisit: "May to September"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 68,
            travelAdvisory: "Exercise increased caution"
        },
        costs: {
            averageHotelPrice: 100,
            averageMealPrice: 15,
            transportationPrice: 5
        },
        isCapital: true
    },
    {
        name: "Rio de Janeiro",
        photo: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,h_500,q_auto,w_1024/v1/guides/article_cover/dtceexjjoji0w1ikkp2k",
        country: "Brazil",
        continent: "South America",
        population: 6748000,
        description: "Known for its vibrant Carnival, Christ the Redeemer statue, and stunning beaches.",
        currency: {
            code: "BRL",
            symbol: "R$"
        },
        languages: "Portuguese",
        timeZone: "UTC-3",
        weather: {
            climate: "Tropical",
            averageTemperature: 24,
            bestTimeToVisit: "December to March"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 55,
            travelAdvisory: "Exercise increased caution"
        },
        costs: {
            averageHotelPrice: 90,
            averageMealPrice: 20,
            transportationPrice: 6
        },
        isCapital: false
    },
    {
        name: "Toronto",
        photo: "https://www.airtransat.com/getmedia/c561ff6f-e480-4b8c-8b27-361d2b1e5ad3/Toronto-downtown-skyline-1000x600.aspx?width=1000&height=600&ext=.jpg",
        country: "Canada",
        continent: "North America",
        population: 2930000,
        description: "The largest city in Canada, known for its multiculturalism and iconic CN Tower.",
        currency: {
            code: "CAD",
            symbol: "C$"
        },
        languages: "English, French",
        timeZone: "UTC-5",
        weather: {
            climate: "Continental",
            averageTemperature: 9,
            bestTimeToVisit: "April to October"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 82,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 160,
            averageMealPrice: 30,
            transportationPrice: 12
        },
        isCapital: false
    },
    {
        name: "Berlin",
        photo: "https://img.static-kl.com/images/media/A9EB8D2D-C180-4F6C-877C3D4A44BBFF3F",
        country: "Germany",
        continent: "Europe",
        population: 3769000,
        description: "The capital of Germany, known for its vibrant arts scene, rich history, and modern culture.",
        currency: {
            code: "EUR",
            symbol: "€"
        },
        languages: "German",
        timeZone: "UTC+1",
        weather: {
            climate: "Oceanic",
            averageTemperature: 10,
            bestTimeToVisit: "May to September"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 85,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 140,
            averageMealPrice: 25,
            transportationPrice: 8
        },
        isCapital: true
    },
    {
        name: "Cape Town",
        photo: "https://www.cruiseandtravel.co.uk/wp-content/uploads/2018/09/2CK09C2-1.jpg",
        country: "South Africa",
        continent: "Africa",
        population: 433688,
        description: "A stunning coastal city known for its Table Mountain and cultural diversity.",
        currency: {
            code: "ZAR",
            symbol: "R"
        },
        languages: "English, Afrikaans, Xhosa",
        timeZone: "UTC+2",
        weather: {
            climate: "Mediterranean",
            averageTemperature: 17,
            bestTimeToVisit: "November to March"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 50,
            travelAdvisory: "Exercise increased caution"
        },
        costs: {
            averageHotelPrice: 120,
            averageMealPrice: 20,
            transportationPrice: 8
        },
        isCapital: false
    },
    {
        name: "Dubai",
        photo: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
        country: "United Arab Emirates",
        continent: "Asia",
        population: 3331400,
        description: "A modern metropolis famous for luxury shopping, ultramodern architecture, and lively nightlife.",
        currency: {
            code: "AED",
            symbol: "د.إ"
        },
        languages: "Arabic",
        timeZone: "UTC+4",
        weather: {
            climate: "Desert",
            averageTemperature: 28,
            bestTimeToVisit: "November to March"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 85,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 250,
            averageMealPrice: 50,
            transportationPrice: 10
        },
        isCapital: false
    },
    {
        name: "Bangkok",
        photo: "https://content.r9cdn.net/rimg/dimg/26/5b/01e97574-city-26166-1592813274a.jpg?width=1366&height=768&xhint=1038&yhint=725&crop=true",
        country: "Thailand",
        continent: "Asia",
        population: 10539000,
        description: "The bustling capital of Thailand, known for its vibrant street life and cultural landmarks.",
        currency: {
            code: "THB",
            symbol: "฿"
        },
        languages: "Thai",
        timeZone: "UTC+7",
        weather: {
            climate: "Tropical",
            averageTemperature: 29,
            bestTimeToVisit: "November to February"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 60,
            travelAdvisory: "Exercise increased caution"
        },
        costs: {
            averageHotelPrice: 70,
            averageMealPrice: 10,
            transportationPrice: 5
        },
        isCapital: true
    },
    {
        name: "Rome",
        photo: "https://worldstrides.com/wp-content/uploads/2015/07/api268.jpg",
        country: "Italy",
        continent: "Europe",
        population: 2872800,
        description: "The capital of Italy, known for its ancient history, art, and world-famous landmarks.",
        currency: {
            code: "EUR",
            symbol: "€"
        },
        languages: "Italian",
        timeZone: "UTC+1",
        weather: {
            climate: "Mediterranean",
            averageTemperature: 15,
            bestTimeToVisit: "April to June or September to October"
        },
        transportation: {
            hasAirport: true
        },
        safety: {
            safetyIndex: 78,
            travelAdvisory: "Exercise normal precautions"
        },
        costs: {
            averageHotelPrice: 130,
            averageMealPrice: 30,
            transportationPrice: 10
        },
        isCapital: true
    }
];


City.insertMany(cities)
    .then(() => {
        console.log("dateses inserted successfully");
    })
    .catch((error) => {
        console.error("Error inserting data:", error);
    })

