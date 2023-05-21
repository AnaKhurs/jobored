import {VacancyType} from "../dal/vacanciesApi";

export const getFavorites = () => {

    const favorites = localStorage.getItem("favorites");
    if (!favorites) return [];
    return JSON.parse(favorites);
};

export const addFavorite = (favoriteVacancy?: VacancyType) => {
    const favorites = getFavorites();
    if (favorites === null) {
        localStorage.setItem("favorites", JSON.stringify([favoriteVacancy]));
        return;
    }
    favorites.push(favoriteVacancy);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export const removeFavorite = (favoriteVacancy: VacancyType) => {
    const favorites = localStorage.getItem("favorites");
    if (favorites != null) {
        const favoritesValue = JSON.parse(favorites);
        localStorage.setItem(
            "favorites",
            JSON.stringify(
                favoritesValue.filter((value: VacancyType) => value.id !== favoriteVacancy.id)
            )
        );
    }
}
