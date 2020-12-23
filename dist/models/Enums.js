"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTAURANT_TYPES = {
    accounting: 'accounting',
    airport: 'airport',
    amusement_park: 'amusement_park',
    aquarium: 'aquarium',
    art_gallery: 'art_gallery',
    atm: 'atm',
    bakery: 'bakery',
    bank: 'bank',
    bar: 'bar',
    beauty_salon: 'beauty_salon',
    bicycle_store: 'bicycle_store',
    book_store: 'book_store',
    bowling_alley: 'bowling_alley',
    bus_station: 'bus_station',
    cafe: 'cafe',
    campground: 'campground',
    car_dealer: 'car_dealer',
    car_rental: 'car_rental',
    car_repair: 'car_repair',
    car_wash: 'car_wash',
    casino: 'casino',
    cemetery: 'cemetery',
    church: 'church',
    city_hall: 'city_hall',
    clothing_store: 'clothing_store',
    convenience_store: 'convenience_store',
    courthouse: 'courthouse',
    dentist: 'dentist',
    department_store: 'department_store',
    doctor: 'doctor',
    drugstore: 'drugstore',
    electrician: 'electrician',
    electronics_store: 'electronics_store',
    embassy: 'embassy',
    fire_station: 'fire_station',
    florist: 'florist',
    funeral_home: 'funeral_home',
    furniture_store: 'furniture_store',
    gas_station: 'gas_station',
    grocery_or_supermarket: 'grocery_or_supermarket',
    gym: 'gym',
    hair_care: 'hair_care',
    hardware_store: 'hardware_store',
    hindu_temple: 'hindu_temple',
    home_goods_store: 'home_goods_store',
    hospital: 'hospital',
    insurance_agency: 'insurance_agency',
    jewelry_store: 'jewelry_store',
    laundry: 'laundry',
    lawyer: 'lawyer',
    library: 'library',
    light_rail_station: 'light_rail_station',
    liquor_store: 'liquor_store',
    local_government_office: 'local_government_office',
    locksmith: 'locksmith',
    lodging: 'lodging',
    meal_delivery: 'meal_delivery',
    meal_takeaway: 'meal_takeaway',
    mosque: 'mosque',
    movie_rental: 'movie_rental',
    movie_theater: 'movie_theater',
    moving_company: 'moving_company',
    museum: 'museum',
    night_club: 'night_club',
    painter: 'painter',
    park: 'park',
    parking: 'parking',
    pet_store: 'pet_store',
    pharmacy: 'pharmacy',
    physiotherapist: 'physiotherapist',
    plumber: 'plumber',
    police: 'police',
    post_office: 'post_office',
    primary_school: 'primary_school',
    real_estate_agency: 'real_estate_agency',
    restaurant: 'restaurant',
    roofing_contractor: 'roofing_contractor',
    rv_park: 'rv_park',
    school: 'school',
    secondary_school: 'secondary_school',
    shoe_store: 'shoe_store',
    shopping_mall: 'shopping_mall',
    spa: 'spa',
    stadium: 'stadium',
    storage: 'storage',
    store: 'store',
    subway_station: 'subway_station',
    supermarket: 'supermarket',
    synagogue: 'synagogue',
    taxi_stand: 'taxi_stand',
    tourist_attraction: 'tourist_attraction',
    train_station: 'train_station',
    transit_station: 'transit_station',
    travel_agency: 'travel_agency',
    university: 'university',
    veterinary_care: 'veterinary_care',
    zoo: 'zoo'
};
exports.SUPPORTED_TYPES = {
    [exports.RESTAURANT_TYPES.restaurant]: {
        text: 'Nhà hàng',
        value: exports.RESTAURANT_TYPES.restaurant,
        topPage: true
    },
    [exports.RESTAURANT_TYPES.cafe]: {
        text: 'Café',
        value: exports.RESTAURANT_TYPES.cafe,
        topPage: true
    },
    ['boba_tea']: {
        text: 'Trà sữa/Kem',
        value: 'boba_tea',
        topPage: false
    },
    ['for_rent']: {
        text: 'Mặt bằng',
        value: 'for_rent',
        topPage: true
    },
    [exports.RESTAURANT_TYPES.convenience_store]: {
        text: 'Tiệm tạp hóa',
        value: exports.RESTAURANT_TYPES.convenience_store,
        topPage: false
    },
    [exports.RESTAURANT_TYPES.clothing_store]: {
        text: 'Shop quần áo',
        value: exports.RESTAURANT_TYPES.clothing_store,
        topPage: false
    },
    [exports.RESTAURANT_TYPES.bakery]: {
        text: 'Tiệm bánh',
        value: exports.RESTAURANT_TYPES.bakery,
        topPage: false
    },
    ['snack']: {
        text: 'Ăn vặt',
        value: 'snack',
        topPage: false
    },
    [exports.RESTAURANT_TYPES.beauty_salon]: {
        text: 'Salon làm đẹp',
        value: exports.RESTAURANT_TYPES.beauty_salon,
        topPage: true
    },
    [exports.RESTAURANT_TYPES.hair_care]: {
        text: 'Tiệm làm đầu',
        value: exports.RESTAURANT_TYPES.hair_care,
        topPage: true
    },
    ['other']: {
        text: 'Khác',
        value: 'other',
        topPage: false
    }
};
//# sourceMappingURL=Enums.js.map